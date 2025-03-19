import React, { useEffect, useRef } from 'react';

const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Star properties
    const stars: { x: number; y: number; size: number; speed: number }[] = [];
    const numStars = 200;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const maxDistance = Math.sqrt(canvas.width * canvas.width + canvas.height * canvas.height) / 2;

    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * maxDistance;
      stars.push({
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        size: Math.random() * 2,
        speed: Math.random() * 3 + 1
      });
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        // Calculate direction to center
        const dx = star.x - centerX;
        const dy = star.y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Move star towards center
        if (distance > 0) {
          star.x -= (dx / distance) * star.speed;
          star.y -= (dy / distance) * star.speed;
        }
        
        // Reset star if it's too close to center
        if (distance < 5) {
          const angle = Math.random() * Math.PI * 2;
          star.x = centerX + Math.cos(angle) * maxDistance;
          star.y = centerY + Math.sin(angle) * maxDistance;
        }
        
        // Draw star
        const opacity = Math.min(1, distance / 100);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.beginPath();
        const size = star.size * (1 + (1 - distance / maxDistance) * 2);
        ctx.arc(star.x, star.y, size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full bg-black"
      style={{ zIndex: -1 }}
    />
  );
};

export default Starfield;