import { projects } from "@/data/projects";
import { Project } from "@/types/project";

// TODO: Replace with API fetch when endpoint is ready
export function useProjects(): Project[] {
  return projects;
}
