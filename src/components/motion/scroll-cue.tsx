"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { FadeIn } from "@/components/motion/fade-in";
import { DURATION, EASE } from "@/lib/motion";

export function ScrollCue() {
  const prefersReducedMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const shouldLoop = !prefersReducedMotion && !hovered;

  function handleClick() {
    window.scrollTo({ top: window.innerHeight, behavior: prefersReducedMotion ? "auto" : "smooth" });
  }

  return (
    <FadeIn delay={0.4} className="absolute inset-x-0 bottom-6 hidden justify-center md:flex">
      <button
        type="button"
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        className="flex h-9 w-6 items-start justify-center rounded-full border border-border p-1.5 transition-colors duration-150 hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--focus)]"
      >
        <span className="sr-only">Scroll to explore</span>
        <motion.span
          aria-hidden="true"
          animate={shouldLoop ? { y: [0, 10, 0], opacity: [1, 0.4, 1] } : { y: 0, opacity: 1 }}
          transition={
            shouldLoop
              ? { duration: 1.75, repeat: Infinity, ease: EASE.inOut }
              : { duration: DURATION.hover }
          }
          className="h-1.5 w-1 rounded-full bg-muted-foreground"
        />
      </button>
    </FadeIn>
  );
}
