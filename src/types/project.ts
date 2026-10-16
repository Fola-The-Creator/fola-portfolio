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
  /** Omitted when there is nothing public to link to — the UI greys the button out. */
  liveUrl?: string;
  githubUrl?: string;
  category: ProjectCategory;
  featured?: boolean;
  year?: string;
  /** Covered by an NDA: client stays unnamed and the preview is a stand-in image. */
  confidential?: boolean;
}
