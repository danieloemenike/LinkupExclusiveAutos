"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/constants";

export function ProcessSteps() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-20 text-white dark:bg-card lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-brand-red/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-ink-dark">
            How it works
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
            From damage to drive-away in four steps.
          </h2>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <motion.li
              key={step.title}
              className="group relative bg-neutral-950 p-7 transition-colors hover:bg-neutral-900 dark:bg-card dark:hover:bg-muted lg:p-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <span className="font-display text-6xl font-bold leading-none text-white/10 transition-colors group-hover:text-brand-ink-dark">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-10 font-display text-2xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{step.description}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
