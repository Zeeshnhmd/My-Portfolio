import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { WorkCard } from "@/components/work/work-card";
import { workItems, workPage } from "@/content/portfolio";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: workPage.heading,
  description: workPage.intro,
  path: "/work",
});

export default function WorkPage() {
  return (
    <Container className="py-20">
      <SectionHeading as="h1" heading={workPage.heading} intro={workPage.intro} />
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {workItems.map((item, index) => (
          <WorkCard key={item.slug} item={item} index={index} />
        ))}
      </div>
    </Container>
  );
}
