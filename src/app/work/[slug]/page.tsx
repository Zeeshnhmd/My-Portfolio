import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyContent } from "@/components/work/case-study-content";
import { caseStudies, workItems } from "@/content/portfolio";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return workItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudies[slug];
  if (!caseStudy) return {};
  return pageMetadata({
    title: caseStudy.title,
    description: caseStudy.overview,
    path: `/work/${slug}`,
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = caseStudies[slug];

  if (!caseStudy) {
    notFound();
  }

  const currentIndex = workItems.findIndex((item) => item.slug === slug);
  const previous = workItems[(currentIndex - 1 + workItems.length) % workItems.length];
  const next = workItems[(currentIndex + 1) % workItems.length];

  return <CaseStudyContent caseStudy={caseStudy} previous={previous} next={next} />;
}
