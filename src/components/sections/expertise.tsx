import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { capabilities, expertiseIntro } from "@/content/portfolio";

export function Expertise() {
  return (
    <section id="expertise" className="scroll-mt-24 border-b border-border py-20">
      <Container>
        <SectionHeading eyebrow={expertiseIntro.eyebrow} heading={expertiseIntro.heading} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="rounded-[var(--radius-lg)] border border-border bg-surface p-6"
            >
              <h3 className="text-lg font-semibold text-foreground">{capability.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{capability.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
