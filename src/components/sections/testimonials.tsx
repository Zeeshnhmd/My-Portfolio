import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonialsSection } from "@/content/portfolio";

export function Testimonials() {
  const { testimonials } = testimonialsSection;

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="scroll-mt-24 border-b border-border py-section-sm md:py-section-lg">
      <Container>
        <SectionHeading heading={testimonialsSection.heading} intro={testimonialsSection.intro} />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="rounded-[var(--radius-lg)] bg-surface-strong p-6">
              <blockquote className="text-muted-foreground">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-semibold text-foreground">{testimonial.name}</span>
                <span className="text-muted-foreground">
                  {" "}
                  · {testimonial.role}, {testimonial.company}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
