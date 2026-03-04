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

  // const techStack = [
  //   "Next.js",
  //   "React.js",
  //   "TypeScript",
  //   "Figma",
  //   "Tailwind CSS",
  //   "GSAP",
  //   "JavaScript",
  //   "Git",
  //   "REST APIs",
  //   "Redux Toolkit",
  // ];

  return (
    <section id="about" className="py-32 border-t border-grey-200">
      <SectionDiv>
        <RevealOnScroll>
          <div className="text-grey-700 tracking-[0.3em] text-sm mb-12 uppercase">
            About Me
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Bio */}
          <RevealOnScroll delay={0.2}>
            <div>
              <h2 className="text-4xl md:text-5xl text-grey-900 font-medium mb-8 leading-tight tracking-tight">
                Building the web,
                <br />
                <span className="text-grey-600">one component at a time</span>
              </h2>

              <div className="space-y-4 text-grey-700 leading-relaxed">
                <p>
                  I&apos;m a frontend developer passionate about creating
                  exceptional digital experiences through clean code and
                  thoughtful design. With a focus on performance optimization
                  and scalable architecture, I transform complex problems into
                  elegant solutions.
                </p>
                <p>
                  My expertise lies in modern JavaScript frameworks,
                  particularly React and Next.js, combined with a strong
                  understanding of TypeScript and component-driven development.
                  I believe in writing maintainable, type-safe code that stands
                  the test of time.
                </p>
              </div>

              {/* <div className="mt-8 flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 border border-grey-100 text-grey-900 text-sm tracking-wide hover:border-accent-500 hover:text-accent-500 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div> */}

              <MagneticButton className="mt-8">
                <button className="group inline-flex items-center gap-3 border border-grey-200 text-grey-900 px-8 py-4 hover:border-accent-500 hover:text-accent-500 transition-all duration-300">
                  <Download size={18} />
                  <span className="tracking-wide">Download Resume</span>
                </button>
              </MagneticButton>
            </div>
          </RevealOnScroll>

          {/* Right Column - Experience Timeline */}
          <RevealOnScroll delay={0.3}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl text-grey-900 font-medium mb-8 tracking-tight">
                  Experience
                </h3>

                <div className="space-y-8">
                  {experience.map((item, index) => (
                    <div
                      key={index}
                      className="border-l-2 border-grey-200 pl-6 hover:border-accent-500 transition-colors duration-300"
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
