"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowUp } from "lucide-react";
import { DURATION, EASE, SPRING } from "@/lib/motion";

const RADIUS = 18;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function BackToTop() {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, SPRING.scrollSmooth);
  const dashoffset = useTransform(smoothProgress, (value) => CIRCUMFERENCE * (1 - value));

  useEffect(() => {
    const footer = document.querySelector("footer");

    const updateVisibility = () => {
      const pastThreshold = window.scrollY > window.innerHeight;
      const footerTop = footer?.getBoundingClientRect().top;
      const footerInView = footerTop !== undefined && footerTop < window.innerHeight;
      setVisible(pastThreshold && !footerInView);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  }

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          onClick={handleClick}
          title="Back to top"
          aria-label="Back to top"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
          transition={
            prefersReducedMotion ? { duration: 0 } : { duration: DURATION.reveal, ease: EASE.out }
          }
          className="group fixed bottom-6 right-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-sm transition-colors duration-150 hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)] sm:right-6"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 40 40"
            className="pointer-events-none absolute inset-0 h-full w-full -rotate-90"
          >
            <circle cx="20" cy="20" r={RADIUS} strokeWidth="2" fill="none" className="stroke-border" />
            <motion.circle
              cx="20"
              cy="20"
              r={RADIUS}
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              className="stroke-primary"
              strokeDasharray={CIRCUMFERENCE}
              style={{ strokeDashoffset: dashoffset }}
            />
          </svg>
          <ArrowUp
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-150 group-hover:-translate-y-0.5"
          />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
