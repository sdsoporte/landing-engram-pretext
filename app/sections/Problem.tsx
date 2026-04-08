import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Brain, RefreshCw, AlertTriangle, Puzzle } from 'lucide-react';

const problems = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Lost Context',
    description: 'Your AI starts every session blank. No memory of previous decisions, patterns, or discussions.',
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: 'Repeated Work',
    description: 'The same bugs get fixed multiple times. Solutions are rediscovered instead of reused.',
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: 'Fragmented Knowledge',
    description: 'Knowledge is scattered across chats, docs, and commits. No unified memory store.',
  },
  {
    icon: <Puzzle className="w-6 h-6" />,
    title: 'No Continuity',
    description: "Context from Monday's work is gone by Tuesday. Every conversation starts from zero.",
  },
];

export function Problem() {
  return (
    <Section id="problem" variant="muted">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[--color-text] mb-4">
            Your AI forgets{' '}
            <span className="text-[--color-red]">everything</span>
          </h2>
          <p className="text-lg text-[--color-subtext0]">
            When the session ends, it all disappears. Decisions, patterns, discussions — gone.
          </p>
        </div>

        {/* Problem nodes — organic, rounded, with glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="group relative flex items-start gap-4 p-6 rounded-3xl bg-gradient-to-br from-[--color-crust] to-[--color-mantle] border border-[--color-red]/20 hover:border-[--color-red]/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_var(--color-red)]/10"
            >
              {/* Icon node */}
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[--color-red]/10 border border-[--color-red]/20 flex items-center justify-center text-[--color-red] group-hover:shadow-[0_0_20px_-2px_var(--color-red)]/30 transition-all duration-300">
                {problem.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[--color-text] mb-2">
                  {problem.title}
                </h3>
                <p className="text-[--color-subtext0] leading-relaxed">{problem.description}</p>
              </div>
              
              {/* Connection dot */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[--color-red]/30 group-hover:bg-[--color-red]/60 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
