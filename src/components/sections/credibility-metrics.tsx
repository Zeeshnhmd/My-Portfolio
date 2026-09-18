import { Calendar, Globe2, LayoutGrid, Share2, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { HoverLift } from "@/components/motion/hover-lift";
import { credibilityMetrics, type Metric } from "@/content/portfolio";
import { cn } from "@/lib/utils";
import { CardPattern, type CardPatternVariant } from "@/components/ui/card-pattern";

const icons: LucideIcon[] = [Calendar, Users, LayoutGrid, Share2, Globe2];

const spans = [
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-5",
  "lg:col-span-7",
];
const patterns: CardPatternVariant[] = ["lines", "nodes", "modules", "workflow", "arcs"];

function MetricCard({ metric, Icon, pattern, className }: { metric: Metric; Icon: LucideIcon; pattern: CardPatternVariant; className?: string }) {
  return (
    <StaggerItem className={cn("sm:col-span-1", className)}>
      <HoverLift className="h-full">
        <div tabIndex={0} className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-[var(--radius-lg)] bg-surface-strong p-6">
          <CardPattern variant={pattern} />
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface text-primary">
            <Icon aria-hidden="true" className="h-4 w-4" />
          </span>
          <p className="font-serif text-3xl text-foreground md:text-4xl">{metric.value}</p>
          <div>
            <p className="text-sm font-medium text-foreground">{metric.label}</p>
            <p className="mt-1 text-sm text-muted-foreground">{metric.supportingLine}</p>
          </div>
        </div>
      </HoverLift>
    </StaggerItem>
  );
}

export function CredibilityMetrics() {
  return (
    <section aria-label="Credibility metrics" className="border-b border-border py-section-sm md:py-section-lg">
      <Container>
        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12" staggerDelay={0.08}>
          {credibilityMetrics.map((metric, index) => (
            <MetricCard key={metric.label} metric={metric} Icon={icons[index]} pattern={patterns[index]} className={spans[index]} />
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
