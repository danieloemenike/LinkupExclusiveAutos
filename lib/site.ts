/** Canonical site URL for metadata (Open Graph, etc.). Set NEXT_PUBLIC_SITE_URL in production. */
export function getSiteUrl(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) {
    try {
      return new URL(explicit);
    } catch {
      /* fall through */
    }
  }
  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }
  return new URL("http://localhost:3000");
}

export const brandLogo = {
  src: "/logo.png" as const,
  width: 878,
  height: 621,
  alt: "Linkup Exclusive Autos",
};
