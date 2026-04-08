import { Hero } from './sections/Hero';
import { Problem } from './sections/Problem';
import { Solution } from './sections/Solution';
import { Features } from './sections/Features';
import { Demo } from './sections/Demo';
import { Installation } from './sections/Installation';
import { CTA } from './sections/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Demo />
      <Installation />
      <CTA />
    </main>
  );
}
