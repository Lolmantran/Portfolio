import { useEffect, useRef } from 'react';

const COUNT    = 62;
const MAX_DIST = 140;
const SPEED    = 0.42;

export default function ParticleBg() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let particles = [];

    function resize() {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      spawnParticles();
    }

    function spawnParticles() {
      particles = Array.from({ length: COUNT }, () => ({
        x:    Math.random() * canvas.width,
        y:    Math.random() * canvas.height,
        vx:   (Math.random() - 0.5) * SPEED,
        vy:   (Math.random() - 0.5) * SPEED,
        r:    Math.random() * 1.5 + 0.7,
        cyan: Math.random() > 0.58,
      }));
    }

    function tick() {
      const { width: W, height: H } = canvas;
      ctx.clearRect(0, 0, W, H);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x <= 0 || p.x >= W) { p.vx *= -1; p.x = Math.max(0, Math.min(W, p.x)); }
        if (p.y <= 0 || p.y >= H) { p.vy *= -1; p.y = Math.max(0, Math.min(H, p.y)); }
      }

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) {
            const a = (1 - d / MAX_DIST) * 0.30;
            ctx.beginPath();
            ctx.strokeStyle = particles[i].cyan
              ? `rgba(0,174,204,${a})`
              : `rgba(0,72,200,${a})`;
            ctx.lineWidth = 0.7;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw dots
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.cyan ? 'rgba(0,174,204,0.48)' : 'rgba(0,72,200,0.38)';
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    }

    resize();
    tick();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={ref} className="hero-canvas" aria-hidden="true" />;
}
