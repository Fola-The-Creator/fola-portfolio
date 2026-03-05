"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const SLICE_COUNT = 7;

interface SlicedImageRevealProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  figureClassName?: string;
}

export function SlicedImageReveal({
  src,
  alt,
  width,
  height,
  className = "",
  figureClassName = "",
}: SlicedImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const slices = gsap.utils.toArray<HTMLElement>(".slice-item", container);

    // Set initial state — odd slices come from the left, even from the right
    gsap.set(slices, (index: number) => ({
      x: index % 2 === 0 ? "-105%" : "105%",
      opacity: 0,
    }));

    // Staggered entrance timeline
    const tl = gsap.timeline({ delay: 0.3 });

    tl.to(slices, {
      x: "0%",
      opacity: 1,
      duration: 0.9,
      ease: "power3.out",
      stagger: {
        each: 0.08,
        from: "start",
      },
    });

    // Subtle hover parallax tilt on the whole container
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width; // -0.5 → 0.5
      const dy = (e.clientY - cy) / rect.height;

      gsap.to(container, {
        rotateY: dx * 6,
        rotateX: -dy * 6,
        duration: 0.6,
        ease: "power2.out",
        transformPerspective: 800,
        transformOrigin: "center center",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(container, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.6)",
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      tl.kill();
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${figureClassName}`}
      style={{ willChange: "transform" }}
    >
      {Array.from({ length: SLICE_COUNT }).map((_, i) => {
        const sliceHeightPct = 100 / SLICE_COUNT;
        const topPct = i * sliceHeightPct;

        return (
          <div
            key={i}
            className="slice-item absolute left-0 w-full overflow-hidden"
            style={{
              top: `${topPct}%`,
              height: `${sliceHeightPct + 0.15}%`, // +0.15% to prevent hairline gaps
            }}
          >
            {/* Each slice renders the full image, shifted so only its band shows */}
            <div
              className="absolute inset-0"
              style={{ top: `-${topPct}%`, height: `${SLICE_COUNT * 100}%` }}
            >
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={`w-full h-full object-cover ${className}`}
                priority
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
