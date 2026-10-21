"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Particle {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  op: number;
  hue: string;
}

const DENSITY = 0.6;

function createParticle(width: number, height: number): Particle {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    r: 0.5 + Math.random() * 2.5,
    vx: (Math.random() - 0.5) * 0.15,
    vy: -0.05 - Math.random() * 0.15,
    op: 0.05 + Math.random() * 0.25,
    hue: Math.random() > 0.5 ? "rgba(233,211,160," : "rgba(180,160,120,",
  };
}

export function BackgroundFlares() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const currentCanvas = canvasRef.current;
    if (!currentCanvas) return;
    const currentContext = currentCanvas.getContext("2d");
    if (!currentContext) return;
    const canvas: HTMLCanvasElement = currentCanvas;
    const context: CanvasRenderingContext2D = currentContext;

    let raf = 0;
    let particles: Particle[] = [];
    let width = canvas.clientWidth;
    let height = canvas.clientHeight;

    function resize() {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      particles = Array.from({ length: Math.floor(80 * DENSITY) }, () =>
        createParticle(width, height),
      );
    }

    function draw() {
      context.clearRect(0, 0, width, height);
      for (const particle of particles) {
        context.beginPath();
        context.fillStyle = `${particle.hue}${particle.op})`;
        context.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
        context.fill();
      }
    }

    function tick() {
      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.y < -10) {
          particle.y = height + 10;
          particle.x = Math.random() * width;
        }
        if (particle.x < -10) particle.x = width + 10;
        if (particle.x > width + 10) particle.x = -10;
      }
      draw();
      raf = requestAnimationFrame(tick);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    if (!reducedMotion) raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [reducedMotion]);

  return (
    <div className="mist" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
