import { CustomCursor } from "@/components/animations";
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
    <>
      <CustomCursor />
      <GridBackground />

      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
