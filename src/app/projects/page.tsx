"use client";

import { useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { SectionDiv } from "@/components/layouts";

type ProjectCategory =
  | "All"
  | "Web Apps"
  | "Websites"
  | "Design"
  | "Mobile Apps"
  | "Open Source"
  | "Dashboards";

type Project = {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: Exclude<ProjectCategory, "All">;
  liveUrl: string;
  githubUrl: string;
  year: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with cart management, payment integration, and real-time inventory tracking.",
    longDescription:
      "Built with performance and conversion in mind. Handles thousands of SKUs with sub-second search, Stripe Checkout integration, and a custom CMS for merchants.",
    image:
      "https://images.unsplash.com/photo-1755018237309-bb3f5efeb2c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlJTIwYmxhY2slMjB3aGl0ZXxlbnwxfHx8fDE3NzIzNTI2MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    category: "Web Apps",
    liveUrl: "#",
    githubUrl: "#",
    year: "2024",
    featured: true,
  },
  {
    title: "SaaS Dashboard",
    description:
      "Modern analytics dashboard with real-time data visualization, user management, and responsive design.",
    longDescription:
      "Complex data rendered beautifully. WebSocket-powered live charts, role-based access control, and a white-label theming system for enterprise clients.",
    image:
      "https://images.unsplash.com/photo-1746897785251-48e52e82b269?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMHBhdHRlcm4lMjBtb25vY2hyb21lfGVufDF8fHx8MTc3MjI3NTI3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Tailwind", "Recharts", "Node.js"],
    category: "Dashboards",
    liveUrl: "#",
    githubUrl: "#",
    year: "2024",
    featured: true,
  },
  {
    title: "Portfolio CMS",
    description:
      "Content management system for creative professionals with drag-and-drop builder and SEO optimization.",
    longDescription:
      "Empowers non-technical creatives to own their presence. MDX-powered content, image optimization pipeline, and Lighthouse score consistently above 98.",
    image:
      "https://images.unsplash.com/photo-1624792054848-98a03bbb8546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwd29ya3NwYWNlJTIwZ3JheXNjYWxlfGVufDF8fHx8MTc3MjM4MDg4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "MDX", "Vercel", "Prisma"],
    category: "Websites",
    liveUrl: "#",
    githubUrl: "#",
    year: "2024",
  },
  {
    title: "Design System",
    description:
      "Component library with comprehensive documentation, accessibility features, and theming support.",
    longDescription:
      "50+ production-grade components, WCAG 2.1 AA compliant, with Storybook docs, visual regression tests, and a token-based theming architecture.",
    image:
      "https://images.unsplash.com/photo-1622271125051-73022c9deeaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZGVzaWduJTIwYmxhY2slMjB3aGl0ZSUyMHRleHR1cmV8ZW58MXx8fHwxNzcyMzgwODg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Storybook", "TypeScript"],
    category: "Design",
    liveUrl: "#",
    githubUrl: "#",
    year: "2023",
    featured: true,
  },
  {
    title: "Real-Time Chat",
    description:
      "Messaging application with WebSocket integration, typing indicators, and file sharing capabilities.",
    longDescription:
      "Sub-100ms latency messaging, end-to-end encrypted rooms, S3-backed file uploads, and presence indicators across thousands of concurrent users.",
    image:
      "https://images.unsplash.com/photo-1703075514536-c4081f0ac959?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYXJjaGl0ZWN0dXJhbCUyMHN0cnVjdHVyZSUyMGNvbnRyYXN0fGVufDF8fHx8MTc3MjM4MDg4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Socket.io", "Node.js", "Redis"],
    category: "Web Apps",
    liveUrl: "#",
    githubUrl: "#",
    year: "2023",
  },
  {
    title: "Finance Tracker",
    description:
      "Personal finance management app with budget tracking, expense categorization, and financial insights.",
    longDescription:
      "Connects to 10,000+ banks via Plaid, auto-categorizes transactions with ML, and generates beautiful monthly reports you actually want to read.",
    image:
      "https://images.unsplash.com/photo-1771582979625-593f6bd17e43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25vY2hyb21lJTIwZ3JpZCUyMHBhdHRlcm4lMjBkZXNpZ258ZW58MXx8fHwxNzcyMzgwODg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Plaid"],
    category: "Mobile Apps",
    liveUrl: "#",
    githubUrl: "#",
    year: "2023",
  },
  {
    title: "UI Component Kit",
    description:
      "Open-source collection of animated, accessible React components built for modern web apps.",
    longDescription:
      "Used by 800+ developers. Zero-dependency animations, full keyboard navigation, dark mode out of the box, and comprehensive TypeScript types.",
    image:
      "https://images.unsplash.com/photo-1622271125051-73022c9deeaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZGVzaWduJTIwYmxhY2slMjB3aGl0ZSUyMHRleHR1cmV8ZW58MXx8fHwxNzcyMzgwODg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "TypeScript", "GSAP", "npm"],
    category: "Open Source",
    liveUrl: "#",
    githubUrl: "#",
    year: "2023",
  },
  {
    title: "Agency Website",
    description:
      "High-impact marketing website for a creative agency, with GSAP-powered scroll storytelling.",
    longDescription:
      "Full scroll-jacking narrative experience, WebGL background effects, CMS-driven case studies, and a contact flow that converts at 14%.",
    image:
      "https://images.unsplash.com/photo-1624792054848-98a03bbb8546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwd29ya3NwYWNlJTIwZ3JheXNjYWxlfGVufDF8fHx8MTc3MjM4MDg4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "GSAP", "Sanity", "Framer Motion"],
    category: "Websites",
    liveUrl: "#",
    githubUrl: "#",
    year: "2022",
  },
  {
    title: "Inventory Manager",
    description:
      "Warehouse ops dashboard with barcode scanning, automated reorder triggers, and supplier integrations.",
    longDescription:
      "Replaced manual spreadsheets for a 40-person operations team. Reduced stockout incidents by 67% in the first quarter post-launch.",
    image:
      "https://images.unsplash.com/photo-1746897785251-48e52e82b269?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMHBhdHRlcm4lMjBtb25vY2hyb21lfGVufDF8fHx8MTc3MjI3NTI3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Node.js", "MongoDB", "REST APIs"],
    category: "Dashboards",
    liveUrl: "#",
    githubUrl: "#",
    year: "2022",
  },
];

