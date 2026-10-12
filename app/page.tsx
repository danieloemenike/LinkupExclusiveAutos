import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFAB } from "@/components/layout/WhatsAppFAB";
import { Hero } from "@/components/sections/Hero";
import { RecentProjects } from "@/components/sections/RecentProjects";
import { ServicesMarquee } from "@/components/sections/ServicesMarquee";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <RecentProjects />
        <ServicesMarquee />
        <ServicesGrid />
        <ProcessSteps />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
