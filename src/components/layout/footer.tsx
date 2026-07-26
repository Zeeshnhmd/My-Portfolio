import { ArrowUpRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SocialLink } from "@/components/ui/social-link";
import { person, socialLinks } from "@/content/portfolio";

export function Footer() {
  const year = new Date().getFullYear();
  const linkedin = socialLinks.find((link) => link.label === "LinkedIn");
  const github = socialLinks.find((link) => link.label === "GitHub");

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-10 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-base font-semibold text-foreground">{person.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{person.role}</p>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">{person.location}</p>
        </div>

        <div className="flex flex-col gap-3">
          <a
            href={`mailto:${person.email}`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail aria-hidden="true" className="h-4 w-4" />
            {person.email}
          </a>
          {linkedin ? <SocialLink href={linkedin.href} label="LinkedIn" icon={ArrowUpRight} /> : null}
          {github ? <SocialLink href={github.href} label="GitHub" icon={ArrowUpRight} /> : null}
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="py-6 text-xs text-muted-foreground">
          © {year} {person.name}. All rights reserved.
        </Container>
      </div>
    </footer>
  );
}
