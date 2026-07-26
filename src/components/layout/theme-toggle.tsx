"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/layout/theme-provider";
import type { Theme } from "@/lib/theme";

const order: Theme[] = ["system", "light", "dark"];

const meta: Record<Theme, { label: string; icon: typeof Sun }> = {
  system: { label: "System", icon: Monitor },
  light: { label: "Light", icon: Sun },
  dark: { label: "Dark", icon: Moon },
};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const Icon = meta[theme].icon;
  const nextTheme = order[(order.indexOf(theme) + 1) % order.length];

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme)}
      className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] border border-border text-foreground transition-colors hover:bg-surface-muted/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)]"
      aria-label={`Theme: ${meta[theme].label}. Activate to switch to ${meta[nextTheme].label.toLowerCase()} theme.`}
    >
      <Icon aria-hidden="true" className="h-4 w-4" />
    </button>
  );
}
