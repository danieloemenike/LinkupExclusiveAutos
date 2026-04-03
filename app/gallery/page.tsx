import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { WhatsAppFAB } from "@/components/layout/WhatsAppFAB";
import { GalleryGrid } from "@/components/sections/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse completed panel beating, paint, detailing, and upgrade work from Linkup Exclusive Autos, Lagos.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <PageHero
          label="Our work"
          title="Project gallery"
          description="Real jobs from our Ebute-Metta workshop—paint, panels, polish, and full details."
          imageSrc="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1600&q=80"
          imageAlt="Luxury automotive detail"
        />

        <section className="bg-background py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <GalleryGrid />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
