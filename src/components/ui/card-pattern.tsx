import { cn } from "@/lib/utils";

export type CardPatternVariant =
  | "grid"
  | "nodes"
  | "modules"
  | "workflow"
  | "arcs"
  | "dots"
  | "lines";

export function CardPattern({
  variant,
  className,
}: {
  variant: CardPatternVariant;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn("card-pattern", `card-pattern-${variant}`, className)}
    />
  );
}
