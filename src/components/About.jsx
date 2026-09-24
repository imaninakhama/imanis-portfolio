import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import MiniStat from "./MiniStat";
import portrait from "../assets/portrait.jpg";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 sm:px-10 py-16 sm:py-24">
      <Reveal>
        <SectionLabel number="01" label="About" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
          <div className="order-2 sm:order-1">
            <p className="text-base sm:text-lg text-body leading-relaxed">
              I'm currently pursuing a BSc in Occupational Health &amp;
              Safety at Kenyatta University while working as an OHS Officer
              at Value Chain Factory, where I inspect hazards, assess risk,
              and keep production floors compliant. Outside the factory, I
              build full-stack web applications — React frontends backed by
              Flask APIs — bringing the same systematic, detail-oriented
              approach to code that I bring to a safety audit.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 max-w-sm">
              <MiniStat label="Education" value="BSc OHS, Kenyatta Univ." />
              <MiniStat label="Role" value="OHS Officer, Value Chain Factory" />
            </div>
          </div>

          <div className="order-1 sm:order-2 flex justify-center">
            <div className="relative w-64 h-80 sm:w-80 sm:h-[28rem]">
              <div
                aria-hidden="true"
                className="accent-tint blob-anim absolute top-[2%] left-[2%] right-[6%] bottom-[7%] bg-accent shadow-[var(--shadow-blob)]"
              />

              <div className="absolute top-[4%] left-[4%] right-[10%] bottom-[12%]">
                <div className="relative w-full h-full overflow-hidden rounded-[50%]">
                  <img
                    src={portrait}
                    alt="Portrait of Imani Nakhama Lunjala"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
