"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/constants";

function ServiceFeatured({
  service,
}: {
  service: (typeof services)[0];
}) {
  return (
    <div className="group relative min-h-[420px] overflow-hidden rounded-2xl bg-card ring-1 ring-white/10 transition-shadow duration-500 hover:shadow-[0_24px_80px_-20px_rgba(0,0,0,0.5)] lg:min-h-[520px]">
      <div className="absolute inset-0">
        <Image
          src={service.image}
          alt=""
          fill
          className="object-cover opacity-45 transition-all duration-700 group-hover:scale-105 group-hover:opacity-55"
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/92 to-background/20 dark:from-background dark:via-background/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>
      <div className="relative z-10 flex h-full flex-col justify-end p-8 sm:p-10 lg:p-14 lg:max-w-[58%]">
        <div className="mb-6 flex items-center gap-3">
          <service.icon className="h-8 w-8 text-brand-red" aria-hidden />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Signature service
          </span>
        </div>
        <h3 className="font-display text-4xl font-bold tracking-tighter text-foreground sm:text-5xl lg:text-6xl">
          {service.title}
        </h3>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
          {service.description}
        </p>
        <ul className="mt-8 space-y-2.5">
          {service.features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-center gap-3 text-sm text-foreground-subtle"
            >
              <span className="h-1 w-1 shrink-0 rounded-full bg-brand-red" />
              {feature}
            </li>
          ))}
        </ul>
        <Link href={`/services#${service.slug}`} className="mt-10 inline-flex w-fit">
          <Button
            variant="ghost"
            className="group/btn -ml-2 text-brand-red hover:bg-brand-red/10 hover:text-brand-red"
          >
            Explore
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

function ServiceTile({
  service,
  compact,
}: {
  service: (typeof services)[0];
  compact?: boolean;
}) {
  return (
    <div className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-white/10 transition-shadow duration-500 hover:shadow-[0_24px_80px_-20px_rgba(0,0,0,0.5)] sm:min-h-[340px]">
      <div className="absolute inset-0">
        <Image
          src={service.image}
          alt=""
          fill
          className="object-cover opacity-30 transition-all duration-700 group-hover:scale-110 group-hover:opacity-40"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/85 to-background dark:via-background/90" />
      </div>
      <div className="relative z-10 flex flex-1 flex-col p-6 sm:p-8">
        <service.icon className="mb-4 h-6 w-6 text-brand-red" aria-hidden />
        <h3
          className={`font-display font-bold tracking-tight text-foreground transition-colors group-hover:text-brand-red ${
            compact ? "text-xl" : "text-2xl"
          }`}
        >
          {service.title}
        </h3>
        <p
          className={`mt-3 flex-1 leading-relaxed text-muted-foreground ${
            compact ? "line-clamp-3 text-sm" : "text-sm sm:text-base"
          }`}
        >
          {service.description}
        </p>
        <ul className="mt-4 space-y-1.5">
          {service.features.slice(0, compact ? 3 : 4).map((feature, idx) => (
            <li
              key={idx}
              className="flex items-center gap-2 text-xs text-foreground-subtle"
            >
              <span className="h-1 w-1 rounded-full bg-brand-red" />
              {feature}
            </li>
          ))}
        </ul>
        <Link href={`/services#${service.slug}`} className="mt-6">
          <span className="inline-flex items-center text-sm font-medium text-brand-red">
            Explore
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </div>
    </div>
  );
}

export function ServicesGrid() {
  const [featured, ...rest] = services;
  const [s1, s2, ...bottom] = rest;

  return (
    <section className="section-padding-lg bg-background">
      <div className="container">
        <motion.div
          className="mb-16 border-b border-border/50 pb-12 lg:mb-20 lg:flex lg:items-end lg:justify-between lg:gap-12 lg:pb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-3xl">
            <p className="font-editorial text-lg italic text-muted-foreground">
              What we do
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-tighter text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              Precision auto services
              <span className="text-brand-red">.</span>
            </h2>
          </div>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground lg:mt-0 lg:text-right">
            From accident repairs to bespoke upgrades — every detail handled
            with factory-level precision.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3 lg:gap-4">
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-12 lg:gap-4">
            <div className="lg:col-span-7">
              <ServiceFeatured service={featured} />
            </div>
            <div className="flex flex-col gap-3 lg:col-span-5 lg:gap-4">
              {s1 && <ServiceTile service={s1} compact />}
              {s2 && <ServiceTile service={s2} compact />}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
            {bottom.map((service) => (
              <ServiceTile key={service.id} service={service} />
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center lg:mt-20">
          <Link href="/services">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-border/40 px-8 transition-colors hover:border-brand-red/40 hover:bg-transparent"
            >
              All services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
