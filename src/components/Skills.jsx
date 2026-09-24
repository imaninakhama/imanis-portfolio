import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { useInView } from "../hooks/useInView";
import { skillSets } from "../data/content";

function SkillBar({ label, level }) {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <div ref={ref}>
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-sm text-body">{label}</span>
        <span className="font-mono text-xs text-muted">{level}%</span>
      </div>
      <div
        role="progressbar"
        aria-label={label}
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-[6px] rounded-full bg-hairline overflow-hidden"
      >
        <div
          className="accent-tint h-full rounded-full bg-accent transition-[width] duration-700 ease-out"
          style={{ width: inView ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills({ mode, onModeChange }) {
  const skills = skillSets[mode];

  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 sm:px-10 py-16 sm:py-24">
      <Reveal>
        <SectionLabel number="02" label="Skills" />

        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted mr-2">
            View as
          </span>
          <div className="inline-flex rounded-full border border-hairline bg-card p-1">
            <button
              type="button"
              aria-pressed={mode === "ohs"}
              onClick={() => onModeChange("ohs")}
              className={`accent-tint font-mono text-[11px] uppercase tracking-[0.12em] px-4 py-1.5 rounded-full transition-colors ${
                mode === "ohs" ? "bg-accent text-card" : "text-body"
              }`}
            >
              Safety Officer
            </button>
            <button
              type="button"
              aria-pressed={mode === "dev"}
              onClick={() => onModeChange("dev")}
              className={`accent-tint font-mono text-[11px] uppercase tracking-[0.12em] px-4 py-1.5 rounded-full transition-colors ${
                mode === "dev" ? "bg-accent text-card" : "text-body"
              }`}
            >
              Developer
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
          {skills.map((skill) => (
            <SkillBar key={skill.label} label={skill.label} level={skill.level} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
