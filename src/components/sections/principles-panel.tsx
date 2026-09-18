import { Blocks, Rocket, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { principles } from "@/content/portfolio";
import { cn } from "@/lib/utils";

const icons: LucideIcon[] = [Blocks, Rocket, Users];

export function PrinciplesPanel({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-[var(--radius-lg)] bg-surface-strong p-6", className)}>
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Engineering principles
      </p>
      <Stagger
        className="mt-5 flex flex-col divide-y divide-border sm:grid sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        staggerDelay={0.06}
      >
        {principles.map((principle, index) => {
          const Icon = icons[index];
          return (
            <StaggerItem
              key={principle.title}
              className="group flex flex-col gap-2 py-5 first:pt-0 last:pb-0 sm:px-5 sm:py-0 sm:first:pl-0 sm:last:pr-0"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface text-primary transition-transform duration-200 group-hover:-translate-y-0.5 group-focus-within:-translate-y-0.5">
                <Icon aria-hidden="true" className="h-4 w-4" />
              </span>
              <p className="text-base font-semibold text-foreground">{principle.title}</p>
              <p className="text-sm text-muted-foreground">{principle.description}</p>
            </StaggerItem>
          );
        })}
      </Stagger>
    </div>
  );
}
