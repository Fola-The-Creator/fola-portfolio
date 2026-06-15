"use client";

import { useState } from "react";
import { ExternalLink, Github, ArrowUpRight, Download } from "lucide-react";
import Image from "next/image";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { SectionDiv } from "@/components/layouts";
import { MagneticButton } from "@/components/animations";
import { CategoryFilter } from "@/components/ui";
import Link from "next/link";
import { useProjects } from "@/hooks/useProjects";
import type { ProjectCategory } from "@/types/project";

type FilterCategory = "All" | ProjectCategory;

const categories = [
  "All",
  "Web Apps",
  "Websites",
  "Dashboards",
  "Design",
  "Mobile Apps",
  "Open Source",
] as const satisfies readonly FilterCategory[];

export default function ProjectsPage() {
  const projects = useProjects();
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <main>
      {/* Hero */}
      <section
        id="projects"
        className="border-b border-grey-200 max-md:pt-36 max-md:pb-24 pt-48 pb-32"
      >
        <SectionDiv>
          <RevealOnScroll>
            <div className="text-grey-700 tracking-[0.3em] text-sm mb-12 uppercase">
              Selected Work
            </div>
            <h1 className="text-5xl md:text-7xl text-grey-900 font-medium leading-tight tracking-tight max-w-4xl mb-8">
              Projects that
              <br />
              <span className="text-grey-500">showcase my craft</span>
            </h1>
            <p className="text-grey-700 md:text-lg max-w-xl leading-relaxed">
              A curated collection of work spanning product design, full-stack
              engineering, and open source. Each project is a deliberate
              exercise in quality.
            </p>
          </RevealOnScroll>

          <RevealOnScroll
            stagger={0.1}
            duration={0.3}
            className="grid grid-cols-3 gap-px bg-grey-200 mt-20 max-w-xl rounded-2xl overflow-hidden"
          >
            {[
              { value: `${projects.length}+`, label: "Projects" },
              { value: "5+", label: "Years" },
              { value: "100%", label: "Shipped" },
            ].map((stat) => (
              <div key={stat.label} className="bg-grey-0 py-8 px-6">
                <div className="text-3xl font-medium text-grey-900 tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-grey-700 tracking-widest uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </RevealOnScroll>
        </SectionDiv>
      </section>

      {/* Featured */}
      <section className="py-24 border-b border-grey-200 bg-grey-0">
        <SectionDiv>
          <RevealOnScroll>
            <div className="text-grey-700 tracking-[0.3em] text-sm mb-12 uppercase">
              Featured
            </div>
          </RevealOnScroll>

          <div className="space-y-px bg-grey-200 rounded-2xl overflow-hidden">
            {featuredProjects.map((project, index) => (
              <RevealOnScroll key={project.id} delay={index * 0.1}>
                <div className="group bg-grey-0 grid grid-cols-1 lg:grid-cols-2 transition-all duration-500">
                  <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                  </div>

                  <div className="p-10 lg:p-14 flex flex-col justify-between min-h-[320px]">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs tracking-widest uppercase text-grey-700">
                          {project.category}
                        </span>
                        <span className="text-xs tracking-widest text-grey-700">
                          {project.year}
                        </span>
                      </div>

                      <h3 className="text-3xl font-medium text-grey-900 tracking-tight mb-4">
                        {project.title}
                      </h3>

                      <p className="text-grey-700 leading-relaxed mb-2">
                        {project.longDescription}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-grey-900 border border-grey-200 px-3 py-1 rounded-full tracking-wider"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-6">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            className="inline-flex items-center gap-2 text-grey-900 text-sm tracking-wide hover:text-grey-600 transition-all"
                          >
                            <span>Live Demo</span>
                            <ExternalLink size={13} />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            className="inline-flex items-center gap-2 text-grey-900 text-sm tracking-wide hover:text-grey-600 transition-all"
                          >
                            <span>GitHub</span>
                            <Github size={13} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </SectionDiv>
      </section>

      {/* All Projects with Filter */}
      <section className="py-24 bg-grey-0">
        <SectionDiv>
          <RevealOnScroll className="relative z-10">
            <div className="text-grey-700 tracking-[0.3em] text-sm mb-12 uppercase">
              All Projects
            </div>

            <h2 className="text-4xl md:text-5xl text-grey-900 font-medium mb-10 leading-tight tracking-tight max-w-3xl">
              Everything I&apos;ve built
            </h2>

            <div className="mb-14">
              <CategoryFilter
                categories={categories}
                active={activeCategory}
                onChange={setActiveCategory}
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll
            key={activeCategory}
            stagger={0.07}
            duration={0.25}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-grey-200 rounded-2xl overflow-hidden"
          >
            {filtered.map((project) => (
              <div key={project.id} className="group bg-grey-0">
                <div className="relative aspect-video overflow-hidden bg-grey-900">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/15 transition-colors duration-400" />
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-grey-700 text-xs tracking-widest uppercase">
                      {project.category}
                    </span>
                    <span className="text-grey-700 text-xs tracking-wider">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-xl text-grey-900 font-medium mb-3 tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-grey-700 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-grey-900 border border-grey-200 px-3 py-1 rounded-full tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="inline-flex items-center gap-2 text-grey-900 text-sm tracking-wide hover:text-grey-600 transition-all"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={13} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="inline-flex items-center gap-2 text-grey-900 text-sm tracking-wide hover:text-grey-600 transition-all"
                      >
                        <span>GitHub</span>
                        <Github size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </RevealOnScroll>
        </SectionDiv>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-grey-200">
        <SectionDiv>
          <RevealOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-grey-700 tracking-[0.3em] text-sm mb-8 uppercase">
                  What&apos;s Next
                </div>
                <h2 className="text-4xl md:text-5xl text-grey-900 font-medium leading-tight tracking-tight mb-6">
                  Have a project
                  <br />
                  in mind?
                </h2>
                <p className="text-grey-700 leading-relaxed max-w-md">
                  I&apos;m always open to discussing new opportunities,
                  interesting ideas, or just connecting with fellow builders.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <MagneticButton>
                  <Link
                    href="/#contact"
                    className="group inline-flex items-center justify-center gap-3 bg-grey-900 text-grey-0 px-8 py-4 rounded-full hover:bg-grey-700 transition-all duration-300 border border-transparent w-full"
                  >
                    <span className="tracking-wide">Get In Touch</span>
                    <ArrowUpRight
                      size={18}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </Link>
                </MagneticButton>

                <MagneticButton>
                  <button className="group inline-flex items-center justify-center gap-3 border border-grey-200 text-grey-900 px-8 py-4 rounded-full hover:border-grey-900 hover:bg-grey-900 hover:text-grey-0 transition-all duration-300 w-full">
                    <Download size={18} />
                    <span className="tracking-wide">Download Resume</span>
                  </button>
                </MagneticButton>
              </div>
            </div>
          </RevealOnScroll>
        </SectionDiv>
      </section>
    </main>
  );
}
