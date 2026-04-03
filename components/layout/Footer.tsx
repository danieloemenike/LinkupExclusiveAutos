"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { SiteLogo } from "@/components/brand/SiteLogo";
import { navLinks, companyInfo, services } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-flex max-w-[220px]">
              <SiteLogo className="h-10 w-auto sm:h-11" />
            </Link>
            <p className="text-sm text-muted-foreground">
              {companyInfo.tagline}. Expert auto services in Mainland Lagos.
            </p>
            <div className="flex gap-3">
              <a
                href={companyInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground size-9"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
            <div className="pt-4">
              <ThemeToggle />
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Links</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Services</h3>
            <nav className="flex flex-col gap-2">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services#${service.slug}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {service.title}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4 text-brand-red" />
                {companyInfo.phoneFormatted}
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4 text-brand-red" />
                {companyInfo.email}
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-brand-red shrink-0 mt-0.5" />
                <span>{companyInfo.address}</span>
              </div>
              <div className="border-t border-border pt-3 mt-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                  Hours
                </p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {companyInfo.hours.map((item) => (
                    <li key={item.day}>
                      <span className="font-medium text-foreground">
                        {item.day}
                      </span>
                      : {item.hours}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {companyInfo.name}. All rights
              reserved.
            </p>
            <Link href="/contact">
              <Button variant="ghost" size="sm" className="text-brand-red">
                Book a Service
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
