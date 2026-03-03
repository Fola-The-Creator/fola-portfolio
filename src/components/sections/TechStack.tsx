import { RevealOnScroll } from "../animations/RevealOnScroll";
import { SectionDiv } from "../layouts";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiGreensock,
  SiJavascript,
  SiGit,
  SiFigma,
  SiRedux,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { IconType } from "react-icons";
import Link from "next/link";

type Technology = {
  icon: IconType;
  name: string;
  category: string;
};

const technologies: Technology[] = [
  { icon: SiNextdotjs, name: "Next.js", category: "Framework" },
  { icon: SiReact, name: "React.js", category: "Library" },
  { icon: SiTypescript, name: "TypeScript", category: "Language" },
  { icon: SiTailwindcss, name: "Tailwind CSS", category: "Styling" },
  { icon: SiGreensock, name: "GSAP", category: "Animation" },
  { icon: SiJavascript, name: "JavaScript", category: "Language" },
  { icon: SiGit, name: "Git", category: "Version Control" },
  { icon: TbApi, name: "REST APIs", category: "Integration" },
  { icon: SiFigma, name: "Figma", category: "Design" },
  { icon: SiRedux, name: "Redux Toolkit", category: "State Management" },
];

export function TechStack() {
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

        <RevealOnScroll
          stagger={0.1}
          duration={0.4}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-grey-50"
        >
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="group bg-grey-0 p-8 hover:bg-grey-900 transition-all duration-300"
              >
                <div className="text-grey-400 text-xs tracking-wider mb-3 uppercase group-hover:text-grey-100 transition-colors">
                  {tech.category}
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    className="text-grey-900 group-hover:text-grey-0 transition-colors shrink-0"
                    size={24}
                  />
                  <div className="text-grey-900 text-2xl tracking-tight group-hover:text-grey-0 transition-colors">
                    {tech.name}
                  </div>
                </div>
                <div className="mt-4 h-px w-0 bg-accent-500 group-hover:w-12 transition-all duration-500" />
              </div>
            );
          })}
          <Link
            href="/tech"
            className="group bg-grey-0 p-8 hover:bg-grey-900 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="text-grey-900 text-2xl tracking-tight group-hover:text-grey-0 transition-colors">
                View More
              </div>
            </div>
            <div className="mt-4 h-px w-0 bg-accent-500 group-hover:w-12 transition-all duration-500" />
          </Link>
        </RevealOnScroll>
      </SectionDiv>
    </section>
  );
}
