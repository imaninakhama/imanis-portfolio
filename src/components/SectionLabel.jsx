export default function SectionLabel({ number, label }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="accent-tint font-mono text-sm text-accent">{number}</span>
      <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
        {label}
      </span>
      <span className="h-px flex-1 bg-hairline" />
    </div>
  );
}
