'use client';

import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { NeuralNetwork } from '@/components/canvas/NeuralNetwork';
import { ArrowRight, Star, GitFork } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Neural network background */}
      <div className="absolute inset-0 z-0">
        <NeuralNetwork className="opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[--color-base]/90 via-[--color-base]/50 to-[--color-base]/90" />
      </div>

      <Container className="relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Etymology badge — the definition IS the hook */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 px-6 py-3 rounded-full bg-[--color-surface0]/80 border border-[--color-mauve]/30 backdrop-blur-sm">
            <span className="text-sm font-mono font-semibold text-[--color-mauve]">engram</span>
            <span className="hidden sm:block text-[--color-surface2]">·</span>
            <span className="text-sm text-[--color-subtext0] italic">/ˈen.ɡræm/ — neuroscience: the physical trace of a memory in the brain</span>
          </div>

          {/* Product Name */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight">
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to right, var(--color-mauve), var(--color-pink), var(--color-blue))' }}
            >
              Engram
            </span>
          </h1>

          {/* Emotional hook — straight from the README */}
          <div className="space-y-3 max-w-3xl mx-auto">
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[--color-text] leading-snug">
              Your AI forgets everything.{' '}
              <span className="text-[--color-mauve]">Engram gives it a brain.</span>
            </p>
            <p className="text-base sm:text-lg text-[--color-subtext0]">
              No Node.js. No Python. No Docker.{' '}
              <span className="text-[--color-text] font-medium">One binary, one SQLite file.</span>
            </p>
          </div>

          {/* Quick install teaser */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-[--color-crust] border border-[--color-surface1] font-mono text-sm">
            <span className="text-[--color-green]">$</span>
            <span className="text-[--color-text]">brew install gentleman-programming/tap/engram</span>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
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

          {/* Real stats from GitHub */}
          <div className="flex flex-wrap justify-center gap-6 pt-4 text-[--color-subtext0] text-sm">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-[--color-yellow]" />
              <span className="font-semibold text-[--color-text]">2.3k</span>
              <span>stars</span>
            </div>
            <div className="flex items-center gap-2">
              <GitFork className="w-4 h-4 text-[--color-blue]" />
              <span className="font-semibold text-[--color-text]">252</span>
              <span>forks</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[--color-green] shadow-sm" />
              <span className="font-semibold text-[--color-text]">v1.11.0</span>
              <span>latest</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[--color-mauve] shadow-sm" />
              <span className="font-semibold text-[--color-text]">51</span>
              <span>releases</span>
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
        <div className="w-6 h-10 rounded-full border-2 border-[--color-subtext0]/40 flex items-start justify-center p-1 hover:border-[--color-mauve] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-mauve]">
          <div className="w-1.5 h-3 rounded-full bg-[--color-subtext0]/40 animate-pulse" />
        </div>
      </button>
    </section>
  );
}
