import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

const labels = ["Context", "Architecture", "Delivery", "Outcome"];

export function ProcessMap({ activeIndex }: { activeIndex: number }) {
  const reduced = useReducedMotion();
  const progress = reduced ? 100 : (activeIndex / (labels.length - 1)) * 100;

  return (
    <div className="rounded-[var(--radius-xl)] border border-border bg-surface p-6 shadow-sm md:p-8">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Active stage
      </p>
      <p className="mt-2 font-serif text-2xl text-foreground">{labels[activeIndex]}</p>

      <ol className="relative mt-8 grid grid-cols-1 gap-8">
        <span
          aria-hidden="true"
          className="absolute bottom-3 left-3 top-3 w-px bg-border"
        />
        <motion.span
          aria-hidden="true"
          className="absolute left-3 top-3 w-px origin-top bg-primary"
          animate={{ height: `calc(${progress}% - ${progress ? 12 : 0}px)` }}
        />
        {labels.map((label, index) => (
          <li key={label} className="relative flex items-center gap-4">
            <span
              className={cn(
                "relative z-10 h-6 w-6 shrink-0 rounded-full border-4 border-surface transition-colors",
                index <= (reduced ? labels.length - 1 : activeIndex)
                  ? "bg-primary-solid"
                  : "bg-border",
              )}
            />
            <span
              className={cn(
                "text-sm transition-colors",
                index === activeIndex ? "font-semibold text-primary" : "text-muted-foreground",
              )}
            >
              {label}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
