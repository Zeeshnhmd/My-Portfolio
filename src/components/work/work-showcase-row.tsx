import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectMedia } from "@/components/work/project-media";
import { Tag } from "@/components/ui/tag";
import { Reveal } from "@/components/motion/reveal";
import type { WorkItem } from "@/content/portfolio";
import { cn } from "@/lib/utils";

export function WorkShowcaseRow({
  item,
  reverse = false,
  detailed = false,
  outcome,
  className,
}: {
  item: WorkItem;
  reverse?: boolean;
  detailed?: boolean;
  outcome?: string;
  className?: string;
}) {
  return (
    <Link
      href={item.route}
      aria-label={`${item.title} - ${item.hook}`}
      className={cn(
        "group grid grid-cols-1 items-center gap-8 rounded-[var(--radius-xl)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--focus)] md:grid-cols-12 md:gap-6",
        className,
      )}
    >
      <Reveal className={cn("md:col-span-7", reverse ? "md:order-2" : "md:order-1")}>
        <ProjectMedia
          variant={item.slug}
          alt={`${item.title} conceptual diagram`}
          className="rounded-[var(--radius-xl)] transition-transform duration-300 ease-out group-hover:-translate-y-1"
        />
      </Reveal>

      <div className={cn("md:col-span-5", reverse ? "md:order-1" : "md:order-2")}>
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">{item.label}</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          {item.title}
        </h3>
        <p className="mt-3 text-muted-foreground">{item.hook}</p>

        {detailed ? (
          <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-muted-foreground">Role</dt>
              <dd className="mt-1 font-medium text-foreground">{item.role}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Project type</dt>
              <dd className="mt-1 font-medium text-foreground">{item.label}</dd>
            </div>
            {outcome ? (
              <div className="col-span-2">
                <dt className="text-muted-foreground">Selected outcome</dt>
                <dd className="mt-1 text-foreground">{outcome}</dd>
              </div>
            ) : null}
          </dl>
        ) : (
          <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
          View case study
          <ArrowUpRight
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </span>
      </div>
    </Link>
  );
}
