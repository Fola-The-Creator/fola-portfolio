import { CustomCursor } from "@/components/animations";
import { Footer, Navigation } from "@/components/layouts";
import {
  About,
  Contact,
  Hero,
  Projects,
  Skills,
  TechStack,
} from "@/components/sections";
import { GridBackground } from "@/components/ui";

export default function page() {
  return (
    <div>
      <GridBackground />
      <CustomCursor />
      <Navigation />

      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
