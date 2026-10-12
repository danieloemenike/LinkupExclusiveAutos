"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, X } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { BeforeAfter, Half } from "@/components/projects/BeforeAfter";
import { companyInfo, projectCategories, projects, type Project } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Filter = (typeof projectCategories)[number]["id"];

function ProjectCard({ project, index, featured }: { project: Project; index: number; featured?: boolean }) {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <button
            type="button"
            className={cn(
              "group relative w-full overflow-hidden rounded-[1.75rem] bg-neutral-900 text-left text-white outline-none ring-1 ring-border focus-visible:ring-2 focus-visible:ring-ring",
              featured ? "aspect-[4/3] sm:aspect-[21/9]" : "aspect-[4/3] sm:aspect-[2/1]"
            )}
          />
        }
      >
        {/* After by default; hovering reveals the before shot */}
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]">
          <Half src={project.src} half="bottom" />
        </div>
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <Half src={project.src} half="top" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/20" />

        <div className="absolute left-5 top-5 flex items-center gap-2 sm:left-6 sm:top-6">
          <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-900 group-hover:hidden">
            After
          </span>
          <span className="hidden rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur group-hover:inline">
            Before
          </span>
        </div>
        <span className="absolute right-5 top-5 font-display text-sm font-semibold tabular-nums text-white/70 sm:right-6 sm:top-6">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 sm:inset-x-6 sm:bottom-6">
          <div>
            <p className="text-xs font-medium text-brand-ink-dark">{project.service}</p>
            <h3
              className={cn(
                "mt-1 font-display font-bold tracking-tight",
                featured ? "text-2xl sm:text-4xl" : "text-xl sm:text-2xl"
              )}
            >
              {project.vehicle}
            </h3>
          </div>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-neutral-900">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </DialogTrigger>

      <DialogContent
        showCloseButton={false}
        className="max-h-[92svh] gap-0 overflow-y-auto rounded-[2rem] border-0 bg-background p-3 sm:max-w-5xl sm:p-4"
      >
        <BeforeAfter src={project.src} label={project.vehicle} className="rounded-[1.5rem]" />
        <div className="flex flex-col gap-6 px-3 pb-3 pt-6 sm:flex-row sm:items-end sm:justify-between sm:px-4">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-brand-ink">{project.service}</p>
            <DialogTitle className="mt-1 font-display text-3xl font-bold tracking-tight text-foreground">
              {project.vehicle}
            </DialogTitle>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{project.summary}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-2.5 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-brand-red px-5 text-sm font-medium text-white transition-colors hover:bg-brand-red-deep"
            >
              Get a similar quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <DialogClose className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border px-5 text-sm font-medium text-foreground transition-colors hover:bg-muted">
              <X className="h-4 w-4" />
              Close
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <LayoutGroup>
          <div
            role="tablist"
            aria-label="Filter projects"
            className="-mx-4 flex gap-1 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:w-fit sm:rounded-full sm:border sm:border-border sm:bg-card sm:p-1 sm:px-1 [&::-webkit-scrollbar]:hidden"
          >
            {projectCategories.map((cat) => {
              const isActive = filter === cat.id;
              const count =
                cat.id === "all" ? projects.length : projects.filter((p) => p.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setFilter(cat.id)}
                  className={cn(
                    "relative shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive ? "text-background" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="gallery-filter"
                      className="absolute inset-0 rounded-full bg-foreground"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span className="relative">
                    {cat.label}
                    <span className={cn("ml-1.5 tabular-nums", isActive ? "opacity-60" : "opacity-50")}>
                      {count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </LayoutGroup>
        <p className="text-sm text-muted-foreground">Hover to see the before · Tap to compare</p>
      </div>

      <motion.div layout className="mt-8 grid gap-4 md:grid-cols-2 lg:gap-5">
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className={i === 0 ? "md:col-span-2" : undefined}
            >
              <ProjectCard project={project} index={projects.indexOf(project)} featured={i === 0} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Instagram band */}
      <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-border bg-card p-8 sm:flex-row sm:items-center sm:p-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-ink">More every week</p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            See new jobs as they leave the workshop.
          </h2>
        </div>
        <a
          href={companyInfo.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          @linkup_exclusive_autos
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </>
  );
}
