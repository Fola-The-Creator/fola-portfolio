import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { RevealOnScroll } from "../animations/RevealOnScroll";
import { SectionDiv } from "../layouts";
import { MagneticButton } from "../animations";
import Link from "next/link";
import { projects } from "@/data/projects";

const featured = projects.filter((p) => p.featured);

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
          {featured.map((project, index) => (
            <RevealOnScroll key={project.id} delay={index * 0.1}>
              <div className="group">
                <div className="relative aspect-4/3 mb-6 overflow-hidden bg-grey-900 rounded-2xl">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                <div>
                  <h3 className="text-2xl text-grey-900 font-medium mb-3 tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-grey-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-grey-900 border border-grey-200 px-3 py-1 rounded-full tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="group/link inline-flex items-center gap-2 text-grey-900 text-sm tracking-wide hover:text-grey-600 transition-colors"
                      >
                        <span>Live Demo</span>
                        <ExternalLink
                          size={14}
                          className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                        />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="group/link inline-flex items-center gap-2 text-grey-900 text-sm tracking-wide hover:text-grey-600 transition-colors"
                      >
                        <span>GitHub</span>
                        <Github
                          size={14}
                          className="group-hover/link:rotate-12 transition-transform"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <MagneticButton className="mx-auto">
          <Link
            href="/projects"
            className="group inline-flex items-center justify-center gap-3 border border-grey-200 text-grey-900 px-8 py-4 rounded-full hover:border-grey-900 hover:bg-grey-900 hover:text-grey-0 transition-all duration-300 w-full md:mt-24 mt-16"
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
