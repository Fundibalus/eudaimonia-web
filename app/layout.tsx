import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="de" className="h-full">
      <body className="grain min-h-full bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
