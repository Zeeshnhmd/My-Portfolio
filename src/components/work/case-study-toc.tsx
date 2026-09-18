"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "The challenge" },
  { id: "responsibility", label: "My responsibility" },
  { id: "approach", label: "Approach" },
  { id: "outcome", label: "Outcome" },
  { id: "lessons", label: "Lessons" },
];

export function CaseStudyToc() {
  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (mostVisible) setActiveId(mostVisible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    const elements = sections
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Case study sections" className="hidden lg:block">
      <ol className="sticky top-28 flex flex-col gap-1 border-l border-border pl-4 text-sm">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              aria-current={activeId === section.id ? "true" : undefined}
              className={cn(
                "block py-1 transition-colors",
                activeId === section.id
                  ? "font-medium text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
