"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { mockGalleryImages } from "@/lib/constants";

const categories = [
  { id: "all", label: "All" },
  { id: "panel-beating", label: "Panel Beating" },
  { id: "painting", label: "Painting" },
  { id: "buffing", label: "Buffing" },
  { id: "washing", label: "Washing" },
  { id: "upgrades", label: "Upgrades" },
  { id: "accessories", label: "Accessories" },
];

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages =
    activeCategory === "all"
      ? mockGalleryImages
      : mockGalleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      {/* <div className="flex flex-wrap justify-center gap-2 pb-12">
        {categories.map((cat) => (
          <Button
            key={cat.id}
            variant={activeCategory === cat.id ? "default" : "outline"}
            onClick={() => setActiveCategory(cat.id)}
            className={
              activeCategory === cat.id
                ? "bg-brand-red hover:bg-brand-red-deep text-white"
                : "rounded-full"
            }
          >
            {cat.label}
          </Button>
        ))}
      </div> */}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredImages.map((image) => (
          <Dialog key={image.id}>
            <DialogTrigger
              render={
                <button
                  type="button"
                  className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl bg-muted ring-1 ring-border/50"
                />
              }
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                <p className="font-medium capitalize text-white">{image.alt}</p>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl border-border bg-background p-0">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-contain"
                />
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </>
  );
}
