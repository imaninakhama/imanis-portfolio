export default function ContactLine({ label, value, href }) {
  const valueEl = href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="accent-tint text-ink hover:text-accent"
    >
      {value}
    </a>
  ) : (
    <span className="text-ink">{value}</span>
  );

  return (
    <div className="flex items-baseline gap-4 py-3 border-b border-hairline">
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted w-24 shrink-0">
        {label}
      </span>
      <span className="font-display text-lg sm:text-xl">{valueEl}</span>
    </div>
  );
}
