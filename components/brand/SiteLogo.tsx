import Image from "next/image";
import { brandLogo } from "@/lib/site";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  priority?: boolean;
};

export function SiteLogo({ className, priority }: SiteLogoProps) {
  return (
    <Image
      src={brandLogo.src}
      width={brandLogo.width}
      height={brandLogo.height}
      alt={brandLogo.alt}
      className={cn(
        "object-contain object-left",
        className
      )}
      priority={priority}
      sizes="(max-width: 640px) 200px, 240px"
    />
  );
}
