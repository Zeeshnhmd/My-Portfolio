# UI/UX Upgrade Plan

Audit performed against the current codebase before any edits. This is an in-place upgrade of the existing Next.js app - no new app, no duplicate components.

## Runtime issue ("1 Issue" indicator)

Captured `.next/dev/logs/next-development.log` during a live session. The only hydration error present is:

```
A tree hydrated but some attributes of the server rendered HTML didn't match...
- src="chrome-extension://dbjbempljhcmhlfpfacalomonjpalpko/scripts/inspector.js"
```

This is a browser extension injecting a `<script>` into `<head>` before React hydrates - not application code. A full repo grep found no `typeof window` branches, `Math.random()`, `Date.now()`, or locale-dependent formatting in any client component that could cause a real mismatch. `Footer`'s `new Date().getFullYear()` runs in a Server Component only, so it never re-executes on the client and cannot mismatch.

Action: no application code changes needed for this specific error. Verification will be done in a clean browser profile with extensions disabled to confirm zero console errors, since this one is environmental, not a code defect. If any other console/hydration warning appears during manual testing, it will be treated as a real bug and fixed.

## Mobile menu z-index failure

`Header` is `position: sticky` with `z-40`, which makes it a CSS stacking context. `MobileDrawer` is rendered as a child of `<header>` (`fixed inset-0 z-50`). Because it is nested inside the header's stacking context, any later sibling in the DOM that creates its own stacking context (a `motion` element with a transform, a future sticky-stack section, etc.) can paint above the header - and therefore above the drawer nested inside it, even though the drawer's own `z-50` looks high in isolation.

Fix: move the mobile overlay to be a sibling of `<header>` at the layout root (not nested inside it), and give it the highest z-index in an explicit z-index scale (header below dropdowns below the mobile overlay).

## Visually flat sections / repeated spacing

Nearly every section follows the same `border-b border-border py-20` shell, and cards lean on `border border-border` boxes rather than surface contrast (`Expertise` capability cards, `Testimonials` cards, `WorkCard`, the About pull-quote). `SectionHeading` is reused with no variation in rhythm between sections. This matches the brief's description of monotony and will be addressed by the new spacing scale, 12-column grid and surface-contrast approach in Step 2, applied section-by-section in later steps.

## Theme toggle

Current control cycles system -> light -> dark using Monitor/Sun/Moon icons (the "monitor-looking" button called out in the brief). Persistence already works via `localStorage` + a blocking inline script (`src/lib/theme.ts`) that prevents flash-of-wrong-theme; this mechanism is sound and will be kept. Only the button UI changes to an animated two-state sun/moon control that defaults to system preference on first visit.

## Conceptual work diagrams

`WorkDiagram` (`src/components/work/work-diagram.tsx`) is a single abstract node-and-line SVG shared by all three projects; the `variant` prop only shifts two y-coordinates, so the three cards look like the same diagram. Step 7 replaces this with a `ProjectMedia` component with three distinct per-project variants (VerifiX compliance states, EDEN operations map, Raven email workflow) plus an `imageSrc` override path for later replacement with real images.

## Missing image slots

- Hero (`src/components/sections/hero.tsx`) is a single centered text column with no portrait side at all - Step 5 adds the `PortraitStage` component and right-column layout.
- About preview and `/about` have no portrait card - Step 11 adds one, on a different crop than the hero.
- Case-study pages have no cover media slot - Step 7 adds a top cover-media placeholder.

## Other findings folded into later steps

- `lint`, `typecheck`, and `build` all pass cleanly today - the baseline is clean, so checkpoints only need to catch regressions.
- Two occurrences of `Senior Frontend-First Full-Stack Engineer` exist, both in `src/content/portfolio.ts` (`person.role`, `hero.eyebrow`) - single source of truth, so the swap is a two-line change plus a search for any other phrasing that implies "frontend-first."
- Em dashes/en dashes appear throughout `src/content/portfolio.ts` copy (dates, several sentences) and in a few JSX literals (`work-card.tsx` aria-label, `resume/page.tsx`, `contact-form.tsx`). Curly quotes appear in `about-preview.tsx`, `testimonials.tsx`, and one curly apostrophe in `contactSection.body`. All will be normalized to straight ASCII in Step 12, without touching the intentional middle dot in the professional title.
- Contact form architecture (honeypot, rate limiting, zod validation, `useActionState`, graceful "not configured" state via Resend) is solid and will be preserved as-is; only visual treatment changes in Step 12.
- `testimonials.tsx` already correctly renders `null` when the testimonials array is empty (no invented testimonials) - no change needed there beyond the quote-character fix.

## Sequencing

Steps 2-12 proceed in the order defined in the brief, with validation checkpoints after steps 3, 6, and 9, and a final checkpoint after step 12. Each checkpoint runs `npm run lint`, `npm run typecheck`, `npm run build`, plus the manual checks listed in the brief for that checkpoint.
