import { Metadata } from "next";
import Image from "next/image";
import { Award, Users, Wrench } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { WhatsAppFAB } from "@/components/layout/WhatsAppFAB";
import { CTABanner } from "@/components/sections/CTABanner";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Linkup Exclusive Autos - Lagos Mainland's premier auto garage with over 10 years of experience in panel beating, painting, and car repairs.",
};

const values = [
  {
    icon: Award,
    title: "Quality First",
    description:
      "We never compromise on quality. Every job receives our full attention and expertise.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description:
      "Your satisfaction is our priority. We keep you informed throughout the process.",
  },
  {
    icon: Wrench,
    title: "Expert Team",
    description:
      "Our skilled technicians have years of experience in automotive repair and restoration.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <PageHero
          label="About us"
          title="Your trusted auto partner"
          description="Over a decade on the Mainland: panel work, oven-bake paint, detailing, and upgrades—with the finish your car deserves."
          imageSrc="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1600&q=80"
          imageAlt="Professional auto workshop"
        />

        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 items-center mb-20">
              <div>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded with a passion for automotive excellence, Linkup
                    Exclusive Autos has grown from a small workshop to one of
                    Lagos Mainland&apos;s most trusted auto service centers.
                  </p>
                  <p>
                    Our founder recognized the need for a professional auto
                    garage that could deliver European-quality repairs at
                    fair prices. Today, we continue that mission with every
                    vehicle that comes through our doors.
                  </p>
                  <p>
                    Located at Fire Service Station on Savage Street in
                    Ebute-Metta West, our state-of-the-art facility is
                    equipped to handle everything from minor repairs to
                    complete restorations.
                  </p>
                </div>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/ceo.jpg"
                  alt="Our workshop"
                  fill
                  sizes="(max-width: 1024px) 100vw, min(50vw, 560px)"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3 mb-20">
              {values.map((value) => (
                <Card key={value.title} className="border-border bg-card">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red mb-4">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden border border-border">
              <div className="aspect-[21/9] w-full bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.1!2d3.37!3d6.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjcnMDAuMCJOIDPCsDIyJzIwLjAiRQ!5e0!3m2!1sen!2sng!4v1600000000000!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
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
