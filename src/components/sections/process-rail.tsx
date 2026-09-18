"use client";

import { useRef, useState, type ReactNode } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { RAIL_SCROLL_OFFSET } from "@/lib/motion";

export function ProcessRail({
  stepCount,
  children,
}: {
  stepCount: number;
  children: (activeIndex: number) => ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: RAIL_SCROLL_OFFSET,
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const nextIndex = Math.min(stepCount - 1, Math.max(0, Math.floor(value * stepCount)));
    setActiveIndex(nextIndex);
  });

  return (
    <div ref={containerRef}>
      <div className="flex flex-col">{children(activeIndex)}</div>
    </div>
  );
}
