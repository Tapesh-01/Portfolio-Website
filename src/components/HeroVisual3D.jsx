import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './HeroVisual3D.css';

export default function HeroVisual3D() {
  const canvasRef = useRef(null);

  // WebGL background particles and mesh
  useEffect(() => {
    if (!canvasRef.current) return;

    const width = canvasRef.current.clientWidth || 350;
    const height = canvasRef.current.clientHeight || 350;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.0;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particle Ring
    const particleGeom = new THREE.BufferGeometry();
    const count = 180;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const cyan = new THREE.Color(0x00f0ff);
    const purple = new THREE.Color(0xbd00ff);

    for (let i = 0; i < count * 3; i += 3) {
      const angle = (i / 3) * (Math.PI * 2 / (count / 2));
      const radius = 1.15 + Math.random() * 0.35;
      positions[i] = Math.cos(angle) * radius;
      positions[i + 1] = Math.sin(angle) * radius;
      positions[i + 2] = (Math.random() - 0.5) * 0.3;

      const mix = new THREE.Color().copy(cyan).lerp(purple, Math.random());
      colors[i] = mix.r;
      colors[i + 1] = mix.g;
      colors[i + 2] = mix.b;
    }

    particleGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeom.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      transparent: true,
      opacity: 0.7,
      vertexColors: true,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);

    // Spinning 3D Wireframe Icosahedron Mesh
    const wireGeom = new THREE.IcosahedronGeometry(0.85, 2);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const wireMesh = new THREE.Mesh(wireGeom, wireMat);
    scene.add(wireMesh);

    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      particles.rotation.z += 0.003;
      wireMesh.rotation.y += 0.004;
      wireMesh.rotation.x += 0.002;
      renderer.render(scene, camera);
    };
    animate();

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width: w, height: h } = entry.contentRect;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    });
    resizeObserver.observe(canvasRef.current);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      particleGeom.dispose();
      particleMat.dispose();
      wireGeom.dispose();
      wireMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="hero-visual-3d">
      {/* 3D Backdrop Glow */}
      <div className="portal-glow-back" />

      {/* Layer 1: Particles Background */}
      <div className="parallax-bg-layer">
        <canvas ref={canvasRef} className="portal-canvas" />
      </div>

      {/* Layer 2: Foreground HUD Circular dashes */}
      <div className="parallax-fg-layer">
        <div className="fg-hud-circle" />
        <div className="fg-hud-square" />
      </div>
    </div>
  );
}
