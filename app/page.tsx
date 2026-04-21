import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Lineup from "@/components/Lineup";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import { event } from "@/event.config";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicEvent",
  name: "EUDAIMONIA",
  description:
    "Queere Clubnacht in München. Queer & FLINTA* friendly, Awareness Concept, Safe Space.",
  startDate: event.isoDate,
  endDate: event.isoDateEnd,
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "MusicVenue",
    name: "Nachtwerk Club",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Landsberger Str. 185",
      addressLocality: "München",
      postalCode: "80687",
      addressCountry: "DE",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "EUDAIMONIA",
    url: event.siteUrl,
  },
  offers: {
    "@type": "Offer",
    url: event.ticketUrl,
    availability: "https://schema.org/InStock",
    priceCurrency: "EUR",
  },
  image: `${event.siteUrl}/flyer.png`,
  url: event.siteUrl,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Hero />
        <Manifesto />
        <Lineup />
        <Gallery />
        <Footer />
      </main>
    </>
  );
}
