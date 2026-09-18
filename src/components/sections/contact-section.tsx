import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { AvailabilityPill } from "@/components/ui/availability-pill";
import { ContactForm } from "@/components/sections/contact-form";
import { FadeIn } from "@/components/motion/fade-in";
import { contactSection } from "@/content/portfolio";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-surface-strong py-section-sm md:py-section-lg">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow={contactSection.eyebrow}
              heading={contactSection.heading}
              intro={contactSection.body}
            />

            <AvailabilityPill className="mt-6" />

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={`mailto:${contactSection.emailCta.email}`}>
                {contactSection.emailCta.label}
              </Button>
              <Button href={contactSection.secondaryCta.href} variant="secondary">
                {contactSection.secondaryCta.label}
              </Button>
            </div>
          </div>

          <FadeIn delay={0.05}>
            <div className="rounded-[var(--radius-xl)] bg-surface p-6 shadow-sm md:p-8">
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
