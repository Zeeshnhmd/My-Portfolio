import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { AvailabilityPill } from "@/components/ui/availability-pill";
import { FadeIn } from "@/components/motion/fade-in";
import { ScrollCue } from "@/components/motion/scroll-cue";
import { PortraitStage } from "@/components/sections/portrait-stage";
import { hero } from "@/content/portfolio";
import { publicImageExists } from "@/lib/assets";

const HERO_IMAGE_PATH = "images/V2.png";

export function Hero() {
  const hasPortrait = publicImageExists(HERO_IMAGE_PATH);

  return (
    <section className="hero-radial relative overflow-hidden border-b border-border">
      <Container className="grid min-h-[calc(100svh-var(--header-height))] items-center gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-0">
        <div className="lg:col-span-7">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">{hero.eyebrow}</p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
              {hero.headline}
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl">
              {hero.body}
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-4 max-w-2xl text-sm text-muted-foreground">{hero.supportingLine}</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href={hero.primaryCta.href} variant="primary">
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="secondary">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.25}>
            <AvailabilityPill className="mt-8" />
          </FadeIn>
        </div>

        <div className="lg:col-span-5">
          <PortraitStage imageSrc={`/${HERO_IMAGE_PATH}`} hasImage={hasPortrait} />
        </div>
      </Container>

      <ScrollCue />
    </section>
  );
}
