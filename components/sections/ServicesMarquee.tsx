import { services } from "@/lib/constants";
import { cn } from "@/lib/utils";

/** Scrolling band of service names. Pure CSS, stops for reduced-motion users. */
export function ServicesMarquee() {
  const items = [...services, ...services];

  return (
    <div
      aria-hidden
      className="relative overflow-hidden border-y border-white/10 bg-neutral-950 py-7 sm:py-9"
    >
      {/* Hairline sheen across the top edge */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      <div className="marquee-mask">
        <div className="marquee flex w-max items-center">
          {items.map((s, i) => (
            <span key={`${s.id}-${i}`} className="flex items-center gap-8 pr-8 sm:gap-12 sm:pr-12">
              <span
                className={cn(
                  "whitespace-nowrap leading-none",
                  i % 2 === 0
                    ? "chrome-text font-display text-3xl font-semibold uppercase tracking-[-0.02em] sm:text-5xl"
                    : "font-editorial text-3xl italic text-white/45 sm:text-5xl"
                )}
              >
                {s.title}
              </span>
              <span className="h-2 w-2 rotate-45 bg-brand-red shadow-[0_0_14px_2px_rgba(208,2,27,0.6)]" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
