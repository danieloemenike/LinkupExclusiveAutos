import type { Metadata } from "next";
import { Syne, Space_Grotesk, DM_Sans, Instrument_Serif } from "next/font/google";
import { brandLogo, getSiteUrl } from "@/lib/site";
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
    default: "Linkup Exclusive Autos | Premium Auto Garage Lagos",
    template: "%s | Linkup Exclusive Autos",
  },
  description:
    "Lagos Mainland's premier auto garage. Panel beating, oven bake painting, car buffing, wash & detailing. Your one-stop auto solution.",
  keywords: [
    "auto garage Lagos",
    "panel beating Lagos",
    "car painting Lagos",
    "car buffing Lagos",
    "car wash Lagos",
    "auto repairs Mainland",
    "Ebute-Metta auto",
  ],
  authors: [{ name: "Linkup Exclusive Autos" }],
  icons: {
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "Linkup Exclusive Autos",
    images: [
      {
        url: brandLogo.src,
        width: brandLogo.width,
        height: brandLogo.height,
        alt: brandLogo.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Linkup Exclusive Autos | Premium Auto Garage Lagos",
    description:
      "Lagos Mainland's premier auto garage. Panel beating, oven bake painting, car buffing, wash & detailing.",
    images: [brandLogo.src],
  },
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
