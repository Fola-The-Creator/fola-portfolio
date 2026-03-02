import { RevealOnScroll } from "../animations/RevealOnScroll";
import { StaggerChildren } from "../animations/StaggerChildren";
import { SectionDiv } from "../layouts";

export function TechStack() {
  const technologies = [
    { name: "Next.js", category: "Framework" },
    { name: "React.js", category: "Library" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "GSAP", category: "Animation" },
    { name: "JavaScript", category: "Language" },
    { name: "Git", category: "Version Control" },
    { name: "REST APIs", category: "Integration" },
  ];

  return (
    <section id="tech" className="py-32 border-t border-grey-50">
      <SectionDiv>
        <RevealOnScroll>
          <div className="text-grey-500 tracking-[0.3em] text-sm mb-12 uppercase">
            Tech Stack
          </div>

          <h2 className="text-4xl md:text-5xl text-grey-900 font-medium mb-16 leading-tight tracking-tight max-w-3xl">
            Technologies I work with
          </h2>
        </RevealOnScroll>

        <StaggerChildren
          stagger={0.05}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-grey-50"
        >
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group bg-grey-0 p-8 hover:bg-grey-900 transition-all duration-300"
            >
              <div className="text-grey-400 text-xs tracking-wider mb-3 uppercase group-hover:text-grey-100 transition-colors">
                {tech.category}
              </div>
              <div className="text-grey-900 text-2xl tracking-tight group-hover:text-grey-0 transition-colors">
                {tech.name}
              </div>
              <div className="mt-4 h-px w-0 bg-accent-500 group-hover:w-12 transition-all duration-500" />
            </div>
          ))}
        </StaggerChildren>
      </SectionDiv>
    </section>
  );
}
