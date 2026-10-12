import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFAB } from "@/components/layout/WhatsAppFAB";
import { CTABanner } from "@/components/sections/CTABanner";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/constants";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Linkup Exclusive Autos services: panel beating, oven bake painting, car buffing & polishing, car wash & detailing, accessories and model upgrades in Mainland Lagos.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <PageHero
          label="Our services"
          title="Expert auto services"
          description="From panel beating and oven-bake painting to buffing, detailing, accessories, and upgrades—one workshop, factory-level standards."
          imageSrc="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80"
          imageAlt="Automotive service excellence"
        />

        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.slug}
                  className={`grid gap-10 lg:grid-cols-2 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red mb-6">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <span className="h-2 w-2 rounded-full bg-brand-red" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={`/contact?service=${service.slug}`}>
                      <Button className="bg-brand-red hover:bg-brand-red-deep text-white shadow-brand-red">
                        Get a Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <div
                    className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, min(50vw, 640px)"
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
