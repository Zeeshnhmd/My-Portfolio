"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { RAIL_SCROLL_OFFSET } from "@/lib/motion";
import type { ExperienceItem } from "@/content/portfolio";
import { SPRING } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function ExperienceRail({
  heading,
  right,
  items,
  itemCount,
}: {
  heading: ReactNode;
  right: (activeIndex: number) => ReactNode;
  items: ExperienceItem[];
  itemCount: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: containerRef, offset: RAIL_SCROLL_OFFSET });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const nextIndex = Math.min(itemCount - 1, Math.max(0, Math.floor(value * itemCount)));
    setActiveIndex(nextIndex);
  });

  return (
    <div ref={containerRef} className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          {heading}
          <nav aria-label="Career timeline" className="relative mt-10 hidden lg:block">
            {items.map((item, index) => {
              const year = item.dates.match(/\d{4}/)?.[0] ?? "";
              const isActive = activeIndex === index;
              return (
                <button
                  key={item.company}
                  type="button"
                  onClick={() =>
                    document
                      .getElementById(`career-${index}`)
                      ?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" })
                  }
                  className={cn(
                    "relative block w-full border-t border-border py-4 pl-5 text-left transition-colors first:border-t-0",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {isActive ? (
                    reduced ? (
                      <span className="absolute inset-y-2 left-0 w-0.5 bg-primary-solid" />
                    ) : (
                      <motion.span
                        layoutId="career-nav-indicator"
                        transition={SPRING.snappy}
                        className="absolute inset-y-2 left-0 w-0.5 bg-primary-solid"
                      />
                    )
                  ) : null}
                  <span className="block text-xs font-semibold uppercase tracking-wide">{year}</span>
                  <span className="mt-1 block text-sm font-medium">{item.company}</span>
                  <span className="mt-0.5 block text-xs">{item.dates}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      <div className="lg:col-span-8">{right(activeIndex)}</div>
    </div>
  );
}
