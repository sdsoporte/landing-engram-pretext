import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { NeuralNetwork } from '@/components/canvas/NeuralNetwork';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Neural network background */}
      <div className="absolute inset-0 z-0">
        <NeuralNetwork className="opacity-60" />
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-base)] via-transparent to-[var(--color-base)] opacity-50" />
      </div>

      <Container className="relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Tagline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-[var(--color-text)]">Persistent memory</span>
            <br />
            <span className="text-[var(--color-mauve)]">for AI agents</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-[var(--color-subtext0)] max-w-2xl mx-auto">
            A Go binary with SQLite + FTS5 full-text search.
            <br className="hidden sm:block" />
            Agent-agnostic. Cross-platform. Zero runtime dependencies.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button href="#installation" size="lg">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button href="https://github.com/Gentleman-Programming/engram" variant="secondary" size="lg" external>
              View on GitHub
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 text-[var(--color-subtext1)]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[var(--color-green)]" />
              <span>Go Binary</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[var(--color-blue)]" />
              <span>SQLite + FTS5</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[var(--color-pink)]" />
              <span>MCP Compatible</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-[var(--color-subtext0)] flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-[var(--color-subtext0)] animate-pulse" />
        </div>
      </div>
    </section>
  );
}
