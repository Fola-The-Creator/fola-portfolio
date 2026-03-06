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
