import React, { useEffect, useRef, useState } from "react";

// Add a helper to generate random colors
const getRandomColor = () => {
  const colors = [
    "#f472b6", // pink
    "#facc15", // yellow
    "#34d399", // green
    "#60a5fa", // blue
    "#a78bfa", // purple
    "#f87171", // red
    "#38bdf8", // sky
    "#fbbf24", // orange
    "#c084fc", // violet
    "#4ade80", // emerald
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

interface ParticleType {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  twinkle: number;
  twinkleDirection: number;
  canvas: HTMLCanvasElement;
  update(): void;
  draw(ctx: CanvasRenderingContext2D): void;
}

interface ExplosionParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  decay: number;
  color: string;
}

interface ClickEffectType {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  maxRadius: number;
  growth: number;
  decay: number;
  particles: ExplosionParticle[];
  update(): boolean;
  draw(ctx: CanvasRenderingContext2D): void;
}

const SpaceBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const [particles, setParticles] = useState<ParticleType[]>([]);
  const clickEffectsRef = useRef<ClickEffectType[]>([]);
  const [_, setRerender] = useState(0); // force rerender on click
  const mousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Particle class
  class Particle implements ParticleType {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    twinkle: number;
    twinkleDirection: number;
    canvas: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement) {
      this.canvas = canvas;
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.size = Math.random() * 2 + 0.5;
      this.opacity = Math.random() * 0.8 + 0.2;
      this.twinkle = Math.random() * 0.02 + 0.01;
      this.twinkleDirection = 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Wrap around edges
      if (this.x < 0) this.x = this.canvas.width;
      if (this.x > this.canvas.width) this.x = 0;
      if (this.y < 0) this.y = this.canvas.height;
      if (this.y > this.canvas.height) this.y = 0;

      // Twinkling effect
      this.opacity += this.twinkle * this.twinkleDirection;
      if (this.opacity >= 1 || this.opacity <= 0.2) {
        this.twinkleDirection *= -1;
      }
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  // Click effect class
  class ClickEffect implements ClickEffectType {
    x: number;
    y: number;
    radius: number;
    maxRadius: number;
    opacity: number;
    growth: number;
    decay: number;
    particles: ExplosionParticle[];

    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
      this.radius = 0;
      this.maxRadius = Math.random() * 100 + 50;
      this.opacity = 1;
      this.growth = 2;
      this.decay = 0.02;
      this.particles = [];

      // Create colorful sparkles for the explosion effect
      for (let i = 0; i < 18; i++) {
        this.particles.push({
          x: x,
          y: y,
          vx: Math.cos((i / 18) * 2 * Math.PI) * (Math.random() * 6 + 2),
          vy: Math.sin((i / 18) * 2 * Math.PI) * (Math.random() * 6 + 2),
          size: Math.random() * 2 + 1.5,
          opacity: 1,
          decay: 0.025 + Math.random() * 0.02,
          color: getRandomColor(),
        });
      }
    }

    update() {
      this.radius += this.growth;
      this.opacity -= this.decay;

      // Update explosion particles
      this.particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.98;
        particle.vy *= 0.98;
        particle.opacity -= particle.decay;
      });

      // Remove dead particles
      this.particles = this.particles.filter((p) => p.opacity > 0);

      return this.opacity > 0 || this.particles.length > 0;
    }

    draw(ctx: CanvasRenderingContext2D) {
      // Draw main circle ripple
      if (this.opacity > 0) {
        ctx.save();
        ctx.globalAlpha = this.opacity * 0.3;
        ctx.strokeStyle = "#60a5fa";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.stroke();

        // Inner glow
        ctx.globalAlpha = this.opacity * 0.1;
        ctx.fillStyle = "#60a5fa";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Draw explosion particles (colorful sparkles)
      this.particles.forEach((particle) => {
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
    }
  }

  // Initialize particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create particles
    const newParticles = [];
    const particleCount = Math.floor((canvas.width * canvas.height) / 8000);

    for (let i = 0; i < particleCount; i++) {
      newParticles.push(new Particle(canvas));
    }

    setParticles(newParticles);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const animate = () => {
      // Clear canvas with space background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width
      );
      gradient.addColorStop(0, "#0f172a");
      gradient.addColorStop(0.5, "#1e293b");
      gradient.addColorStop(1, "#020617");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });

      // Update and draw click effects from ref
      clickEffectsRef.current = clickEffectsRef.current.filter((effect) => {
        effect.update();
        effect.draw(ctx);
        return effect.opacity > 0 || effect.particles.length > 0;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particles]);

  // Handle mouse movement for subtle particle attraction
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Handle clicks for creating effects
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    clickEffectsRef.current.push(new ClickEffect(x, y));
    setRerender((v) => v + 1); // force rerender to update canvas
  };

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full cursor-crosshair"
      onClick={handleCanvasClick}
    />
  );
};

export default SpaceBackground;
