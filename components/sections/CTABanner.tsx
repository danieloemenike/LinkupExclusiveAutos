"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/lib/constants";

const ctaImage =
  "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&q=80";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-neutral-950">
      <div className="grid min-h-[420px] lg:min-h-[480px] lg:grid-cols-2">
        <div className="relative min-h-[240px] lg:min-h-full">
          <Image
            src={ctaImage}
            alt="Professional auto body and paint work"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black/80 lg:via-transparent lg:to-brand-red/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden" />
        </div>

        <div className="relative flex flex-col justify-center bg-mesh-cta px-6 py-16 text-white grain-overlay sm:px-10 lg:px-14 lg:py-20">
          <div
            className="pointer-events-none absolute inset-0 z-[2] opacity-[0.06]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
            aria-hidden
          />
          <motion.div
            className="relative z-10 max-w-lg"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-editorial text-lg italic text-white/70">
              Book your slot
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tighter sm:text-5xl lg:text-6xl">
              Ready when you are.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/75">
              Same-day assessments, clear quotes, and workmanship you can walk
              around and inspect. Call or book online—Mainland Lagos.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={`tel:${companyInfo.phone}`}>
                <Button
                  size="lg"
                  className="w-full bg-white text-brand-red hover:bg-white/90 sm:w-auto"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  {companyInfo.phoneFormatted}
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-white/40 bg-white/5 text-white backdrop-blur-sm hover:bg-white hover:text-brand-red sm:w-auto"
                >
                  Book online
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
