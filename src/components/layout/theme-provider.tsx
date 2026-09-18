"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

type ResolvedTheme = "light" | "dark";

type ThemeState = {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
};

type ThemeContextValue = ThemeState & {
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getSystemPrefersDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function applyTheme(theme: Theme): ResolvedTheme {
  const isDark = theme === "dark" || (theme === "system" && getSystemPrefersDark());
  const root = document.documentElement;
  root.classList.toggle("dark", isDark);
  root.style.colorScheme = isDark ? "dark" : "light";
  return isDark ? "dark" : "light";
}

function readStoredTheme(): Theme {
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  return stored === "light" || stored === "dark" ? stored : "system";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ThemeState>({ theme: "system", resolvedTheme: "light" });

  useEffect(() => {

    const initial = readStoredTheme();

    setState({ theme: initial, resolvedTheme: applyTheme(initial) });

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      setState((current) => {
        if (current.theme !== "system") return current;
        return { theme: "system", resolvedTheme: applyTheme("system") };
      });
    };
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setState({ theme: next, resolvedTheme: applyTheme(next) });
    if (next === "system") {
      window.localStorage.removeItem(THEME_STORAGE_KEY);
    } else {
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
    }
  }, []);

  const value = useMemo(
    () => ({ theme: state.theme, resolvedTheme: state.resolvedTheme, setTheme }),
    [state, setTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
