# Codex Prompt — Rebuild Zeeshan Ahmad’s Portfolio

Act as a senior product designer, frontend architect, accessibility specialist, and technical content implementer. Rebuild this portfolio as a production-quality website. Work through the steps in order. After every three steps, run the stated validation checkpoint, fix all issues, report the result briefly, and then continue automatically. Ask me only when a missing asset or fact blocks implementation.

## Non-negotiable direction

- Reposition me as a **Senior Frontend-First Full-Stack Engineer and Technical Lead**.
- Do not recreate the old developer-template look.
- Do not invent metrics, testimonials, clients, technologies, screenshots, or outcomes.
- The design must feel modern, classic, restrained, and premium—not futuristic, neon, glass-heavy, or animation-heavy.
- Use real semantic HTML, keyboard support, visible focus states, reduced-motion support, responsive layouts, loading/error/success states, and strong contrast.
- Do not use a large component library. Build reusable components with Tailwind.
- Keep all editable portfolio copy and project data in one typed content file, not scattered through components.

---

## Step 1 — Inspect and establish the project

1. Inspect the existing repository, assets, routes, package manager, linting, and current deployment setup.
2. Preserve only useful assets and verified links. Do not preserve the existing layout or template styling.
3. Build with:
   - Next.js App Router
   - TypeScript/TSX with strict mode
   - Tailwind CSS using the current official Next.js installation approach
   - Motion for React for selective animation
   - Lucide React for icons
   - `next/font`
4. Prefer Server Components. Add `"use client"` only where interaction requires it.
5. Create a clean structure similar to:

```text
src/
  app/
    page.tsx
    work/page.tsx
    work/[slug]/page.tsx
    about/page.tsx
    resume/page.tsx
    contact/page.tsx
    not-found.tsx
    sitemap.ts
    robots.ts
    layout.tsx
    globals.css
  components/
    layout/
    sections/
    work/
    ui/
  content/portfolio.ts
  lib/
public/
  images/
  resume/
```

6. Add `NEXT_PUBLIC_SITE_URL` support for canonical metadata. Do not hardcode an unconfirmed new domain.

---

## Step 2 — Implement the design system and themes

Use the following Color Hunt references as researched inspiration:

