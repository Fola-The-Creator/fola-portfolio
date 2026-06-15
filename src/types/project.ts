export type ProjectCategory =
  | "Web Apps"
  | "Websites"
  | "Dashboards"
  | "Design"
  | "Mobile Apps"
  | "Open Source";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  category: ProjectCategory;
  featured?: boolean;
  year?: string;
}
