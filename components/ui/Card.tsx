import { cn } from '@/lib/utils';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function Card({ icon, title, description, className }: CardProps) {
  return (
    <div
      className={cn(
        'group flex flex-col items-start gap-4 rounded-xl',
        'bg-[--color-surface0] p-8',
        'border border-[--color-surface1]',
        // Subtle hover: just border color + shadow, no aggressive scale
        'hover:border-[--color-mauve] hover:shadow-lg hover:shadow-[--color-mauve]/10',
        'hover:-translate-y-1',
        'transition-all duration-200',
        className
      )}
    >
      {/* Icon: softer hover — tint instead of full color swap */}
      <div className="rounded-xl bg-[--color-surface1] p-4 text-[--color-mauve] group-hover:bg-[--color-mauve]/20 transition-colors duration-200">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-[--color-text]">{title}</h3>
      <p className="text-[--color-subtext0] leading-relaxed">{description}</p>
    </div>
  );
}
