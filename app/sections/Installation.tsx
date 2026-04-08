import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { CodeBlock } from '@/components/ui/CodeBlock';

const installSteps = [
  {
    step: '1. Clone the repository',
    code: 'git clone https://github.com/Gentleman-Programming/engram\ncd engram',
  },
  {
    step: '2. Build the binary',
    code: 'go build -o engram ./cmd/engram',
  },
  {
    step: '3. Install globally',
    code: 'go install ./cmd/engram',
  },
  {
    step: '4. Start the server',
    code: 'engram serve\n# HTTP API running on http://127.0.0.1:7437',
  },
];

export function Installation() {
  return (
    <Section id="installation" variant="muted">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-4">
              Get started in{' '}
              <span className="text-[var(--color-mauve)]">seconds</span>
            </h2>
            <p className="text-lg text-[var(--color-subtext0)]">
              Single binary, zero runtime dependencies. Just Go and SQLite.
            </p>
          </div>

          <div className="space-y-8">
            {installSteps.map((item, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-mauve)] flex items-center justify-center text-[var(--color-base)] font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--color-text)]">
                    {item.step}
                  </h3>
                </div>
                <CodeBlock code={item.code} language="bash" />
              </div>
            ))}
          </div>

          {/* Requirements */}
          <div className="mt-12 p-6 rounded-lg bg-[var(--color-surface0)] border border-[var(--color-surface1)]">
            <h4 className="font-semibold text-[var(--color-text)] mb-3">Requirements</h4>
            <ul className="space-y-2 text-[var(--color-subtext0)]">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-green)]" />
                Go 1.21 or later
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-green)]" />
                SQLite (embedded, no installation needed)
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-green)]" />
                Any MCP-compatible AI agent
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
