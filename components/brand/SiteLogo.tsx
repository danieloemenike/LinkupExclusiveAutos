import Image from "next/image";
import { brandLogo } from "@/lib/site";

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
      className={className}
      priority={priority}
      sizes="(max-width: 640px) 200px, 240px"
    />
  );
}
