import { Project } from "@/types/project";
import { CONFIDENTIAL_IMAGE_URL, GITHUB_PROFILE_URL } from "@/data/site";

export const projects: Project[] = [
  {
    id: "ezibond-africa-website",
    title: "EziBond Africa",
    description:
      "A multi-page website for EziBond Africa, built so a first-time visitor understands what they do before they finish scrolling.",
    longDescription:
      "A full multi-page site built in Next.js and TypeScript. Fast page loads, a clear content hierarchy, and layouts that hold their shape from a small phone to a wide desktop. The structure leaves the team room to keep adding pages without the design falling apart.",
    imageUrl:
      "https://res.cloudinary.com/diqcsujvk/image/upload/v1792115586/IMG_0019_lpjrq9.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Websites",
    liveUrl: "https://www.ezibondafrica.org/",
    githubUrl: GITHUB_PROFILE_URL,
    featured: true,
  },
  {
    id: "mauada-storefront",
    title: "Mauada Storefront",
    description:
      "An e-commerce site for Mauada, a luxury fashion label — product pages that give the clothes room to breathe.",
    longDescription:
      "A storefront for a luxury label, built in Next.js and TypeScript. Large imagery, restrained typography, and a browsing flow that stays out of the way — from the first look at a collection through to checkout.",
    imageUrl:
      "https://res.cloudinary.com/diqcsujvk/image/upload/v1792115930/IMG_0024_qofwyy.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "E-Commerce"],
    category: "E-Commerce",
    liveUrl: "https://mauada-web.vercel.app/",
    githubUrl: GITHUB_PROFILE_URL,
    featured: true,
  },
  {
    id: "saas-payroll-platform",
    title: "SaaS Payroll Platform",
    description:
      "Led frontend development on a payroll platform, turning dense, rules-heavy workflows into screens an admin can use without training.",
    longDescription:
      "I led the frontend build of a payroll SaaS product: component architecture, application state, and the interface patterns the rest of the product was built on. The client and product are covered by an NDA, so the names stay out of it — the work itself was the same as any other: ship something fast, clear, and maintainable.",
    imageUrl: CONFIDENTIAL_IMAGE_URL,
    tags: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
    category: "Web Apps",
    githubUrl: GITHUB_PROFILE_URL,
    featured: true,
    confidential: true,
  },
  {
    id: "seelinder-website",
    title: "Seelinder",
    description:
      "A multi-page website for Seelinder, built around clarity: simple navigation, quick pages, and nothing in the way.",
    longDescription:
      "Built in Next.js and TypeScript, with a component structure that keeps new pages cheap to add. Responsive from the first breakpoint, with care spent on the small things — spacing, type scale, and how one section hands off to the next.",
    imageUrl:
      "https://res.cloudinary.com/diqcsujvk/image/upload/v1792115588/IMG_0023_daxxiw.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Websites",
    liveUrl: "https://www.seelinder.com/",
    githubUrl: GITHUB_PROFILE_URL,
  },
  {
    id: "viorge-denim-store",
    title: "Viorge D' Denim",
    description:
      "An e-commerce site for Viorge D' Denim, from the first product view through to checkout.",
    longDescription:
      "A denim storefront built in Next.js and TypeScript. Clean product pages, a browsing flow that does not get in the way, and a responsive layout that holds up on every screen size.",
    imageUrl:
      "https://res.cloudinary.com/diqcsujvk/image/upload/v1792115929/IMG_0028_mtbbtf.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "E-Commerce"],
    category: "E-Commerce",
    liveUrl: "https://www.viorgeddenim.com/",
    githubUrl: GITHUB_PROFILE_URL,
  },
  {
    id: "rovabox-website",
    title: "Rovabox",
    description:
      "A multi-page website for Rovabox, built to explain the product quickly and get people to the next step.",
    longDescription:
      "Next.js and TypeScript, with a layout built around one job: move a visitor from landing to action without friction. Fast, responsive, and simple for the team to maintain.",
    imageUrl:
      "https://res.cloudinary.com/diqcsujvk/image/upload/v1792115930/IMG_0026_mlsizl.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Websites",
    liveUrl: "https://www.rovabox.com/",
    githubUrl: GITHUB_PROFILE_URL,
  },
  {
    id: "tways-website",
    title: "Tways",
    description:
      "A multi-page website for Tways, a fashion brand — visual, quick to load, and true to the brand's voice.",
    longDescription:
      "Built in Next.js and TypeScript. Imagery leads, type stays quiet, and the layout adapts cleanly from phone to desktop without losing the brand's character.",
    imageUrl:
      "https://res.cloudinary.com/diqcsujvk/image/upload/v1792115930/IMG_0027_tbgq0x.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Websites",
    liveUrl: "https://twaysempire.com/",
    githubUrl: GITHUB_PROFILE_URL,
  },
  {
    id: "ezibond-africa-dashboard",
    title: "EziBond Africa — Admin Dashboard & CMS",
    description:
      "The admin side of the EziBond Africa site, so the team can publish and update content without touching code.",
    longDescription:
      "A custom CMS and admin dashboard built with React, TypeScript, and Vite. The team manages their own content and media from one place — no developer in the loop, no redeploy needed. It is an internal tool, so there is no public demo.",
    imageUrl:
      "https://res.cloudinary.com/diqcsujvk/image/upload/v1792115588/IMG_0020_z1klrn.jpg",
    tags: ["React", "TypeScript", "Vite", "REST APIs"],
    category: "Dashboards",
    githubUrl: GITHUB_PROFILE_URL,
  },
  {
    id: "mauada-admin-dashboard",
    title: "Mauada — Admin Dashboard",
    description:
      "The admin side of Mauada: products, orders, and stock handled from a single dashboard.",
    longDescription:
      "Built with React, TypeScript, and Vite. The team adds products, tracks orders, and keeps stock accurate without leaving the dashboard. It is an internal tool, so there is no public demo.",
    imageUrl:
      "https://res.cloudinary.com/diqcsujvk/image/upload/v1792115930/IMG_0025_qzmcrn.jpg",
    tags: ["React", "TypeScript", "Vite", "REST APIs"],
    category: "Dashboards",
    githubUrl: GITHUB_PROFILE_URL,
  },
  {
    id: "professional-services-marketplace",
    title: "Professional Services Marketplace",
    description:
      "A full-stack web application for a professional marketplace — the interface, the API, and everything in between.",
    longDescription:
      "A two-sided marketplace connecting clients with professionals. I worked across the stack: the interface, the application logic, and the API layer that ties them together. Covered by an NDA, so the brand stays unnamed.",
    imageUrl: CONFIDENTIAL_IMAGE_URL,
    tags: ["Next.js", "TypeScript", "Node.js", "REST APIs"],
    category: "Web Apps",
    githubUrl: GITHUB_PROFILE_URL,
    confidential: true,
  },
];
