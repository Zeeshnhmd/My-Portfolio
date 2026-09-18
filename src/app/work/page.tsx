import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { WorkShowcaseRow } from "@/components/work/work-showcase-row";
import { caseStudies, contactSection, workItems, workPage } from "@/content/portfolio";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: workPage.heading,
  description: workPage.intro,
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <Container className="py-section-sm md:py-section-lg">
        <SectionHeading as="h1" heading={workPage.heading} intro={workPage.intro} />
        <div className="mt-16 flex flex-col gap-16 md:gap-24">
          {workItems.map((item, index) => (
            <WorkShowcaseRow
              key={item.slug}
              item={item}
              reverse={index % 2 === 1}
              detailed
              outcome={caseStudies[item.slug]?.outcome}
            />
          ))}
        </div>
      </Container>

      <section className="border-t border-border py-section-sm md:py-section-lg">
        <Container>
          <SectionHeading heading={contactSection.heading} intro={contactSection.body} />
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={`mailto:${contactSection.emailCta.email}`}>{contactSection.emailCta.label}</Button>
            <Button href="/contact" variant="secondary">
              {contactSection.secondaryCta.label}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
