import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { WorkShowcaseRow } from "@/components/work/work-showcase-row";
import { selectedWorkIntro, workItems } from "@/content/portfolio";

export function SelectedWork() {
  return (
    <section className="border-b border-border py-section-sm md:py-section-lg">
      <Container>
        <SectionHeading
          eyebrow={selectedWorkIntro.eyebrow}
          heading={selectedWorkIntro.heading}
          intro={selectedWorkIntro.intro}
        />
        <div className="mt-12 flex flex-col gap-8 md:mt-16 md:gap-0">
          {workItems.map((item, index) => (
            <div
              key={item.slug}
              style={{ zIndex: index + 1 }}
              className="border-b border-border bg-background py-8 last:border-b-0 md:sticky md:top-24 md:motion-reduce:static md:border-b-0 md:bg-background md:py-16"
            >
              <WorkShowcaseRow item={item} reverse={index % 2 === 1} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
