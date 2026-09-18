"use client";

import { useSyncExternalStore } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { SPRING } from "@/lib/motion";

const HOVER_QUERY = "(hover: hover) and (pointer: fine)";

function subscribe(callback: () => void) {
  const query = window.matchMedia(HOVER_QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(HOVER_QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

function useSupportsHover() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function HoverLift({ children, className }: { children: ReactNode; className?: string }) {
  const prefersReducedMotion = useReducedMotion();
  const supportsHover = useSupportsHover();
  const canLift = supportsHover && !prefersReducedMotion;

  return (
    <motion.div
      whileHover={canLift ? { y: -4 } : undefined}
      transition={SPRING.gentle}
      className={className}
    >
      {children}
    </motion.div>
  );
}
