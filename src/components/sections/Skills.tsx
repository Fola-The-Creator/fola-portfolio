import { Code2, Layout, Zap, Layers, Globe, Palette, Fingerprint } from "lucide-react";
import { RevealOnScroll } from "../animations/RevealOnScroll";
import { SectionDiv } from "../layouts";

const skills = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "End-to-end applications: the interface people touch and the services and APIs behind it.",
  },
  {
    icon: Layers,
    title: "System & API Design",
    description:
      "Clean architectures and REST APIs that stay readable as the product grows.",
  },
  {
    icon: Layout,
    title: "Responsive Interfaces",
    description:
      "Interfaces that feel right on a small phone and a wide monitor, with accessibility built in rather than bolted on.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Fast first loads and smooth interactions — code splitting, sensible caching, and rendering that does not fight the browser.",
  },
  {
    icon: Globe,
    title: "Data & Integration",
    description:
      "Databases and third-party services wired up so data moves where it should, reliably.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Product experiences shaped through research, wireframes, and high-fidelity prototypes.",
  },
  {
    icon: Fingerprint,
    title: "Brand Identity",
    description:
      "Visual systems that say the same thing in every place the brand shows up.",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 border-t border-grey-200 bg-grey-0">
      <SectionDiv>
        <RevealOnScroll>
          <div className="text-grey-700 font-medium tracking-[0.3em] text-sm mb-12 uppercase">
            Capabilities
          </div>

          <h2 className="text-4xl md:text-5xl text-grey-900 mb-16 leading-tight tracking-tight max-w-3xl">
            What I do best
          </h2>
        </RevealOnScroll>

        <RevealOnScroll
          stagger={0.07}
          duration={0.55}
          distance={24}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-grey-50 rounded-2xl overflow-hidden"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className="h-full group bg-grey-0 p-8 hover:bg-grey-900 transition-colors duration-300"
              >
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
            );
          })}
        </RevealOnScroll>
      </SectionDiv>
    </section>
  );
}
