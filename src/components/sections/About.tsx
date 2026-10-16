import { Download } from "lucide-react";
import { RevealOnScroll } from "../animations/RevealOnScroll";
import { MagneticButton } from "../animations/MagneticButton";
import { SectionDiv } from "../layouts";
import { CV_URL } from "@/data/site";

const disciplines = [
  {
    title: "Web & Mobile Development",
    description:
      "Websites and apps built with Next.js, React and TypeScript, from the first screen to launch day.",
  },
  {
    title: "UI/UX Design",
    description:
      "Wireframes, prototypes and polished interfaces in Figma, ready to build.",
  },
  {
    title: "Brand and Visual Identity",
    description:
      "Logos, colour palettes and type systems that make a brand easy to recognise.",
  },
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
          <RevealOnScroll delay={0.1}>
            <div>
              <h2 className="text-4xl md:text-5xl text-grey-900 font-medium mb-8 leading-tight tracking-tight">
                Designer by eye,
                <br />
                <span className="text-grey-500">developer by craft</span>
              </h2>

              <div className="space-y-4 text-grey-700 leading-relaxed">
                <p>
                  I&apos;m <strong>Fola</strong>, a full-stack developer and
                  designer based in Lagos. I design products and I build them,
                  and I enjoy both equally.
                </p>
                <p>
                  Most of my work is websites, online stores and dashboards that
                  need to look premium and load fast. I work mostly in Next.js,
                  React and TypeScript, and I design everything in Figma first.
                </p>
                <p>
                  I sweat the small stuff: spacing, type, how a button feels
                  when you press it. If something feels off, I keep at it until
                  it doesn&apos;t.
                </p>
              </div>

              <MagneticButton className="mt-8">
                <a
                  href={CV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 border border-grey-200 text-grey-900 px-8 py-4 rounded-full hover:border-grey-900 hover:bg-grey-900 hover:text-grey-0 transition-colors duration-300"
                >
                  <Download size={18} />
                  <span className="tracking-wide">Download CV</span>
                </a>
              </MagneticButton>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15} direction="left">
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
