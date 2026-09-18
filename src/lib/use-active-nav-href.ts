"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const HEADER_HEIGHT = 72;

const FOOTER_SENTINEL_ID = "footer-sentinel";

const sectionHrefById: Record<string, string> = {
  expertise: "/#expertise",
  skills: "/#skills",
  experience: "/#experience",
  about: "/about",
  contact: "/contact",
};

const sectionIds = Object.keys(sectionHrefById);

export function useActiveNavHref() {
  const pathname = usePathname();
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

  useEffect(() => {
    if (pathname !== "/") return;

    const entryById = new Map<string, IntersectionObserverEntry>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entryById.set(entry.target.id, entry);
        }

        const footerEntry = entryById.get(FOOTER_SENTINEL_ID);
        if (footerEntry?.isIntersecting) {
          setActiveSectionId("contact");
          return;
        }

        let closest: IntersectionObserverEntry | null = null;
        let closestDistance = Infinity;

        for (const id of sectionIds) {
          const entry = entryById.get(id);
          if (!entry || !entry.isIntersecting) continue;
          const distance = Math.abs(entry.boundingClientRect.top - HEADER_HEIGHT);
          if (distance < closestDistance) {
            closestDistance = distance;
            closest = entry;
          }
        }

        if (closest) setActiveSectionId(closest.target.id);
      },
      {
        rootMargin: `-${HEADER_HEIGHT}px 0px -55% 0px`,
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    const elements = [...sectionIds, FOOTER_SENTINEL_ID]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  if (pathname !== "/") {
    const match = navigationRouteMatch(pathname);
    return match;
  }

  return activeSectionId ? sectionHrefById[activeSectionId] ?? null : null;
}

function navigationRouteMatch(pathname: string) {
  if (pathname === "/work" || pathname.startsWith("/work/")) return "/work";
  if (pathname === "/about") return "/about";
  if (pathname === "/contact") return "/contact";
  return null;
}
