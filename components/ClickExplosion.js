'use client';

import { useEffect, useRef } from 'react';

export default function ClickExplosion() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const memeImages = [
      '/images/meme1.jpg',
      '/images/meme2.jpg',
      '/images/meme3.jpg',
      '/images/meme4.jpg',
      '/images/meme5.jpg',
    ];

    // Preload images
    memeImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    function handleClick(e) {
      // Don't trigger on interactive elements
      const tag = e.target.tagName.toLowerCase();
      const isInteractive = tag === 'a' || tag === 'button' || tag === 'input' ||
        tag === 'textarea' || tag === 'select' || tag === 'label';
      const isInsideInteractive = e.target.closest('a, button, input, textarea, .contact-card, .project-card, .skill-card, .nav-links, .nav-logo, .mobile-menu-btn, .btn-primary, .btn-outline, .hero-cta');

      if (isInteractive || isInsideInteractive) return;

      spawnImage(e.clientX, e.clientY);
    }

    function spawnImage(x, y) {
      const src = memeImages[Math.floor(Math.random() * memeImages.length)];

      const el = document.createElement('div');
      el.className = 'click-meme-3d';

      const img = document.createElement('img');
      img.src = src;
      img.alt = '';
      img.draggable = false;
      el.appendChild(img);

      // Random 3D transforms
      const size = 150 + Math.random() * 100; // 150-250px
      const rotation = (Math.random() - 0.5) * 30;
      const rotateX = (Math.random() - 0.5) * 40;
      const rotateY = (Math.random() - 0.5) * 40;
      const duration = 2.5 + Math.random() * 1;
      const floatY = -60 - Math.random() * 80;

      el.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%) perspective(800px) rotateX(0deg) rotateY(0deg) rotate(0deg) scale(0);
        border-radius: 16px;
        overflow: hidden;
        box-shadow:
          0 0 20px rgba(168, 85, 247, 0.4),
          0 0 60px rgba(168, 85, 247, 0.2),
          0 10px 40px rgba(0, 0, 0, 0.6);
        border: 2px solid rgba(168, 85, 247, 0.5);
        animation: memePop ${duration}s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        --end-rotate: ${rotation}deg;
        --end-rotateX: ${rotateX}deg;
        --end-rotateY: ${rotateY}deg;
        --end-y: ${floatY}px;
      `;

      img.style.cssText = `
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      `;

      container.appendChild(el);

      // Remove after animation
      setTimeout(() => {
        if (el.parentNode) el.parentNode.removeChild(el);
      }, duration * 1000 + 100);
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return <div ref={containerRef} className="click-explosion-container" />;
}
