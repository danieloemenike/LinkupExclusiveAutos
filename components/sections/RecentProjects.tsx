"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BeforeAfter, Half } from "@/components/projects/BeforeAfter";
import { companyInfo, projects } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function RecentProjects() {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <section id="projects" className="relative scroll-mt-16 bg-muted/40 py-20 dark:bg-card/30 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-ink">
              Recent projects
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tighter text-foreground sm:text-5xl lg:text-6xl">
              Drag to see the difference.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground lg:text-right">
            Real cars from our Ebute-Metta workshop. No stock photos, no filters.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <BeforeAfter key={project.id} src={project.src} label={project.vehicle} />
          </div>

          <div className="flex flex-col lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <p className="text-sm font-medium tabular-nums text-muted-foreground">
                  {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground">
                  {project.vehicle}
                </h3>
                <p className="mt-2 text-sm font-medium text-brand-ink">{project.service}</p>
                <p className="mt-4 leading-relaxed text-muted-foreground">{project.summary}</p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 grid grid-cols-2 gap-2.5 lg:mt-auto">
              {projects.map((p, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Show ${p.vehicle}`}
                    aria-pressed={isActive}
                    className="group relative aspect-[2/1] overflow-hidden rounded-xl bg-neutral-900 outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <div
                      className={cn(
                        "absolute inset-0 overflow-hidden transition-all duration-500",
                        isActive
                          ? "scale-100 opacity-100"
                          : "scale-[1.03] opacity-40 grayscale group-hover:opacity-75 group-hover:grayscale-0"
                      )}
                    >
                      <Half src={p.src} half="bottom" />
                    </div>
                    {/* Active: fine inner hairline plus a short accent bar, instead of a heavy outer ring */}
                    <span
                      className={cn(
                        "pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset transition-colors duration-300",
                        isActive ? "ring-white/80" : "ring-white/10"
                      )}
                    />
                    <span
                      className={cn(
                        "pointer-events-none absolute bottom-2 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all duration-300",
                        isActive ? "w-6 opacity-100" : "w-0 opacity-0"
                      )}
                    />
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href="/gallery"
                className="group inline-flex items-center gap-2 font-medium text-foreground"
              >
                Full gallery
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href={companyInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-brand-ink"
              >
                @linkup_exclusive_autos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
