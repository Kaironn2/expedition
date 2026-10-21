"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Petal {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotationVelocity: number;
  sway: number;
  swaySpeed: number;
  swayAmplitude: number;
  tumblePhase: number;
  tumbleSpeed: number;
  color: string;
  opacity: number;
  depth: number;
}

const DENSITY = 0.55;
const PALETTE = [
  [120, 18, 22],
  [156, 28, 32],
  [184, 44, 44],
  [96, 16, 22],
  [200, 70, 60],
] as const;

function createPetal(width: number, height: number, initial: boolean): Petal {
  const size = 6 + Math.random() * 14;
  const [red, green, blue] = PALETTE[Math.floor(Math.random() * PALETTE.length)] ?? PALETTE[0];

  return {
    x: initial ? Math.random() * width * 1.2 - width * 0.2 : -40 - Math.random() * width * 0.4,
    y: initial ? Math.random() * height : height + 20 + Math.random() * 200,
    vx: 0.35 + Math.random() * 0.9,
    vy: -0.25 - Math.random() * 0.55,
    size,
    rotation: Math.random() * Math.PI * 2,
    rotationVelocity: (Math.random() - 0.5) * 0.04,
    sway: Math.random() * Math.PI * 2,
    swaySpeed: 0.012 + Math.random() * 0.022,
    swayAmplitude: 0.4 + Math.random() * 1.2,
    tumblePhase: Math.random() * Math.PI * 2,
    tumbleSpeed: 0.018 + Math.random() * 0.028,
    color: `rgba(${red},${green},${blue},`,
    opacity: 0.45 + Math.random() * 0.45,
    depth: 0.4 + Math.random() * 1,
  };
}

function respawnPetal(petal: Petal, width: number, height: number) {
  Object.assign(petal, createPetal(width, height, false));

  if (Math.random() < 0.5) {
    petal.x = -30 - Math.random() * 80;
    petal.y = height * 0.3 + Math.random() * height * 0.8;
    return;
  }

  petal.x = Math.random() * width * 0.7 - 30;
  petal.y = height + 20 + Math.random() * 80;
}

function drawPetal(context: CanvasRenderingContext2D, petal: Petal) {
  const size = petal.size;
  const tumble = Math.cos(petal.tumblePhase) * 0.6 + 0.4;

  context.save();
  context.translate(petal.x, petal.y);
  context.rotate(petal.rotation);
  context.scale(petal.depth, petal.depth * (0.35 + 0.65 * tumble));
  context.beginPath();
  context.moveTo(-size * 0.5, 0);
  context.quadraticCurveTo(0, -size * 0.42, size * 0.5, 0);
  context.quadraticCurveTo(0, size * 0.42, -size * 0.5, 0);

  const gradient = context.createLinearGradient(-size * 0.5, -size * 0.3, size * 0.5, size * 0.3);
  gradient.addColorStop(0, `${petal.color}${(petal.opacity * 0.6).toFixed(3)})`);
  gradient.addColorStop(0.5, `${petal.color}${petal.opacity.toFixed(3)})`);
  gradient.addColorStop(1, `${petal.color}${(petal.opacity * 0.5).toFixed(3)})`);
  context.fillStyle = gradient;
  context.fill();

  context.strokeStyle = `rgba(40,8,10,${(petal.opacity * 0.35).toFixed(3)})`;
  context.lineWidth = 0.6;
  context.beginPath();
  context.moveTo(-size * 0.45, 0);
  context.lineTo(size * 0.45, 0);
  context.stroke();
  context.restore();
}

export function PetalsBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const currentCanvas = canvasRef.current;
    if (!currentCanvas || reducedMotion) return;
    const currentContext = currentCanvas.getContext("2d");
    if (!currentContext) return;
    const canvas: HTMLCanvasElement = currentCanvas;
    const context: CanvasRenderingContext2D = currentContext;

    let raf = 0;
    let petals: Petal[] = [];
    let width = canvas.clientWidth;
    let height = canvas.clientHeight;

    function resize() {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      petals = Array.from({ length: Math.floor(90 * DENSITY) }, () =>
        createPetal(width, height, true),
      );
    }

    function tick() {
      context.clearRect(0, 0, width, height);

      for (const petal of petals) {
        petal.sway += petal.swaySpeed;
        petal.tumblePhase += petal.tumbleSpeed;
        petal.x += petal.vx + Math.sin(petal.sway) * petal.swayAmplitude * 0.4;
        petal.y += petal.vy + Math.cos(petal.sway * 0.7) * 0.15;
        petal.rotation += petal.rotationVelocity;

        if (petal.y < -40 || petal.x > width + 60) respawnPetal(petal, width, height);
        drawPetal(context, petal);
      }

      raf = requestAnimationFrame(tick);
    }

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [reducedMotion]);

  return (
    <div className="petals" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
