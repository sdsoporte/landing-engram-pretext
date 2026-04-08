'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface NeuralNetworkProps {
  className?: string;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  pulse: number;
  pulseSpeed: number;
  isMain: boolean; // Solo los nodos principales brillan
}

// Catppuccin Mocha accent colors - más sutiles para fondo global
const COLORS = {
  mauve: '#cba6f7',
  pink: '#f5c2e7',
  blue: '#89b4fa',
  lavender: '#b4befe',
  white: '#ffffff',
};

// Solo 4 colores, más sutiles
const NODE_COLORS = [
  COLORS.mauve,
  COLORS.blue,
  COLORS.lavender,
  COLORS.pink,
];

const CONNECTION_COLOR_RGB = '139, 148, 158'; // surface2 color - más sutil
const MAX_CONNECTIONS_PER_NODE = 2; // Menos conexiones
const MAIN_NODE_CHANCE = 0.3; // 30% de los nodos son "principales" y brillan

export function NeuralNetwork({ className }: NeuralNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animationRef = useRef<number | null>(null);
  const reducedMotion = useReducedMotion();

  function initNodes(width: number, height: number) {
    if (width === 0 || height === 0) return;

    nodesRef.current = [];

    const nodes: Node[] = [];
    // Muchos menos nodos para fondo sutil: 20-28
    const nodeCount = Math.max(20, Math.min(28, Math.floor((width * height) / 25000)));

    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const isMain = Math.random() < MAIN_NODE_CHANCE;
      
      nodes.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.04, // Movimiento más lento
        vy: (Math.random() - 0.5) * 0.04,
        radius: isMain ? Math.random() * 2 + 3 : Math.random() * 1.5 + 2, // Nodos principales son más grandes
        color: NODE_COLORS[Math.floor(Math.random() * NODE_COLORS.length)],
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.015 + Math.random() * 0.015, // Pulso más lento
        isMain,
      });
    }

    nodesRef.current = nodes;
  }

  function draw(ctx: CanvasRenderingContext2D, width: number, height: number, time: number) {
    const nodes = nodesRef.current;
    const connectionDistance = Math.min(width, height) * 0.12; // Distancia menor

    ctx.clearRect(0, 0, width, height);

    // Conexiones muy sutiles
    ctx.globalAlpha = 0.25;
    for (let i = 0; i < nodes.length; i++) {
      let connectionCount = 0;
      for (let j = i + 1; j < nodes.length && connectionCount < MAX_CONNECTIONS_PER_NODE; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDistance) {
          const opacity = (1 - distance / connectionDistance) * 0.5;

          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(${CONNECTION_COLOR_RGB}, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
          connectionCount++;
        }
      }
    }
    ctx.globalAlpha = 1;

    // Dibujar nodos
    for (const node of nodes) {
      node.pulse += node.pulseSpeed;
      const pulseScale = 1 + Math.sin(node.pulse) * 0.15;

      if (node.isMain) {
        // Solo los nodos principales tienen glow
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.radius * 3 * pulseScale
        );
        gradient.addColorStop(0, node.color);
        gradient.addColorStop(0.4, node.color + '60');
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 3 * pulseScale, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.globalAlpha = 0.4;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // Nodo interno (todos los nodos)
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius * pulseScale, 0, Math.PI * 2);
      ctx.fillStyle = node.color;
      ctx.globalAlpha = node.isMain ? 0.8 : 0.5; // Nodos principales más opacos
      ctx.fill();
      ctx.globalAlpha = 1;

      // Centro brillante solo para nodos principales
      if (node.isMain) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 0.3 * pulseScale, 0, Math.PI * 2);
        ctx.fillStyle = COLORS.white;
        ctx.globalAlpha = 0.4;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }
  }

  function update(width: number, height: number) {
    const nodes = nodesRef.current;

    for (const node of nodes) {
      node.x += node.vx;
      node.y += node.vy;

      const padding = 30;
      if (node.x < padding) {
        node.vx = Math.abs(node.vx) * 0.8;
        node.x = padding;
      }
      if (node.x > width - padding) {
        node.vx = -Math.abs(node.vx) * 0.8;
        node.x = width - padding;
      }
      if (node.y < padding) {
        node.vy = Math.abs(node.vy) * 0.8;
        node.y = padding;
      }
      if (node.y > height - padding) {
        node.vy = -Math.abs(node.vy) * 0.8;
        node.y = height - padding;
      }
    }
  }

  function animate() {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const logicalWidth = canvas.width / dpr;
    const logicalHeight = canvas.height / dpr;

    if (logicalWidth === 0 || logicalHeight === 0) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    const time = performance.now() * 0.001;

    update(logicalWidth, logicalHeight);
    draw(ctx, logicalWidth, logicalHeight, time);

    animationRef.current = requestAnimationFrame(animate);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        const width = parent.clientWidth;
        const height = parent.clientHeight;
        if (width > 0 && height > 0) {
          const dpr = window.devicePixelRatio || 1;
          canvas.width = width * dpr;
          canvas.height = height * dpr;
          canvas.style.width = `${width}px`;
          canvas.style.height = `${height}px`;

          const ctx = canvas.getContext('2d', { alpha: true });
          if (ctx) {
            ctx.scale(dpr, dpr);
          }

          initNodes(width, height);
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
          animationRef.current = null;
        }
      } else if (!reducedMotion) {
        animate();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    if (!reducedMotion) {
      animate();
    } else {
      const ctx = canvas.getContext('2d', { alpha: true });
      if (ctx) {
        const dpr = window.devicePixelRatio || 1;
        const logicalWidth = canvas.width / dpr;
        const logicalHeight = canvas.height / dpr;
        if (logicalWidth > 0 && logicalHeight > 0) {
          draw(ctx, logicalWidth, logicalHeight, 0);
        }
      }
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: 'block', width: '100%', height: '100%' }}
      aria-hidden="true"
    />
  );
}
