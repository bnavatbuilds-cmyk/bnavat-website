import { BRAND } from "@/lib/constants";

export default function OrganizationSchema() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND.name,
    description:
      "An India-based digital product studio focused on digital architecture, web engineering and UI/UX systems.",
    email: BRAND.email,
    url: BRAND.siteUrl,
    sameAs: [
      BRAND.socials.instagram,
      BRAND.socials.threads,
      BRAND.socials.x,
      BRAND.socials.whatsapp,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
