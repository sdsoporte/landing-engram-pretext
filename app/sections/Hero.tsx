'use client';

import { useEffect, useRef, useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Star, GitFork } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNeuralWave } from '@/app/context/NeuralWaveContext';
import { prepareWithSegments, measureNaturalWidth } from '@chenglou/pretext';

interface HeroProps {
  stars: string;
  forks: string;
  version: string;
}

export function Hero({ stars, forks, version }: HeroProps) {
  const { waveX, viewportWidth } = useNeuralWave();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  const [titleWidth, setTitleWidth] = useState(0);
  const [subtitleWidth, setSubtitleWidth] = useState(0);
  const [badgeWidth, setBadgeWidth] = useState(0);

  // Medir texto con pretext
  useEffect(() => {
    function measureElements() {
      if (titleRef.current) {
        const style = window.getComputedStyle(titleRef.current);
        const fontFamily = style.fontFamily.split(',')[0].replace(/["']/g, '');
        const font = `${style.fontWeight} ${style.fontSize} ${fontFamily}`;
        const prepared = prepareWithSegments('Engram', font);
        setTitleWidth(measureNaturalWidth(prepared));
      }
      if (badgeRef.current) {
        const style = window.getComputedStyle(badgeRef.current);
        const fontFamily = style.fontFamily.split(',')[0].replace(/["']/g, '');
        const font = `${style.fontWeight} ${style.fontSize} ${fontFamily}`;
        const text = badgeRef.current.innerText || '';
        const prepared = prepareWithSegments(text, font);
        setBadgeWidth(measureNaturalWidth(prepared));
      }
      if (subtitleRef.current) {
        const style = window.getComputedStyle(subtitleRef.current);
        const fontFamily = style.fontFamily.split(',')[0].replace(/["']/g, '');
        const font = `${style.fontWeight} ${style.fontSize} ${fontFamily}`;
        const text = subtitleRef.current.innerText || '';
        const prepared = prepareWithSegments(text, font);
        setSubtitleWidth(measureNaturalWidth(prepared));
      }
    }

    measureElements();
    window.addEventListener('resize', measureElements);
    return () => window.removeEventListener('resize', measureElements);
  }, []);

  // Calcular intensidad de reacción de la wave
  const centerX = viewportWidth / 2;
  const titleReactionRange = titleWidth / 2 + 180;
  const titleDistance = Math.abs(waveX - centerX);
  const titleIntensity = Math.max(0, 1 - titleDistance / titleReactionRange);

  const badgeReactionRange = badgeWidth / 2 + 140;
  const badgeDistance = Math.abs(waveX - centerX);
  const badgeIntensity = Math.max(0, 1 - badgeDistance / badgeReactionRange);

  // Dirección de la wave para saber hacia dónde empujar
  const waveDirection = waveX < centerX ? -1 : 1;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Overlay para legibilidad sobre neural global */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[--color-base]/60 via-[--color-base]/40 to-[--color-base]/60" />

      <Container className="relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          
          {/* Badge etimológico / MIMO provisional */}
          <motion.div
            ref={badgeRef}
            animate={{
              scale: 1 - badgeIntensity * 0.15,
              x: badgeIntensity * waveDirection * 50,
              y: -badgeIntensity * 15,
              opacity: 1 - badgeIntensity * 0.3,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="mb-6 inline-flex flex-col sm:flex-row items-center gap-2 px-5 py-2.5 rounded-full bg-[--color-surface0]/70 border border-[--color-mauve]/25 backdrop-blur-sm will-change-transform"
          >
            <span className="text-sm font-mono font-semibold text-[--color-mauve]">engram</span>
            <span className="hidden sm:block text-[--color-surface2]">·</span>
            <span className="text-sm text-[--color-subtext0] italic">/ˈen.ɡræm/ — the physical trace of memory</span>
          </motion.div>

          {/* Título principal — reacciona a la wave */}
          <motion.h1
            ref={titleRef}
            animate={{
              scale: 1 - titleIntensity * 0.12,
              y: -titleIntensity * 25,
              opacity: 1 - titleIntensity * 0.35,
              letterSpacing: `${titleIntensity * 0.08}em`,
            }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            className="mb-6 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight bg-clip-text text-transparent will-change-transform"
            style={{
              backgroundImage: 'linear-gradient(to right, var(--color-mauve), var(--color-pink), var(--color-blue))',
            }}
          >
            Engram
          </motion.h1>

          {/* Hook emocional — reacción sutil */}
          <motion.div
            animate={{
              y: -titleIntensity * 12,
              opacity: 1 - titleIntensity * 0.25,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="mb-8 space-y-3 will-change-transform"
          >
            <p ref={subtitleRef} className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[--color-text]">
              Your AI forgets everything.{' '}
              <span className="text-[--color-mauve]">We give it a brain.</span>
            </p>
            <p className="text-base sm:text-lg text-[--color-subtext0]">
              One binary. One SQLite file. Zero dependencies.
            </p>
          </motion.div>

          {/* Brew command */}
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[--color-crust]/80 border border-[--color-surface1] font-mono text-sm">
            <span className="text-[--color-green]">$</span>
            <span className="text-[--color-text]">brew install gentleman-programming/tap/engram</span>
          </div>

          {/* CTAs */}
          <div className="mb-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button href="#installation" size="lg">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              href="https://github.com/Gentleman-Programming/engram"
              variant="ghost"
              size="md"
              external
            >
              View on GitHub →
            </Button>
          </div>

          {/* GitHub stats - AHORA DINÁMICOS */}
          <div className="flex flex-wrap justify-center gap-5 text-[--color-subtext0] text-sm">
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-[--color-yellow]" />
              <span className="font-semibold text-[--color-text]">{stars}</span>
              <span>stars</span>
            </div>
            <div className="flex items-center gap-1.5">
              <GitFork className="w-4 h-4 text-[--color-blue]" />
              <span className="font-semibold text-[--color-text]">{forks}</span>
              <span>forks</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[--color-green]" />
              <span className="font-semibold text-[--color-text]">{version}</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Scroll to next section"
      >
        <div className="w-6 h-10 rounded-full border-2 border-[--color-subtext0]/30 flex items-start justify-center p-1 hover:border-[--color-mauve] transition-colors">
          <div className="w-1.5 h-3 rounded-full bg-[--color-subtext0]/40 animate-pulse" />
        </div>
      </button>
    </section>
  );
}
