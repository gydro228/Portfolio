'use client';

import { useEffect, useRef } from 'react';

export default function InteractiveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let mouse = { x: -1000, y: -1000 };
    let particles = [];

    const CONFIG = {
      particleCount: 120,
      particleMinSize: 1,
      particleMaxSize: 3,
      connectionDistance: 180,
      mouseRadius: 250,
      mouseForce: 0.08,
      returnSpeed: 0.02,
      baseSpeed: 0.3,
      colors: [
        'rgba(168, 85, 247,',  // purple
        'rgba(59, 130, 246,',   // blue
        'rgba(6, 182, 212,',    // cyan
        'rgba(139, 92, 246,',   // violet
      ],
    };

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    }

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.originX = this.x;
        this.originY = this.y;
        this.size = CONFIG.particleMinSize + Math.random() * (CONFIG.particleMaxSize - CONFIG.particleMinSize);
        this.vx = (Math.random() - 0.5) * CONFIG.baseSpeed;
        this.vy = (Math.random() - 0.5) * CONFIG.baseSpeed;
        this.colorIndex = Math.floor(Math.random() * CONFIG.colors.length);
        this.baseAlpha = 0.2 + Math.random() * 0.5;
        this.alpha = this.baseAlpha;
        this.pulseSpeed = 0.005 + Math.random() * 0.01;
        this.pulseOffset = Math.random() * Math.PI * 2;
        this.life = 0;
      }

      update(time) {
        this.life += this.pulseSpeed;

        // Pulsating alpha
        this.alpha = this.baseAlpha + Math.sin(this.life + this.pulseOffset) * 0.15;

        // Mouse interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y + window.scrollY - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONFIG.mouseRadius) {
          const force = (CONFIG.mouseRadius - dist) / CONFIG.mouseRadius;
          const angle = Math.atan2(dy, dx);

          // Gentle attraction towards mouse
          this.vx += Math.cos(angle) * force * CONFIG.mouseForce;
          this.vy += Math.sin(angle) * force * CONFIG.mouseForce;

          // Boost alpha near mouse
          this.alpha = Math.min(1, this.alpha + force * 0.5);
          this.size = (CONFIG.particleMinSize + Math.random() * (CONFIG.particleMaxSize - CONFIG.particleMinSize)) + force * 2;
        } else {
          this.size += ((CONFIG.particleMinSize + (CONFIG.particleMaxSize - CONFIG.particleMinSize) * 0.5) - this.size) * 0.05;
        }

        // Gentle return to wandering
        this.vx *= 0.98;
        this.vy *= 0.98;

        // Add slight drift
        this.vx += (Math.random() - 0.5) * 0.02;
        this.vy += (Math.random() - 0.5) * 0.02;

        this.x += this.vx;
        this.y += this.vy;

        // Wrap around edges
        if (this.x < -50) this.x = canvas.width + 50;
        if (this.x > canvas.width + 50) this.x = -50;
        if (this.y < -50) this.y = canvas.height + 50;
        if (this.y > canvas.height + 50) this.y = -50;
      }

      draw() {
        const color = CONFIG.colors[this.colorIndex];

        // Glow
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = `${color} ${this.alpha * 0.1})`;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `${color} ${this.alpha})`;
        ctx.fill();
      }
    }

    function drawConnections() {
      // Only check particles near viewport for performance
      const scrollY = window.scrollY;
      const viewTop = scrollY - 100;
      const viewBottom = scrollY + window.innerHeight + 100;

      const visibleParticles = particles.filter(
        p => p.y > viewTop && p.y < viewBottom
      );

      for (let i = 0; i < visibleParticles.length; i++) {
        for (let j = i + 1; j < visibleParticles.length; j++) {
          const a = visibleParticles[i];
          const b = visibleParticles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONFIG.connectionDistance) {
            const opacity = (1 - dist / CONFIG.connectionDistance) * 0.15;

            // Check if mouse is near the connection midpoint for enhancement
            const midX = (a.x + b.x) / 2;
            const midY = (a.y + b.y) / 2;
            const mouseDx = mouse.x - midX;
            const mouseDy = (mouse.y + scrollY) - midY;
            const mouseDist = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

            let lineOpacity = opacity;
            let lineWidth = 0.5;

            if (mouseDist < CONFIG.mouseRadius) {
              const mouseInfluence = (CONFIG.mouseRadius - mouseDist) / CONFIG.mouseRadius;
              lineOpacity = opacity + mouseInfluence * 0.3;
              lineWidth = 0.5 + mouseInfluence * 1.5;
            }

            // Gradient line between two particle colors
            const gradient = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            gradient.addColorStop(0, `${CONFIG.colors[a.colorIndex]} ${lineOpacity})`);
            gradient.addColorStop(1, `${CONFIG.colors[b.colorIndex]} ${lineOpacity})`);

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = lineWidth;
            ctx.stroke();
          }
        }
      }
    }

    function drawMouseGlow() {
      const scrollY = window.scrollY;
      const mx = mouse.x;
      const my = mouse.y + scrollY;

      if (mx < 0 || my < 0) return;

      const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, CONFIG.mouseRadius);
      gradient.addColorStop(0, 'rgba(168, 85, 247, 0.03)');
      gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.015)');
      gradient.addColorStop(1, 'rgba(6, 182, 212, 0)');

      ctx.beginPath();
      ctx.arc(mx, my, CONFIG.mouseRadius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    }

    function animate(time) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawMouseGlow();
      drawConnections();

      for (const particle of particles) {
        particle.update(time);
        particle.draw();
      }

      animationId = requestAnimationFrame(animate);
    }

    function init() {
      resize();
      particles = [];
      for (let i = 0; i < CONFIG.particleCount; i++) {
        particles.push(new Particle());
      }
    }

    // Event listeners
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      resize();
      // Redistribute particles that are out of bounds
      for (const p of particles) {
        if (p.x > canvas.width) p.x = Math.random() * canvas.width;
        if (p.y > canvas.height) p.y = Math.random() * canvas.height;
      }
    };

    // Touch support
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    // Observe body size changes to resize canvas
    const resizeObserver = new ResizeObserver(() => {
      resize();
    });
    resizeObserver.observe(document.body);

    init();
    animate(0);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
