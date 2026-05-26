import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth || 400;
    const height = containerRef.current.clientHeight || 400;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 5.5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Group to hold all concentric rings (for drag control)
    const gyroGroup = new THREE.Group();
    scene.add(gyroGroup);

    // Materials
    const metalMaterialCyan = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      metalness: 0.9,
      roughness: 0.1
    });

    const metalMaterialPurple = new THREE.MeshStandardMaterial({
      color: 0xbd00ff,
      metalness: 0.9,
      roughness: 0.1
    });

    const metalMaterialPink = new THREE.MeshStandardMaterial({
      color: 0xff007a,
      metalness: 0.9,
      roughness: 0.1
    });

    // 1. Outer Ring
    const outerRingGeom = new THREE.TorusGeometry(1.8, 0.05, 16, 100);
    const outerRing = new THREE.Mesh(outerRingGeom, metalMaterialCyan);
    gyroGroup.add(outerRing);

    // 2. Middle Ring (slightly rotated initially)
    const middleRingGeom = new THREE.TorusGeometry(1.45, 0.045, 16, 100);
    const middleRing = new THREE.Mesh(middleRingGeom, metalMaterialPurple);
    middleRing.rotation.x = Math.PI / 4;
    gyroGroup.add(middleRing);

    // 3. Inner Ring (rotated on a different axis)
    const innerRingGeom = new THREE.TorusGeometry(1.1, 0.04, 16, 100);
    const innerRing = new THREE.Mesh(innerRingGeom, metalMaterialPink);
    innerRing.rotation.y = Math.PI / 4;
    gyroGroup.add(innerRing);

    // 4. Central Solid Core (Octahedron with flat faces for cyber styling)
    const coreGeom = new THREE.OctahedronGeometry(0.5, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x11131e,
      roughness: 0.2,
      metalness: 0.8,
      flatShading: true
    });
    const core = new THREE.Mesh(coreGeom, coreMat);
    gyroGroup.add(core);

    // 5. Orbiting particles cloud around the core
    const particleGeom = new THREE.BufferGeometry();
    const particleCount = 100;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 0.7 + Math.random() * 0.3;
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);
    }
    particleGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.03,
      transparent: true,
      opacity: 0.8
    });
    const coreParticles = new THREE.Points(particleGeom, particleMat);
    gyroGroup.add(coreParticles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.15);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x00f0ff, 2.0);
    dirLight1.position.set(5, 3, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xbd00ff, 2.0);
    dirLight2.position.set(-5, -3, 5);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0xff007a, 1.5, 10);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    // Drag Interaction
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handlePointerDown = (e) => {
      isDragging = true;
      previousMousePosition = {
        x: e.clientX || e.touches[0].clientX,
        y: e.clientY || e.touches[0].clientY
      };
    };

    const handlePointerMove = (e) => {
      if (!isDragging) return;

      const clientX = e.clientX !== undefined ? e.clientX : e.touches[0].clientX;
      const clientY = e.clientY !== undefined ? e.clientY : e.touches[0].clientY;

      const deltaMove = {
        x: clientX - previousMousePosition.x,
        y: clientY - previousMousePosition.y
      };

      // Rotate overall gyroscope assembly on drag
      gyroGroup.rotation.y += deltaMove.x * 0.007;
      gyroGroup.rotation.x += deltaMove.y * 0.007;

      previousMousePosition = {
        x: clientX,
        y: clientY
      };
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.style.cursor = 'grab';

    domElement.addEventListener('mousedown', handlePointerDown);
    domElement.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);

    domElement.addEventListener('touchstart', handlePointerDown, { passive: true });
    domElement.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handlePointerUp);

    // Handle Resize
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width: newW, height: newH } = entry.contentRect;
        camera.aspect = newW / newH;
        camera.updateProjectionMatrix();
        renderer.setSize(newW, newH);
      }
    });
    resizeObserver.observe(containerRef.current);

    // Animation loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      const elapsedTime = clock.getElapsedTime();

      // Continuous autonomous rotation for concentric rings (different axes & speeds)
      outerRing.rotation.y = elapsedTime * 0.35;
      middleRing.rotation.x = -elapsedTime * 0.45;
      innerRing.rotation.z = elapsedTime * 0.6;

      // Rotate particles and core slowly
      core.rotation.y = -elapsedTime * 0.25;
      coreParticles.rotation.y = elapsedTime * 0.15;

      // Pulse core scale slightly
      const scale = 1 + Math.sin(elapsedTime * 3) * 0.05;
      core.scale.set(scale, scale, scale);

      // Apply slow spin to overall assembly when not dragging
      if (!isDragging) {
        gyroGroup.rotation.y += 0.003;
        gyroGroup.rotation.x += 0.001;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      
      domElement.removeEventListener('mousedown', handlePointerDown);
      domElement.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);

      domElement.removeEventListener('touchstart', handlePointerDown);
      domElement.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerUp);

      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }

      outerRingGeom.dispose();
      middleRingGeom.dispose();
      innerRingGeom.dispose();
      coreGeom.dispose();
      coreMat.dispose();
      particleGeom.dispose();
      particleMat.dispose();
      metalMaterialCyan.dispose();
      metalMaterialPurple.dispose();
      metalMaterialPink.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '350px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
      }}
    />
  );
}
