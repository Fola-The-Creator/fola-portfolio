# Creative Developer Portfolio

A professional, high-performance portfolio website built to showcase engineering projects, technical expertise, and custom creative animations. This project serves as a central hub for personal branding, demonstrating clean code practices, responsive layouts, and interactive user experiences.

## Key Features

- Interactive Animations: Integrated custom animations using GreenSock Animation Platform (GSAP), including scroll-based reveals, staggering child elements, and custom hover states.
- Animated Components: Features custom components such as magnetic buttons, fade-in transitions, and an interactive custom cursor.
- Theme Management: Built-in dark theme context provider supporting responsive theme switching.
- Modern Navigation: Fluid header navigation with smooth scrolling and specialized animations.
- Dynamic Project Pages: Structured project showcases and detailed tech stack directories to present selected works in a clean grid layout.
- Modular Architecture: Clean separation of concerns with components split into sections, layouts, UI utilities, animations, and icons.

## Tech Stack

- Framework: Next.js (version 16) with App Router
- Library: React (version 19)
- Styling: Tailwind CSS (version 4)
- Animation: GreenSock Animation Platform (GSAP) and GSAP React bindings
- Icons: Lucide React and React Icons
- Type System: TypeScript
- Package Manager: npm

## Project Structure

The codebase is organized in a modular structure under the src folder:

- src/app: Core pages, layouts, custom routes (projects, tech), and page-level metadata.
- src/components: Reusable presentation elements, categorized as:
  - animations: GSAP scroll reveal, magnetic buttons, custom cursor, and transition wrappers.
  - layouts: Navigation bar, footer structure, and section wrappers.
  - sections: Interactive landing page sections (Hero, About, TechStack, Projects, Skills, Contact).
  - ui: Small-scale visual enhancements.
- src/context: State providers for global features such as theme toggle.
- src/fonts: Asset files for local typographic styling.
- src/styles: Core CSS configurations and Tailwind directives.

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

Ensure you have Node.js (v18 or higher) and npm installed.

### Installation

Clone the repository and install the dependencies:

```bash
npm install
```

### Run the Development Server

Start the local server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production Build

To build the application for deployment:

```bash
npm run build
```

To run the built production bundle:

```bash
npm run start
```
