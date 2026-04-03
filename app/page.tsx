import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFAB } from "@/components/layout/WhatsAppFAB";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { StatsBar } from "@/components/sections/StatsBar";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Navbar overlayOnHero />
      <main className="min-h-screen">
        <Hero />
        <TrustStrip />
        <ServicesGrid />
        <StatsBar />
        <InstagramFeed />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
