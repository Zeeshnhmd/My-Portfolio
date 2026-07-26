import Link from "next/link";
import { Tag } from "@/components/ui/tag";
import { WorkDiagram } from "@/components/work/work-diagram";
import type { WorkItem } from "@/content/portfolio";

export function WorkCard({ item, index = 0 }: { item: WorkItem; index?: number }) {
  return (
    <Link
      href={item.route}
      aria-label={`${item.title} — ${item.hook}`}
      className="group flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface transition-colors hover:border-primary/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)]"
    >
      <WorkDiagram variant={index % 3} className="border-b border-border" />
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">{item.label}</p>
          <h3 className="mt-2 text-xl font-semibold text-foreground">{item.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{item.hook}</p>
        </div>
        <p className="text-sm text-muted-foreground">{item.description}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {item.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </Link>
  );
}
