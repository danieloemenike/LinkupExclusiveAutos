import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { WhatsAppFAB } from "@/components/layout/WhatsAppFAB";
import { ContactForm } from "@/components/contact/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { companyInfo } from "@/lib/constants";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Linkup Exclusive Autos at 10 Savage Street, Ebute-Metta West, Lagos. Call or WhatsApp 0701 387 4447 to book a service or get a quote.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <PageHero
          label="Contact us"
          title="Get in touch"
          description="Book a service, request a quote, or ask a question. We reply fast—call, WhatsApp, or use the form."
          imageSrc="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1600&q=80"
          imageAlt="Auto paint and finish"
        />

        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <Card className="panel-frame border-border/60">
                  <CardHeader>
                    <CardTitle className="font-display text-2xl font-bold tracking-tight">
                      Send a message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-border/60">
                  <CardHeader>
                    <CardTitle className="font-display text-xl font-bold">
                      Contact info
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <a
                      href={`tel:${companyInfo.phone}`}
                      className="flex items-start gap-3 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <p>{companyInfo.phoneFormatted}</p>
                      </div>
                    </a>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="flex items-start gap-3 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p>{companyInfo.email}</p>
                      </div>
                    </a>
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                      <div>
                        <p className="font-medium text-foreground">Address</p>
                        <p>{companyInfo.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                      <div>
                        <p className="font-medium text-foreground">
                          Business hours
                        </p>
                        {companyInfo.hours.map((item) => (
                          <p key={item.day}>
                            {item.day}: {item.hours}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-border/60">
                  <div className="aspect-[4/3] w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.1!2d3.37!3d6.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjcnMDAuMCJOIDPCsDIyJzIwLjAiRQ!5e0!3m2!1sen!2sng!4v1600000000000!5m2!1sen!2sng"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Our Location"
                      className="grayscale transition-all duration-500 hover:grayscale-0"
                    />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
