import Reveal from "./Reveal";
import ContactLine from "./ContactLine";
import { contactLines } from "../data/content";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl px-6 sm:px-10 pt-16 pb-24 sm:pt-24 sm:pb-32 border-t border-hairline"
    >
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted mb-6">
          04 · Contact
        </p>

        <h2 className="font-display text-3xl sm:text-4xl text-ink max-w-xl leading-tight">
          Let's talk safety, or let's talk code.
        </h2>

        <div className="mt-8 max-w-md">
          {contactLines.map((line) => (
            <ContactLine key={line.label} {...line} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
