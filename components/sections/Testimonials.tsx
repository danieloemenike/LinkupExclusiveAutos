import { ArrowUpRight, Star } from "lucide-react";
import { googleReviews, testimonials, type Testimonial } from "@/lib/constants";
import { cn } from "@/lib/utils";

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}

/** Five stars with fractional fill (e.g. 4.2). */
function Stars({ value, size = "h-4 w-4" }: { value: number; size?: string }) {
  return (
    <div className="flex gap-0.5" aria-label={`Rated ${value} out of 5`} role="img">
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <span key={i} className={cn("relative", size)}>
            <Star className={cn("absolute inset-0 fill-muted text-muted", size)} />
            <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
              <Star className={cn("fill-amber-400 text-amber-400", size)} />
            </span>
          </span>
        );
      })}
    </div>
  );
}

function initials(name: string) {
  return name
    .replace(/\./g, "")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function ReviewCard({ review, className }: { review: Testimonial; className?: string }) {
  return (
    <figure
      className={cn(
        "rounded-3xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] dark:shadow-none",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <Stars value={review.rating} size="h-3.5 w-3.5" />
        <GoogleG className="h-4 w-4" />
      </div>
      <blockquote className="mt-4 text-[15px] leading-relaxed text-foreground">
        &ldquo;{review.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red/10 font-display text-sm font-semibold text-brand-ink">
          {initials(review.name)}
        </span>
        <span>
          <span className="block text-sm font-semibold text-foreground">{review.name}</span>
          <span className="block text-xs text-muted-foreground">
            {review.meta} · {review.when}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

/** A vertically auto-scrolling column. The list is doubled so the loop is seamless. */
function ReviewColumn({ reviews, duration, reverse }: { reviews: Testimonial[]; duration: string; reverse?: boolean }) {
  return (
    <div className="review-column flex flex-col">
      <div
        className={cn("review-scroll flex flex-col", reverse && "review-scroll-reverse")}
        style={{ animationDuration: duration }}
      >
        {[...reviews, ...reviews].map((r, i) => (
          <ReviewCard key={`${r.id}-${i}`} review={r} className="mb-4" />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  const colA = testimonials.filter((_, i) => i % 2 === 0);
  const colB = testimonials.filter((_, i) => i % 2 === 1);

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Summary */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-ink">
                Reviews
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tighter text-foreground sm:text-5xl">
                What our clients say on Google.
              </h2>
              <p className="mt-5 max-w-md text-muted-foreground">
                Real reviews from car owners who trusted us with their panels, paint and finish.
              </p>

              <div className="mt-10 rounded-3xl border border-border bg-card p-6 sm:p-7">
                <div className="flex items-center gap-2.5 text-sm font-medium text-muted-foreground">
                  <GoogleG className="h-5 w-5" />
                  Google Reviews
                </div>
                <div className="mt-4 flex items-end gap-4">
                  <span className="font-display text-6xl font-bold leading-none tracking-tight text-foreground">
                    {googleReviews.rating.toFixed(1)}
                  </span>
                  <div className="pb-1">
                    <Stars value={googleReviews.rating} size="h-5 w-5" />
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      Based on {googleReviews.count} reviews
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                  <a
                    href={googleReviews.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
                  >
                    Read all reviews
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href={googleReviews.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 flex-1 items-center justify-center rounded-full border border-border px-5 text-sm font-medium text-foreground transition-colors hover:border-foreground/30"
                  >
                    Leave a review
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: two drifting columns */}
          <div className="review-columns relative hidden h-[620px] grid-cols-2 gap-4 overflow-hidden md:grid lg:col-span-7">
            <ReviewColumn reviews={colA} duration="38s" />
            <ReviewColumn reviews={colB} duration="46s" reverse />
          </div>

          {/* Mobile: swipeable row */}
          <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden">
            {testimonials.map((r) => (
              <ReviewCard key={r.id} review={r} className="w-[82vw] max-w-sm shrink-0 snap-center" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
