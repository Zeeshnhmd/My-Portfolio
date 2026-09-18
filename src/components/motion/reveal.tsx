"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { DURATION, EASE } from "@/lib/motion";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
      whileInView={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: prefersReducedMotion ? 0 : DURATION.revealMedia,
        delay: prefersReducedMotion ? 0 : delay,
        ease: EASE.revealCurve,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
