"use client";

import Image from "next/image";
import { useRef, type PointerEvent } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { DURATION, EASE, VIEWPORT_ONCE } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function PortraitStage({
  imageSrc,
  hasImage,
  className,
}: {
  imageSrc: string;
  hasImage: boolean;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), { stiffness: 150, damping: 20 });
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), { stiffness: 150, damping: 20 });

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (prefersReducedMotion || event.pointerType !== "mouse" || !stageRef.current) return;
    const bounds = stageRef.current.getBoundingClientRect();
    x.set((event.clientX - bounds.left) / bounds.width - 0.5);
    y.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  function handlePointerLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div
      ref={stageRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ perspective: 1000 }}
      className={cn("relative mx-auto aspect-4/5 w-full max-w-sm lg:mx-0", className)}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: prefersReducedMotion ? 0 : DURATION.revealMedia, ease: EASE.out }}
        style={{ rotateX, rotateY }}
        className="relative h-full w-full overflow-hidden rounded-[var(--radius-xl)] bg-surface-strong"
      >
        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full text-border"
          viewBox="0 0 400 500"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="portrait-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="400" height="500" fill="url(#portrait-grid)" />
          <circle cx="80" cy="120" r="4" fill="currentColor" />
          <circle cx="320" cy="200" r="4" fill="currentColor" />
          <circle cx="100" cy="420" r="4" fill="currentColor" />
          <circle cx="300" cy="440" r="4" fill="currentColor" />
          <path
            d="M80 120 L320 200 M100 420 L300 440"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
        </svg>

        {hasImage ? (
          <Image
            src={imageSrc}
            alt="Portrait of Zeeshan Ahmad"
            fill
            priority
            sizes="(min-width: 1024px) 420px, 320px"
            className="relative object-cover"
          />
        ) : (
          <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 px-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-surface text-xs font-medium text-muted-foreground">
              4:5
            </div>
            <p className="text-sm font-medium text-muted-foreground">Portrait asset coming soon</p>
          </div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{
          duration: prefersReducedMotion ? 0 : DURATION.reveal,
          delay: prefersReducedMotion ? 0 : 0.25,
          ease: EASE.out,
        }}
        className="absolute -bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-[var(--radius-lg)] border border-border bg-surface px-4 py-3 shadow-sm sm:left-6 sm:w-auto sm:-translate-x-0"
      >
        <p className="text-xs font-medium text-foreground">
          Building reliable products from complex workflows
        </p>
      </motion.div>
    </div>
  );
}
