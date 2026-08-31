export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="bg-cream border-b-2 border-ink">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 pb-10 sm:pt-20 sm:pb-14 text-center">
        {eyebrow && (
          <p className="font-label font-light text-xs uppercase tracking-[0.3em] text-accent mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display uppercase leading-[0.85] text-ink text-[16vw] sm:text-[8vw] lg:text-8xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl mx-auto text-lg sm:text-xl text-ink/80">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
