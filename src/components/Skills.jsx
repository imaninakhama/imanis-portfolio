import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { skillGroups } from "../data/content";

function SkillGroup({ label, skills, isLearning }) {
  return (
    <div>
      <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
        {label}
      </h3>
      <ul className="mt-3 space-y-1.5">
        {skills.map((skill) => (
          <li
            key={skill}
            className={`accent-tint text-sm ${isLearning ? "text-accent" : "text-body"}`}
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 sm:px-10 py-16 sm:py-24">
      <Reveal>
        <SectionLabel number="02" label="Skills" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-8">
          {skillGroups.map((group) => (
            <SkillGroup
              key={group.label}
              label={group.label}
              skills={group.skills}
              isLearning={group.label === "Currently learning"}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
