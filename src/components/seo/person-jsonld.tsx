import { person, socialLinks } from "@/content/portfolio";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.role,
    email: `mailto:${person.email}`,
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    sameAs: socialLinks.map((link) => link.href),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}
