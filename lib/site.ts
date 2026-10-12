/** Production domain. Override with NEXT_PUBLIC_SITE_URL (e.g. for staging). */
export const PRODUCTION_URL = "https://www.linkupautos.com";

/** Canonical site URL for metadata (Open Graph, canonical links, sitemap). */
export function getSiteUrl(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) {
    try {
      return new URL(explicit);
    } catch {
      /* fall through */
    }
  }
  if (process.env.NODE_ENV === "development") {
    return new URL("http://localhost:3000");
  }
  return new URL(PRODUCTION_URL);
}

export const brandLogo = {
  src: "/logo.png" as const,
  width: 878,
  height: 621,
  alt: "Linkup Exclusive Autos",
};

export const siteName = "Linkup Exclusive Autos";
export const siteAlternateNames = [
  "Linkup Autos",
  "LinkUp Exclusive Autos",
  "Link Up Exclusive Autos",
  "Linkup Exclusive Autos Lagos",
];
export const siteDescription =
  "Linkup Exclusive Autos is Lagos Mainland's premier auto garage in Ebute-Metta: panel beating, oven bake painting, car buffing, car wash & detailing, accessories and upgrades.";
