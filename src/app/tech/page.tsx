"use client";

import { useState } from "react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { SectionDiv } from "@/components/layouts";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiGit,
  SiFigma,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiSass,
  SiFramer,
  SiReactquery,
  SiGithub,
  SiDocker,
  SiJest,
  SiCypress,
  SiGraphql,
  SiPrisma,
  SiFirebase,
  SiSupabase,
  SiVercel,
  SiNetlify,
  SiGsap,
  // SiZustand,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { IconType } from "react-icons";
import { DiIllustrator, DiPhotoshop } from "react-icons/di";

type Category =
  | "All"
  | "Frontend"
  | "Backend"
  | "Languages"
  | "Styling"
  | "State Management"
  | "Tools"
  | "Animation"
  | "Testing"
  | "DevOps"
  | "Design";

type Technology = {
  icon: IconType;
  name: string;
  category: Exclude<Category, "All">;
};

const technologies: Technology[] = [
  { icon: SiNextdotjs, name: "Next.js", category: "Frontend" },
  { icon: SiReact, name: "React", category: "Frontend" },
  { icon: SiFramer, name: "Framer Motion", category: "Animation" },
  { icon: SiGsap, name: "GSAP", category: "Animation" },
  { icon: SiTypescript, name: "TypeScript", category: "Languages" },
  { icon: SiJavascript, name: "JavaScript", category: "Languages" },
  { icon: SiNodedotjs, name: "Node.js", category: "Backend" },
  { icon: SiExpress, name: "Express", category: "Backend" },
  { icon: SiPostgresql, name: "PostgreSQL", category: "Backend" },
  { icon: SiMongodb, name: "MongoDB", category: "Backend" },
  { icon: SiPrisma, name: "Prisma", category: "Backend" },
  { icon: SiFirebase, name: "Firebase", category: "Backend" },
  { icon: SiSupabase, name: "Supabase", category: "Backend" },
  { icon: SiGraphql, name: "GraphQL", category: "Backend" },
  { icon: TbApi, name: "REST APIs", category: "Backend" },
  { icon: SiTailwindcss, name: "Tailwind CSS", category: "Styling" },
  { icon: SiSass, name: "Sass", category: "Styling" },
  { icon: SiRedux, name: "Redux Toolkit", category: "State Management" },
  // { icon: SiZustand, name: "Zustand", category: "State Management" },
  { icon: SiReactquery, name: "React Query", category: "State Management" },
  { icon: SiGit, name: "Git", category: "Tools" },
  { icon: SiGithub, name: "GitHub", category: "Tools" },
  { icon: SiDocker, name: "Docker", category: "DevOps" },
  { icon: SiVercel, name: "Vercel", category: "DevOps" },
  { icon: SiNetlify, name: "Netlify", category: "DevOps" },
  { icon: SiJest, name: "Jest", category: "Testing" },
  { icon: SiCypress, name: "Cypress", category: "Testing" },
  { icon: SiFigma, name: "Figma", category: "Design" },
  { icon: DiIllustrator, name: "Adobe Illustrator", category: "Design" },
  { icon: DiPhotoshop, name: "Adobe Photoshop", category: "Design" },
];

const categories: Category[] = [
  "All",
  "Frontend",
  "Backend",
  "Languages",
  "Styling",
  "State Management",
  "Tools",
  "Animation",
  "Testing",
  "DevOps",
  "Design",
];

export default function TechPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? technologies
      : technologies.filter((t) => t.category === activeCategory);

  return (
    <section id="tech" className="min-h-[85vh] py-32 border-t border-grey-200">
      <SectionDiv>
        <RevealOnScroll>
          <div className="text-grey-700 tracking-[0.3em] text-sm mb-12 uppercase">
            Tech Stack
          </div>

          <h2 className="text-4xl md:text-5xl text-grey-900 font-medium mb-10 leading-tight tracking-tight max-w-3xl">
            Technologies I work with
          </h2>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs tracking-wider uppercase transition-all duration-200 border ${
                  activeCategory === cat
                    ? "bg-accent-500 text-white border-accent-500"
                    : "bg-grey-0 text-grey-700 border-grey-200 hover:border-accent-500 hover:text-accent-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll
          key={activeCategory}
          stagger={0.07}
          duration={0.25}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-grey-50"
        >
          {filtered.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="group bg-grey-0 p-8 hover:bg-grey-900 transition-all duration-300"
              >
                <div className="text-grey-700 text-xs tracking-wider mb-3 uppercase group-hover:text-grey-100 transition-colors">
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
        </RevealOnScroll>
      </SectionDiv>
    </section>
  );
}
