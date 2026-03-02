'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

interface StaggerChildrenProps {
  children: React.ReactNode;
  stagger?: number;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

export function StaggerChildren({
  children,
  stagger = 0.1,
  delay = 0,
  duration = 0.6,
  y = 20,
  className = '',
}: StaggerChildrenProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const childElements = containerRef.current.children;

    gsap.fromTo(
      childElements,
      {
        opacity: 0,
        y,
      },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        stagger,
        ease: 'power3.out',
      }
    );
  }, [stagger, delay, duration, y]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
