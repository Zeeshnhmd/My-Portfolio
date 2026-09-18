import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { EditorialPortrait } from "@/components/sections/editorial-portrait";
import { PrinciplesPanel } from "@/components/sections/principles-panel";
import { FadeIn } from "@/components/motion/fade-in";
import { aboutPreview } from "@/content/portfolio";
import { ABOUT_PORTRAIT_PATH, publicImageExists } from "@/lib/assets";

export function AboutPreview() {
  const hasPortrait = publicImageExists(ABOUT_PORTRAIT_PATH);

  return (
    <section id="about" className="scroll-mt-24 border-b border-border py-section-sm md:py-section-lg">
      <Container>
        {}
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-10 lg:gap-y-10">
          <div className="order-1 lg:order-none lg:col-start-1 lg:col-span-7 lg:row-start-1">
            <SectionHeading eyebrow={aboutPreview.eyebrow} heading={aboutPreview.heading} />
            <div className="mt-6 flex max-w-2xl flex-col gap-4">
              {aboutPreview.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="order-2 lg:order-none lg:col-start-8 lg:col-span-5 lg:row-start-1 lg:row-span-3 lg:self-start">
            <EditorialPortrait imageSrc={`/${ABOUT_PORTRAIT_PATH}`} hasImage={hasPortrait} />
          </div>

          <blockquote className="order-3 lg:order-none max-w-md border-l-2 border-primary/40 pl-4 lg:col-start-1 lg:col-span-7 lg:row-start-2">
            <p className="font-serif text-base italic text-muted-foreground">&quot;{aboutPreview.pullQuote}&quot;</p>
          </blockquote>

          <FadeIn className="order-4 lg:order-none lg:col-start-1 lg:col-span-12 lg:row-start-4">
            <PrinciplesPanel />
          </FadeIn>

          <div className="order-5 lg:order-none lg:col-start-1 lg:col-span-7 lg:row-start-3">
            <Button href={aboutPreview.cta.href} variant="secondary">
              {aboutPreview.cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
