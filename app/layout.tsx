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
  title: "EUDAIMONIA — Be free. Be safe.",
  description:
    "EUDAIMONIA ist mehr als nur eine Party. Ein Ort, an dem du tanzen kannst, ohne Angst. Queerfreundlich, FLINTA* zentriert, offen für alle, die diese Werte respektieren.",
  openGraph: {
    title: "EUDAIMONIA — Be free. Be safe.",
    description: "02.05.26 | 23:00 | Nachtwerk München",
    images: ["/flyer.png"],
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
      <body className="grain min-h-full bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
