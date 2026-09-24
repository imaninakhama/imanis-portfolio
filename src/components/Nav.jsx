import { useState } from "react";
import { navLinks } from "../data/content";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur border-b border-hairline">
      <nav className="accent-tint mx-auto max-w-5xl px-6 sm:px-10 h-16 flex items-center justify-between">
        <a
          href="#"
          className="accent-tint font-mono text-sm tracking-[0.14em] text-ink hover:text-accent"
        >
          IMANI.LUNJALA
        </a>

        <ul className="hidden sm:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="accent-tint font-mono text-xs uppercase tracking-[0.14em] text-body hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="sm:hidden relative h-9 w-9 flex items-center justify-center"
        >
          <span
            className={`absolute h-[1.5px] w-5 bg-ink transition-transform duration-300 ${
              open ? "rotate-45" : "-translate-y-[6px]"
            }`}
          />
          <span
            className={`absolute h-[1.5px] w-5 bg-ink transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-[1.5px] w-5 bg-ink transition-transform duration-300 ${
              open ? "-rotate-45" : "translate-y-[6px]"
            }`}
          />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`sm:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out border-t border-hairline ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="accent-tint font-mono text-xs uppercase tracking-[0.14em] text-body hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
