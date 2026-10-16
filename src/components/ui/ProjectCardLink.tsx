import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/project";

/**
 * Stretches over its nearest `relative` parent so the whole card opens the
 * live site. Links inside the card sit above it with `relative z-20`.
 */
export function ProjectCardLink({ project }: { project: Project }) {
  if (!project.liveUrl) return null;

  return (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${project.title}`}
      className="absolute inset-0 z-10 rounded-[inherit] focus-visible:[outline-offset:-3px]"
    />
  );
}

/** Small arrow that appears on the preview image when the card is hovered. */
export function ProjectVisitChip({ project }: { project: Project }) {
  if (!project.liveUrl) return null;

  return (
    <span
      aria-hidden
      className="pointer-events-none absolute top-4 right-4 z-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg shadow-black/10 opacity-0 translate-y-1 scale-90 transition-[opacity,transform] duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100"
    >
      <ArrowUpRight size={18} />
    </span>
  );
}
