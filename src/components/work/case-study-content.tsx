import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ProjectMedia } from "@/components/work/project-media";
import { CaseStudyToc } from "@/components/work/case-study-toc";
import { Reveal } from "@/components/motion/reveal";
import type { CaseStudy, WorkItem } from "@/content/portfolio";

function Section({ id, heading, body }: { id: string; heading: string; body: string }) {
  return (
    <div id={id} className="scroll-mt-28">
      <h2 className="text-xl font-semibold text-foreground">{heading}</h2>
      <p className="mt-4 text-muted-foreground">{body}</p>
    </div>
  );
}

export function CaseStudyContent({
  caseStudy,
  previous,
  next,
}: {
  caseStudy: CaseStudy;
  previous: WorkItem;
  next: WorkItem;
}) {
  return (
    <>
      <Container className="pt-16">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)]"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          All work
        </Link>

        <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-primary">{caseStudy.label}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          {caseStudy.title}
        </h1>

        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 border-y border-border py-4 text-sm text-muted-foreground">
          <span>
            <span className="font-medium text-foreground">Project type</span> - {caseStudy.label}
          </span>
          <span>
            <span className="font-medium text-foreground">Confidentiality</span> - Client details withheld
          </span>
        </div>
      </Container>

      <Reveal className="mt-10">
        <Container>
          <ProjectMedia
            variant={caseStudy.slug}
            alt={`${caseStudy.title} conceptual diagram`}
            className="aspect-video rounded-[var(--radius-xl)]"
          />
        </Container>
      </Reveal>

      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-12 lg:col-span-8">
            <Section id="overview" heading="Overview" body={caseStudy.overview} />
            <Section id="challenge" heading="The challenge" body={caseStudy.challenge} />
            <Section id="responsibility" heading="My responsibility" body={caseStudy.responsibility} />

            <div id="approach" className="scroll-mt-28 rounded-[var(--radius-lg)] bg-surface-strong p-6">
              <h2 className="text-xl font-semibold text-foreground">Approach</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {caseStudy.approach.map((point) => (
                  <li key={point} className="flex gap-3 text-muted-foreground">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div id="outcome" className="scroll-mt-28 rounded-[var(--radius-lg)] bg-surface-strong p-6">
              <h2 className="text-xl font-semibold text-foreground">Outcome</h2>
              <p className="mt-4 text-muted-foreground">{caseStudy.outcome}</p>
            </div>

            <Section id="lessons" heading="Lessons" body={caseStudy.lesson} />

            <p className="border-t border-border pt-6 text-sm italic text-muted-foreground">
              {caseStudy.confidentialityNote}
            </p>
          </div>

          <div className="lg:col-span-4">
            <CaseStudyToc />
          </div>
        </div>

        <nav
          aria-label="More work"
          className="mt-16 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <Link
            href={`/work/${previous.slug}`}
            className="inline-flex items-center gap-2 rounded-sm text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)]"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            {previous.title}
          </Link>
          <Link
            href={`/work/${next.slug}`}
            className="inline-flex items-center gap-2 rounded-sm text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)]"
          >
            {next.title}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </nav>
      </Container>
    </>
  );
}
