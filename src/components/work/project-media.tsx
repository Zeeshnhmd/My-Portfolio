import Image from "next/image";
import { cn } from "@/lib/utils";

export function ProjectMedia({
  variant,
  imageSrc,
  alt,
  className,
  priority = false,
}: {
  variant: string;
  imageSrc?: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative flex aspect-16/10 items-center justify-center overflow-hidden bg-surface-strong",
        className,
      )}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 640px, 100vw"
          className="object-cover"
        />
      ) : (
        <>
          {variant === "verifix" ? <VerifixDiagram /> : null}
          {variant === "eden" ? <EdenDiagram /> : null}
          {variant === "raven" ? <RavenDiagram /> : null}
          <span className="absolute bottom-3 right-4 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
            Conceptual diagram
          </span>
        </>
      )}
    </div>
  );
}

function VerifixDiagram() {
  const stages = ["Identity", "Screening", "Review", "Decision"];

  return (
    <svg viewBox="0 0 440 220" className="h-full w-full" aria-hidden="true">
      {stages.map((label, index) => {
        const x = 30 + index * 108;
        return (
          <g key={label}>
            {index < stages.length - 1 ? (
              <line
                x1={x + 96}
                y1="110"
                x2={x + 108}
                y2="110"
                stroke="var(--border)"
                strokeWidth="2"
              />
            ) : null}
            <rect
              x={x}
              y="80"
              width="96"
              height="60"
              rx="10"
              fill="var(--surface)"
              stroke="var(--primary)"
              strokeWidth="2"
            />
            <text x={x + 48} y="115" textAnchor="middle" fontSize="13" fill="var(--foreground)">
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function EdenDiagram() {
  const nodes = ["Orders", "Inventory", "Queues", "Automation", "APIs"];
  const cx = 220;
  const cy = 105;
  const radius = 75;

  const positions = nodes.map((label, index) => {
    const angle = (index / nodes.length) * Math.PI * 2 - Math.PI / 2;
    return { label, x: cx + radius * Math.cos(angle), y: cy + radius * Math.sin(angle) * 0.8 };
  });

  return (
    <svg viewBox="0 0 440 220" className="h-full w-full" aria-hidden="true">
      {positions.map(({ label, x, y }) => (
        <line key={label} x1={cx} y1={cy} x2={x} y2={y} stroke="var(--border)" strokeWidth="2" />
      ))}
      <circle cx={cx} cy={cy} r="28" fill="var(--surface)" stroke="var(--primary)" strokeWidth="2" />
      <text x={cx} y={cy + 4} textAnchor="middle" fontSize="12" fill="var(--foreground)">
        EDEN
      </text>
      {positions.map(({ label, x, y }) => (
        <g key={label}>
          <circle cx={x} cy={y} r="18" fill="var(--surface)" stroke="var(--primary)" strokeWidth="2" />
          <text x={x} y={y + 32} textAnchor="middle" fontSize="11" fill="var(--foreground)">
            {label}
          </text>
        </g>
      ))}
    </svg>
  );
}

function RavenDiagram() {
  const stages = ["Selection", "Validation", "Scheduling", "Queue", "Sent"];
  const stageX = (index: number) => 20 + index * 82;

  return (
    <svg viewBox="0 0 440 220" className="h-full w-full" aria-hidden="true">
      {stages.map((label, index) => {
        const x = stageX(index);
        return (
          <g key={label}>
            {index < stages.length - 1 ? (
              <line x1={x + 62} y1="70" x2={x + 82} y2="70" stroke="var(--border)" strokeWidth="2" />
            ) : null}
            <rect
              x={x}
              y="45"
              width="62"
              height="50"
              rx="8"
              fill="var(--surface)"
              stroke="var(--primary)"
              strokeWidth="2"
            />
            <text x={x + 31} y="74" textAnchor="middle" fontSize="10" fill="var(--foreground)">
              {label}
            </text>
          </g>
        );
      })}
      <line
        x1={stageX(3) + 31}
        y1="95"
        x2={stageX(3) + 31}
        y2="150"
        stroke="var(--danger)"
        strokeWidth="2"
        strokeDasharray="4 3"
      />
      <rect
        x={stageX(3)}
        y="150"
        width="62"
        height="42"
        rx="8"
        fill="var(--surface)"
        stroke="var(--danger)"
        strokeWidth="2"
      />
      <text x={stageX(3) + 31} y="175" textAnchor="middle" fontSize="10" fill="var(--danger)">
        Failed
      </text>
    </svg>
  );
}
