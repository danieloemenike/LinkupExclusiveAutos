"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { companyInfo, mockGalleryImages } from "@/lib/constants";

export function InstagramFeed() {
  const displayImages = mockGalleryImages.slice(0, 6);

  return (
    <section className="section-padding bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 sm:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <p className="font-editorial text-lg italic text-muted-foreground">
              Our work
            </p>
            <h2 className="mt-2 font-display text-4xl font-bold tracking-tighter text-foreground sm:text-5xl lg:text-6xl">
              Recent projects
            </h2>
          </motion.div>
          <Link href="/gallery" className="shrink-0">
            <Button
              variant="outline"
              className="rounded-full border-brand-red/40 text-brand-red hover:bg-brand-red hover:text-white"
            >
              View gallery
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Mobile: horizontal snap scroll */}
        <div className="flex gap-3 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory md:hidden [&::-webkit-scrollbar]:hidden">
          {displayImages.map((image, index) => (
            <Link
              key={image.id}
              href="/gallery"
              className={`group relative shrink-0 snap-center overflow-hidden rounded-2xl bg-muted ring-1 ring-border/40 ${
                index === 0 ? "aspect-1/2 w-[78vw] max-w-sm" : "aspect-square w-[65vw] max-w-[220px]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="85vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-90" />
              <p className="absolute bottom-4 left-4 font-display text-xs font-medium uppercase tracking-wider text-white">
                {image.category.replace("-", " ")}
              </p>
            </Link>
          ))}
        </div>

        {/* Desktop: asymmetric masonry */}
        <div className="hidden gap-3 md:grid md:grid-cols-4 md:grid-rows-[minmax(160px,auto)_minmax(160px,auto)_minmax(140px,auto)] lg:gap-4">
          <Link
            href="/gallery"
            className="group relative col-span-2 row-span-2 min-h-[280px] overflow-hidden rounded-2xl bg-muted ring-1 ring-border/40 lg:min-h-[360px]"
          >
            <Image
              src={displayImages[0].src}
              alt={displayImages[0].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1280px) 50vw, 600px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <p className="absolute bottom-6 left-6 font-display text-sm font-medium uppercase tracking-widest text-white">
              {displayImages[0].category.replace("-", " ")}
            </p>
          </Link>
          <Link
            href="/gallery"
            className="group relative col-span-2 min-h-[160px] overflow-hidden rounded-2xl bg-muted ring-1 ring-border/40"
          >
            <Image
              src={displayImages[1].src}
              alt={displayImages[1].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80" />
            <p className="absolute bottom-4 left-4 text-xs font-medium uppercase tracking-wider text-white">
              {displayImages[1].category.replace("-", " ")}
            </p>
          </Link>
          <Link
            href="/gallery"
            className="group relative col-span-2 min-h-[160px] overflow-hidden rounded-2xl bg-muted ring-1 ring-border/40"
          >
            <Image
              src={displayImages[2].src}
              alt={displayImages[2].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80" />
            <p className="absolute bottom-4 left-4 text-xs font-medium uppercase tracking-wider text-white">
              {displayImages[2].category.replace("-", " ")}
            </p>
          </Link>
          <Link
            href="/gallery"
            className="group relative min-h-[140px] overflow-hidden rounded-2xl bg-muted ring-1 ring-border/40"
          >
            <Image
              src={displayImages[3].src}
              alt={displayImages[3].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80" />
            <p className="absolute bottom-3 left-3 text-[10px] font-medium uppercase tracking-wider text-white">
              {displayImages[3].category.replace("-", " ")}
            </p>
          </Link>
          <Link
            href="/gallery"
            className="group relative min-h-[140px] overflow-hidden rounded-2xl bg-muted ring-1 ring-border/40"
          >
            <Image
              src={displayImages[4].src}
              alt={displayImages[4].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80" />
            <p className="absolute bottom-3 left-3 text-[10px] font-medium uppercase tracking-wider text-white">
              {displayImages[4].category.replace("-", " ")}
            </p>
          </Link>
          <Link
            href="/gallery"
            className="group relative col-span-2 min-h-[140px] overflow-hidden rounded-2xl bg-muted ring-1 ring-border/40"
          >
            <Image
              src={displayImages[5].src}
              alt={displayImages[5].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80" />
            <p className="absolute bottom-4 left-4 text-xs font-medium uppercase tracking-wider text-white">
              {displayImages[5].category.replace("-", " ")}
            </p>
          </Link>
        </div>

        <div className="mt-12 flex justify-center border-t border-border/40 pt-12 sm:mt-16">
          <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-3 rounded-full border border-border/50 bg-card/80 px-5 py-3 backdrop-blur-sm">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 shrink-0 text-muted-foreground"
              fill="currentColor"
              aria-hidden
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span className="text-center text-sm text-muted-foreground">
              Follow on Instagram{" "}
              <a
                href={companyInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-red hover:underline"
              >
                @linkup_exclusive_autos
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
