import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";
import { CardPattern } from "@/components/ui/card-pattern";

export function EditorialPortrait({
  imageSrc,
  hasImage,
  className,
}: {
  imageSrc: string;
  hasImage: boolean;
  className?: string;
}) {
  return (
    <Reveal className={cn("w-full", className)}>
      <figure>
        <div className="relative aspect-4/5 w-full overflow-hidden rounded-[var(--radius-xl)] bg-surface-strong">
          <CardPattern
            variant="arcs"
            className="left-5 right-auto top-5 h-28 w-28 opacity-30"
          />
          {hasImage ? (
            <Image
              src={imageSrc}
              alt="Portrait of Zeeshan Ahmad"
              fill
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover transition-transform duration-300 motion-safe:hover:scale-[1.01]"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-8 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-surface text-xs font-medium text-muted-foreground">
                4:5
              </div>
              <p className="text-sm font-medium text-muted-foreground">Portrait asset coming soon</p>
            </div>
          )}
        </div>
        <figcaption className="mt-4 text-sm text-muted-foreground">
          Senior Full-Stack Engineer · Technical Lead
        </figcaption>
      </figure>
    </Reveal>
  );
}
