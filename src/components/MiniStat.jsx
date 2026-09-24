export default function MiniStat({ label, value }) {
  return (
    <div>
      <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
        {label}
      </div>
      <div className="mt-1 font-display text-base text-ink">{value}</div>
    </div>
  );
}
