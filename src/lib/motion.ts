
export const DURATION = {

  micro: 0.16,

  hover: 0.18,

  reveal: 0.45,

  revealMedia: 0.55,

  page: 0.3,
} as const;

export const EASE = {
  out: "easeOut",
  inOut: "easeInOut",

  revealCurve: [0.22, 1, 0.36, 1],
} as const;

export const SPRING = {

  snappy: { type: "spring", stiffness: 400, damping: 32 } as const,

  panel: { type: "spring", stiffness: 260, damping: 30 } as const,

  gentle: { type: "spring", stiffness: 300, damping: 28 } as const,

  scrollSmooth: { stiffness: 300, damping: 40, restDelta: 0.001 } as const,
};

export const VIEWPORT_ONCE = { once: true, margin: "-80px" } as const;

export const RAIL_SCROLL_OFFSET: ["start 0.75", "end 0.4"] = ["start 0.75", "end 0.4"];
