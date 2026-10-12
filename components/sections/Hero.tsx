import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Star } from "lucide-react";
import { companyInfo, googleReviews, heroContent, projects, stats } from "@/lib/constants";

const heroImage =
  "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=2000&q=80";

export function Hero() {
  const latest = projects[0];

  return (
    <section className="bg-background px-3 pt-[4.5rem] sm:px-4">
      {/* Full-bleed cinematic frame. Always dark inside, so it reads the same in both themes. */}
      <div className="relative isolate flex min-h-[640px] flex-col overflow-hidden rounded-[2rem] bg-neutral-950 text-white sm:h-[calc(100svh-5.5rem)] sm:max-h-[880px] sm:rounded-[2.5rem]">
        <Image
          src={heroImage}
          alt="Dark grey sports car under a cloudy sky"
          fill
          priority
          className="-z-10 object-cover object-[center_78%] motion-safe:animate-in motion-safe:zoom-in-110 motion-safe:duration-[1600ms]"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/95 via-black/35 to-black/10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-black/15 to-transparent" />

        {/* Top row */}
        <div className="flex items-start justify-between gap-4 p-5 sm:p-8 lg:p-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/85 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red-light" />
            Linkup Exclusive Autos · Ebute-Metta, Lagos
          </span>
          <a
            href={googleReviews.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/85 backdrop-blur-md transition-colors hover:bg-white/20 sm:inline-flex"
          >
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            {googleReviews.rating.toFixed(1)} on Google · {googleReviews.count} reviews
          </a>
        </div>

        {/* Bottom content */}
        <div className="mt-auto grid items-end gap-8 p-5 sm:p-8 lg:grid-cols-12 lg:p-10">
          <div className="lg:col-span-8 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-8 motion-safe:duration-700">
            <h1 className="font-display text-[clamp(2.6rem,6.4vw,6rem)] font-bold leading-[0.95] tracking-[-0.04em]">
              Lagos&apos; finest
              <br />
              bodywork <span className="text-brand-ink-dark">&amp;</span> paint.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
              {heroContent.subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={heroContent.cta.primary.href}
                className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-brand-red px-7 text-[15px] font-medium text-white shadow-brand-red transition-colors hover:bg-brand-red-light"
              >
                {heroContent.cta.primary.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href={companyInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 text-[15px] font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20"
              >
                Quote on WhatsApp
                <ArrowUpRight className="h-4 w-4 text-white/60" />
              </a>
            </div>
          </div>

          {/* Real job teaser */}
          <a
            href="#projects"
            className="group hidden w-full max-w-sm justify-self-end rounded-3xl border border-white/15 bg-white/10 p-3 backdrop-blur-xl transition-colors hover:bg-white/15 lg:col-span-4 lg:block motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-right-8 motion-safe:duration-1000"
          >
            <div className="grid grid-cols-2 gap-1.5 overflow-hidden rounded-2xl">
              {(["top", "bottom"] as const).map((half) => (
                <div key={half} className="relative aspect-[4/3] overflow-hidden">
                  <div className={`absolute inset-x-0 h-[200%] ${half === "top" ? "top-0" : "-top-full"}`}>
                    <Image src={latest.src} alt="" fill className="object-cover" sizes="200px" />
                  </div>
                  <span className="absolute bottom-1.5 left-1.5 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
                    {half === "top" ? "Before" : "After"}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-3">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/55">
                  Latest job
                </p>
                <p className="mt-0.5 font-display text-base font-semibold">{latest.vehicle}</p>
              </div>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-neutral-900 transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Stats */}
      <dl className="mx-auto mt-3 grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-background px-5 py-5 sm:px-7 sm:py-6">
            <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {stat.label}
            </dt>
            <dd className="mt-1.5 font-display text-3xl font-bold tabular-nums tracking-tight text-foreground sm:text-4xl">
              {Number(stat.value).toLocaleString()}
              <span className="text-brand-ink">{stat.suffix}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
