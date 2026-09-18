"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { MobileDrawer } from "@/components/layout/mobile-drawer";
import { SectionProgress } from "@/components/motion/section-progress";
import { navigation, person } from "@/content/portfolio";
import { useActiveNavHref } from "@/lib/use-active-nav-href";
import { DURATION, EASE, SPRING } from "@/lib/motion";
import { cn } from "@/lib/utils";

function MenuToggle({ open, onClick }: { open: boolean; onClick: () => void }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <button
      type="button"
      onClick={onClick}
      aria-haspopup="dialog"
      aria-expanded={open}
      aria-controls="mobile-nav"
      className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-[var(--radius-sm)] border border-border text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)]"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={open ? "close" : "open"}
          initial={prefersReducedMotion ? false : { rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { rotate: 90, opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : DURATION.micro, ease: EASE.out }}
          className="flex"
        >
          {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </motion.span>
      </AnimatePresence>
      <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
    </button>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeHref = useActiveNavHref();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur transition-[padding] duration-200 supports-[backdrop-filter]:bg-background/75",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <Container className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
        <Link
          href="/"
          className="rounded-sm text-base font-semibold tracking-tight text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--focus)]"
        >
          {person.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center justify-center gap-8 md:flex">
          {navigation.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-sm px-1 py-1 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--focus)]",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
                {isActive ? (
                  <motion.span
                    layoutId="nav-active-indicator"
                    className="absolute inset-x-0 -bottom-1.5 h-[2px] rounded-full bg-primary"
                    transition={SPRING.snappy}
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center justify-end gap-3 md:flex">
          <ThemeToggle />
          <Button href="/resume" variant="secondary" size="sm">
            View résumé
          </Button>
        </div>

        <div className="col-start-3 flex items-center justify-end gap-2 md:hidden">
          <ThemeToggle />
          <MenuToggle open={menuOpen} onClick={() => setMenuOpen((current) => !current)} />
        </div>
      </Container>

      <SectionProgress />

      {typeof document !== "undefined"
        ? createPortal(<MobileDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />, document.body)
        : null}
    </header>
  );
}
