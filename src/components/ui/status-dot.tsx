import { cn } from "@/lib/utils";

export function StatusDot({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "status-dot relative h-1.5 w-1.5 shrink-0 rounded-full bg-success",
        className,
      )}
    />
  );
}
