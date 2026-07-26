import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/sections/contact-form";
import { contactSection } from "@/content/portfolio";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow={contactSection.eyebrow}
              heading={contactSection.heading}
              intro={contactSection.body}
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={`mailto:${contactSection.emailCta.email}`}>
                {contactSection.emailCta.label}
              </Button>
              <Button href={contactSection.secondaryCta.href} variant="secondary">
                {contactSection.secondaryCta.label}
              </Button>
            </div>
          </div>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
