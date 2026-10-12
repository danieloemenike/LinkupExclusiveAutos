"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function ServicesGrid() {
  const [hovered, setHovered] = useState(0);
  const ActiveIcon = services[hovered].icon;

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-ink">
              What we do
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tighter text-foreground sm:text-5xl lg:text-6xl">
              One garage.
              <br />
              <span className="text-muted-foreground">Every finish.</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground lg:text-right">
            From accident repairs to bespoke upgrades, every job is handled in-house with
            factory-level precision.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12">
          <ul className="divide-y divide-border border-y border-border lg:col-span-7">
            {services.map((service, i) => (
              <li key={service.id} onMouseEnter={() => setHovered(i)} onFocus={() => setHovered(i)}>
                <Link
                  href={`/services#${service.slug}`}
                  className="group flex items-start gap-5 py-6 sm:gap-8 sm:py-7"
                >
                  <span
                    className={cn(
                      "mt-1.5 font-display text-sm font-semibold tabular-nums transition-colors",
                      hovered === i ? "text-brand-ink" : "text-muted-foreground"
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-brand-ink sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {service.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {service.features.slice(0, 3).map((f) => (
                        <span
                          key={f}
                          className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-all group-hover:rotate-45 group-hover:border-brand-red group-hover:bg-brand-red group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28 aspect-[4/5] overflow-hidden rounded-[2rem] bg-muted ring-1 ring-border">
              <AnimatePresence initial={false}>
                <motion.div
                  key={services[hovered].id}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
                >
                  <Image
                    src={services[hovered].image}
                    alt={`${services[hovered].title}: before and after, Linkup Exclusive Autos`}
                    fill
                    className="object-cover"
                    sizes="40vw"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <span className="absolute left-5 top-5 rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
                Before
              </span>
              <span className="absolute left-5 top-[calc(50%+1.25rem)] rounded-full bg-brand-red px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                After
              </span>
              <span className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[11px] font-medium text-white/85 backdrop-blur">
                Real job · Our workshop
              </span>
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 text-white">
                <ActiveIcon className="h-5 w-5 text-brand-ink-dark" aria-hidden />
                <span className="font-display text-xl font-semibold">{services[hovered].title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