const categories: ProjectCategory[] = [
  "All",
  "Web Apps",
  "Websites",
  "Dashboards",
  "Design",
  "Mobile Apps",
  "Open Source",
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section id="projects" className="py-32 border-b border-grey-200">
        <SectionDiv>
          <RevealOnScroll>
            <div className="text-grey-700 tracking-[0.3em] text-sm mb-12 uppercase">
              Selected Work
            </div>
            <h1 className="text-5xl md:text-7xl text-grey-900 font-medium leading-tight tracking-tight max-w-4xl mb-8">
              Projects that
              <br />
              <span className="text-grey-400">showcase my craft</span>
            </h1>
            <p className="text-grey-700 text-lg max-w-xl leading-relaxed">
              A curated collection of work spanning product design, full-stack
              engineering, and open source. Each project is a deliberate
              exercise in quality.
            </p>
          </RevealOnScroll>

          {/* Stats row */}
          <RevealOnScroll
            stagger={0.1}
            duration={0.3}
            className="grid grid-cols-3 gap-px bg-grey-200 mt-20 max-w-xl"
          >
            {[
              { value: `${projects.length}+`, label: "Projects" },
              { value: "3+", label: "Years" },
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

      {/* ── Featured ─────────────────────────────────────────── */}
      <section className="py-24 border-b border-grey-200">
        <SectionDiv>
          <RevealOnScroll>
            <div className="text-grey-700 tracking-[0.3em] text-sm mb-12 uppercase">
              Featured
            </div>
          </RevealOnScroll>

          <div className="space-y-px bg-grey-200">
            {featuredProjects.map((project, index) => (
              <RevealOnScroll key={project.title} delay={index * 0.1}>
                <div className="group bg-grey-0 grid grid-cols-1 lg:grid-cols-2 hover:bg-grey-900 transition-all duration-500">
                  {/* Image */}
                  <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-10 lg:p-14 flex flex-col justify-between min-h-[320px]">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs tracking-widest uppercase text-grey-700 group-hover:text-grey-400 transition-colors">
                          {project.category}
                        </span>
                        <span className="text-xs tracking-widest text-grey-400 group-hover:text-grey-500 transition-colors">
                          {project.year}
                        </span>
                      </div>

                      <h3 className="text-3xl font-medium text-grey-900 tracking-tight mb-4 group-hover:text-grey-0 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-grey-700 leading-relaxed mb-2 group-hover:text-grey-300 transition-colors">
                        {project.longDescription}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-grey-900 border border-grey-200 group-hover:border-grey-700 group-hover:text-grey-300 px-3 py-1 tracking-wider transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-6">
                        <a
                          href={project.liveUrl}
                          className="inline-flex items-center gap-2 text-grey-900 group-hover:text-grey-0 text-sm tracking-wide hover:opacity-70 transition-all"
                        >
                          <span>Live Demo</span>
                          <ExternalLink size={13} />
                        </a>
                        <a
                          href={project.githubUrl}
                          className="inline-flex items-center gap-2 text-grey-900 group-hover:text-grey-0 text-sm tracking-wide hover:opacity-70 transition-all"
                        >
                          <span>GitHub</span>
                          <Github size={13} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </SectionDiv>
      </section>

      {/* ── All Projects with Filter ──────────────────────────── */}
      <section className="py-24">
        <SectionDiv>
          <RevealOnScroll>
            <div className="text-grey-700 tracking-[0.3em] text-sm mb-12 uppercase">
              All Projects
            </div>

            <h2 className="text-4xl md:text-5xl text-grey-900 font-medium mb-10 leading-tight tracking-tight max-w-3xl">
              Everything I&apos;ve built
            </h2>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-14">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs tracking-wider uppercase transition-all duration-200 border ${
                    activeCategory === cat
                      ? "bg-grey-900 text-grey-0 border-grey-900"
                      : "bg-grey-0 text-grey-700 border-grey-200 hover:border-grey-900 hover:text-grey-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </RevealOnScroll>

          {/* Grid */}
          <RevealOnScroll
            key={activeCategory}
            stagger={0.07}
            duration={0.25}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-grey-200"
          >
            {filtered.map((project) => {
              return (
                <div key={project.title} className="group bg-grey-0">
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden bg-grey-900">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/15 transition-colors duration-400" />

                    {/* Hover overlay CTA */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-3">
                        <a
                          href={project.liveUrl}
                          className="bg-grey-0 text-grey-900 p-3 hover:bg-grey-900 hover:text-grey-0 transition-colors duration-200"
                          aria-label="Live Demo"
                        >
                          <ArrowUpRight size={18} />
                        </a>
                        <a
                          href={project.githubUrl}
                          className="bg-grey-0 text-grey-900 p-3 hover:bg-grey-900 hover:text-grey-0 transition-colors duration-200"
                          aria-label="GitHub"
                        >
                          <Github size={18} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-grey-700 text-xs tracking-widest uppercase">
                        {project.category}
                      </span>
                      <span className="text-grey-400 text-xs tracking-wider">
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
                          className="text-xs text-grey-900 border border-grey-200 px-3 py-1 tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="h-px w-0 bg-accent-500 group-hover:w-12 transition-all duration-500" />
                  </div>
                </div>
              );
            })}
          </RevealOnScroll>
        </SectionDiv>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
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
                <a
                  href="mailto:hello@example.com"
                  className="group inline-flex items-center justify-center gap-3 bg-grey-900 text-grey-0 px-8 py-4 hover:bg-accent-500 transition-all duration-300"
                >
                  <span className="tracking-wide text-sm">Get In Touch</span>
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>
                <a
                  href="/resume.pdf"
                  className="group inline-flex items-center justify-center gap-3 border border-grey-200 text-grey-900 px-8 py-4 hover:border-grey-900 transition-all duration-300"
                >
                  <span className="tracking-wide text-sm">View Resume</span>
                  <ExternalLink
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </SectionDiv>
      </section>
    </main>
  );
}
