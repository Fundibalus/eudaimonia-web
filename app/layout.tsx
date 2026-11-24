import type { Metadata } from "next";
import { Syne, DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["system-ui", "sans-serif"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["system-ui", "sans-serif"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-editorial",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["Georgia", "serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eudaimonia-event.de"),
  title: {
    default: "EUDAIMONIA — Feel Free. Feel Safe. | München 12.12.26",
    template: "%s | EUDAIMONIA",
  },
  description:
    "EUDAIMONIA — queere Clubnacht in München. Queer & FLINTA* friendly, Awareness Concept, Safe Space. 12. Dezember 2026, 22:30 Uhr, Backstage München.",
  keywords: [
    "EUDAIMONIA",
    "queere Party München",
    "FLINTA Party München",
    "queer club München",
    "Backstage München",
    "queere Clubnacht",
    "safe space Party",
    "queeres Event München",
  ],
  alternates: {
    canonical: "https://eudaimonia-event.de",
  },
  openGraph: {
    title: "EUDAIMONIA — Feel Free. Feel Safe.",
    description: "12. Dezember 2026 · 22:30 Uhr · Backstage München. Queer & FLINTA* friendly.",
    url: "https://eudaimonia-event.de",
    siteName: "EUDAIMONIA",
    images: [{ url: "/flyer.png", width: 1200, height: 630, alt: "EUDAIMONIA Flyer 12.12.2026" }],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EUDAIMONIA — Feel Free. Feel Safe.",
    description: "12. Dezember 2026 · 22:30 Uhr · Backstage München.",
    images: ["/flyer.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`h-full ${syne.variable} ${dmSans.variable} ${instrumentSerif.variable}`}
    >
      <head>
        <link
          rel="preload"
          as="image"
          href="/logo.webp"
          type="image/webp"
          fetchPriority="high"
        />
      </head>
      <body className="grain min-h-full bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
