import { Compass, LayoutTemplate, Server, ShapesIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { HoverLift } from "@/components/motion/hover-lift";
import { capabilities, expertiseIntro, type Capability } from "@/content/portfolio";
import { cn } from "@/lib/utils";
import { CardPattern, type CardPatternVariant } from "@/components/ui/card-pattern";

export const capabilityIcons: LucideIcon[] = [LayoutTemplate, ShapesIcon, Server, Compass];
const patterns: CardPatternVariant[] = ["grid", "modules", "workflow", "nodes"];

export function ExpertiseCard({
  capability,
  Icon,
  className,
  pattern,
  variant = "default",
}: {
  capability: Capability;
  Icon: LucideIcon;
  className?: string;
  pattern?: CardPatternVariant;
  variant?: "default" | "compact";
}) {
  const isCompact = variant === "compact";

  return (
    <StaggerItem className={cn(className)}>
      <HoverLift className="h-full">
        <article
          tabIndex={0}
          className={cn(
            "group relative flex h-full flex-col gap-3 overflow-hidden rounded-[var(--radius-lg)] border bg-surface-strong transition-colors duration-200 hover:border-border focus-visible:border-border",
            isCompact ? "border-border p-5" : "border-transparent p-6",
          )}
        >
          {!isCompact && pattern ? <CardPattern variant={pattern} /> : null}
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface text-primary">
              <Icon aria-hidden="true" className="h-4 w-4" />
            </span>
            <h3 className="text-base font-semibold text-foreground">{capability.title}</h3>
          </div>
          <p className="text-sm text-muted-foreground">{capability.description}</p>
          <div className="mt-auto flex flex-wrap gap-2 pt-2">
            {capability.tags.slice(0, isCompact ? 4 : undefined).map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </article>
      </HoverLift>
    </StaggerItem>
  );
}

export function Expertise() {
  return (
    <section id="expertise" className="scroll-mt-24 border-b border-border py-section-sm md:py-section-lg">
      <Container>
        <SectionHeading eyebrow={expertiseIntro.eyebrow} heading={expertiseIntro.heading} />
        <Stagger
          className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12"
          staggerDelay={0.08}
        >
          {capabilities.map((capability, index) => (
            <ExpertiseCard
              key={capability.title}
              capability={capability}
              Icon={capabilityIcons[index]}
              className={`expertise-area-${index + 1}`}
              pattern={patterns[index]}
            />
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
