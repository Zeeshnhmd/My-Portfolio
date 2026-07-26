import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutPage, aboutPreview } from "@/content/portfolio";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: aboutPreview.paragraphs[0],
  path: "/about",
});

export default function AboutPage() {
  const paragraphs = [...aboutPreview.paragraphs, ...aboutPage.extraParagraphs];

  return (
    <Container className="py-20">
      <SectionHeading as="h1" heading={aboutPage.heading} />

      <div className="mt-8 flex max-w-2xl flex-col gap-4">
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-12 max-w-2xl">
        <h2 className="text-lg font-semibold text-foreground">Capabilities</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {aboutPage.capabilities.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 max-w-2xl border-t border-border pt-8">
        <h2 className="text-lg font-semibold text-foreground">Education</h2>
        <p className="mt-3 text-sm text-muted-foreground">{aboutPage.education}</p>
      </div>
    </Container>
  );
}
