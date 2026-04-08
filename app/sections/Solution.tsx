import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Bot, Brain, Database } from 'lucide-react';

export function Solution() {
  return (
    <Section id="solution">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[--color-text]">
              engram connects{' '}
              <span className="text-[--color-mauve]">your memories</span>
            </h2>
            <p className="text-lg text-[--color-subtext0] leading-relaxed">
              engram gives your AI agents persistent memory across sessions. Built as a single Go binary
              with SQLite + FTS5, it provides full-text search, timeline navigation, and context injection
              for any MCP-compatible agent.
            </p>

            <ul className="space-y-5">
              {[
                'FTS5 full-text search across all memories',
                'Timeline with progressive disclosure',
                'Session context injection on startup',
                'Git sync for team collaboration',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[--color-green]/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[--color-green]" />
                  </div>
                  <span className="text-[--color-text]">{item}</span>
                </li>
              ))}
            </ul>

            <Button href="#features" size="lg" className="mt-8">
              Explore Features
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Right: Neural flow diagram — organic node style */}
          <div className="relative">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[--color-mauve]/5 to-[--color-blue]/5 rounded-[2rem] blur-3xl" />
            
            <div className="relative bg-gradient-to-br from-[--color-surface0]/80 to-[--color-crust]/80 rounded-[2rem] p-8 border border-[--color-surface1]/50 backdrop-blur-sm">
              <div className="space-y-4">
                {/* Agent Node */}
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-[--color-blue]/10 to-transparent border border-[--color-blue]/20 hover:border-[--color-blue]/40 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[--color-blue]/20 flex items-center justify-center text-[--color-blue] shadow-[0_0_15px_-3px_var(--color-blue)]/30">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-[--color-text]">AI Agent</div>
                    <div className="text-sm text-[--color-subtext0]">Claude, Cursor, OpenCode...</div>
                  </div>
                </div>

                {/* Connection line with pulse */}
                <div className="flex justify-center py-1">
                  <div className="relative w-px h-6 bg-gradient-to-b from-[--color-blue] to-[--color-mauve]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[--color-mauve] animate-pulse shadow-[0_0_8px_var(--color-mauve)]" />
                  </div>
                </div>

                {/* Engram Node — highlighted center */}
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-[--color-mauve]/20 to-[--color-mauve]/5 border-2 border-[--color-mauve]/40 shadow-[0_0_30px_-10px_var(--color-mauve)]/30 hover:shadow-[0_0_40px_-8px_var(--color-mauve)]/40 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[--color-mauve]/30 flex items-center justify-center text-[--color-mauve] shadow-[0_0_20px_-3px_var(--color-mauve)]/50">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-[--color-mauve]">engram</div>
                    <div className="text-sm text-[--color-subtext0]">Go binary + SQLite</div>
                  </div>
                </div>

                {/* Connection line with pulse */}
                <div className="flex justify-center py-1">
                  <div className="relative w-px h-6 bg-gradient-to-b from-[--color-mauve] to-[--color-green]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[--color-green] animate-pulse shadow-[0_0_8px_var(--color-green)]" style={{ animationDelay: '0.5s' }} />
                  </div>
                </div>

                {/* Database Node */}
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-[--color-green]/10 to-transparent border border-[--color-green]/20 hover:border-[--color-green]/40 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[--color-green]/20 flex items-center justify-center text-[--color-green] shadow-[0_0_15px_-3px_var(--color-green)]/30">
                    <Database className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-[--color-text]">SQLite + FTS5</div>
                    <div className="text-sm text-[--color-subtext0]">~/.engram/engram.db</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
