import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, MapPin, Phone } from "lucide-react";
import { companyInfo } from "@/lib/constants";

const ctaImage = "/ceo.jpg";

export function CTABanner() {
  const weekdayHours = companyInfo.hours[0];

  return (
    <section className="bg-background px-3 py-16 sm:px-4 lg:py-24">
      {/* Dark framed card, same treatment as the hero so it reads identically in both themes */}
      <div className="relative isolate mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-neutral-950 text-white ring-1 ring-white/10 sm:rounded-[2.5rem] lg:grid-cols-12">
        <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
        <div aria-hidden className="absolute -bottom-40 -left-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-brand-red/25 blur-[120px]" />

        <div className="relative z-10 flex flex-col justify-center px-6 py-14 sm:px-10 lg:col-span-7 lg:px-14 lg:py-20">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/75">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red shadow-[0_0_10px_2px_rgba(208,2,27,0.7)]" />
            Book your slot
          </span>

          <h2 className="chrome-text mt-6 font-display text-4xl font-bold leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            Ready when
            <br />
            you are.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/60">
            Same-day assessments, clear quotes, and workmanship you can walk around and
            inspect before you pay.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-brand-red px-7 text-[15px] font-medium text-white shadow-[0_8px_30px_-6px_rgba(208,2,27,0.6)] transition-colors hover:bg-[#e0061f]"
            >
              Book online
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={`tel:+${companyInfo.whatsappNumber}`}
              className="inline-flex h-13 items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-7 text-[15px] font-medium text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4 text-white/60" />
              {companyInfo.phoneFormatted}
            </a>
          </div>

          <dl className="mt-12 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-2">
            <div className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/40">
                  {weekdayHours.day}
                </dt>
                <dd className="mt-1 text-sm text-white/80">{weekdayHours.hours}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/40">
                  Workshop
                </dt>
                <dd className="mt-1 text-sm text-white/80">10 Savage Street, Ebute-Metta West</dd>
              </div>
            </div>
          </dl>
        </div>

        <div className="relative min-h-[360px] lg:col-span-5 lg:min-h-full">
          <Image
            src={ctaImage}
            alt="The CEO of Linkup Exclusive Autos"
            fill
            className="object-cover object-[center_25%] grayscale-[35%]"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          {/* Blend the portrait into the card */}
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950/60 lg:bg-gradient-to-r lg:from-neutral-950 lg:via-neutral-950/10 lg:to-transparent" />
          <span className="absolute bottom-5 right-5 rounded-full border border-white/15 bg-black/50 px-3.5 py-1.5 text-xs font-medium text-white/80 backdrop-blur-md">
            Led by our CEO
          </span>
        </div>
      </div>
    </section>
  );
}
