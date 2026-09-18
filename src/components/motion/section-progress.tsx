"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { SPRING } from "@/lib/motion";

export function SectionProgress() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothed = useSpring(scrollYProgress, SPRING.scrollSmooth);

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX: prefersReducedMotion ? scrollYProgress : smoothed }}
      className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-primary"
    />
  );
}
