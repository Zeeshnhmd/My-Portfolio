import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/fade-in";
import { SystemLayers } from "@/components/sections/system-layers";
import { engineeringPerspective, hero } from "@/content/portfolio";

export function EngineeringPerspective() {
  return (
    <section className="border-b border-border bg-surface-strong py-section-sm md:py-section-lg">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <FadeIn>
              <h2 className="text-balance font-serif text-3xl italic text-foreground md:text-4xl">
                {engineeringPerspective.heading}
              </h2>
            </FadeIn>
            <FadeIn delay={0.05}>
              <p className="mt-6 text-lg text-muted-foreground">{engineeringPerspective.copy}</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-4 text-muted-foreground">{engineeringPerspective.supportingCopy}</p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <Link
                href={hero.primaryCta.href}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--focus)]"
              >
                {hero.primaryCta.label}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </FadeIn>
          </div>

          <div className="lg:col-span-7">
            <SystemLayers />
          </div>
        </div>
      </Container>
    </section>
  );
}
