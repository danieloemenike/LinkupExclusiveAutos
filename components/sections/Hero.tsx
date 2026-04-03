"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { heroContent, mockGalleryImages } from "@/lib/constants";

const stripImages = mockGalleryImages.slice(0, 3);

export function Hero() {
  const heroImage =
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80";

  return (
    <section className="relative min-h-screen overflow-hidden bg-black grain-overlay">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Premium luxury car detail"
          fill
          className="object-cover opacity-[0.55]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col justify-end px-4 pb-16 pt-28 sm:px-6 md:px-12 lg:px-16 lg:pb-20">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-10">
            <motion.div
              className="space-y-8 lg:col-span-7"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-4">
                <span className="h-px w-14 bg-brand-red" />
                <span className="font-editorial text-sm italic tracking-wide text-white/85 md:text-base">
                  {heroContent.label}
                </span>
              </div>

              <h1 className="font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.92] tracking-tighter text-white text-balance">
                {heroContent.titleLine1}
                <br />
                <span className="text-brand-red">{heroContent.titleLine2}</span>
                <br />
                <span className="text-white/95">{heroContent.titleLine3}</span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                {heroContent.subtitle}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link href={heroContent.cta.primary.href}>
                  <Button className="bg-brand-red px-8 py-6 text-base font-medium text-white shadow-brand-red transition-all duration-300 hover:bg-brand-red-deep hover:shadow-brand-hover">
                    {heroContent.cta.primary.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href={heroContent.cta.secondary.href}>
                  <Button
                    variant="outline"
                    className="border-white/25 bg-white/5 px-8 py-6 text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
                  >
                    {heroContent.cta.secondary.label}
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-8">
                {heroContent.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium uppercase tracking-[0.2em] text-white/45"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col gap-5 lg:col-span-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
                Recent work
              </p>
              <div className="flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {stripImages.map((img, i) => (
                  <Link
                    key={img.id}
                    href="/gallery"
                    className={`group relative shrink-0 overflow-hidden rounded-xl ring-1 ring-white/15 transition-transform duration-500 hover:-translate-y-1 hover:ring-white/30 ${
                      i === 0 ? "aspect-[4/3] w-[44%] min-w-[160px] sm:min-w-[200px]" : "aspect-square w-[26%] min-w-[100px] sm:min-w-[120px]"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 40vw, 200px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/35">
            <span>Scroll</span>
            <svg
              className="h-4 w-4 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
