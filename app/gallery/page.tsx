import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFAB } from "@/components/layout/WhatsAppFAB";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { CTABanner } from "@/components/sections/CTABanner";
import { googleReviews, projects } from "@/lib/constants";

export const metadata: Metadata = pageMetadata({
  title: "Gallery",
  description:
    "See real panel beating, oven bake painting, buffing, detailing and upgrade jobs completed by Linkup Exclusive Autos in Ebute-Metta, Lagos.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="mx-auto max-w-7xl px-4 pb-10 pt-32 sm:px-6 lg:px-8 lg:pb-14 lg:pt-40">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-ink">
                Our work
              </p>
              <h1 className="mt-4 font-display text-[clamp(2.6rem,6vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-foreground">
                Before &amp; after,
                <br />
                <span className="text-muted-foreground">straight from Lagos.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base leading-relaxed text-muted-foreground">
                Every photo is a real job from our Ebute-Metta workshop. No stock images, no filters.
              </p>
              <dl className="mt-6 flex gap-8 border-t border-border pt-6">
                <div>
                  <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    Featured jobs
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-bold text-foreground">{projects.length}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    Google rating
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-bold text-foreground">
                    {googleReviews.rating.toFixed(1)}
                    <span className="text-brand-ink">/5</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="pb-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <GalleryGrid />
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
