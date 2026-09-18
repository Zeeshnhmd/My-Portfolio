import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { EditorialPortrait } from "@/components/sections/editorial-portrait";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Button } from "@/components/ui/button";
import { Blocks, Rocket, ServerCog, Users } from "lucide-react";
import { aboutPage, aboutPreview } from "@/content/portfolio";
import { pageMetadata } from "@/lib/seo";
import { ABOUT_PORTRAIT_PATH, publicImageExists } from "@/lib/assets";
import { AvailabilityPill } from "@/components/ui/availability-pill";
import { CardPattern, type CardPatternVariant } from "@/components/ui/card-pattern";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: aboutPreview.paragraphs[0],
  path: "/about",
});

export default function AboutPage() {
  const hasPortrait = publicImageExists(ABOUT_PORTRAIT_PATH);
  const bringItems = [
    {
      title: "Architecture",
      copy: "Reusable systems, predictable state and permission-aware interfaces.",
      label: "Systems",
      Icon: Blocks,
      pattern: "modules" as CardPatternVariant,
      span: "md:col-span-7",
    },
    {
      title: "Delivery",
      copy: "Full-stack execution from APIs and workflows to production releases.",
      label: "Execution",
      Icon: Rocket,
      pattern: "workflow" as CardPatternVariant,
      span: "md:col-span-5",
    },
    {
      title: "Leadership",
      copy: "Code reviews, mentoring, planning and calm team ownership.",
      label: "Teams",
      Icon: Users,
      pattern: "nodes" as CardPatternVariant,
      span: "md:col-span-5",
    },
    {
      title: "Production ownership",
      copy: "Loading, error, permission, release and support states treated as part of the product.",
      label: "Reliability",
      Icon: ServerCog,
      pattern: "lines" as CardPatternVariant,
      span: "md:col-span-7",
    },
  ];

  return (
    <>
      <section className="border-b border-border py-12 md:py-16">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">About</p>
              <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
                {aboutPage.heading}
              </h1>

              <FadeIn>
                <div className="mt-8 max-w-2xl space-y-5">
                  {aboutPreview.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="leading-7 text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </FadeIn>
              <AvailabilityPill className="mt-7 hidden lg:flex" />
            </div>
            <div className="lg:col-span-5">
              <EditorialPortrait
                imageSrc={`/${ABOUT_PORTRAIT_PATH}`}
                hasImage={hasPortrait}
                className="mx-auto max-w-sm lg:max-w-none"
              />
            </div>
            <AvailabilityPill className="lg:hidden" />
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-section-sm md:py-20">
        <Container>
          <FadeIn>
            <div className="grid gap-8 border-t border-border pt-8 md:grid-cols-12 md:gap-12">
              <h2 className="text-balance font-serif text-3xl text-foreground md:col-span-5 md:text-4xl">
                Frontend was the starting point, not the boundary.
              </h2>
              <div className="space-y-5 md:col-span-7">
                {aboutPage.extraParagraphs.map((paragraph) => (
                  <p key={paragraph} className="max-w-2xl leading-7 text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="border-b border-border py-section-sm md:py-section-lg">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">What I bring</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Calm ownership across the product stack.
          </h2>
          <Stagger className="mt-12 grid gap-4 md:grid-cols-12" staggerDelay={0.06}>
            {bringItems.map(({ title, copy, label, Icon, pattern, span }) => {
              return (
                <StaggerItem key={title} className={span}>
                  <article tabIndex={0} className="group relative h-full min-h-56 overflow-hidden rounded-[var(--radius-xl)] border border-transparent bg-surface-strong p-7 transition-[transform,border-color] duration-200 hover:-translate-y-1 hover:border-border focus-visible:-translate-y-1 focus-visible:border-border">
                    <CardPattern variant={pattern} />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between gap-4">
                        <Icon aria-hidden="true" className="h-5 w-5 text-primary transition-transform group-hover:-translate-y-0.5" />
                        <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          {label}
                        </span>
                      </div>
                      <h3 className="mt-12 text-xl font-semibold text-foreground">{title}</h3>
                      <p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">{copy}</p>
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </section>

      <section className="border-b border-border py-14 md:py-20">
        <Container>
          <div className="about-quote-rule mx-auto max-w-[760px] pt-7">
            <p className="font-serif text-2xl italic leading-snug text-foreground md:text-4xl">
              {aboutPreview.pullQuote}
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-12 md:py-16">
        <Container>
          <div className="rounded-[var(--radius-xl)] border border-border bg-surface-strong/55 p-6 md:grid md:grid-cols-12 md:gap-10 md:p-8">
            <div className="md:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Education
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-foreground">
                {aboutPage.education}
              </p>
            </div>
            <div className="mt-6 border-t border-border pt-6 md:col-span-5 md:mt-0 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <AvailabilityPill />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface-strong py-14 md:py-20">
        <Container>
          <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
            Have a complex product or workflow to untangle?
          </h2>
          <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
            I am open to senior engineering roles, contract work and conversations about full-stack
            platforms, frontend architecture and product delivery.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact">Start a conversation</Button>
            <Button href="/work" variant="secondary">View selected work</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
