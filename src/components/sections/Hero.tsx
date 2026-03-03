import { ArrowRight } from "lucide-react";
import { FadeIn, MagneticButton } from "../animations";
import { SectionDiv } from "../layouts";
import Image from "next/image";

export function Hero() {
  return (
    <SectionDiv className="w-full min-h-screen flex items-start md:items-center justify-between gap-12 flex-col-reverse md:flex-row max-md:pt-40 max-md:pb-30">
      <div>
        <FadeIn delay={0.2}>
          <div className="text-grey-500 tracking-[0.3em] text-sm mb-6 uppercase">
            Frontend Developer
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-grey-900 font-medium mb-8 leading-[1.1] tracking-tight">
            Crafting Scalable
            <br />
            <span className="text-grey-400">Web Experiences</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="text-grey-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
            Specialized in building performant, type-safe web applications with
            modern frontend technologies. Focused on clean architecture,
            component design systems, and scalable solutions.
          </p>
        </FadeIn>

        <FadeIn delay={0.8}>
          <div className="flex flex-col sm:flex-row gap-4">
            <MagneticButton>
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-3 bg-grey-900 text-grey-0 px-8 py-4 hover:bg-accent-500 hover:text-white transition-all duration-300 w-full"
              >
                <span className="tracking-wide">View Projects</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 border border-grey-100 text-grey-900 px-8 py-4 hover:border-accent-500 hover:text-accent-500 transition-all duration-300 w-full"
              >
                <span className="tracking-wide">Contact Me</span>
              </a>
            </MagneticButton>
          </div>
        </FadeIn>
      </div>

      <FadeIn y={50}>
        <figure className="bg-grey-50 h-120 overflow-hidden">
          <Image
            src="/images/p-1.png"
            alt="Hero"
            width={1200}
            height={1200}
            className="w-full h-full object-cover opacity-60 hover:scale-102 transition-all duration-300"
          />
        </figure>
      </FadeIn>
    </SectionDiv>
  );
}
