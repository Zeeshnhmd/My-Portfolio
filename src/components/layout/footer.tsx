import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { Container } from "@/components/ui/container";
import { SocialLink } from "@/components/ui/social-link";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand-icons";
import { navigation, person, socialLinks } from "@/content/portfolio";
import { StatusDot } from "@/components/ui/status-dot";

const socialIcons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  LinkedIn: LinkedinIcon,
  GitHub: GithubIcon,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-depth border-t border-border">
      <div id="footer-sentinel" aria-hidden="true" className="h-px" />
      <Container className="py-16 md:py-20">
        <p className="max-w-2xl text-balance text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
          Let&apos;s build something reliable.
        </p>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col gap-10 py-12 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-base font-semibold text-foreground">{person.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{person.role}</p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <StatusDot />
              Available
            </div>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-block text-sm text-muted-foreground transition-all duration-150 hover:translate-x-0.5 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${person.email}`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail aria-hidden="true" className="h-4 w-4" />
              {person.email}
            </a>
            {socialLinks.map((link) => (
              <SocialLink
                key={link.label}
                href={link.href}
                label={link.label}
                icon={socialIcons[link.label]}
              />
            ))}
          </div>
        </Container>
      </div>

      <div className="overflow-hidden border-t border-border">
        <Container className="py-8 md:py-10">
          <Link
            href="/#top"
            aria-label="Zeeshan Ahmad - back to homepage"
            className="footer-wordmark block select-none whitespace-nowrap rounded-sm text-center text-[3rem] font-semibold leading-none tracking-tight sm:text-[5rem] md:text-[7rem]"
          >
            {person.name}
          </Link>
        </Container>
      </div>

      <div className="border-t border-border">
        <Container className="flex flex-col gap-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {person.name}. All rights reserved.
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-1.5 rounded-sm transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)]"
          >
            <ArrowUp
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform duration-150 group-hover:-translate-y-0.5"
            />
            Back to top
          </a>
        </Container>
      </div>
    </footer>
  );
}
