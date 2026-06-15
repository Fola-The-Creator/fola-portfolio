import { Download } from "lucide-react";
import { RevealOnScroll } from "../animations/RevealOnScroll";
import { MagneticButton } from "../animations/MagneticButton";
import { SectionDiv } from "../layouts";

export function About() {
  const experience = [
    {
      year: "2024 — Present",
      role: "Senior Frontend Developer",
      company: "Tech Solutions Inc",
    },
    {
      year: "2022 — 2024",
      role: "Frontend Developer",
      company: "Digital Agency Co",
    },
    {
      year: "2020 — 2022",
      role: "Junior Frontend Developer",
      company: "StartUp Labs",
    },
  ];

  return (
    <section
      id="about"
      className="py-32 border-t border-grey-200 bg-grey-0 overflow-hidden"
    >
      <SectionDiv>
        <RevealOnScroll>
          <div className="text-grey-700 tracking-[0.3em] text-sm mb-12 uppercase">
            About Me
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <RevealOnScroll delay={0.2}>
            <div>
              <h2 className="text-4xl md:text-5xl text-grey-900 font-medium mb-8 leading-tight tracking-tight">
                Building scalable apps,
                <br />
                <span className="text-grey-500">end-to-end</span>
              </h2>

              <div className="space-y-4 text-grey-700 leading-relaxed">
                <p>
                  I&apos;m <strong>Fola</strong>, a full-stack developer focused
                  on building performant, scalable applications. I enjoy turning
                  complex problems into simple, intuitive solutions, from
                  crafting seamless user interfaces to designing reliable
                  backend systems.
                </p>
                <p>
                  My work is centered around modern JavaScript ecosystems,
                  including React, Next.js, and Node.js, with a strong emphasis
                  on TypeScript, clean architecture, and maintainable code. I
                  prioritize performance, developer experience, and building
                  systems that scale efficiently.
                </p>
              </div>

              <MagneticButton className="mt-8">
                <button className="group inline-flex items-center gap-3 border border-grey-200 text-grey-900 px-8 py-4 rounded-full hover:border-grey-900 hover:bg-grey-900 hover:text-grey-0 transition-all duration-300">
                  <Download size={18} />
                  <span className="tracking-wide">Download Resume</span>
                </button>
              </MagneticButton>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3} direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl text-grey-900 font-medium mb-8 tracking-tight">
                  Experience
                </h3>

                <div className="space-y-8">
                  {experience.map((item, index) => (
                    <div
                      key={index}
                      className="border-l-2 border-grey-200 pl-6 hover:border-grey-900 transition-colors duration-300"
                    >
                      <div className="text-grey-700 text-sm tracking-wider mb-2">
                        {item.year}
                      </div>
                      <div className="text-grey-900 text-xl font-medium mb-1 tracking-tight">
                        {item.role}
                      </div>
                      <div className="text-grey-700">{item.company}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </SectionDiv>
    </section>
  );
}
