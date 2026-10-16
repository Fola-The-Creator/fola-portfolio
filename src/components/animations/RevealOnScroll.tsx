"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

type Direction = "up" | "down" | "left" | "right";

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  direction?: Direction;
  /**
   * When set, the direct children animate one after another instead of the
   * wrapper moving as a single block. One ScrollTrigger drives the whole group.
   */
  stagger?: number;
  /** ScrollTrigger start position. */
  start?: string;
  className?: string;
}

const offsetFor = (direction: Direction, distance: number) => {
  switch (direction) {
    case "down":
      return { y: -distance };
    case "left":
      return { x: distance };
    case "right":
      return { x: -distance };
    default:
      return { y: distance };
  }
};

export function RevealOnScroll({
  children,
  delay = 0,
  duration = 0.7,
  distance = 40,
  direction = "up",
  stagger,
  start = "top 85%",
  className = "",
}: RevealOnScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const element = elementRef.current;
      if (!element) return;

      const targets: HTMLElement[] = stagger
        ? gsap.utils.toArray<HTMLElement>(element.children)
        : [element];

      if (!targets.length) return;

      // Respect the OS-level setting: show everything, animate nothing.
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(targets, { opacity: 1, x: 0, y: 0 });
        return;
      }

      // Set the start state in the same frame the element mounts, so nothing
      // flashes in at full opacity before the tween takes over.
      gsap.set(targets, {
        opacity: 0,
        force3D: true,
        willChange: "transform, opacity",
        ...offsetFor(direction, distance),
      });

      gsap.to(targets, {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        delay,
        ease: "power2.out",
        force3D: true,
        overwrite: "auto",
        stagger: stagger ?? 0,
        // Drop the transform and the compositing hint once we land, so hover
        // transitions on these elements start from a clean slate.
        clearProps: "transform,willChange",
        scrollTrigger: {
          trigger: element,
          start,
          once: true,
        },
      });
    },
    {
      scope: elementRef,
      dependencies: [delay, duration, distance, direction, stagger, start],
    },
  );

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
