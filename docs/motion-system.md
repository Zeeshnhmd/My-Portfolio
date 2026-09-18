# Motion system

Single source of truth: [`src/lib/motion.ts`](../src/lib/motion.ts). Every
animated component imports its durations, easing and spring constants from
there instead of hard-coding numbers, so the whole site moves at one
consistent tempo.

## Standards

| Category | Duration | Token | Used by |
| --- | --- | --- | --- |
| Micro interaction (icon swaps) | 160ms | `DURATION.micro` | menu icon, theme icon |
| Button / link hover | 180ms | `DURATION.hover` | button hover colour, drawer overlay fade |
| Section reveal (fade/slide/stagger) | 450ms | `DURATION.reveal` | `FadeIn`, `Stagger`, experience cards |
| Media reveal (clip-path masks) | 550ms | `DURATION.revealMedia` | `Reveal`, hero/about portraits |
| Page transition | 300ms | `DURATION.page` | route change fade |

Springs (`SPRING.snappy` / `.panel` / `.gentle` / `.scrollSmooth`) are all
tuned to settle with at most one gentle overshoot - none of them are
allowed to visibly bounce more than once. Viewport-triggered entrances use
`VIEWPORT_ONCE` (`{ once: true, margin: "-80px" }`) so every animation fires
exactly once per page load, never again on re-scroll. The two scroll-linked
rails (How I Work, Experience) share `RAIL_SCROLL_OFFSET` so their progress
lines fill over the same relative scroll range.

Reduced motion: every component reads `useReducedMotion()` and collapses its
own transition to `duration: 0` (or skips the initial offset entirely) - there
is no separate reduced-motion code path to maintain per component, and the
global `prefers-reduced-motion` media query in `globals.css` forces all
CSS transitions/animations to ~0 as a backstop for anything outside
Framer Motion's control (hover-colour transitions, etc).

## Audit findings (Step 4)

Reviewed every route and the full component list called out in the fixing
brief. Changes made:

- **Reveal duration (700ms → 550ms).** `Reveal` (used for large media: work
  imagery, portraits, case study screenshots) ran longer than every other
  reveal on the site. Brought into the media-reveal band.
- **Page transition (220ms → 300ms).** Was under the 250-400ms target band.
- **Icon-swap micro-interactions (200-250ms → 160ms).** Menu icon and theme
  icon swaps were timed closer to a hover transition than a micro
  interaction; tightened to read as instant feedback.
- **Duplicate reveal animations removed.** `EditorialPortrait` and
  `PortraitStage` already animate themselves (`Reveal`'s clip-path, and
  `PortraitStage`'s own `whileInView`). They were each additionally wrapped
  in an outer `FadeIn` on the homepage, About page and About preview,
  producing two competing opacity animations stacked on the same element.
  The outer wrappers were removed; each media component now owns its single
  entrance animation.
- **Animation on long body paragraphs removed.** The About page faded in
  each body paragraph individually. Paragraphs are now a single static block
  inside one `FadeIn` for the group, rather than per-paragraph motion.
- **Unused `SlideIn` primitive deleted.** It was only used by the old "How I
  Work" layout (removed in Step 1 in favour of `FadeIn` + a fixed rail); no
  other call sites existed.
- **Standardised scroll-linked rail range.** How I Work and Experience each
  hard-coded a slightly different `useScroll` offset; both now read
  `RAIL_SCROLL_OFFSET`.
- **Springs consolidated** into four named presets (`snappy` for
  indicators/underlines, `panel` for the mobile drawer, `gentle` for hover
  lifts, `scrollSmooth` for the header scroll-progress bar) instead of five
  separate ad-hoc stiffness/damping pairs.

Reviewed and left unchanged (already correct or an intentional exception):

- **Header compacting** (padding transition on scroll) - lightweight CSS
  transition, no layout thrash beyond the header itself.
- **Portrait parallax** (pointer-driven tilt on `PortraitStage`) - pointer
  type is restricted to `mouse` and disabled under reduced motion; kept as
  the one deliberate tactile flourish on the site, not "unnecessary"
  parallax since it's confined to a single hero element and never runs on
  touch devices.
- **`SystemLayers` hover/focus dimming** - CSS-only colour/opacity
  transitions, no motion library involved, already instant enough.
- **All `whileInView` entrances already used `once: true`** - nothing found
  that re-animates every time it scrolls back into view.
- **Case study body sections** (Overview/Challenge/Approach/etc.) - plain
  static text, no motion applied; nothing to remove.

## Rules

- Primary content must never be delayed by animation - text and CTAs render
  immediately; motion only affects opacity/position on top of content that's
  already there.
- Nothing above blocks click, scroll or keyboard interaction - all motion is
  purely visual (opacity/transform), never toggles `pointer-events` or
  interactivity while animating.
- Mobile does not get extra motion beyond desktop; the one place motion
  differs by breakpoint (How I Work's alternating card offset) is simpler on
  mobile (no offset at all, only enabled at `lg:`), never more elaborate.
