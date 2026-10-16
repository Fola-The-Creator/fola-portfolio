"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MagneticButton } from "./MagneticButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function HeroAnimated() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // The CSS hover transition is only attached once the intro is done. While
  // GSAP is tweening the same transform, a CSS transition on it fights back.
  const [introDone, setIntroDone] = useState(false);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const textCol = textColRef.current;
      const imageWrap = imageWrapRef.current;
      const copy = [
        taglineRef.current,
        headingRef.current,
        paraRef.current,
        ctaRef.current,
      ].filter(Boolean) as HTMLElement[];

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set([imageWrap, imageRef.current, ...copy], {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          filter: "none",
        });
        setIntroDone(true);
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "power3.out", force3D: true },
        onComplete: () => {
          // Drop the leftover transforms and compositing hints so hover states
          // and scroll parallax start from a clean element.
          gsap.set(copy, { clearProps: "filter,willChange" });
          setIntroDone(true);
        },
      });

      tl.fromTo(
        imageWrap,
        {
          scale: 0.01,
          borderRadius: "200%",
          opacity: 0,
          transformOrigin: "center center",
        },
        { scale: 1, borderRadius: "1rem", opacity: 1, duration: 1.6, ease: "expo.out" },
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
        { x: -120, opacity: 0, filter: "blur(16px)" },
        { x: 0, opacity: 1, filter: "blur(0px)", duration: 0.8 },
        0.25,
      );

      tl.fromTo(
        headingRef.current,
        { x: 140, opacity: 0, filter: "blur(16px)" },
        { x: 0, opacity: 1, filter: "blur(0px)", duration: 0.9 },
        0.4,
      );

      tl.fromTo(
        paraRef.current,
        { y: 50, opacity: 0, filter: "blur(16px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8 },
        0.55,
      );

      tl.fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        0.7,
      );

      // Parallax. Separate from the intro timeline so the two never write to
      // the same property at the same time.
      gsap.to(imageWrap, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });

      gsap.to(textCol, {
        yPercent: -32,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="w-full flex items-start lg:items-center justify-between gap-12 flex-col lg:flex-row max-md:pt-36 max-md:pb-28 pt-44 pb-28 xl:pt-56 xl:pb-44 overflow-hidden"
    >
      <div ref={textColRef} className="@container w-full min-w-0 lg:w-auto lg:flex-1">
        <div
          ref={taglineRef}
          className="text-grey-700 tracking-[0.3em] text-sm mb-6 uppercase text-balance"
          style={{ willChange: "transform, opacity, filter" }}
        >
          Full-Stack Developer and Designer
        </div>

        {/*
          Sized from the column width, not the viewport. Measured in Gilroy,
          "Building Scalable" is 7.56em wide, so 12.9cqi keeps the headline on
          two even lines at every screen size.
        */}
        <h1
          ref={headingRef}
          className="text-[length:min(6rem,12.9cqi)] text-grey-900 font-medium mb-8 leading-[1.08] tracking-tight"
          style={{ willChange: "transform, opacity, filter" }}
        >
          <span className="block whitespace-nowrap">Building Scalable</span>
          <span className="block whitespace-nowrap text-grey-500">
            Digital Products
          </span>
        </h1>

        <p
          ref={paraRef}
          className="text-grey-700 text-base md:text-xl max-w-2xl mb-12 leading-relaxed"
          style={{ willChange: "transform, opacity, filter" }}
        >
          I design and build websites, web apps and dashboards for businesses
          that want their product to look good and work well.
        </p>

        <div ref={ctaRef} className="flex flex-col gap-6">
          <div className="flex flex-col min-[500px]:flex-row gap-4 flex-wrap">
            <MagneticButton>
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-3 bg-grey-900 text-grey-0 px-8 py-4 rounded-full hover:bg-grey-700 transition-colors duration-300 w-full"
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
                className="group inline-flex items-center justify-center gap-3 border border-grey-200 text-grey-900 px-8 py-4 rounded-full hover:border-grey-900 transition-colors duration-300 w-full"
              >
                <span className="tracking-wide">Contact Me</span>
              </a>
            </MagneticButton>
          </div>
        </div>
      </div>

      <figure
        ref={imageWrapRef as React.RefObject<HTMLElement>}
        className="bg-grey-100 aspect-square lg:h-96 xl:h-120 shrink-0 overflow-hidden rounded-2xl"
        style={{ willChange: "transform" }}
      >
        <Image
          ref={imageRef as React.RefObject<HTMLImageElement>}
          src="https://res.cloudinary.com/diqcsujvk/image/upload/q_auto/f_auto/v1781538336/Fola_2_dzasua.png"
          alt="Fola, Full-Stack Designer and Developer"
          width={1200}
          height={1200}
          className={`w-full h-full object-cover object-[0%_0%] ${
            introDone ? "transition-transform duration-300 hover:scale-102" : ""
          }`}
          priority
        />
      </figure>
    </section>
  );
}
