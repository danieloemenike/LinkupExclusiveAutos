import type { Metadata } from "next";
import { Syne, Space_Grotesk, DM_Sans, Instrument_Serif } from "next/font/google";
import { getSiteUrl, siteDescription, siteName } from "@/lib/site";
import { StructuredData } from "@/components/seo/StructuredData";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryProvider } from "@/lib/query-provider";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: "Linkup Exclusive Autos | Premium Auto Garage in Lagos",
    template: "%s | Linkup Exclusive Autos",
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "Linkup Exclusive Autos",
    "Linkup Autos",
    "Link Up Exclusive Autos",
    "linkupautos",
    "auto garage Lagos",
    "panel beating Lagos",
    "oven bake painting Lagos",
    "car painting Lagos",
    "car buffing Lagos",
    "car wash Lagos",
    "car detailing Lagos",
    "auto repairs Mainland Lagos",
    "Ebute-Metta auto garage",
  ],
  authors: [{ name: siteName, url: "https://www.linkupautos.com" }],
  creator: siteName,
  publisher: siteName,
  category: "Automotive",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName,
    title: "Linkup Exclusive Autos | Premium Auto Garage in Lagos",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Linkup Exclusive Autos | Premium Auto Garage in Lagos",
    description: siteDescription,
  },
  // Paste the token from Google Search Console here once the domain is added.
  // verification: { google: "..." },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body
        suppressHydrationWarning
        className={`${syne.variable} ${spaceGrotesk.variable} ${dmSans.variable} ${instrumentSerif.variable} min-h-screen bg-background font-body text-foreground antialiased`}
      >
        <StructuredData />
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider>
              {children}
              <Toaster position="bottom-right" richColors />
            </TooltipProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
