import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Star, ExternalLink } from 'lucide-react';

export function CTA() {
  return (
    <Section id="cta" className="relative overflow-hidden">
      {/* Full gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[--color-mauve]/40 via-[--color-base] to-[--color-pink]/40" />

      <Container className="relative z-10">
        {/* Organic card container */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-[--color-surface0]/60 to-[--color-crust]/60 border border-[--color-mauve]/20 p-8 sm:p-12 backdrop-blur-sm shadow-[0_0_60px_-15px_var(--color-mauve)]/20">
            <div className="text-center space-y-8">
              {/* Star icon — glowing node */}
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[--color-mauve]/30 to-[--color-mauve]/10 border-2 border-[--color-mauve]/50 flex items-center justify-center shadow-[0_0_30px_var(--color-mauve)]/30">
                  <Star className="w-10 h-10 text-[--color-mauve]" />
                </div>
              </div>

              {/* Headline */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[--color-text]">
                Give your AI a{' '}
                <span className="text-[--color-mauve]">brain</span>
              </h2>

              {/* Subheadline */}
              <p className="text-xl text-[--color-subtext0] max-w-xl mx-auto">
                Join <span className="text-[--color-text] font-semibold">2,300+ developers</span> who never repeat the same explanation twice.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  href="https://github.com/Gentleman-Programming/engram"
                  size="lg"
                  external
                >
                  <Star className="w-5 h-5" />
                  Star on GitHub
                </Button>

                <Button
                  href="https://github.com/Gentleman-Programming/engram/blob/main/DOCS.md"
                  variant="secondary"
                  size="lg"
                  external
                >
                  Read the Docs
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>

              {/* Stats — as connected nodes */}
              <div className="flex flex-wrap justify-center gap-6 sm:gap-8 pt-8">
                {[
                  { value: '2.3k', label: 'GitHub Stars', color: 'yellow' },
                  { value: '252', label: 'Forks', color: 'blue' },
                  { value: '51', label: 'Releases', color: 'mauve' },
                  { value: 'MIT', label: 'License', color: 'green' },
                ].map((stat, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {index > 0 && (
                      <div className="hidden sm:block w-8 h-px bg-gradient-to-r from-transparent via-[--color-surface1] to-transparent" />
                    )}
                    <div className="text-center px-2">
                      <div className={`text-2xl sm:text-3xl font-bold text-[--color-${stat.color}]`}>{stat.value}</div>
                      <div className="text-sm text-[--color-subtext0]">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
