"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Direction = "up" | "down" | "left" | "right";

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  direction?: Direction;
  stagger?: number; // 👈 optional
  className?: string;
}

export function RevealOnScroll({
  children,
  delay = 0,
  duration = 0.8,
  distance = 50,
  direction = "up",
  stagger,
  className = "",
}: RevealOnScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!elementRef.current) return;

    const ctx = gsap.context(() => {
      const getInitialPosition = () => {
        switch (direction) {
          case "down":
            return { y: -distance };
          case "left":
            return { x: distance };
          case "right":
            return { x: -distance };
          case "up":
          default:
            return { y: distance };
        }
      };

      const initialPosition = getInitialPosition();

      // 👇 If stagger is provided, animate children instead
      const targets = stagger
        ? elementRef.current!.children
        : elementRef.current;

      gsap.fromTo(
        targets,
        {
          opacity: 0,
          ...initialPosition,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          stagger: stagger || 0,
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    }, elementRef);

    return () => ctx.revert(); // ✅ scoped cleanup (doesn't kill all triggers)
  }, [delay, duration, distance, direction, stagger]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
