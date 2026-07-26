import { Hero } from "@/components/sections/hero";
import { CredibilityMetrics } from "@/components/sections/credibility-metrics";
import { SelectedWork } from "@/components/sections/selected-work";
import { Process } from "@/components/sections/process";
import { Expertise } from "@/components/sections/expertise";
import { EngineeringPerspective } from "@/components/sections/engineering-perspective";
import { Experience } from "@/components/sections/experience";
import { AboutPreview } from "@/components/sections/about-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <Hero />
      <CredibilityMetrics />
      <SelectedWork />
      <Process />
      <Expertise />
      <EngineeringPerspective />
      <Experience />
      <AboutPreview />
      <Testimonials />
      <ContactSection />
    </>
  );
}
