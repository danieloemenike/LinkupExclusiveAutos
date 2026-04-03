"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { testimonials } from "@/lib/constants";

export function Testimonials() {
  const [featured, ...supporting] = testimonials;

  return (
    <section className="section-padding-lg bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-14 lg:mb-20 lg:flex lg:items-end lg:justify-between lg:gap-12"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div>
            <p className="font-editorial text-lg italic text-muted-foreground">
              Testimonials
            </p>
            <h2 className="mt-2 font-display text-4xl font-bold tracking-tighter text-foreground sm:text-5xl">
              Word on the street
            </h2>
          </div>
          <p className="mt-6 max-w-md text-muted-foreground lg:mt-0 lg:text-right">
            Real feedback from owners who trust us with paint, panels, and
            detailing.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="panel-frame h-full overflow-hidden border-0 bg-card">
              <CardContent className="flex h-full flex-col p-8 sm:p-10 lg:p-12">
                <div className="mb-8 flex gap-1">
                  {[...Array(featured.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-brand-red text-brand-red"
                    />
                  ))}
                </div>
                <blockquote className="font-editorial text-2xl leading-snug text-foreground sm:text-3xl lg:text-[1.75rem] lg:leading-tight xl:text-4xl">
                  &ldquo;{featured.quote}&rdquo;
                </blockquote>
                <div className="mt-10 flex items-center gap-4 border-t border-border/50 pt-8">
                  <Avatar className="h-14 w-14 border-2 border-border/60">
                    <AvatarImage src={featured.avatar} alt={featured.name} />
                    <AvatarFallback>
                      {featured.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-display font-semibold">{featured.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {featured.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="flex flex-col gap-6 lg:col-span-5">
            {supporting.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.08 * (index + 1) }}
              >
                <Card className="h-full border-border/50 bg-card/80 transition-colors hover:border-brand-red/25">
                  <CardContent className="p-6 sm:p-8">
                    <div className="mb-4 flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-3.5 w-3.5 fill-brand-red text-brand-red"
                        />
                      ))}
                    </div>
                    <blockquote className="text-sm leading-relaxed text-muted-foreground">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <div className="mt-6 flex items-center gap-3 border-t border-border/40 pt-5">
                      <Avatar className="h-10 w-10 border border-border/50">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-display text-sm font-semibold">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
