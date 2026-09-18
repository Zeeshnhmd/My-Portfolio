# Fixing Stage 3 Plan

## Rendered baseline

- Audited `/`, `/about`, `/work`, `/work/verifix`, `/work/eden`, `/work/raven`, `/contact`, and `/resume` from the running Next.js development server.
- The existing implementation preserves all expected routes and verified content, but the home process, skills, and experience sections still use repeated card compositions.
- The About page is the earlier split layout with a deliberate 4:5 portrait placeholder because `public/images/zeeshan-about.webp` is not present.
- Theme initialization is inline and stable. Existing focus styles and reduced-motion overrides are present.
- The visible development-only surface is Next.js development tooling; no application error page or failed route was found in the server render.
- Browser automation is unavailable in this session, so viewport and interaction validation will combine rendered route checks, responsive CSS inspection, build diagnostics, and the running local server.

## Focused implementation

1. Replace How I Work with a 5/7 sticky process map and editorial scroll chapters, with a static mobile/reduced-motion sequence.
2. Convert Core Stack to the required 7/5 and 8/4 bento spans, adding category-specific CSS motifs without hiding skills.
3. Rebuild Experience as a 4/8 career navigator and editorial chapters, preserving every verified role and highlight.
4. Recompose `/about` into an editorial hero, progression band, four-area bento, focused principle, education, and CTA.
5. Add a theme-aware footer wash, interactive linked wordmark, and one reusable semantic `StatusDot`.
6. Validate lint, type-check, production build, routes, overflow safeguards, focus behavior, themes, and reduced motion at both checkpoints.

