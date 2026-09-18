"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { systemLayers } from "@/content/portfolio";
import { SPRING } from "@/lib/motion";
import { cn } from "@/lib/utils";

const DEFAULT_ACTIVE_INDEX = Math.max(
  0,
  systemLayers.findIndex((layer) => layer.label === "Workflows"),
);

export function SystemLayers() {
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(DEFAULT_ACTIVE_INDEX);

  return (
    <Stagger className="flex flex-col" staggerDelay={0.1}>
      <ol
        className="flex flex-col"
        onMouseLeave={() => setActiveIndex(DEFAULT_ACTIVE_INDEX)}
      >
        {systemLayers.map((layer, index) => {
          const isActive = activeIndex === index;
          const isConnectorActive = isActive || activeIndex === index + 1;

          return (
            <li key={layer.label}>
              <StaggerItem>
                <button
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onBlur={() => setActiveIndex(DEFAULT_ACTIVE_INDEX)}
                  className="relative block w-full rounded-[var(--radius-lg)] px-5 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)]"
                >
                  {isActive ? (
                    prefersReducedMotion ? (
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-[var(--radius-lg)] border-l-4 border-primary bg-surface"
                      />
                    ) : (
                      <motion.span
                        aria-hidden="true"
                        layoutId="system-layer-highlight"
                        transition={SPRING.snappy}
                        className="absolute inset-0 rounded-[var(--radius-lg)] border-l-4 border-primary bg-surface"
                      />
                    )
                  ) : null}

                  <span className="relative block">
                    <span
                      className={cn(
                        "text-base font-semibold",
                        isActive ? "text-primary" : "text-foreground",
                      )}
                    >
                      {String(index + 1).padStart(2, "0")} &middot; {layer.label}
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground">{layer.description}</span>
                  </span>
                </button>
              </StaggerItem>
              {index < systemLayers.length - 1 ? (
                <div
                  aria-hidden="true"
                  className={cn(
                    "mx-5 h-4 w-px transition-colors duration-200",
                    isConnectorActive ? "bg-primary" : "bg-border",
                  )}
                />
              ) : null}
            </li>
          );
        })}
      </ol>
    </Stagger>
  );
}
