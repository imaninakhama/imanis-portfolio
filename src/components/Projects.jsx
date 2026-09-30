import { useState } from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { projectFilters, projects } from "../data/content";

function ProjectCard({ project }) {
  const { name, category, description, stack, github, demo } = project;

  return (
    <div className="card-fade-in accent-tint h-full rounded-md border-l-[3px] border-accent bg-card border-t border-r border-b border-hairline p-6 shadow-[var(--shadow-card)]">
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
        {category}
      </span>

      <h3 className="mt-4 font-display text-xl text-ink">{name}</h3>

      <p className="mt-3 text-sm text-body leading-relaxed">{description}</p>

      <p className="mt-4 font-mono text-[11px] text-muted">{stack.join(" · ")}</p>

      <div className="mt-4 flex gap-5">
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} — open live demo in a new tab`}
            className="accent-tint font-mono text-[11px] uppercase tracking-[0.12em] text-ink hover:text-accent"
          >
            Live Demo
          </a>
        )}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} — open GitHub repository in a new tab`}
          className="accent-tint font-mono text-[11px] uppercase tracking-[0.12em] text-ink hover:text-accent"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const visibleProjects = projects.filter(
    (p) => filter === "All" || filter === p.category
  );

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 sm:px-10 py-16 sm:py-24">
      <Reveal>
        <SectionLabel number="03" label="Projects" />

        <div className="flex flex-wrap gap-2 mb-8">
          {projectFilters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={`accent-tint font-mono text-[11px] uppercase tracking-[0.12em] px-4 py-1.5 rounded-full border transition-colors ${
                filter === f
                  ? "bg-accent border-accent text-card"
                  : "border-hairline text-body hover:border-accent hover:text-accent"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
