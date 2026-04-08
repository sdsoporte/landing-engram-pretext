import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export function Solution() {
  return (
    <Section id="solution">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text)]">
              engram connects{' '}
              <span className="text-[var(--color-mauve)]">your memories</span>
            </h2>
            <p className="text-lg text-[var(--color-subtext0)] leading-relaxed">
              engram gives your AI agents persistent memory across sessions. Built as a single Go binary
              with SQLite + FTS5, it provides full-text search, timeline navigation, and context injection
              for any MCP-compatible agent.
            </p>

            <ul className="space-y-4">
              {[
                'FTS5 full-text search across all memories',
                'Timeline with progressive disclosure',
                'Session context injection on startup',
                'Git sync for team collaboration',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-green)]/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-green)]" />
                  </div>
                  <span className="text-[var(--color-text)]">{item}</span>
                </li>
              ))}
            </ul>

            <Button href="#features" size="lg">
              Explore Features
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Right: Architecture diagram */}
          <div className="relative">
            <div className="bg-[var(--color-surface0)] rounded-2xl p-8 border border-[var(--color-surface1)]">
              {/* Simple architecture visualization */}
              <div className="space-y-6">
                {/* Agent */}
                <div className="flex items-center gap-4 p-4 rounded-lg bg-[var(--color-mantle)]">
                  <div className="w-12 h-12 rounded-lg bg-[var(--color-blue)]/20 flex items-center justify-center text-[var(--color-blue)]">
                    🤖
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--color-text)]">AI Agent</div>
                    <div className="text-sm text-[var(--color-subtext0)]">Claude, Cursor, OpenCode...</div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-px h-8 bg-[var(--color-mauve)]" />
                </div>

                {/* Engram */}
                <div className="flex items-center gap-4 p-4 rounded-lg bg-[var(--color-mantle)] border-2 border-[var(--color-mauve)]">
                  <div className="w-12 h-12 rounded-lg bg-[var(--color-mauve)]/20 flex items-center justify-center text-[var(--color-mauve)]">
                    🧠
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--color-mauve)]">engram</div>
                    <div className="text-sm text-[var(--color-subtext0)]">Go binary + SQLite</div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-px h-8 bg-[var(--color-mauve)]" />
                </div>

                {/* Database */}
                <div className="flex items-center gap-4 p-4 rounded-lg bg-[var(--color-mantle)]">
                  <div className="w-12 h-12 rounded-lg bg-[var(--color-green)]/20 flex items-center justify-center text-[var(--color-green)]">
                    💾
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--color-text)]">SQLite + FTS5</div>
                    <div className="text-sm text-[var(--color-subtext0)]">~/.engram/engram.db</div>
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
