import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 sm:px-10 py-16 sm:py-24">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Kenyatta University · Nairobi, Kenya
        </p>

        <h1 className="accent-tint mt-6 font-display text-4xl sm:text-6xl leading-[1.1] text-ink">
          Hello, I am{" "}
          <span className="accent-tint italic text-accent">Imani</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base sm:text-lg text-body leading-relaxed">
          Occupational Health &amp; Safety Officer and full-stack software
          engineer. I inspect what could go wrong on a factory floor, and I
          build the systems that keep it running well.
        </p>
      </Reveal>
    </section>
  );
}
