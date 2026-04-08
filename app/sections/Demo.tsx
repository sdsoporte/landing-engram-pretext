import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { CodeBlock } from '@/components/ui/CodeBlock';

const saveExample = `// Agent saves a decision after implementing auth
mem_save({
  title: "Switched from sessions to JWT",
  type: "decision",
  content: \`
**What**: Replaced express-session with jsonwebtoken
**Why**: Session storage doesn't scale across instances
**Where**: src/middleware/auth.ts, src/routes/login.ts
**Learned**: Must set httpOnly and secure flags
  \`
});`;

const searchExample = `// Agent searches for previous auth decisions
mem_search({
  query: "JWT auth middleware",
  type: "decision",
  project: "my-project"
});`;

const timelineExample = `// Agent drills into chronological context
mem_timeline({
  observation_id: 42,
  before: 5,
  after: 5
});`;

export function Demo() {
  return (
    <Section id="demo">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-4">
            See it in <span className="text-[var(--color-mauve)]">action</span>
          </h2>
          <p className="text-lg text-[var(--color-subtext0)] max-w-2xl mx-auto">
            Three simple MCP tools give your agent everything it needs: save memories, search them, and explore timeline context.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Code examples */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--color-mauve)] flex items-center justify-center text-[var(--color-base)] font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text)]">Save memories</h3>
              </div>
              <CodeBlock code={saveExample} language="javascript" />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--color-blue)] flex items-center justify-center text-[var(--color-base)] font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text)]">Search across all memories</h3>
              </div>
              <CodeBlock code={searchExample} language="javascript" />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--color-pink)] flex items-center justify-center text-[var(--color-base)] font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text)]">Explore timeline context</h3>
              </div>
              <CodeBlock code={timelineExample} language="javascript" />
            </div>
          </div>

          {/* Right: Visual flow */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-[var(--color-surface0)] rounded-2xl p-8 border border-[var(--color-surface1)]">
              <h3 className="text-xl font-semibold text-[var(--color-text)] mb-6">
                Memory Connection Flow
              </h3>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-mauve)]/20 flex items-center justify-center">
                    <span className="text-xl">💾</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-[var(--color-text)] font-medium">mem_save</div>
                    <div className="text-sm text-[var(--color-subtext0)]">Store decision, bugfix, or pattern</div>
                  </div>
                </div>

                <div className="ml-5 w-px h-8 bg-[var(--color-mauve)]/30" />

                {/* Step 2 */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-blue)]/20 flex items-center justify-center">
                    <span className="text-xl">🔍</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-[var(--color-text)] font-medium">mem_search</div>
                    <div className="text-sm text-[var(--color-subtext0)]">Find relevant memories instantly</div>
                  </div>
                </div>

                <div className="ml-5 w-px h-8 bg-[var(--color-blue)]/30" />

                {/* Step 3 */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-pink)]/20 flex items-center justify-center">
                    <span className="text-xl">📊</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-[var(--color-text)] font-medium">mem_timeline</div>
                    <div className="text-sm text-[var(--color-subtext0)]">Explore chronological context</div>
                  </div>
                </div>

                <div className="ml-5 w-px h-8 bg-[var(--color-pink)]/30" />

                {/* Result */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-green)]/20 flex items-center justify-center">
                    <span className="text-xl">✨</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-[var(--color-green)] font-medium">Context Retrieved</div>
                    <div className="text-sm text-[var(--color-subtext0)]">Agent has full context to continue work</div>
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