- Light inspiration: [#F9F7F7 · #DBE2EF · #3F72AF · #112D4E](https://colorhunt.co/palette/f9f7f7dbe2ef3f72af112d4e)
- Dark inspiration: [#1B262C · #0F4C75 · #3282B8 · #BBE1FA](https://colorhunt.co/palette/1b262c0f4c753282b8bbe1fa)

Do not copy four colours blindly. Implement these refined semantic tokens so both themes share one professional blue identity and accessible hierarchy.

### Light theme

```css
--background: #F9F7F7;
--surface: #FFFFFF;
--surface-muted: #DBE2EF;
--foreground: #112D4E;
--muted-foreground: #52677D;
--border: #CBD6E4;
--primary: #2E5F9B;
--primary-hover: #244B7C;
--primary-foreground: #FFFFFF;
--focus: #3F72AF;
```

### Dark theme

```css
--background: #111A20;
--surface: #1B262C;
--surface-muted: #24343D;
--foreground: #F3F7FA;
--muted-foreground: #B8C6D1;
--border: #314650;
--primary: #5BA4D1;
--primary-hover: #74B6DC;
--primary-foreground: #07141C;
--focus: #7CC0E8;
```

Requirements:

- Use CSS variables as semantic design tokens.
- Use `Manrope` for UI/body and `Newsreader` only for restrained editorial accents or pull quotes.
- Maximum content width: approximately `1200px`.
- Use strong spacing, fine borders, minimal shadows, and a consistent radius system.
- Default to system theme; persist the user’s selection and prevent theme flash/hydration warnings.
- Theme toggle must have an accessible label and keyboard support.
- Do not use purple, neon effects, excessive gradients, or glassmorphism.
- A very subtle radial highlight is acceptable only in the hero and must work in both themes.

---

## Step 3 — Build the global shell

Build:

- Sticky header that becomes slightly more compact after scrolling.
- Brand text: **Zeeshan Ahmad**
- Navigation: **Work, Expertise, Experience, About, Contact**
- Utility actions: theme toggle and **View résumé**
- Responsive accessible mobile drawer with focus management, Escape handling, and body-scroll lock.
- Reusable `Container`, `SectionHeading`, `Button`, `Tag`, `Metric`, and `SocialLink` components.
- Footer content:
  - **Zeeshan Ahmad**
  - **Senior Frontend-First Full-Stack Engineer and Technical Lead**
  - `zeeshnhmd.1@gmail.com`
  - LinkedIn: `https://www.linkedin.com/in/zeeshanahmad25/`
  - GitHub: `https://github.com/Zeeshnhmd`
  - Text: **Based in India · Open to remote, contract and relocation opportunities**
  - Dynamic copyright year
- Add a skip-to-content link.
- Do not add floating scroll-to-top buttons on every section.

### Validation checkpoint 1 — Steps 1–3

Run and fix:

- Install/build/type-check/lint
- Theme switching and persistence
- No hydration mismatch or theme flash
- Header and mobile menu keyboard behaviour
- Responsive layout at 360px, 768px, 1024px, and wide desktop
- No horizontal overflow
- Semantic landmarks and visible focus states

Then provide a short checkpoint report and continue.

---

## Step 4 — Create the content source of truth

Create `src/content/portfolio.ts` with typed objects for navigation, metrics, work, capabilities, process, experience, testimonials, social links, and contact details. Use the following exact homepage copy.

### Site metadata

**Title:**  
`Zeeshan Ahmad — Senior Full-Stack Engineer & Technical Lead`

**Description:**  
`Senior frontend-first full-stack engineer building scalable, API-driven business platforms with React, Next.js, TypeScript and Node.js.`

### Hero

**Eyebrow:**  
`Senior Frontend-First Full-Stack Engineer · Technical Lead`

**Headline:**  
`I build the systems behind complex business operations.`

**Body:**  
`I design and deliver scalable, API-driven platforms where workflows, permissions, data, validation and business rules must work as one reliable product.`

**Supporting line:**  
`5+ years building production software across compliance, operations, automation and customer-facing platforms.`

**Primary CTA:** `View selected work`  
**Secondary CTA:** `Start a conversation`

**Availability:**  
`Based in India · Open to remote, contract and relocation opportunities`

### Credibility metrics

1. `5+ years` — `Building production software`
2. `5 engineers` — `Led while remaining hands-on`
3. `40+ modules` — `Delivered across business-critical platforms`
4. `100+ APIs` — `Designed, maintained or integrated`
5. `15+ countries` — `Teams supported through EDEN`

### Selected work heading

**Eyebrow:** `Selected work`  
**Heading:** `Complex products, explained through the decisions behind them.`  
**Intro:**  
`A selection of platforms where I owned architecture, delivery, integrations or technical leadership—not just the visible interface.`

### Work cards

#### VerifiX

- Label: `Compliance platform`
- Title: `VerifiX`
- Hook: `Compliance workflows without a fragmented user experience.`
- Description: `I own frontend architecture and delivery for a platform covering KYC, KYB, AML, KYT, sanctions screening and Travel Rule workflows, with 100+ API integrations.`
- Tags: `Frontend ownership`, `Complex validation`, `Role-based access`, `Production releases`
- Route: `/work/verifix`

#### EDEN

- Label: `Operations platform`
- Title: `EDEN`
- Hook: `One platform for complex global operations.`
- Description: `I architected and helped deliver a React, Node.js and MySQL platform used by 50+ employees across 15+ countries, spanning 40+ production modules and 100+ REST APIs.`
- Tags: `Platform architecture`, `Full-stack delivery`, `Technical leadership`, `Workflow systems`
- Route: `/work/eden`

#### Raven

- Label: `Workflow automation`
- Title: `Raven`
- Hook: `Turning repetitive sales operations into a controlled workflow.`
- Description: `I built scheduled reporting and email automation handling 1,000+ emails per month and eliminating 18 hours of manual sales-operations work each week.`
- Tags: `Automation`, `Scheduling`, `Business rules`, `Operational reliability`
- Route: `/work/raven`

---

## Step 5 — Build the homepage hero, proof, and selected work

Implement these sections in this order:

1. Hero
2. Credibility metrics
3. Selected work

Requirements:

- Hero must fill most, but not necessarily all, of the initial viewport.
- Use strong typography and restrained motion: small opacity/translate entrances only.
- Do not use a generic avatar, floating technology icons, code rain, or a fake dashboard.
- For work cards, use abstract system diagrams or neutral visual placeholders built from CSS/SVG. Clearly label them as conceptual visuals; do not pretend they are real product screenshots.
- Each work card must work as a proper link, expose focus styles, and have a meaningful accessible name.
- Avoid carousels. Show the three projects in a responsive editorial grid.
- Metrics must not use animated counting.

---

## Step 6 — Build process, expertise, and engineering perspective

### How I work

**Eyebrow:** `How I work`  
**Heading:** `Engineering the whole workflow—not only the happy path.`

1. **Understand the workflow**  
   `Start with users, operations, permissions, dependencies, edge cases and business constraints.`

2. **Design the system**  
   `Create clear component boundaries, predictable state, reusable patterns, validation architecture and consistent API integration.`

3. **Deliver safely**  
   `Plan loading, empty, error, permission, retry and failure states before they become production incidents.`

4. **Own the outcome**  
   `Stay involved through implementation, review, deployment, release, production support and iteration.`

### Expertise

**Eyebrow:** `Expertise`  
**Heading:** `Frontend depth with full-stack delivery context.`

#### Product Frontend Engineering

`React, Next.js, TypeScript, complex forms, data-heavy interfaces, responsive systems, accessibility, performance and production states.`

#### Frontend Architecture

`Reusable component systems, state management, API integration standards, modular applications, permission-aware UI, Storybook and design-system thinking.`

#### Full-Stack Delivery

`Node.js, Express, REST API design, MySQL, Sequelize, MongoDB, authentication, role-based access, scheduled jobs and workflow automation.`

#### Technical Leadership

`Architecture decisions, code reviews, sprint delivery, mentoring, releases, stakeholder communication and production support.`

### Engineering perspective

**Heading:** `The interface is only the visible layer.`

**Copy:**  
`Most business software is not difficult because of the screen. It is difficult because dozens of APIs, permissions, workflows, validation rules and edge cases must behave like one coherent product. That is the kind of engineering work I enjoy.`

**Supporting copy:**  
`I work best where thoughtful architecture can make complicated operational work feel straightforward.`

### Validation checkpoint 2 — Steps 4–6

Validate and fix:

- All copy comes from typed content data
- No unsupported or invented claim
- Correct heading hierarchy
- Work-card navigation
- Motion respects `prefers-reduced-motion`
- No layout shift or overflowing text
- Light/dark contrast, including buttons, links, muted text and focus rings
- Build/type-check/lint

Provide a short checkpoint report and continue.

---

## Step 7 — Build experience, about, and testimonials

### Experience

**Eyebrow:** `Experience`  
**Heading:** `From frontend delivery to product ownership and technical leadership.`

Use a clean vertical list, not an alternating timeline.

1. **ITSEC**  
   Role: `Full Stack Developer / Software Engineer`  
   Dates: `Mar 2026 — Present`  
   Summary: `Own frontend architecture and delivery for VerifiX, including 100+ API integrations, deployments and production releases. Built core compliance workflows and major Nexus modules.`

2. **Supreme Components International**  
   Role: `Web Solution Engineer · Frontend Engineer`  
   Dates: `Jan 2023 — Mar 2026`  
   Summary: `Led a five-engineer team while remaining hands-on. Architected and delivered EDEN, workflow automation and 40+ production modules across a React, Node.js and MySQL platform.`

3. **Spark Eighteen**  
   Role: `Frontend Engineer`  
   Dates: `Jan 2022 — Jan 2023`  
   Summary: `Built React and Next.js product features, reusable Storybook components and responsive API-integrated interfaces across multiple client products.`

4. **K.S DIGIPOUCH · Harley-Davidson client**  
   Role: `Frontend Engineer`  
   Dates: `Nov 2020 — Dec 2021`  
   Summary: `Built responsive React interfaces from Figma designs and delivered reusable production pages, components, enhancements and defect fixes.`

Add a link: **View full résumé**

### About preview

**Eyebrow:** `About`  
**Heading:** `I bring structure to products with a lot happening beneath the surface.`

**Paragraph 1:**  
`I started in frontend engineering, translating product ideas into responsive interfaces. Over time, the work expanded into architecture, API design, workflow automation, production releases and leading engineers.`

**Paragraph 2:**  
`Today I work across the stack, with the frontend as my strongest layer. I enjoy products where the interface sits on top of complex permissions, business rules and operational workflows—and where thoughtful engineering can make that complexity feel straightforward.`

**Pull quote:**  
`Good software is a little like good biryani: the layers matter, every ingredient has a role, and adding more does not automatically make it better.`

CTA: `More about me`

### Testimonials

Build a polished data-driven `TestimonialsSection`, but do not invent quotations.

- Heading: `What people say about working with me`
- Intro: `Perspectives from people who have worked with me across engineering, delivery and product operations.`
- Start with `testimonials: []`.
- When the array is empty, hide the section and its navigation link completely.
- Add a clear code comment showing the required fields: quote, name, role, company, relationship, optional LinkedIn URL.
- Never ship placeholder or anonymous testimonials.

---

## Step 8 — Build contact and footer completion

### Contact section

**Eyebrow:** `Contact`  
**Heading:** `Have a complex product or workflow to untangle?`

**Body:**  
`I’m open to senior engineering roles, contract work and conversations about frontend architecture, full-stack platforms and product delivery.`

**Direct email CTA:** `Email me`  
Email: `zeeshnhmd.1@gmail.com`

**Secondary CTA:** `Connect on LinkedIn`

Create a concise form with:

- Name
- Work email
- Company (optional)
- What are you building?
- Message
- Submit button: `Send message`

Requirements:

- Use Zod validation.
- Include idle, submitting, success and error states.
- Use a server action or route handler with a provider adapter.
- Prefer Resend only through environment variables; never expose keys.
- If mail configuration is absent, fail gracefully and keep the direct email option fully usable.
- Add a hidden honeypot and basic rate-limit-ready structure.
- Announce form results accessibly.

Finish the footer using the content specified in Step 3.

---

## Step 9 — Build dedicated routes and exact case-study content

Create `/work`, `/work/[slug]`, `/about`, `/resume`, and `/contact`.

### `/work`

Heading: `Selected work`  
Intro: `A closer look at the product problems, architectural decisions and delivery responsibilities behind my work.`

Show VerifiX, EDEN and Raven. Do not add tutorial projects.

### Reusable case-study layout

Each case study must include:

- Overview
- The challenge
- My responsibility
- Approach
- Outcome
- Lessons
- Project navigation
- Clear confidentiality note where relevant

Do not create fake screenshots. Use diagrams, redacted assets supplied later, or clearly marked conceptual visuals.

### `/work/verifix`

**Overview:**  
`VerifiX is a compliance platform bringing KYC, KYB, AML, KYT, sanctions screening, Travel Rule and related workflows into one product.`

**The challenge:**  
`The frontend must support validation-heavy journeys, multiple user roles, complex forms and a large integration surface without becoming inconsistent or difficult to maintain.`

**My responsibility:**  
`I own frontend architecture and delivery end to end, including reusable components, form and validation architecture, application state, role-based access, API integration, deployments and production releases.`

**Approach:**
- `Create reusable patterns for complex forms and shared workflows.`
- `Keep permissions and role-based behaviour consistent across modules.`
- `Standardise API, loading, empty, error and validation states.`
- `Design the architecture to remain maintainable as workflows expand.`

**Outcome:**  
`A reusable frontend foundation supporting 100+ API integrations and a growing set of compliance workflows, with ownership extending through deployment and production delivery.`

**Lesson:**  
`In compliance products, clarity and predictable failure handling are part of correctness—not visual polish added at the end.`

### `/work/eden`

**Overview:**  
`EDEN is a React, Node.js, Express and MySQL operations platform used by 50+ employees across 15+ countries.`

**The challenge:**  
`A growing set of operational workflows needed to work as one maintainable platform rather than disconnected modules with inconsistent patterns.`

**My responsibility:**  
`I architected and delivered core platform capabilities, built and led delivery of 40+ production modules, designed and maintained 100+ REST APIs, and later led a five-engineer team while remaining hands-on.`

**Approach:**
- `Migrate and standardise the frontend around reusable components and shared hooks.`
- `Create consistent state-management and API-integration patterns.`
- `Model operational workflows across order management, inventory, queues, automation and data extraction.`
- `Combine architecture decisions, code reviews, mentoring, sprint delivery and releases.`

**Outcome:**  
`A business-critical platform supporting distributed teams, 40+ production modules and over 100 REST APIs through a more consistent modular architecture.`

**Lesson:**  
`Internal software becomes a product when reliability, consistency and maintainability receive the same attention as feature delivery.`

### `/work/raven`

**Overview:**  
`Raven is a scheduled reporting and email-automation workflow built to reduce repetitive sales operations while preserving control over recipients, business rules and delivery.`

**The challenge:**  
`The workflow had to coordinate supplier selection, contacts, brands, batching, scheduling, email content and failure states without creating duplicate or unsafe sends.`

**My responsibility:**  
`I designed and built the workflow across frontend and backend concerns, including selection rules, review and send flows, scheduling behaviour, reusable email handling and production safeguards.`

**Approach:**
- `Separate BOM setup, supplier setup, review and sending into clear stages.`
- `Enforce supplier, contact, brand and batch rules before scheduling.`
- `Preserve per-recipient content while supporting controlled wording changes.`
- `Design durable statuses, retries, idempotency and clear failure feedback.`

**Outcome:**  
`Automation handling 1,000+ emails per month and eliminating 18 hours of manual sales-operations work each week.`

**Lesson:**  
`Automation is valuable only when operators can understand, verify and recover from what the system is doing.`

### Validation checkpoint 3 — Steps 7–9

Validate and fix:

- All routes and internal links
- Dynamic static generation for known case-study slugs
- Proper 404 for unknown slugs
- No fictional testimonials or screenshots
- Form validation and graceful unconfigured state
- Case-study copy matches the content source
- Mobile readability and code-splitting
- Build/type-check/lint

Provide a short checkpoint report and continue.

---

## Step 10 — Finish About, résumé, contact, and 404 pages

### `/about`

Heading: `Engineering complex products with calm, practical ownership.`

Use the two About paragraphs from Step 7, then add:

`I have worked across customer-facing products, internal operations, compliance technology, workflow automation and data-heavy business applications. My strongest contribution is usually at the point where product requirements, frontend architecture, APIs and operational reality meet.`

`I remain hands-on with implementation while contributing to technical decisions, code quality, mentoring, delivery planning and production support.`

Add a compact capability list:

- `Frontend architecture`
- `Full-stack product delivery`
- `Workflow automation`
- `Technical leadership`
- `Production ownership`

Education, shown compactly:

`Bachelor of Technology in Electronics and Communication Engineering — Chaibasa Engineering College, 2017–2021`

### `/resume`

- Heading: `Résumé`
- Intro: `A concise overview of my experience, technical capabilities and production work.`
- Provide **Download PDF** and **Contact me** actions.
- Render an accessible browser summary from the typed experience data.
- Use the supplied résumé PDF from `public/resume/`. If it is missing, create a clear TODO and ask me for the asset; do not generate a fake résumé.

### `/contact`

Reuse the contact section as a full page with additional direct LinkedIn and GitHub links.

### `not-found.tsx`

Heading: `This route does not exist.`  
Body: `The page may have moved, or the address may be incorrect.`  
Actions: `Return home` and `View selected work`

---

## Step 11 — Add SEO, structured data, and production details

Implement:

- Route metadata and canonical URLs
- Open Graph and social preview metadata
- `sitemap.ts`
- `robots.ts`
- Favicon/app icons placeholders if final assets are unavailable
- Person structured data using only verified facts
- Meaningful page titles and descriptions
- Optimised `next/image`
- No indexation of development-only routes
- External links with safe attributes where appropriate
- Contact and social links with accessible names
- A small README section covering:
  - Local setup
  - Environment variables
  - Contact-form configuration
  - How to add testimonials
  - How to replace conceptual work visuals
  - Deployment steps

Do not add a blog or insights section yet.

---

## Step 12 — Final polish and complete validation

Animation rules:

- Use Motion only for restrained reveal, hover and layout transitions.
- Prefer opacity and transform.
- No scroll-jacking, custom cursor, constant floating, excessive parallax, text scrambling or page-loader theatre.
- Respect reduced motion everywhere.

Final quality requirements:

- Responsive from 320px upward
- No horizontal overflow
- Keyboard-operable navigation, theme toggle, cards and form
- Accessible focus, contrast, labels and status messages
- No hydration warnings or console errors
- Fast initial load and minimal client JavaScript
- No unused dependencies
- No duplicated content
- No fake product UI
- No unsupported claims
- No empty testimonial section
- No generic phrases such as “passionate developer,” “pixel-perfect,” or “turning ideas into reality”

### Validation checkpoint 4 — Steps 10–12

Run and fix:

```bash
npm run lint
npm run typecheck
npm run build
```

If the project uses different scripts, use the equivalent commands.

Also validate:

- Every route in light and dark mode
- 320px, 360px, tablet, laptop and wide desktop layouts
- Keyboard-only navigation
- Reduced-motion mode
- Form success/error/unconfigured states
- Metadata, sitemap and robots output
- Broken links and missing assets
- Console errors and hydration warnings
- Lighthouse-oriented accessibility, performance, SEO and best practices

Finish with a concise report containing:

1. What was built
2. Routes created
3. Important architectural decisions
4. Validation results
5. Environment variables or assets I still need to provide
6. Any honest limitations—do not claim something was tested if it was not
