import React, { useEffect, useRef } from 'react';

/**
 * High-performance, DPI-Aware Floating Flower Petals
 * Perfectly sized delicate South Indian flora:
 * - Auspicious Soft Pink Rose Petals (ரோஜா இதழ்கள்)
 * - Pure White Jasmine Buds (மல்லிகைப் பூக்கள்)
 * - Subtle Golden Glimmer Dust
 * Guaranteed ZERO stretching, NO canvas smears, and ultra-smooth performance.
 */
export const FloatingPetals = ({ enabled = true, count = 18 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      if (!canvas) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    const petalPalette = [
      { fill: '#FFFDF7', stroke: '#E3C98D', type: 'jasmine', opacity: 0.55 },
      { fill: '#FFE4E6', stroke: '#F43F5E', type: 'rose-light', opacity: 0.5 },
      { fill: '#FB7185', stroke: '#BE123C', type: 'rose', opacity: 0.45 },
      { fill: '#FEF08A', stroke: '#EAB308', type: 'marigold', opacity: 0.4 },
    ];

    const actualCount = Math.min(count, window.innerWidth < 640 ? 14 : 20);

    const petals = Array.from({ length: actualCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      w: Math.random() * 3 + 4, // Delicate small width (4px to 7px)
      h: Math.random() * 4 + 6, // Delicate small height (6px to 10px)
      speedY: Math.random() * 0.45 + 0.35, // Gentle, slow, peaceful floating
      speedX: (Math.random() - 0.5) * 0.3,
      angle: Math.random() * 360,
      angularSpeed: (Math.random() - 0.5) * 0.8,
      swayOffset: Math.random() * Math.PI * 2,
      swaySpeed: Math.random() * 0.015 + 0.008,
      color: petalPalette[Math.floor(Math.random() * petalPalette.length)],
    }));

    const render = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      petals.forEach((p) => {
        p.y += p.speedY;
        p.swayOffset += p.swaySpeed;
        p.x += Math.sin(p.swayOffset) * 0.5 + p.speedX;
        p.angle += p.angularSpeed;

        // Wrap around smoothly
        if (p.y > h + 15) {
          p.y = -15;
          p.x = Math.random() * w;
        }
        if (p.x > w + 15) p.x = -15;
        if (p.x < -15) p.x = w + 15;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.angle * Math.PI) / 180);
        ctx.globalAlpha = p.color.opacity;

        ctx.fillStyle = p.color.fill;
        ctx.strokeStyle = p.color.stroke;
        ctx.lineWidth = 0.5;

        ctx.beginPath();
        if (p.color.type === 'jasmine') {
          // Slender elegant jasmine petal (exact ellipse, never distorted)
          ctx.ellipse(0, 0, p.w * 0.5, p.h * 0.7, 0, 0, Math.PI * 2);
        } else {
          // Delicate rose petal: rounded bottom, gentle tapered tip
          ctx.ellipse(0, 0, p.w * 0.6, p.h * 0.75, 0, 0, Math.PI * 2);
        }
        ctx.fill();
        ctx.stroke();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled, count]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-20 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default FloatingPetals;
