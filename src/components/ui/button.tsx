import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "sm";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)] disabled:cursor-not-allowed disabled:opacity-50";

const variantClasses: Record<Variant, string> = {
  primary: "bg-primary-solid text-white hover:bg-primary-solid-hover active:bg-primary-solid-hover",
  secondary:
    "border border-border bg-transparent text-foreground hover:bg-surface-strong/60",
  ghost: "text-foreground hover:bg-surface-strong/60",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  sm: "px-3.5 py-2 text-sm",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ variant = "primary", size = "md", className, ...props }: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (props.href !== undefined) {
    const { href, ...anchorProps } = props;
    const isExternal = /^https?:\/\//.test(href);
    return (
      <Link
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...anchorProps}
      />
    );
  }

  const { type = "button", ...buttonProps } = props;
  return <button type={type} className={classes} {...buttonProps} />;
}
