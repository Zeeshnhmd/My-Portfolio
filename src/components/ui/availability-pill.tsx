import { MapPin } from "lucide-react";
import { person } from "@/content/portfolio";
import { cn } from "@/lib/utils";
import { StatusDot } from "@/components/ui/status-dot";

function Pill({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-8 max-w-full items-center gap-1.5 rounded-full border border-border bg-surface-strong/60 px-3 text-sm text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function AvailabilityPill({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      <Pill>
        <MapPin aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
        <span className="text-pretty">{person.locationLabel}</span>
      </Pill>
      <Pill>
        <StatusDot />
        <span className="text-pretty">{person.availabilityLabel}</span>
      </Pill>
    </div>
  );
}
