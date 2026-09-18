"use client";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ExperienceRail } from "@/components/sections/experience-rail";
import { ExperienceCard } from "@/components/sections/experience-card";
import { experience, experienceIntro, resumeLinkCta } from "@/content/portfolio";

function tierFor(index: number) {
  if (index === 0) return "current" as const;
  if (index === 1) return "lead" as const;
  return "quiet" as const;
}

export function Experience() {
  const scopes = [
    "Compliance platform ownership",
    "Platform delivery and technical leadership",
    "Frontend product engineering",
    "Production interface delivery",
  ];

  return (
    <section id="experience" className="scroll-mt-24 border-b border-border py-section-sm md:py-section-lg">
      <Container>
        <div className="mb-12">
          <SectionHeading eyebrow={experienceIntro.eyebrow} heading={experienceIntro.heading} />
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
            {experienceIntro.supportingSentence}
          </p>
          <dl className="mt-8 grid grid-cols-2 border-y border-border md:grid-cols-4">
            {[
              ["Tenure", "5+ years"],
              ["Companies", "4 companies"],
              ["Progression", "Frontend to full-stack ownership"],
              ["Leadership", "Hands-on technical leadership"],
            ].map(([term, detail]) => (
              <div key={term} className="border-border px-3 py-4 first:pl-0 md:border-l md:first:border-l-0">
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">{term}</dt>
                <dd className="mt-1 text-sm font-medium text-foreground">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
        <ExperienceRail
          items={experience}
          itemCount={experience.length}
          heading={
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Career progression
              </p>
              <div className="mt-5">
                <Button href={resumeLinkCta.href} variant="secondary">
                  {resumeLinkCta.label}
                </Button>
              </div>
            </div>
          }
          right={(activeIndex) => (
            <ol className="flex flex-col gap-4">
              {experience.map((item, index) => (
                <li key={item.company}>
                  <ExperienceCard
                    item={item}
                    tier={tierFor(index)}
                    isCurrent={index === 0}
                    isActive={activeIndex === index}
                    startYear={item.dates.match(/\d{4}/)?.[0] ?? ""}
                    delay={Math.min(index * 0.05, 0.2)}
                    scope={scopes[index]}
                    id={`career-${index}`}
                  />
                </li>
              ))}
            </ol>
          )}
        />
      </Container>
    </section>
  );
}
