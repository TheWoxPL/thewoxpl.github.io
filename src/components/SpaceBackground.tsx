import React, { useEffect, useRef, useState, memo, useCallback } from "react";
import { SPACE_CONFIG, BREAKPOINTS } from "../constants/animation";

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
  shape: 'circle' | 'star';
  gravity: number;
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
  const lastClickTime = useRef<number>(0);
  const CLICK_COOLDOWN = 150; // Minimum ms between clicks
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
      const velocityRange = SPACE_CONFIG.PARTICLE_VELOCITY;
      this.vx = (Math.random() - 0.5) * velocityRange.SCALE;
      this.vy = (Math.random() - 0.5) * velocityRange.SCALE;
      this.size =
        Math.random() *
          (SPACE_CONFIG.PARTICLE_SIZE.MAX - SPACE_CONFIG.PARTICLE_SIZE.MIN) +
        SPACE_CONFIG.PARTICLE_SIZE.MIN;
      const opacityRange = SPACE_CONFIG.PARTICLE_OPACITY;
      this.opacity =
        Math.random() * (opacityRange.MAX - opacityRange.MIN) +
        opacityRange.MIN;
      this.twinkle =
        Math.random() * (SPACE_CONFIG.TWINKLE.MAX - SPACE_CONFIG.TWINKLE.MIN) +
        SPACE_CONFIG.TWINKLE.MIN;
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

    draw(ctx) {
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
      const radiusRange = SPACE_CONFIG.CLICK_EFFECT.MAX_RADIUS;
      this.maxRadius =
        Math.random() * (radiusRange.MAX - radiusRange.MIN) + radiusRange.MIN;
      this.opacity = 1;
      this.growth = SPACE_CONFIG.CLICK_EFFECT.GROWTH_RATE;
      this.decay = SPACE_CONFIG.CLICK_EFFECT.DECAY_RATE;
      this.particles = [];

      // Colorful firework colors
      const fireworkColors = [
        '#ff6b6b', // red
        '#feca57', // yellow
        '#48dbfb', // cyan
        '#ff9ff3', // pink
        '#54a0ff', // blue
        '#5f27cd', // purple
        '#00d2d3', // teal
        '#ff9f43', // orange
        '#ffffff', // white
        '#1dd1a1', // green
      ];

      // Create circular burst of particles
      const particleCount = 40;
      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount;
        const speed = Math.random() * 6 + 3;
        const color = fireworkColors[Math.floor(Math.random() * fireworkColors.length)];
        this.particles.push({
          x: x,
          y: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 4 + 2,
          opacity: 1,
          decay: 0.012 + Math.random() * 0.008,
          color: color,
          shape: 'circle',
          gravity: 0.05,
        });
      }

      // Create additional sparkle stars
      for (let i = 0; i < 25; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 8 + 2;
        const color = fireworkColors[Math.floor(Math.random() * fireworkColors.length)];
        this.particles.push({
          x: x,
          y: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 6 + 3,
          opacity: 1,
          decay: 0.015 + Math.random() * 0.01,
          color: color,
          shape: 'star',
          gravity: 0.03,
        });
      }

      // Create trailing sparks
      for (let i = 0; i < 20; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 1;
        this.particles.push({
          x: x,
          y: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 2 + 1,
          opacity: 1,
          decay: 0.02,
          color: '#ffffff',
          shape: 'circle',
          gravity: 0.08,
        });
      }
    }

    update() {
      this.radius += this.growth;
      this.opacity -= this.decay;

      // Update explosion particles with gravity
      this.particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += particle.gravity; // Add gravity
        const friction = 0.98;
        particle.vx *= friction;
        particle.vy *= friction;
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

      // Draw colorful firework particles
      this.particles.forEach((particle) => {
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        // Add glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = particle.color;
        ctx.fillStyle = particle.color;
        
        if (particle.shape === 'star') {
          // Draw 4-pointed star
          ctx.beginPath();
          const spikes = 4;
          const outerRadius = particle.size;
          const innerRadius = particle.size / 2;
          
          for (let i = 0; i < spikes * 2; i++) {
            const radius = i % 2 === 0 ? outerRadius : innerRadius;
            const angle = (Math.PI * i) / spikes - Math.PI / 2;
            const px = particle.x + Math.cos(angle) * radius;
            const py = particle.y + Math.sin(angle) * radius;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.fill();
        } else {
          // Draw glowing circle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Add extra bright center
          ctx.globalAlpha = particle.opacity * 0.5;
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 0.4, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.restore();
      });
    }
  }

  // Get optimal particle count based on device
  const getParticleCount = useCallback(() => {
    const width = window.innerWidth;
    if (width < BREAKPOINTS.MOBILE) {
      return SPACE_CONFIG.PARTICLE_COUNT.MOBILE;
    } else if (width < BREAKPOINTS.TABLET) {
      return SPACE_CONFIG.PARTICLE_COUNT.TABLET;
    }
    return SPACE_CONFIG.PARTICLE_COUNT.DESKTOP;
  }, []);

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

    // Create particles based on device
    const newParticles = [];
    const particleCount = getParticleCount();

    for (let i = 0; i < particleCount; i++) {
      newParticles.push(new Particle(canvas));
    }

    setParticles(newParticles);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [getParticleCount]);

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
        canvas.width,
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

      // Update and draw click effects
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
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Handle clicks for creating effects with rate limiting
  const handleCanvasClick = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      if (!canvasRef.current) return;
      
      const rect = canvasRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const now = Date.now();
      const MAX_ACTIVE_EFFECTS = 5; // Maximum simultaneous effects
      
      // Rate limit: ignore clicks that are too fast
      if (now - lastClickTime.current < CLICK_COOLDOWN) {
        return;
      }
      
      // Limit max active effects to prevent lag
      if (clickEffectsRef.current.length >= MAX_ACTIVE_EFFECTS) {
        return;
      }
      
      lastClickTime.current = now;

      clickEffectsRef.current.push(new ClickEffect(x, y));
    },
    [],
  );

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full cursor-crosshair z-0"
      onClick={handleCanvasClick}
      style={{ pointerEvents: 'auto' }}
    />
  );
};

export default memo(SpaceBackground);
