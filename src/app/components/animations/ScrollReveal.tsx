import { useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  start?: string;
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  y = 36,
  duration = 0.85,
  start = 'top 85%',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (reduced || !ref.current) return;

      gsap.from(ref.current, {
        opacity: 0,
        y,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: 'play none none none',
        },
      });
    },
    { scope: ref, dependencies: [reduced] },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  itemClassName?: string;
  stagger?: number;
  y?: number;
  start?: string;
}

export function StaggerReveal({
  children,
  className = '',
  itemClassName = 'stagger-item',
  stagger = 0.09,
  y = 28,
  start = 'top 82%',
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (reduced || !ref.current) return;

      const items = ref.current.querySelectorAll(`.${itemClassName}`);
      if (!items.length) return;

      gsap.from(items, {
        opacity: 0,
        y,
        duration: 0.75,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: 'play none none none',
        },
      });
    },
    { scope: ref, dependencies: [reduced] },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
