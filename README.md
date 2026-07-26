Portfolio site for Zeeshan Ahmad, built with Next.js (App Router), TypeScript, Tailwind CSS, and Motion for React.

## Local setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Useful scripts:

```bash
npm run dev        # start the dev server
npm run build      # production build
npm run start      # run a production build locally
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in what applies:

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical URL used for metadata, `sitemap.xml`, `robots.txt` and Open Graph tags. Defaults to `http://localhost:3000` if unset — set this to the real production domain before deploying. |
| `RESEND_API_KEY` | Optional | Enables the contact form to actually send email via [Resend](https://resend.com). |
| `RESEND_FROM_EMAIL` | Optional | Verified "from" address in your Resend account. |
| `RESEND_TO_EMAIL` | Optional | Inbox that receives contact-form submissions. Defaults to the site owner's email. |

## Contact-form configuration

The form at `/contact` (and embedded on the homepage) validates with Zod (`src/lib/contact-schema.ts`) and submits through a Server Action (`src/app/actions/contact.ts`). It has three tiers of behavior:

1. **Not configured** (default): if `RESEND_API_KEY` or `RESEND_FROM_EMAIL` is missing, submissions are validated but not sent, and the form shows a message pointing visitors to the direct email link — it never fakes a successful send.
2. **Configured**: once both variables are set, `src/lib/mailer.ts` sends the message via Resend and the form shows a real success state.
3. **Error**: validation failures, a basic in-memory rate limit (`src/lib/rate-limit.ts`, 5 submissions/minute per IP — swap for a shared store like Upstash Redis before relying on this across multiple server instances), or a thrown error from the mail provider all surface as an accessible, announced error message.

A hidden honeypot field (`website`) silently no-ops bot submissions that fill it in.

## Adding testimonials

Testimonials live in `src/content/portfolio.ts` under `testimonialsSection.testimonials`. The array starts empty on purpose — the section (and its nav entry, if one is ever added) stays fully hidden until it has at least one real entry. To add one, push an object with:

```ts
{
  quote: "...",
  name: "...",
  role: "...",
  company: "...",
  relationship: "...",
  linkedinUrl: "..." // optional
}
```

Never add placeholder, anonymous, or invented testimonials.

## Replacing the conceptual work visuals

Each work card and case study currently shows an abstract SVG diagram (`src/components/work/work-diagram.tsx`), clearly captioned "Conceptual diagram" so it's never mistaken for a real product screenshot. To swap in real (or redacted) screenshots:

1. Add the image(s) to `public/images/`.
2. Replace the `<WorkDiagram />` usage in `src/components/work/work-card.tsx` and `src/components/work/case-study-content.tsx` with a `next/image` component pointing at the new asset.
3. Update or remove the "Conceptual diagram" caption as appropriate.

## The résumé PDF

`/resume` renders an accessible HTML summary from the typed experience data in `src/content/portfolio.ts` regardless of whether a PDF exists. To enable the "Download PDF" button:

1. Add the file at `public/resume/zeeshan-ahmad-resume.pdf`.
2. Set `resumePage.pdfAvailable` to `true` in `src/content/portfolio.ts`.

## Deployment

The project is a standard Next.js App Router app and deploys to any Next.js-compatible host (e.g. Vercel):

1. Set `NEXT_PUBLIC_SITE_URL` (and the `RESEND_*` variables, if using the contact form) in the hosting provider's environment settings.
2. `npm run build` as the build command, default Next.js start command otherwise.
3. Confirm `/sitemap.xml` and `/robots.txt` resolve to the correct production domain after deploying.
