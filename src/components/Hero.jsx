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

        <p className="accent-tint mt-4 font-mono text-sm uppercase tracking-[0.14em] text-accent">
          Full-Stack Developer
        </p>

        <p className="mt-6 max-w-2xl text-base sm:text-lg text-body leading-relaxed">
          I build web applications with React, Python and Flask. Right now
          I'm learning the deployment and infrastructure side — how those
          applications actually run in production.
        </p>
      </Reveal>
    </section>
  );
}
