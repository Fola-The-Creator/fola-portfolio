import { Project } from "@/types/project";
import { GITHUB_PROFILE_URL, PRIVATE_PROJECT_IMAGE_URL } from "@/data/site";

export const projects: Project[] = [
  {
    id: "ezibond-africa-website",
    title: "EziBond Africa",
    description:
      "A multi-page website for EziBond Africa, designed to be clear and easy to get around on any device.",
    longDescription:
      "The site loads fast, reads well on mobile and pulls its content from a custom CMS I built alongside it.",
    imageUrl:
      "https://res.cloudinary.com/diqcsujvk/image/upload/v1792115586/IMG_0019_lpjrq9.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    category: "Websites",
    liveUrl: "https://www.ezibondafrica.org/",
    githubUrl: GITHUB_PROFILE_URL,
    featured: true,
  },
  {
    id: "mauada-storefront",
    title: "Mauada Storefront",
    description:
      "An online store for Mauada, a luxury fashion brand, with large product imagery and a simple path to checkout.",
    longDescription:
      "The design keeps the focus on the clothes, with big visuals, plenty of white space and a checkout that's quick to get through. Products and orders run through a custom admin dashboard I also built.",
    imageUrl:
      "https://res.cloudinary.com/diqcsujvk/image/upload/v1792115930/IMG_0024_qofwyy.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    category: "E-Commerce",
    liveUrl: "https://mauada-web.vercel.app/",
    githubUrl: GITHUB_PROFILE_URL,
    featured: true,
  },
  {
    id: "ezibond-africa-cms",
    title: "EziBond Africa CMS",
    description:
      "A custom admin dashboard and CMS the EziBond Africa team uses to manage their website.",
    longDescription:
      "A content management system built with React, TypeScript and Vite on a Supabase backend. The team publishes pages, updates content and manages media from one dashboard, without touching any code.",
    imageUrl:
      "https://res.cloudinary.com/diqcsujvk/image/upload/v1792115588/IMG_0020_z1klrn.jpg",
    tags: ["React", "TypeScript", "Vite", "Supabase"],
    category: "Dashboards",
    githubUrl: GITHUB_PROFILE_URL,
    featured: true,
  },
  {
    id: "mauada-admin-dashboard",
    title: "Mauada Admin Dashboard",
    description:
      "The admin dashboard behind the Mauada store, used to manage products, orders and stock.",
    longDescription:
      "The Mauada team uses it every day to add products, track orders and keep inventory up to date.",
    imageUrl:
      "https://res.cloudinary.com/diqcsujvk/image/upload/v1792115930/IMG_0025_qzmcrn.jpg",
    tags: ["React", "TypeScript", "Vite", "Supabase"],
    category: "Dashboards",
    githubUrl: GITHUB_PROFILE_URL,
  },
  {
    id: "seelinder-website",
    title: "Seelinder",
    description:
      "A multi-page website for Seelinder with a clean layout and simple navigation.",
    longDescription:
      "Light pages and navigation that's easy to follow, whether you're on a phone or a big screen.",
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
      "An online store for Viorge D' Denim, from browsing the collection to checkout.",
    longDescription:
      "Product pages are clean and focused, and shopping feels just as good on a phone as it does on a laptop.",
    imageUrl:
      "https://res.cloudinary.com/diqcsujvk/image/upload/v1792115929/IMG_0028_mtbbtf.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "E-Commerce",
    liveUrl: "https://www.viorgeddenim.com/",
    githubUrl: GITHUB_PROFILE_URL,
  },
  {
    id: "rovabox-website",
    title: "Rovabox",
    description:
      "A multi-page website for Rovabox that gets the message across quickly.",
    longDescription:
      "Every page has one clear job, and the layout adapts nicely from mobile to desktop.",
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
      "A multi-page website for Tways, a fashion brand, with an image-led design.",
    longDescription:
      "Big visuals lead every page, paired with simple typography and a layout that holds up on any screen size.",
    imageUrl:
      "https://res.cloudinary.com/diqcsujvk/image/upload/v1792115930/IMG_0027_tbgq0x.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Websites",
    liveUrl: "https://twaysempire.com/",
    githubUrl: GITHUB_PROFILE_URL,
  },
  {
    id: "saas-payroll-platform",
    title: "SaaS Payroll Platform",
    description:
      "Led frontend development for a SaaS payroll product that helps businesses pay their staff and manage employee records.",
    longDescription:
      "I led frontend development on this product, building the screens for payroll runs and employee records, along with the shared components the rest of the app is built on.",
    imageUrl: PRIVATE_PROJECT_IMAGE_URL,
    tags: ["React", "TypeScript", "Tailwind CSS"],
    category: "Web Apps",
    githubUrl: GITHUB_PROFILE_URL,
    isPrivate: true,
  },
  {
    id: "professional-services-marketplace",
    title: "Professional Services Marketplace",
    description:
      "A full-stack marketplace web app that connects clients with professionals.",
    longDescription:
      "I built this marketplace end to end, from the interface down to the database, using Next.js, TypeScript and Supabase.",
    imageUrl: PRIVATE_PROJECT_IMAGE_URL,
    tags: ["Next.js", "TypeScript", "Supabase"],
    category: "Web Apps",
    githubUrl: GITHUB_PROFILE_URL,
    isPrivate: true,
  },
];
