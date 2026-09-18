# Resume page audit

## Findings

- The header and route structure were consistent with the rest of the site, but the page lacked the requested résumé eyebrow and used a generic hero.
- The PDF action depended on a manually maintained boolean and could drift from the actual file state. No résumé PDF currently exists in `public/resume`.
- Experience already used the verified shared data, but the current role had no visual marker.
- Expertise used shared copy but a separate, unrelated presentation without the homepage icons, surfaces, borders, tags or reusable card component.
- Core Skills were missing even though a typed, complete skills source already exists.
- Education used the verified shared copy and appeared in the correct broad position.
- Dark-mode tokens were inherited correctly. Print-specific rules were absent, leaving navigation, actions and decorative surfaces in print output.
- Mobile layout was structurally sound, but the hero metadata and denser document hierarchy were missing.

## Improvements implemented

- Added the specified résumé hero copy, actions and compact profile metadata.
- Made PDF availability derive from the real file at build/render time; the unavailable action is disabled and explained accessibly.
- Kept Experience on the shared data source and added a restrained current-role marker.
- Extracted a shared `ExpertiseCard` with default and compact variants so the homepage and résumé use the same icons, content and design language.
- Added Core Skills from the existing typed `skillCategories` source with every skill visible.
- Preserved the verified Education content after skills.
- Added print rules for high-contrast, uncluttered output and reduced page-break fragmentation.
