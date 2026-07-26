import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { WorkCard } from "@/components/work/work-card";
import { selectedWorkIntro, workItems } from "@/content/portfolio";

export function SelectedWork() {
  return (
    <section className="border-b border-border py-20">
      <Container>
        <SectionHeading
          eyebrow={selectedWorkIntro.eyebrow}
          heading={selectedWorkIntro.heading}
          intro={selectedWorkIntro.intro}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workItems.map((item, index) => (
            <WorkCard key={item.slug} item={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
