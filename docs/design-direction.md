# Design direction

## Active palette - Midnight Copper

Implemented as the default in `src/app/globals.css`. Keeps the professional blue direction and adds a restrained warm accent (`--accent`) used sparingly for status dots, small highlights and selected details. Blue (`--primary`) remains the primary action colour.

Contrast was validated against WCAG AA (4.5:1 for normal text) for every text/background and text/UI-state pairing in both modes; the tightest pairing (light-mode accent-foreground on accent) measures 4.58:1. Decorative dividers (`--border` against `--background`) are intentionally low-contrast, since they are spacing cues, not required-to-perceive UI boundaries - the brief explicitly asks to avoid borders around every container and lean on surface contrast instead.

## Alternative A - Atlantic Mint

Documented only, not exposed as a public theme.

- Dark: background `#071A22`, surface `#0E2832`, foreground `#F1FAF8`, muted-foreground `#A7C0BE`, primary `#40C9A2`, accent `#6EB7FF`
- Light: background `#F4FAF8`, surface `#FFFFFF`, foreground `#102A2A`, muted-foreground `#526B68`, primary `#0B7C69`, accent `#2563A7`

A greener, more organic reading of the same professional/technical direction. Would suit a portfolio wanting to differentiate from the common blue-dominant developer-portfolio look.

## Alternative B - Ink Cobalt

Documented only, not exposed as a public theme.

- Dark: background `#0A0F1C`, surface `#121A2A`, foreground `#F6F7FB`, muted-foreground `#ADB5C6`, primary `#6EA8FE`, accent `#FF7A59`
- Light: background `#F7F8FC`, surface `#FFFFFF`, foreground `#141B2D`, muted-foreground `#5F687A`, primary `#245FD1`, accent `#C94F32`

A cooler, higher-contrast reading with a punchier orange accent. Would suit a more assertive, product-led presentation.

## Typography

- Manrope (`--font-sans`) is the UI and body typeface everywhere.
- Newsreader (`--font-serif`) is reserved for selected editorial phrases only - the "interface is only the visible layer" statement and the About pull-quote - never for entire content sections or body copy.

## Spacing, grid and radius

- `--spacing-section-sm` (4.5rem) and `--spacing-section-lg` (7rem) give every top-level section a consistent vertical rhythm (`py-section-sm md:py-section-lg`) instead of ad hoc `py-20` repeated everywhere.
- Section-level layouts use Tailwind's native 12-column grid (`grid-cols-12`) for asymmetric column spans (e.g. 7/5 hero split, wider proof-metric cards).
- Radius scale: `--radius-sm` (controls, inputs), `--radius-md` (buttons, tags), `--radius-lg` (cards), `--radius-xl` (hero portrait stage, bento and large media panels).
