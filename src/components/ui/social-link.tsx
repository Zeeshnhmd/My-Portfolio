import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function SocialLink({
  href,
  label,
  icon: Icon,
  showLabel = true,
  className,
}: {
  href: string;
  label: string;
  icon?: LucideIcon;
  showLabel?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={showLabel ? undefined : label}
      className={cn(
        "inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
        className,
      )}
    >
      {Icon && <Icon aria-hidden="true" className="h-4 w-4" />}
      <span className={showLabel ? undefined : "sr-only"}>{label}</span>
    </a>
  );
}
