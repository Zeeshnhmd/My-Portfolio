import type { Metadata } from "next";
import { FileDown, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { aboutPage, capabilities, experience, resumePage } from "@/content/portfolio";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: resumePage.heading,
  description: resumePage.intro,
  path: "/resume",
});

export default function ResumePage() {
  return (
    <Container className="py-20">
      <SectionHeading as="h1" heading={resumePage.heading} intro={resumePage.intro} />

      <div className="mt-8 flex flex-wrap items-center gap-4">
        {resumePage.pdfAvailable ? (
          <Button href={resumePage.pdfPath}>
            <FileDown aria-hidden="true" className="h-4 w-4" />
            Download PDF
          </Button>
        ) : (
          // TODO: add public/resume/zeeshan-ahmad-resume.pdf and set
          // resumePage.pdfAvailable to true in src/content/portfolio.ts.
          <Button disabled title="Résumé PDF coming soon">
            <FileDown aria-hidden="true" className="h-4 w-4" />
            Download PDF
          </Button>
        )}
        <Button href="/contact" variant="secondary">
          <Mail aria-hidden="true" className="h-4 w-4" />
          Contact me
        </Button>
      </div>
      {!resumePage.pdfAvailable ? (
        <p className="mt-3 text-sm text-muted-foreground">
          A downloadable PDF isn&apos;t available yet — the summary below covers the same experience.
        </p>
      ) : null}

      <div className="mt-16 flex flex-col gap-12">
        <section>
          <h2 className="text-xl font-semibold text-foreground">Experience</h2>
          <ol className="mt-6 flex flex-col divide-y divide-border border-t border-border">
            {experience.map((item) => (
              <li key={item.company} className="grid gap-2 py-6 sm:grid-cols-[1fr_2fr] sm:gap-8">
                <div>
                  <p className="font-semibold text-foreground">{item.company}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.role}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.dates}</p>
                </div>
                <p className="text-sm text-muted-foreground sm:text-base">{item.summary}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Expertise</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {capabilities.map((capability) => (
              <div key={capability.title}>
                <h3 className="font-semibold text-foreground">{capability.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{capability.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="text-xl font-semibold text-foreground">Education</h2>
          <p className="mt-3 text-sm text-muted-foreground">{aboutPage.education}</p>
        </section>
      </div>
    </Container>
  );
}
