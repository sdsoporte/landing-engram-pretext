import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { CodeBlock } from '@/components/ui/CodeBlock';

const agentSetup = [
  { agent: 'Claude Code', cmd: 'claude plugin marketplace add Gentleman-Programming/engram && claude plugin install engram' },
  { agent: 'OpenCode', cmd: 'engram setup opencode' },
  { agent: 'Gemini CLI', cmd: 'engram setup gemini-cli' },
  { agent: 'Codex', cmd: 'engram setup codex' },
  { agent: 'VS Code', cmd: "code --add-mcp '{\"name\":\"engram\",\"command\":\"engram\",\"args\":[\"mcp\"]}'" },
];

export function Installation() {
  return (
    <Section id="installation" variant="muted">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[--color-text] mb-4">
              Up and running in{' '}
              <span className="text-[--color-mauve]">60 seconds</span>
            </h2>
            <p className="text-lg text-[--color-subtext0]">
              No Node.js. No Python. No Docker. Just one binary.
            </p>
          </div>

          {/* Step 1 */}
          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[--color-mauve] flex items-center justify-center text-[--color-base] font-bold text-sm">1</div>
              <h3 className="text-lg font-semibold text-[--color-text]">Install engram</h3>
            </div>
            <CodeBlock code="brew install gentleman-programming/tap/engram" language="bash" filename="macOS / Linux via Homebrew" />
            <p className="text-sm text-[--color-subtext0] pl-11">
              Windows, Linux (apt/deb/rpm) and manual install →{' '}
              <a
                href="https://github.com/Gentleman-Programming/engram/blob/main/docs/INSTALLATION.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[--color-mauve] hover:text-[--color-pink] transition-colors underline underline-offset-2"
              >
                docs/INSTALLATION.md
              </a>
            </p>
          </div>

          {/* Step 2 */}
          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[--color-mauve] flex items-center justify-center text-[--color-base] font-bold text-sm">2</div>
              <h3 className="text-lg font-semibold text-[--color-text]">Connect your agent — one command per agent</h3>
            </div>
            <div className="rounded-xl overflow-hidden border border-[--color-surface1] divide-y divide-[--color-surface1]">
              {agentSetup.map((item) => (
                <div key={item.agent} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-4 py-3 bg-[--color-surface0]">
                  <span className="text-sm font-semibold text-[--color-mauve] sm:w-28 flex-shrink-0">{item.agent}</span>
                  <code className="text-xs text-[--color-subtext0] font-mono break-all">{item.cmd}</code>
                </div>
              ))}
              <div className="flex items-center gap-4 px-4 py-3 bg-[--color-surface0]">
                <span className="text-sm font-semibold text-[--color-mauve] sm:w-28 flex-shrink-0">Cursor / Windsurf</span>
                <a
                  href="https://github.com/Gentleman-Programming/engram/blob/main/docs/AGENT-SETUP.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[--color-subtext0] hover:text-[--color-mauve] transition-colors"
                >
                  → docs/AGENT-SETUP.md
                </a>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[--color-green] flex items-center justify-center text-[--color-base] font-bold text-sm">✓</div>
              <h3 className="text-lg font-semibold text-[--color-text]">That&apos;s it. Your AI now remembers.</h3>
            </div>
            <CodeBlock code={`engram serve\n# HTTP API on http://127.0.0.1:7437\n# MCP server ready for your agent`} language="bash" />
          </div>

          {/* Requirements */}
          <div className="mt-10 p-6 rounded-xl bg-[--color-surface0] border border-[--color-surface1]">
            <h4 className="font-semibold text-[--color-text] mb-4">Requirements</h4>
            <ul className="space-y-3 text-[--color-subtext0] text-sm">
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[--color-green]" />Go 1.21 or later</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[--color-green]" />SQLite (embedded — no installation needed)</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[--color-green]" />Any MCP-compatible AI agent</li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
