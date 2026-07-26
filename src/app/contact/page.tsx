import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ContactSection } from "@/components/sections/contact-section";
import { SocialLink } from "@/components/ui/social-link";
import { contactSection, socialLinks } from "@/content/portfolio";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: contactSection.heading,
  description: contactSection.body,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <ContactSection />
      <Container className="pb-20">
        <div className="flex flex-wrap gap-6 border-t border-border pt-8">
          {socialLinks.map((link) => (
            <SocialLink key={link.label} href={link.href} label={link.label} />
          ))}
        </div>
      </Container>
    </>
  );
}
