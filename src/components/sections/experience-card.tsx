"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ExperienceItem } from "@/content/portfolio";
import { DURATION, EASE, SPRING, VIEWPORT_ONCE } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { StatusDot } from "@/components/ui/status-dot";
import { CardPattern } from "@/components/ui/card-pattern";

type Tier = "current" | "lead" | "quiet";

const TIER_COMPANY: Record<Tier, string> = {
  current: "text-lg font-semibold text-foreground",
  lead: "text-base font-semibold text-foreground",
  quiet: "text-base font-medium text-foreground",
};

export function ExperienceCard({
  item,
  tier,
  isCurrent,
  isActive,
  startYear,
  delay,
  scope,
  id,
}: {
  item: ExperienceItem;
  tier: Tier;
  isCurrent: boolean;
  isActive: boolean;
  startYear: string;
  delay: number;
  scope: string;
  id: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  const highlights = item.summary
    .split(". ")
    .map((sentence) => sentence.replace(/\.$/, "").trim())
    .filter(Boolean);

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_ONCE}
      transition={{
        duration: prefersReducedMotion ? 0 : DURATION.reveal,
        delay: prefersReducedMotion ? 0 : delay,
        ease: EASE.out,
      }}
      className={cn(
        "relative scroll-mt-32 border-t border-border py-10 first:border-t-0 lg:min-h-96 lg:py-14",
        tier === "quiet" ? "opacity-90" : "opacity-100",
      )}
    >
      <CardPattern variant="lines" className="right-0 top-8 h-12 w-24 opacity-40" />
      {isActive ? (
        prefersReducedMotion ? (
          <span aria-hidden="true" className="absolute inset-y-8 -left-5 w-px bg-primary-solid" />
        ) : (
          <motion.span
            aria-hidden="true"
            layoutId="experience-active-accent"
            transition={SPRING.snappy}
            className="absolute inset-y-8 -left-5 w-px bg-primary-solid"
          />
        )
      ) : null}

      <div className="flex flex-wrap items-center gap-3">
        <span
          aria-hidden="true"
          className="flex h-10 min-w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface px-2 text-xs font-medium text-muted-foreground"
        >
          {startYear}
        </span>
        <p className={TIER_COMPANY[tier]}>{item.company}</p>
        {isCurrent ? (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-surface px-2.5 py-1 text-xs font-medium text-primary">
            <StatusDot className="bg-primary-solid after:text-primary" />
            Current
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        {item.role} · {item.dates}
      </p>
      <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-primary">{scope}</p>
      <div className="mt-6 grid gap-6 sm:grid-cols-[4rem_1fr]">
        <div
          aria-hidden="true"
          className="flex h-16 w-16 items-center justify-center rounded-[var(--radius-lg)] bg-surface-strong font-serif text-xl text-muted-foreground"
        >
          {item.company
            .split(/\s+/)
            .slice(0, 2)
            .map((word) => word[0])
            .join("")}
        </div>
      <ul className="flex flex-col gap-3">
        {highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3 text-sm text-muted-foreground">
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>{highlight}.</span>
          </li>
        ))}
      </ul>
      </div>
    </motion.div>
  );
}
