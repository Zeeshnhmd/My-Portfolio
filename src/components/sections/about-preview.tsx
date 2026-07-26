import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { aboutPreview } from "@/content/portfolio";

export function AboutPreview() {
  return (
    <section className="border-b border-border py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeading eyebrow={aboutPreview.eyebrow} heading={aboutPreview.heading} />
            <div className="mt-6 flex max-w-2xl flex-col gap-4">
              {aboutPreview.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8">
              <Button href={aboutPreview.cta.href} variant="secondary">
                {aboutPreview.cta.label}
              </Button>
            </div>
          </div>
          <blockquote className="rounded-[var(--radius-lg)] border border-border bg-surface-muted/30 p-8">
            <p className="text-balance font-serif text-xl italic text-foreground md:text-2xl">
              “{aboutPreview.pullQuote}”
            </p>
          </blockquote>
        </div>
      </Container>
    </section>
  );
}
