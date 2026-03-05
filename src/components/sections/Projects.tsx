import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { RevealOnScroll } from "../animations/RevealOnScroll";
import { SectionDiv } from "../layouts";
import { MagneticButton } from "../animations";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with cart management, payment integration, and real-time inventory tracking.",
    image:
      "https://images.unsplash.com/photo-1755018237309-bb3f5efeb2c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlJTIwYmxhY2slMjB3aGl0ZXxlbnwxfHx8fDE3NzIzNTI2MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "TypeScript", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "SaaS Dashboard",
    description:
      "Modern analytics dashboard with real-time data visualization, user management, and responsive design.",
    image:
      "https://images.unsplash.com/photo-1746897785251-48e52e82b269?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMHBhdHRlcm4lMjBtb25vY2hyb21lfGVufDF8fHx8MTc3MjI3NTI3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Tailwind", "Recharts"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio CMS",
    description:
      "Content management system for creative professionals with drag-and-drop builder and SEO optimization.",
    image:
      "https://images.unsplash.com/photo-1624792054848-98a03bbb8546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwd29ya3NwYWNlJTIwZ3JheXNjYWxlfGVufDF8fHx8MTc3MjM4MDg4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "MDX", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Design System",
    description:
      "Component library with comprehensive documentation, accessibility features, and theming support.",
    image:
      "https://images.unsplash.com/photo-1622271125051-73022c9deeaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZGVzaWduJTIwYmxhY2slMjB3aGl0ZSUyMHRleHR1cmV8ZW58MXx8fHwxNzcyMzgwODg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Storybook", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Real-Time Chat",
    description:
      "Messaging application with WebSocket integration, typing indicators, and file sharing capabilities.",
    image:
      "https://images.unsplash.com/photo-1703075514536-c4081f0ac959?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYXJjaGl0ZWN0dXJhbCUyMHN0cnVjdHVyZSUyMGNvbnRyYXN0fGVufDF8fHx8MTc3MjM4MDg4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Socket.io", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Finance Tracker",
    description:
      "Personal finance management app with budget tracking, expense categorization, and financial insights.",
    image:
      "https://images.unsplash.com/photo-1771582979625-593f6bd17e43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25vY2hyb21lJTIwZ3JpZCUyMHBhdHRlcm4lMjBkZXNpZ258ZW58MXx8fHwxNzcyMzgwODg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 border-t border-grey-200">
      <SectionDiv>
        <RevealOnScroll>
          <div className="text-grey-700 tracking-[0.3em] text-sm mb-12 uppercase">
            Selected Work
          </div>

          <h2 className="text-4xl md:text-5xl font-medium text-grey-900 mb-16 leading-tight tracking-tight max-w-3xl">
            Projects that showcase my craft
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
          {projects.map((project, index) => (
            <RevealOnScroll key={project.title} delay={index * 0.1}>
              <div className="group">
                {/* Image */}
                <div className="relative aspect-4/3 mb-6 overflow-hidden bg-grey-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl text-grey-900 font-medium mb-3 tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-grey-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-grey-900 border border-grey-200 px-3 py-1 tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="group/link inline-flex items-center gap-2 text-grey-900 text-sm tracking-wide hover:text-accent-500 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink
                        size={14}
                        className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                      />
                    </a>

                    <a
                      href={project.githubUrl}
                      className="group/link inline-flex items-center gap-2 text-grey-900 text-sm tracking-wide hover:text-accent-500 transition-colors"
                    >
                      <span>GitHub</span>
                      <Github
                        size={14}
                        className="group-hover/link:rotate-12 transition-transform"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <MagneticButton className="mx-auto">
          <Link
            href="/projects"
            className="group inline-flex items-center justify-center gap-3 border border-grey-200 text-grey-900 px-8 py-4 hover:border-accent-500 hover:text-accent-500 transition-all duration-300 w-full md:mt-24 mt-16"
          >
            <span className="tracking-wide">View All Projects</span>
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </MagneticButton>
      </SectionDiv>
    </section>
  );
}
