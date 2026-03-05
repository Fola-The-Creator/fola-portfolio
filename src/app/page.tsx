import { CustomCursor } from "@/components/animations";
import {
  About,
  Contact,
  Hero,
  Projects,
  Skills,
  TechStack,
} from "@/components/sections";

export default function page() {
  return (
    <>
      <CustomCursor />

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
