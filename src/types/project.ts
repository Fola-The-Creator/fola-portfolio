export type ProjectCategory =
  | "Websites"
  | "E-Commerce"
  | "Dashboards"
  | "Web Apps";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  imageUrl: string;
  /** When present, the whole card opens this URL in a new tab. */
  liveUrl?: string;
  githubUrl?: string;
  category: ProjectCategory;
  featured?: boolean;
  year?: string;
  /** Shows the "Private" badge and the generic preview image. */
  isPrivate?: boolean;
}
