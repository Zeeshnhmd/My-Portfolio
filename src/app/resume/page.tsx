import type { Metadata } from "next";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { FileDown, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import { ExpertiseCard, capabilityIcons } from "@/components/sections/expertise";
import {
  aboutPage,
  capabilities,
  experience,
  person,
  resumePage,
  skillCategories,
} from "@/content/portfolio";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: resumePage.heading,
  description: resumePage.intro,
  path: "/resume",
});

export default function ResumePage() {
  const pdfAvailable = existsSync(join(process.cwd(), "public", resumePage.pdfPath));

  return (
    <main className="resume-page">
      <Container className="py-16 md:py-20">
      <SectionHeading
        as="h1"
        eyebrow={resumePage.eyebrow}
        heading={resumePage.heading}
        intro={resumePage.intro}
      />

      <div className="mt-8 flex flex-wrap items-center gap-4">
        {pdfAvailable ? (
          <Button href={resumePage.pdfPath} download>
            <FileDown aria-hidden="true" className="h-4 w-4" />
            Download PDF
          </Button>
        ) : (
          <Button disabled aria-describedby="resume-pdf-status">
            <FileDown aria-hidden="true" className="h-4 w-4" />
            Download PDF
          </Button>
        )}
        <Button href="/contact" variant="secondary">
          <Mail aria-hidden="true" className="h-4 w-4" />
          Contact me
        </Button>
      </div>
      {!pdfAvailable ? (
        <p id="resume-pdf-status" className="mt-3 text-sm text-muted-foreground">
          A downloadable PDF {"isn't"} available yet - the web résumé below contains the current
          details.
        </p>
      ) : null}

      <ul className="mt-10 grid gap-2 border-y border-border py-5 text-sm text-muted-foreground md:grid-cols-3">
        <li className="font-medium text-foreground">{person.role.replace(" and ", " · ")}</li>
        <li>{person.locationLabel}</li>
        <li>{person.availabilityLabel}</li>
      </ul>

      <div className="mt-14 flex flex-col gap-14">
        <section aria-labelledby="resume-experience">
          <h2 id="resume-experience" className="text-xl font-semibold text-foreground">Experience</h2>
          <ol className="mt-6 flex flex-col divide-y divide-border border-t border-border">
            {experience.map((item, index) => (
              <li key={item.company} className="grid gap-2 py-6 sm:grid-cols-[1fr_2fr] sm:gap-8">
                <div>
                  <p className="flex items-center gap-2 font-semibold text-foreground">
                    {index === 0 ? <span className="h-2 w-2 rounded-full bg-primary" aria-label="Current role" /> : null}
                    {item.company}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.role}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.dates}</p>
                </div>
                <p className="text-sm text-muted-foreground sm:text-base">{item.summary}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="resume-expertise">
          <h2 id="resume-expertise" className="text-xl font-semibold text-foreground">Expertise</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {capabilities.map((capability, index) => (
              <ExpertiseCard
                key={capability.title}
                capability={capability}
                Icon={capabilityIcons[index]}
                variant="compact"
              />
            ))}
          </div>
        </section>

        <section aria-labelledby="resume-skills">
          <h2 id="resume-skills" className="text-xl font-semibold text-foreground">Core Skills</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {skillCategories.map((category) => (
              <div key={category.label}>
                <h3 className="font-semibold text-foreground">{category.label}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {category.skills.map((skill) => <Tag key={skill}>{skill}</Tag>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="text-xl font-semibold text-foreground">Education</h2>
          <p className="mt-3 text-sm text-muted-foreground">{aboutPage.education}</p>
        </section>
      </div>
      </Container>
    </main>
  );
}
