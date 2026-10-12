"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";
import { cn } from "@/lib/utils";

/** Shows one half of a stacked before/after photo (top = before, bottom = after). */
export function Half({ src, half, priority }: { src: string; half: "top" | "bottom"; priority?: boolean }) {
  return (
    <div className={cn("absolute inset-x-0 h-[200%]", half === "top" ? "top-0" : "-top-full")}>
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 60vw"
      />
    </div>
  );
}

export function BeforeAfter({
  src,
  label,
  className,
}: {
  src: string;
  label: string;
  className?: string;
}) {
  const [pos, setPos] = useState(50);

  return (
    <div
      className={cn(
        "relative aspect-[2/1] w-full overflow-hidden rounded-[1.75rem] bg-neutral-900 ring-1 ring-border",
        className
      )}
    >
      <Half src={src} half="bottom" />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Half src={src} half="top" />
      </div>

      <span className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
        Before
      </span>
      <span className="absolute right-4 top-4 rounded-full bg-brand-red px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
        After
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.15)]"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-neutral-900 shadow-lg">
          <ChevronsLeftRight className="h-5 w-5" />
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`Compare before and after: ${label}`}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
