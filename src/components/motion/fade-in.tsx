"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { DURATION, EASE, VIEWPORT_ONCE } from "@/lib/motion";

export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_ONCE}
      transition={
        prefersReducedMotion ? { duration: 0 } : { duration: DURATION.reveal, delay, ease: EASE.out }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
