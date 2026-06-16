"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MagneticButton } from "./MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export function HeroAnimated() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (!section) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        imageWrapRef.current,
        { scale: 0.01, borderRadius: "200%", opacity: 0, transformOrigin: "center center" },
        { scale: 1, borderRadius: "1rem", opacity: 1, duration: 2, ease: "expo.out" },
        0,
      );

      tl.fromTo(
        imageRef.current,
        { scale: 2.5 },
        { scale: 1, duration: 1.4, ease: "expo.out" },
        0,
      );

      tl.fromTo(
        taglineRef.current,
        { x: -120, opacity: 0, filter: "blur(20px)" },
        { x: 0, opacity: 1, filter: "blur(0px)", duration: 0.8 },
        0.3,
      );

      tl.fromTo(
        headingRef.current,
        { x: 140, opacity: 0, filter: "blur(20px)" },
        { x: 0, opacity: 1, filter: "blur(0px)", duration: 0.9 },
        0.45,
      );

      tl.fromTo(
        paraRef.current,
        { y: 50, opacity: 0, filter: "blur(20px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8 },
        0.6,
      );

      tl.fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        0.75,
      );

      gsap.to(imageWrapRef.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(textColRef.current, {
        yPercent: -32,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full flex items-start lg:items-center justify-between gap-12 flex-col lg:flex-row max-md:pt-36 max-md:pb-28 pt-44 pb-28 xl:pt-56 xl:pb-44 overflow-hidden"
    >
      <div ref={textColRef} className="lg:flex-1">
        <div
          ref={taglineRef}
          className="text-grey-700 tracking-[0.3em] text-sm mb-6 uppercase"
        >
          Full-Stack Developer and Designer
        </div>

        <h1
          ref={headingRef}
          className="text-5xl md:text-7xl xl:text-8xl text-grey-900 font-medium mb-8 leading-[1.1] tracking-tight text-balance"
        >
          Building Scalable
          <span className="text-grey-500"> Digital Products</span>
        </h1>

        <p
          ref={paraRef}
          className="text-grey-700 text-base md:text-xl max-w-2xl mb-12 leading-relaxed"
        >
          I design and build digital products across web, mobile, UI/UX, and brand identity. I bring ideas to life without compromising on either the craft or the code.
        </p>

        <div ref={ctaRef} className="flex flex-col gap-6">
          <div className="flex flex-col min-[500px]:flex-row gap-4 flex-wrap">
            <MagneticButton>
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-3 bg-grey-900 text-grey-0 px-8 py-4 rounded-full hover:bg-grey-700 transition-all duration-300 w-full"
              >
                <span className="tracking-wide">View Projects</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </MagneticButton>

            <MagneticButton>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 border border-grey-200 text-grey-900 px-8 py-4 rounded-full hover:border-grey-900 transition-all duration-300 w-full"
              >
                <span className="tracking-wide">Contact Me</span>
              </a>
            </MagneticButton>
          </div>

          {/* <div className="inline-flex items-center gap-2 text-xs text-grey-600 tracking-wide">
            <span className="w-2 h-2 rounded-full bg-grey-900 animate-pulse" />
            Available for freelance
          </div> */}
        </div>
      </div>

      <figure
        ref={imageWrapRef as React.RefObject<HTMLElement>}
        className="bg-grey-100 aspect-square lg:h-120 overflow-hidden rounded-2xl"
        style={{ willChange: "transform, border-radius, opacity" }}
      >
        <Image
          ref={imageRef as React.RefObject<HTMLImageElement>}
          src="https://res.cloudinary.com/diqcsujvk/image/upload/q_auto/f_auto/v1781538336/Fola_2_dzasua.png"
          alt="Fola, Full-Stack Designer and Developer"
          width={1200}
          height={1200}
          className="w-full h-full object-cover object-[0%_0%] hover:scale-102 transition-all duration-300"
          style={{ willChange: "transform" }}
          priority
        />
      </figure>
    </section>
  );
}
