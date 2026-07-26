import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  heading,
  intro,
  align = "left",
  as: Heading = "h2",
  className,
}: {
  eyebrow?: string;
  heading: string;
  intro?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">{eyebrow}</p>
      ) : null}
      <Heading
        className={cn(
          "text-balance font-semibold tracking-tight text-foreground",
          Heading === "h1" ? "mt-4 text-4xl md:text-5xl" : "mt-3 text-3xl md:text-4xl",
        )}
      >
        {heading}
      </Heading>
      {intro ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-balance text-muted-foreground",
            align === "center" && "mx-auto",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
