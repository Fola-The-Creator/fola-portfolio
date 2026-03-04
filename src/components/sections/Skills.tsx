import { Code2, Layout, Zap, Layers, Globe } from "lucide-react";
import { RevealOnScroll } from "../animations/RevealOnScroll";
import { SectionDiv } from "../layouts";

const skills = [
  {
    icon: Code2,
    title: "Frontend Architecture",
    description:
      "Building scalable component structures and modular code patterns for maintainable applications.",
  },
  {
    icon: Layout,
    title: "Responsive Design",
    description:
      "Creating fluid, adaptive layouts that provide exceptional experiences across all devices.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Implementing best practices for fast load times, efficient rendering, and optimal UX.",
  },
  {
    icon: Layers,
    title: "Component Design Systems",
    description:
      "Developing comprehensive design systems with reusable, accessible components.",
  },
  {
    icon: Globe,
    title: "API Integration",
    description:
      "Seamless integration with REST and GraphQL APIs, managing state and data flow.",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 border-t border-grey-200">
      <SectionDiv>
        <RevealOnScroll>
          <div className="text-grey-700 font-medium tracking-[0.3em] text-sm mb-12 uppercase">
            Core Competencies
          </div>

          <h2 className="text-4xl md:text-5xl text-grey-900 mb-16 leading-tight tracking-tight max-w-3xl">
            What I bring to the table
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-grey-50">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <RevealOnScroll key={skill.title} delay={index * 0.1}>
                <div className="h-full group bg-grey-0 p-8 hover:bg-grey-900 transition-all duration-300 ">
                  <Icon
                    size={32}
                    className="text-grey-900 mb-6 group-hover:text-grey-0 transition-colors"
                  />
                  <h3 className="text-xl font-medium text-grey-900 mb-3 tracking-tight group-hover:text-grey-0 transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-grey-700 leading-relaxed group-hover:text-grey-100 transition-colors">
                    {skill.description}
                  </p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </SectionDiv>
    </section>
  );
}
