import { companyInfo, services } from "@/lib/constants";
import { brandLogo, getSiteUrl, siteAlternateNames, siteDescription, siteName } from "@/lib/site";

/** Organization / LocalBusiness + WebSite schema so Google can show the brand name and local listing. */
export function StructuredData() {
  const base = getSiteUrl().origin;

  const business = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${base}/#business`,
    name: siteName,
    alternateName: siteAlternateNames,
    description: siteDescription,
    url: base,
    logo: `${base}${brandLogo.src}`,
    image: [`${base}/opengraph-image`, `${base}${brandLogo.src}`],
    telephone: `+${companyInfo.whatsappNumber}`,
    email: companyInfo.email,
    priceRange: "₦₦",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Fire Service Station, 10 Savage Street",
      addressLocality: "Ebute-Metta West",
      addressRegion: "Lagos",
      postalCode: "101212",
      addressCountry: "NG",
    },
    areaServed: { "@type": "City", name: "Lagos" },
    hasMap: companyInfo.googleMapsUrl,
    sameAs: [companyInfo.instagram],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Auto services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.description },
      })),
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${base}/#website`,
    name: siteName,
    alternateName: siteAlternateNames,
    url: `${base}/`,
    publisher: { "@id": `${base}/#business` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([business, website]).replace(/</g, "\\u003c"),
      }}
    />
  );
}
