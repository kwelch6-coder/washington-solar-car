export default function TeamCard({
  name,
  description,
}: {
  name: string;
  /** Omitted while a subteam's remit is still unwritten — the card renders as
   *  a name plate rather than carrying invented copy. */
  description?: string;
}) {
  return (
    <div className="border-2 border-ink p-6 h-full hover:bg-ink hover:text-cream transition-colors group">
      <h3 className="font-display text-2xl uppercase text-accent">{name}</h3>
      {description && (
        <p className="mt-2 text-ink/80 group-hover:text-cream/80">{description}</p>
      )}
    </div>
  );
}
