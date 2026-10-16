import { Code2, Layout, Zap, Layers, Globe, Palette, Fingerprint } from "lucide-react";
import { RevealOnScroll } from "../animations/RevealOnScroll";
import { SectionDiv } from "../layouts";

const skills = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "I build the interface and the backend behind it, usually with Next.js, React and Supabase.",
  },
  {
    icon: Layers,
    title: "System & API Design",
    description:
      "Clean data models and APIs that stay easy to work with as a product grows.",
  },
  {
    icon: Layout,
    title: "Responsive Interfaces",
    description:
      "Layouts that look right on every screen, from a small phone to a wide monitor.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Fast pages and smooth interactions. I keep an eye on load times from day one.",
  },
  {
    icon: Globe,
    title: "Data & Integration",
    description:
      "Connecting databases and third-party services so data ends up where it should.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Research, wireframes and prototypes that make a product easy to use.",
  },
  {
    icon: Fingerprint,
    title: "Brand Identity",
    description:
      "Visual identities that stay consistent, from the logo to the last page of the site.",
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
