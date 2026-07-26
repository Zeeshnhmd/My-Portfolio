import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import type { CaseStudy, WorkItem } from "@/content/portfolio";

function Section({ heading, body }: { heading: string; body: string }) {
  return (
    <div>
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
    <Container className="py-20">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">{caseStudy.label}</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
        {caseStudy.title}
      </h1>

      <div className="mt-12 flex flex-col gap-12 lg:max-w-3xl">
        <Section heading="Overview" body={caseStudy.overview} />
        <Section heading="The challenge" body={caseStudy.challenge} />
        <Section heading="My responsibility" body={caseStudy.responsibility} />

        <div>
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

        <Section heading="Outcome" body={caseStudy.outcome} />
        <Section heading="Lessons" body={caseStudy.lesson} />

        <p className="border-t border-border pt-6 text-sm italic text-muted-foreground">
          {caseStudy.confidentialityNote}
        </p>
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
  );
}
