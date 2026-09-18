"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { navigation, person } from "@/content/portfolio";
import { DURATION, SPRING } from "@/lib/motion";

export function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusFirst = () => {
      dialogRef.current?.querySelector<HTMLElement>('a[href], button:not([disabled])')?.focus();
    };
    const raf = requestAnimationFrame(focusFirst);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused.current?.focus();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          ref={dialogRef}
          onClick={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : DURATION.hover }}
          className="fixed inset-0 z-[100] flex flex-col bg-background md:hidden"
        >
          <motion.div
            initial={{ y: prefersReducedMotion ? 0 : -20, opacity: prefersReducedMotion ? 1 : 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: prefersReducedMotion ? 0 : -20, opacity: prefersReducedMotion ? 1 : 0 }}
            transition={SPRING.panel}
            className="flex flex-1 flex-col"
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <span className="text-base font-semibold text-foreground">{person.name}</span>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] border border-border text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)]"
              >
                <X aria-hidden="true" className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </button>
            </div>

            <Stagger className="flex flex-1 flex-col justify-center gap-2 px-6 py-6" staggerDelay={0.06}>
              {navigation.map((item) => (
                <StaggerItem key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block rounded-[var(--radius-sm)] px-3 py-3 text-2xl font-semibold tracking-tight text-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)]"
                  >
                    {item.label}
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>

            <div className="border-t border-border px-6 py-6">
              <Button href="/resume" variant="primary" className="w-full" onClick={onClose}>
                View résumé
              </Button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
