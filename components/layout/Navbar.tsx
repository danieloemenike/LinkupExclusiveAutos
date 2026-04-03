"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "./ThemeToggle";
import { SiteLogo } from "@/components/brand/SiteLogo";
import { navLinks, companyInfo } from "@/lib/constants";

type NavbarProps = {
  /** Light nav over dark hero until scroll (homepage). */
  overlayOnHero?: boolean;
};

export function Navbar({ overlayOnHero = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const overlayActive = overlayOnHero && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-md"
          : overlayActive
            ? "bg-black/20 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center shrink-0 rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <SiteLogo
              priority
              className={`h-8 w-auto sm:h-9 ${
                overlayActive ? "drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]" : ""
              }`}
            />
          </Link>

          <nav
            className={`hidden md:flex items-center rounded-full border px-1 py-0.5 transition-colors duration-300 ${
              overlayActive
                ? "border-white/15 bg-white/5"
                : "border-transparent"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  overlayActive
                    ? "text-white/75 hover:text-white hover:bg-white/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle variant={overlayActive ? "overlay" : "default"} />
            <Link href="/contact">
              <Button className="hidden sm:inline-flex bg-brand-red hover:bg-brand-red-deep text-white shadow-brand-red">
                Book Now
              </Button>
            </Link>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`size-9 md:hidden ${
                      overlayActive
                        ? "text-white hover:bg-white/10 hover:text-white"
                        : ""
                    }`}
                  />
                }
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col gap-6 mt-8">
                  <SiteLogo className="h-10 w-auto" />
                  <nav className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-brand-red hover:bg-brand-red-deep text-white">
                        Book a Service
                      </Button>
                    </Link>
                    <p className="mt-4 text-center text-sm text-muted-foreground">
                      {companyInfo.phoneFormatted}
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
