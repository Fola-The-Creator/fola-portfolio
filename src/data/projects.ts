import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with cart management, payment integration, and real-time inventory tracking.",
    longDescription:
      "Built with performance and conversion in mind. Handles thousands of SKUs with sub-second search, Stripe Checkout integration, and a custom CMS for merchants.",
    imageUrl:
      "https://images.unsplash.com/photo-1755018237309-bb3f5efeb2c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlJTIwYmxhY2slMjB3aGl0ZXxlbnwxfHx8fDE3NzIzNTI2MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    category: "Web Apps",
    liveUrl: "#",
    githubUrl: "#",
    year: "2024",
    featured: true,
  },
  {
    id: "saas-dashboard",
    title: "SaaS Dashboard",
    description:
      "Modern analytics dashboard with real-time data visualization, user management, and responsive design.",
    longDescription:
      "Complex data rendered beautifully. WebSocket-powered live charts, role-based access control, and a white-label theming system for enterprise clients.",
    imageUrl:
      "https://images.unsplash.com/photo-1746897785251-48e52e82b269?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMHBhdHRlcm4lMjBtb25vY2hyb21lfGVufDF8fHx8MTc3MjI3NTI3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Tailwind", "Recharts", "Node.js"],
    category: "Dashboards",
    liveUrl: "#",
    githubUrl: "#",
    year: "2024",
    featured: true,
  },
  {
    id: "portfolio-cms",
    title: "Portfolio CMS",
    description:
      "Content management system for creative professionals with drag-and-drop builder and SEO optimization.",
    longDescription:
      "Empowers non-technical creatives to own their presence. MDX-powered content, image optimization pipeline, and Lighthouse score consistently above 98.",
    imageUrl:
      "https://images.unsplash.com/photo-1624792054848-98a03bbb8546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwd29ya3NwYWNlJTIwZ3JheXNjYWxlfGVufDF8fHx8MTc3MjM4MDg4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "MDX", "Vercel", "Prisma"],
    category: "Websites",
    liveUrl: "#",
    githubUrl: "#",
    year: "2024",
  },
  {
    id: "design-system",
    title: "Design System",
    description:
      "Component library with comprehensive documentation, accessibility features, and theming support.",
    longDescription:
      "50+ production-grade components, WCAG 2.1 AA compliant, with Storybook docs, visual regression tests, and a token-based theming architecture.",
    imageUrl:
      "https://images.unsplash.com/photo-1622271125051-73022c9deeaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZGVzaWduJTIwYmxhY2slMjB3aGl0ZSUyMHRleHR1cmV8ZW58MXx8fHwxNzcyMzgwODg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Storybook", "TypeScript"],
    category: "Design",
    liveUrl: "#",
    githubUrl: "#",
    year: "2023",
    featured: true,
  },
  {
    id: "realtime-chat",
    title: "Real-Time Chat",
    description:
      "Messaging application with WebSocket integration, typing indicators, and file sharing capabilities.",
    longDescription:
      "Sub-100ms latency messaging, end-to-end encrypted rooms, S3-backed file uploads, and presence indicators across thousands of concurrent users.",
    imageUrl:
      "https://images.unsplash.com/photo-1703075514536-c4081f0ac959?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYXJjaGl0ZWN0dXJhbCUyMHN0cnVjdHVyZSUyMGNvbnRyYXN0fGVufDF8fHx8MTc3MjM4MDg4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Socket.io", "Node.js", "Redis"],
    category: "Web Apps",
    liveUrl: "#",
    githubUrl: "#",
    year: "2023",
  },
  {
    id: "finance-tracker",
    title: "Finance Tracker",
    description:
      "Personal finance management app with budget tracking, expense categorization, and financial insights.",
    longDescription:
      "Connects to 10,000+ banks via Plaid, auto-categorizes transactions with ML, and generates beautiful monthly reports you actually want to read.",
    imageUrl:
      "https://images.unsplash.com/photo-1771582979625-593f6bd17e43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25vY2hyb21lJTIwZ3JpZCUyMHBhdHRlcm4lMjBkZXNpZ258ZW58MXx8fHwxNzcyMzgwODg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Plaid"],
    category: "Mobile Apps",
    liveUrl: "#",
    githubUrl: "#",
    year: "2023",
  },
  {
    id: "ui-component-kit",
    title: "UI Component Kit",
    description:
      "Open-source collection of animated, accessible React components built for modern web apps.",
    longDescription:
      "Used by 800+ developers. Zero-dependency animations, full keyboard navigation, dark mode out of the box, and comprehensive TypeScript types.",
    imageUrl:
      "https://images.unsplash.com/photo-1622271125051-73022c9deeaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZGVzaWduJTIwYmxhY2slMjB3aGl0ZSUyMHRleHR1cmV8ZW58MXx8fHwxNzcyMzgwODg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "TypeScript", "GSAP", "npm"],
    category: "Open Source",
    liveUrl: "#",
    githubUrl: "#",
    year: "2023",
  },
  {
    id: "agency-website",
    title: "Agency Website",
    description:
      "High-impact marketing website for a creative agency, with GSAP-powered scroll storytelling.",
    longDescription:
      "Full scroll-jacking narrative experience, WebGL background effects, CMS-driven case studies, and a contact flow that converts at 14%.",
    imageUrl:
      "https://images.unsplash.com/photo-1624792054848-98a03bbb8546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwd29ya3NwYWNlJTIwZ3JheXNjYWxlfGVufDF8fHx8MTc3MjM4MDg4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "GSAP", "Sanity", "Framer Motion"],
    category: "Websites",
    liveUrl: "#",
    githubUrl: "#",
    year: "2022",
  },
  {
    id: "inventory-manager",
    title: "Inventory Manager",
    description:
      "Warehouse ops dashboard with barcode scanning, automated reorder triggers, and supplier integrations.",
    longDescription:
      "Replaced manual spreadsheets for a 40-person operations team. Reduced stockout incidents by 67% in the first quarter post-launch.",
    imageUrl:
      "https://images.unsplash.com/photo-1746897785251-48e52e82b269?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMHBhdHRlcm4lMjBtb25vY2hyb21lfGVufDF8fHx8MTc3MjI3NTI3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Node.js", "MongoDB", "REST APIs"],
    category: "Dashboards",
    liveUrl: "#",
    githubUrl: "#",
    year: "2022",
  },
];
