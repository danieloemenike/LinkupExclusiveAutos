"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { stats } from "@/lib/constants";

function AnimatedCounter({
  value,
  suffix,
}: {
  value: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  // Avoid large negative root margins on mobile: they shrink the “in view” region so
  // stacked stats near the top/bottom of the viewport never satisfy IntersectionObserver.
  const isInView = useInView(ref, { once: true, amount: 0.35 });
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const hasDecimal = value.includes(".");

  const spring = useSpring(0, {
    mass: 0.8,
    stiffness: 75,
    damping: 15,
  });

  const display = useTransform(spring, (current) => {
    if (hasDecimal) {
      return current.toFixed(1);
    }
    return Math.round(current).toLocaleString();
  });

  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      spring.set(numericValue);
    }
  }, [isInView, spring, numericValue]);

  useEffect(() => {
    const unsubscribe = display.on("change", (v) => {
      setDisplayValue(v);
    });
    return unsubscribe;
  }, [display]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}
      {suffix}
    </span>
  );
}

export function StatsBar() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-mesh-dark py-20 text-white grain-overlay lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 z-[2] opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(255 255 255 / 0.35) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(255 255 255 / 0.35) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10 lg:items-start">
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
          >
            <p className="font-editorial text-lg italic text-white/55">
              By the numbers
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tighter sm:text-4xl lg:text-5xl">
              Mainland Lagos&apos;s benchmark for finish and fit.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              A decade of panel work, paint, and detailing—measured in cars
              returned to the road looking better than expected.
            </p>
          </motion.div>

          <div className="flex flex-col gap-10 lg:col-span-8 lg:flex-row lg:gap-0">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                viewport={{ once: true, margin: "-40px" }}
                className={`flex flex-1 flex-col justify-end lg:min-h-[160px] ${
                  index > 0
                    ? "border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
                    : ""
                }`}
              >
                <div className="font-display text-4xl font-bold tabular-nums text-brand-red sm:text-5xl lg:text-6xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white/45">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
