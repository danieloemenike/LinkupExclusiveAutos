"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { stats, companyInfo } from "@/lib/constants";

const stripItems = [
  { key: "yrs", stat: stats[0] },
  { key: "cars", stat: stats[1] },
  { key: "clients", stat: stats[2] },
];

export function TrustStrip() {
  return (
    <section className="relative z-20 border-y border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 py-6 md:flex-row md:items-center md:justify-between md:gap-8 md:py-5">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            {stripItems.map(({ key, stat }) => (
              <div key={key} className="flex items-baseline gap-2">
                <span className="font-display text-2xl font-bold tabular-nums text-white sm:text-3xl">
                  {stat.value}
                  {stat.suffix}
                </span>
                <span className="max-w-[8rem] text-xs font-medium uppercase tracking-wider text-white/50">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-1 border-t border-white/10 pt-6 md:border-t-0 md:border-l md:pl-8 md:pt-0">
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-brand-chrome/80">
              Workshop
            </span>
            <p className="max-w-xs text-sm leading-snug text-white/70">
              {companyInfo.address.split(",").slice(0, 2).join(",")}
            </p>
            <Link
              href={companyInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-brand-red hover:text-brand-red-light"
            >
              Directions
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
