"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MagneticButton } from "./MagneticButton";

// Register GSAP plugins
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

      /* ─── ENTRANCE TIMELINE ─────────────────────────────────────────────── */
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Image: tiny centered dot → full figure
      tl.fromTo(
        imageWrapRef.current,
        {
          scale: 0.01, //0.04
          borderRadius: "200%", //50%
          opacity: 0,
          transformOrigin: "center center",
        },
        {
          scale: 1,
          borderRadius: "0%",
          opacity: 1,
          duration: 1.2,
          ease: "expo.out",
        },
        0,
      );

      // Inner image subtle scale-down for dramatic zoom feel
      tl.fromTo(
        imageRef.current,
        { scale: 2.5 },
        { scale: 1, duration: 1.4, ease: "expo.out" },
        0,
      );

      // 2. Tagline flies in from the LEFT
      tl.fromTo(
        taglineRef.current,
        { x: -120, opacity: 0, filter: "blur(20px)" },
        { x: 0, opacity: 1, filter: "blur(0px)", duration: 0.8 },
        0.3,
      );

      // 3. Heading flies in from the RIGHT
      tl.fromTo(
        headingRef.current,
        { x: 140, opacity: 0, filter: "blur(20px)" },
        { x: 0, opacity: 1, filter: "blur(0px)", duration: 0.9 },
        0.45,
      );

      // 4. Paragraph floats up from below
      tl.fromTo(
        paraRef.current,
        { y: 50, opacity: 0, filter: "blur(20px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8 },
        0.6,
      );

      // 5. CTA buttons pop in
      tl.fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        0.75,
      );

      /* ─── SCROLL PARALLAX ───────────────────────────────────────────────── */
      // Image moves UP slower (moves less px) — classic parallax
      gsap.to(imageWrapRef.current, {
        yPercent: -18,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Text column moves UP faster
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
      className="w-full flex items-start md:items-center justify-between gap-12 flex-col md:flex-row max-md:pt-40 max-md:pb-30 pt-50 pb-30 xl:pt-80 xl:pb-60 overflow-hidden"
    >
      {/* ── TEXT COLUMN ─────────────────────────────────────────────────────── */}

      <div ref={textColRef} className="lg:flex-1">
        <div
          ref={taglineRef}
          className="text-grey-700 tracking-[0.3em] text-sm mb-6 uppercase"
        >
          Frontend Developer
        </div>

        <h1
          ref={headingRef}
          className="text-5xl md:text-7xl xl:text-8xl text-grey-900 font-medium mb-8 leading-[1.1] tracking-tight text-balance"
        >
          Crafting Scalable
          <span className="text-grey-600"> Web Experiences</span>
        </h1>

        <p
          ref={paraRef}
          className="text-grey-700 text-base md:text-xl max-w-2xl mb-12 leading-relaxed"
        >
          Specialized in building performant, type-safe web applications with
          modern frontend technologies. Focused on clean architecture, component
          design systems, and scalable solutions.
        </p>

        <div ref={ctaRef} className="flex flex-col min-[500px]:flex-row gap-4">
          {/* Magnetic wrapper is a Client Component — keep it if already in your codebase */}
          <MagneticButton>
            <Link
              href="/projects"
              className="group inline-flex items-center justify-center gap-3 bg-grey-900 text-grey-0 px-8 py-4 hover:bg-accent-500 hover:text-white transition-all duration-300 w-full"
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
              className="group inline-flex items-center justify-center gap-3 border border-grey-200 text-grey-900 px-8 py-4 hover:border-accent-500 hover:text-accent-500 transition-all duration-300 w-full"
            >
              <span className="tracking-wide">Contact Me</span>
            </a>
          </MagneticButton>
        </div>
      </div>

      {/* ── IMAGE ───────────────────────────────────────────────────────────── */}

      <figure
        ref={imageWrapRef as React.RefObject<HTMLElement>}
        className="bg-grey-100 h-120 overflow-hidden"
        style={{ willChange: "transform, border-radius, opacity" }}
      >
        <Image
          ref={imageRef as React.RefObject<HTMLImageElement>}
          src="/images/p-1.png"
          alt="Hero"
          width={1200}
          height={1200}
          className="w-full h-full object-cover opacity-90 hover:scale-102 transition-all duration-300"
          style={{ willChange: "transform" }}
        />
      </figure>
    </section>
  );
}
