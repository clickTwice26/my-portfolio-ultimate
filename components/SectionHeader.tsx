type Props = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeader({ title, subtitle, className = '' }: Props) {
  return (
    <div className={`mb-8 ${className}`}>
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
      {subtitle ? (
        <p className="mt-2 text-sm text-muted max-w-prose">{subtitle}</p>
      ) : null}
    </div>
  );
}
