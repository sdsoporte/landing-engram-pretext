import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Star, ExternalLink } from 'lucide-react';

export function CTA() {
  return (
    <Section id="cta" className="relative overflow-hidden">
      {/* Full gradient background — the dramatic climax */}
      <div className="absolute inset-0 bg-gradient-to-br from-[--color-mauve]/40 via-[--color-base] to-[--color-pink]/40" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Star icon */}
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full bg-[--color-mauve]/30 border-2 border-[--color-mauve]/50 flex items-center justify-center shadow-lg shadow-[--color-mauve]/20">
              <Star className="w-12 h-12 text-[--color-mauve]" />
            </div>
          </div>

          {/* Headline — emotional, from README */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[--color-text]">
            Give your AI a{' '}
            <span className="text-[--color-mauve]">brain</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-[--color-subtext0] max-w-xl mx-auto">
            Join <span className="text-[--color-text] font-semibold">2,300+ developers</span> who never repeat the same explanation twice.
          </p>

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

          {/* Final stats — real numbers */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 text-[--color-subtext0] divide-x divide-[--color-surface1]/50">
            <div className="text-center px-8">
              <div className="text-3xl font-bold text-[--color-text]">2.3k</div>
              <div className="text-sm">GitHub Stars</div>
            </div>
            <div className="text-center px-8">
              <div className="text-3xl font-bold text-[--color-text]">252</div>
              <div className="text-sm">Forks</div>
            </div>
            <div className="text-center px-8">
              <div className="text-3xl font-bold text-[--color-text]">51</div>
              <div className="text-sm">Releases</div>
            </div>
            <div className="text-center px-8">
              <div className="text-3xl font-bold text-[--color-text]">MIT</div>
              <div className="text-sm">License</div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
