import type { Metadata } from "next";
import { siteName } from "@/lib/site";

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Linkup Exclusive Autos — Premium auto garage in Ebute-Metta, Lagos",
};

/**
 * Page metadata with canonical, Open Graph and Twitter tags.
 * Next.js replaces (not merges) a parent's openGraph/twitter objects, so every page sets them in full.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} | ${siteName}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_NG",
      siteName,
      url: path,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
