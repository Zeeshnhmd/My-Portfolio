import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonialsSection } from "@/content/portfolio";

/**
 * Required fields per testimonial: quote, name, role, company,
 * relationship, and an optional linkedinUrl (see src/content/portfolio.ts).
 * Never add placeholder or anonymous testimonials. This section (and its
 * nav entry, if one is ever added) must stay fully hidden whenever
 * testimonialsSection.testimonials is empty.
 */
export function Testimonials() {
  const { testimonials } = testimonialsSection;

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="scroll-mt-24 border-b border-border py-20">
      <Container>
        <SectionHeading heading={testimonialsSection.heading} intro={testimonialsSection.intro} />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="rounded-[var(--radius-lg)] border border-border bg-surface p-6"
            >
              <blockquote className="text-muted-foreground">“{testimonial.quote}”</blockquote>
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
