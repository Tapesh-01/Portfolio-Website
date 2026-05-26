import React, { useEffect, useRef } from 'react';

const SKILLS = [
  'JavaScript', 'C', 'Java', 'PHP', 'HTML', 'CSS',
  'Node.js', 'Express.js', 'MongoDB', 'React',
  'Git', 'GitHub', 'IoT', 'Express', 'Cloudinary',
  'Gemini AI', 'IoT Sensors', 'REST APIs', 'SQL',
  'Web Development', 'Nodemailer', 'Leaflet.js'
];

export default function Skills3D() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    
    // Set internal resolution
    canvas.width = width * 2;
    canvas.height = height * 2;
    ctx.scale(2, 2);

    let radius = Math.min(width, height) * 0.4;
    const centerX = width / 2;
    const centerY = height / 2;

    // Create 3D points for each tag using Fibonacci sphere lattice
    const tags = SKILLS.map((text, index) => {
      const k = -1 + (2 * (index + 1) - 1) / SKILLS.length;
      const phi = Math.acos(k);
      const theta = Math.sqrt(SKILLS.length * Math.PI) * phi;

      return {
        text,
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
        color: index % 2 === 0 ? '#00f0ff' : '#bd00ff'
      };
    });

    let angleX = 0.005; // initial rotation speed
    let angleY = 0.005;

    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;

    const rotateX = (tag, angle) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const y1 = tag.y * cos - tag.z * sin;
      const z1 = tag.z * cos + tag.y * sin;
      tag.y = y1;
      tag.z = z1;
    };

    const rotateY = (tag, angle) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const x1 = tag.x * cos - tag.z * sin;
      const z1 = tag.z * cos + tag.x * sin;
      tag.x = x1;
      tag.z = z1;
    };

    const handlePointerDown = (e) => {
      isDragging = true;
      const clientX = e.clientX || e.touches[0].clientX;
      const clientY = e.clientY || e.touches[0].clientY;
      const rect = canvas.getBoundingClientRect();
      lastMouseX = clientX - rect.left;
      lastMouseY = clientY - rect.top;
    };

    const handlePointerMove = (e) => {
      if (!isDragging) {
        // Slow interaction on hover
        const rect = canvas.getBoundingClientRect();
        const clientX = e.clientX !== undefined ? e.clientX : (e.touches ? e.touches[0].clientX : 0);
        const clientY = e.clientY !== undefined ? e.clientY : (e.touches ? e.touches[0].clientY : 0);
        const mouseX = clientX - rect.left;
        const mouseY = clientY - rect.top;
        
        angleX = (mouseY - centerY) * 0.00003;
        angleY = (mouseX - centerX) * 0.00003;
        return;
      }

      const clientX = e.clientX !== undefined ? e.clientX : e.touches[0].clientX;
      const clientY = e.clientY !== undefined ? e.clientY : e.touches[0].clientY;
      const rect = canvas.getBoundingClientRect();
      const currentX = clientX - rect.left;
      const currentY = clientY - rect.top;

      const deltaX = currentX - lastMouseX;
      const deltaY = currentY - lastMouseY;

      angleY = deltaX * 0.005;
      angleX = -deltaY * 0.005;

      lastMouseX = currentX;
      lastMouseY = currentY;
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    canvas.addEventListener('mousedown', handlePointerDown);
    canvas.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);

    canvas.addEventListener('touchstart', handlePointerDown, { passive: true });
    canvas.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handlePointerUp);

    let animationFrameId;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Sort tags by depth (Z index) for proper rendering (painter's algorithm)
      tags.sort((a, b) => b.z - a.z);

      tags.forEach((tag) => {
        // Apply rotation
        rotateX(tag, angleX);
        rotateY(tag, angleY);

        // Perspective projection
        const depth = 200; // focal length
        const scale = depth / (depth + tag.z); // scale factor
        const screenX = centerX + tag.x * scale;
        const screenY = centerY + tag.y * scale;

        // Font scaling and opacity
        const opacity = (scale - 0.5) / 1.5; // map to a nice opacity range
        if (opacity <= 0) return;

        ctx.font = `bold ${Math.max(10, Math.floor(14 * scale))}px Outfit`;
        ctx.fillStyle = tag.color;
        ctx.globalAlpha = opacity;
        
        // Add subtle shadow / glow
        ctx.shadowBlur = 10 * scale;
        ctx.shadowColor = tag.color;

        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(tag.text, screenX, screenY);
      });

      // Decelerate rotation when dragging finishes
      if (!isDragging) {
        angleX *= 0.98;
        angleY *= 0.98;
        
        // maintain minimum speed
        if (Math.abs(angleX) < 0.001) angleX = 0.001 * Math.sign(angleX || 1);
        if (Math.abs(angleY) < 0.001) angleY = 0.001 * Math.sign(angleY || 1);
      }

      ctx.shadowBlur = 0; // reset shadow
      ctx.globalAlpha = 1.0; // reset alpha

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * 2;
      canvas.height = height * 2;
      ctx.scale(2, 2);
      radius = Math.min(width, height) * 0.4;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousedown', handlePointerDown);
      canvas.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      canvas.removeEventListener('touchstart', handlePointerDown);
      canvas.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerUp);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', minHeight: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '400px',
          maxHeight: '400px',
          cursor: 'grab'
        }}
      />
    </div>
  );
}
