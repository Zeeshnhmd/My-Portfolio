import { Container } from "@/components/ui/container";
import { engineeringPerspective } from "@/content/portfolio";

export function EngineeringPerspective() {
  return (
    <section className="border-b border-border bg-surface-muted/30 py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-balance font-serif text-3xl italic text-foreground md:text-4xl">
            {engineeringPerspective.heading}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">{engineeringPerspective.copy}</p>
          <p className="mt-4 text-muted-foreground">{engineeringPerspective.supportingCopy}</p>
        </div>
      </Container>
    </section>
  );
}
