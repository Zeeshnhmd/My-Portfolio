import { cn } from "@/lib/utils";

/**
 * Abstract, non-photographic system diagram used as a stand-in for a real
 * product screenshot. `variant` only nudges node positions so the three
 * work cards don't look identical; it carries no other meaning.
 */
export function WorkDiagram({
  variant = 0,
  className,
}: {
  variant?: number;
  className?: string;
}) {
  const topY = variant === 1 ? 30 : variant === 2 ? 15 : 20;
  const bottomY = variant === 1 ? 70 : variant === 2 ? 85 : 80;

  return (
    <div
      className={cn(
        "relative flex h-40 items-center justify-center bg-surface-muted/40",
        className,
      )}
    >
      <svg viewBox="0 0 200 100" className="h-full w-full max-w-xs" aria-hidden="true">
        <line x1="30" y1="50" x2="100" y2={topY} stroke="var(--border)" strokeWidth="2" />
        <line x1="30" y1="50" x2="100" y2={bottomY} stroke="var(--border)" strokeWidth="2" />
        <line x1="100" y1={topY} x2="170" y2="50" stroke="var(--border)" strokeWidth="2" />
        <line x1="100" y1={bottomY} x2="170" y2="50" stroke="var(--border)" strokeWidth="2" />
        <circle cx="30" cy="50" r="10" fill="var(--surface)" stroke="var(--primary)" strokeWidth="2" />
        <circle cx="100" cy={topY} r="9" fill="var(--surface)" stroke="var(--primary)" strokeWidth="2" />
        <circle cx="100" cy={bottomY} r="9" fill="var(--surface)" stroke="var(--primary)" strokeWidth="2" />
        <circle cx="170" cy="50" r="10" fill="var(--surface)" stroke="var(--primary)" strokeWidth="2" />
      </svg>
      <span className="absolute bottom-2 right-3 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
        Conceptual diagram
      </span>
    </div>
  );
}
