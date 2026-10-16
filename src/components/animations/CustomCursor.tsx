"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

/**
 * Follows the pointer with GSAP writing straight to the DOM. Nothing here is
 * React state, so moving the mouse never re-renders the page underneath it.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Touch and coarse pointers get no custom cursor.
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3.out" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3.out" });

    let revealed = false;
    let hovering = false;

    const onMouseMove = (e: MouseEvent) => {
      if (!revealed) {
        revealed = true;
        // Jump to the pointer before fading in, so it never flies in from 0,0.
        gsap.set([dot, ring], { x: e.clientX, y: e.clientY });
        gsap.to([dot, ring], { autoAlpha: 1, duration: 0.25 });
      }

      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const isInteractive = Boolean(target?.closest("a, button, [role='button']"));
      if (isInteractive === hovering) return;

      hovering = isInteractive;
      gsap.to(dot, { scale: isInteractive ? 2 : 1, duration: 0.25, ease: "power3.out" });
      gsap.to(ring, { scale: isInteractive ? 1.5 : 1, duration: 0.3, ease: "power3.out" });
    };

    const onMouseLeave = () => gsap.to([dot, ring], { autoAlpha: 0, duration: 0.2 });
    const onMouseEnter = () => gsap.to([dot, ring], { autoAlpha: 1, duration: 0.2 });

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 bg-white rounded-full pointer-events-none z-9999 mix-blend-difference opacity-0 invisible"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ringRef}
        aria-hidden
        className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 border border-white rounded-full pointer-events-none z-9998 mix-blend-difference opacity-0 invisible"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
