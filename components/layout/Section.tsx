import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'muted' | 'accent';
}

// Semi-transparent backgrounds to show global neural network
const variantStyles = {
  default: 'bg-[--color-base]/85 backdrop-blur-sm',
  muted: 'bg-[--color-mantle]/90 backdrop-blur-sm',
  accent: 'bg-[--color-crust]/95 backdrop-blur-sm',
};

export function Section({
  id,
  children,
  className,
  variant = 'default',
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-16 sm:py-20 lg:py-24 relative z-10',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </section>
  );
}
