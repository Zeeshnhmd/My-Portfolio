import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { hero } from "@/content/portfolio";

export function Hero() {
  return (
    <section className="hero-radial relative overflow-hidden border-b border-border">
      <Container className="flex min-h-[80svh] flex-col justify-center py-20 md:py-28">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">{hero.eyebrow}</p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
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
          <p className="mt-8 text-sm text-muted-foreground">{hero.availability}</p>
        </FadeIn>
      </Container>
    </section>
  );
}
