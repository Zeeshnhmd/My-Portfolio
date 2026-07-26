import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { processIntro, processSteps } from "@/content/portfolio";

export function Process() {
  return (
    <section className="border-b border-border py-20">
      <Container>
        <SectionHeading eyebrow={processIntro.eyebrow} heading={processIntro.heading} />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li key={step.title} className="flex flex-col gap-3">
              <span className="font-serif text-3xl text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
