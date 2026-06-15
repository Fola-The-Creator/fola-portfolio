import { Download } from "lucide-react";
import { RevealOnScroll } from "../animations/RevealOnScroll";
import { MagneticButton } from "../animations/MagneticButton";
import { SectionDiv } from "../layouts";

const disciplines = [
  {
    title: "UI/UX Design",
    description:
      "Research, wireframes, and high-fidelity prototypes that make products feel effortless to use.",
  },
  {
    title: "Brand and Visual Identity",
    description:
      "Visual systems and brand languages built to communicate clearly and stick in memory.",
  },
  {
    title: "Web - Mobile Design and Development",
    description:
      "From pixel-perfect mockups to production-ready code. Design and engineering, in one place.",
  },
  // {
  //   title: "Mobile App Design",
  //   description:
  //     "Polished mobile interfaces for iOS and Android that feel native, intentional, and fast.",
  // },
];

export function About() {
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
                Designer by eye,
                <br />
                <span className="text-grey-500">developer by craft</span>
              </h2>

              <div className="space-y-4 text-grey-700 leading-relaxed">
                <p>
                  I&apos;m <strong>Fola</strong>, a full-stack designer and
                  developer. I work at the intersection
                  of design and engineering, building digital products that look
                  great and work even better.
                </p>
                <p>
                  Whether I&apos;m crafting a brand identity from scratch or
                  shipping production code, I bring the same energy to both. For
                  me, design without development is incomplete, and development
                  without design is just plumbing.
                </p>
                <p>
                  I care about the details: the right weight on a heading, the
                  smooth interaction on a button, the architecture that
                  won&apos;t break in six months. Every project gets the full
                  picture.
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
            <div>
              <h3 className="text-2xl text-grey-900 font-medium mb-8 tracking-tight">
                What I Do
              </h3>

              <div className="space-y-8">
                {disciplines.map((item) => (
                  <div
                    key={item.title}
                    className="border-l-2 border-grey-200 pl-6 hover:border-grey-900 transition-colors duration-300"
                  >
                    <div className="text-grey-900 text-xl font-medium mb-1 tracking-tight">
                      {item.title}
                    </div>
                    <div className="text-grey-700 leading-relaxed">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </SectionDiv>
    </section>
  );
}
