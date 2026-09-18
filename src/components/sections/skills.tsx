import { Blocks, Code2, Database, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { HoverLift } from "@/components/motion/hover-lift";
import { skillCategories, skillsIntro, type SkillCategory } from "@/content/portfolio";

const icons: LucideIcon[] = [Code2, Database, Blocks, Wrench];

function SkillGroup({
  category,
  Icon,
  index,
}: {
  category: SkillCategory;
  Icon: LucideIcon;
  index: number;
}) {
  return (
    <StaggerItem>
      <HoverLift className="h-full">
        <div
          tabIndex={0}
          className={`skill-motif skill-motif-${index} group relative flex h-full min-h-64 overflow-hidden rounded-[var(--radius-lg)] border border-transparent bg-surface-strong p-6 transition-[border-color,background-color,transform] duration-200 hover:-translate-y-1 hover:border-border focus-visible:-translate-y-1 focus-visible:border-border`}
        >
          <div className="relative z-10 flex h-full w-full flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface text-primary transition-transform duration-200 group-hover:-translate-y-0.5">
              <Icon aria-hidden="true" className="h-4 w-4" />
            </span>
            <div>
              <h3 className="text-base font-semibold text-foreground">{category.label}</h3>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </div>
          </div>
          <div className="mt-auto flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <Tag key={skill}>{skill}</Tag>
            ))}
          </div>
          </div>
        </div>
      </HoverLift>
    </StaggerItem>
  );
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-b border-border py-section-sm md:py-section-lg">
      <Container>
        <SectionHeading eyebrow={skillsIntro.eyebrow} heading={skillsIntro.heading} />
        <Stagger className="skills-grid mt-12 grid grid-cols-1 gap-4 md:grid-cols-2" staggerDelay={0.06}>
          {skillCategories.map((category, index) => (
            <div
              key={category.label}
              className={`skill-area-${index + 1}`}
            >
              <SkillGroup category={category} Icon={icons[index]} index={index} />
            </div>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
