import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { experience, experienceIntro, resumeLinkCta } from "@/content/portfolio";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-b border-border py-20">
      <Container>
        <SectionHeading eyebrow={experienceIntro.eyebrow} heading={experienceIntro.heading} />
        <ol className="mt-12 flex flex-col divide-y divide-border border-t border-border">
          {experience.map((item) => (
            <li key={item.company} className="grid gap-2 py-8 sm:grid-cols-[1fr_2fr] sm:gap-8">
              <div>
                <p className="text-base font-semibold text-foreground">{item.company}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.role}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.dates}</p>
              </div>
              <p className="text-sm text-muted-foreground sm:text-base">{item.summary}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <Button href={resumeLinkCta.href} variant="secondary">
            {resumeLinkCta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
