import { ExternalLink, Github, Lock } from "lucide-react";
import type { Project } from "@/types/project";

interface ProjectLinksProps {
  project: Project;
  iconSize?: number;
  /** Wrapper classes, so each card keeps its own spacing. */
  className?: string;
  /** Small icon nudge on hover, used on the home page cards. */
  animateIcons?: boolean;
}

export function ProjectLinks({
  project,
  iconSize = 13,
  className = "flex gap-6",
  animateIcons = false,
}: ProjectLinksProps) {
  // `relative z-20` keeps these clickable above the full-card link.
  const linkClass = `${animateIcons ? "group/link " : ""}relative z-20 inline-flex items-center gap-2 text-grey-900 text-sm tracking-wide hover:text-grey-600 transition-colors`;

  return (
    <div className={className}>
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          <span>Live Demo</span>
          <ExternalLink
            size={iconSize}
            className={
              animateIcons
                ? "group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                : undefined
            }
          />
        </a>
      ) : (
        <span
          aria-disabled="true"
          className="relative z-20 inline-flex items-center gap-2 text-grey-400 text-sm tracking-wide cursor-not-allowed select-none"
        >
          <span>Live Demo</span>
          <Lock size={iconSize} />
        </span>
      )}

      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          <span>GitHub</span>
          <Github
            size={iconSize}
            className={animateIcons ? "group-hover/link:rotate-12 transition-transform" : undefined}
          />
        </a>
      )}
    </div>
  );
}
