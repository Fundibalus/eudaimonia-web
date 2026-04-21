import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = { title: "Datenschutz · EUDAIMONIA" };

export default function Datenschutz() {
  return (
    <>
    <main className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="font-display text-[0.65rem] tracking-[0.3em] uppercase text-white/40 hover:text-white/80 transition-colors"
        >
          ← Zurück
        </Link>

        <h1 className="font-display font-bold text-3xl tracking-wide text-iris mt-8 mb-10">
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 text-white/70 text-sm leading-relaxed">
          <section>
            <h2 className="font-display text-xs tracking-[0.2em] text-white/40 uppercase mb-3">
              1. Datenschutz auf einen Blick
            </h2>
            <p className="mb-3 font-display text-white/80">Allgemeine Hinweise</p>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit deinen personenbezogenen Daten passiert, wenn du diese
              Website besuchst. Personenbezogene Daten sind alle Daten, mit
              denen du persönlich identifiziert werden kannst.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xs tracking-[0.2em] text-white/40 uppercase mb-3">
              2. Hosting
            </h2>
            <p>
              Diese Website wird bei einem externen Dienstleister gehostet
              (Hoster). Die personenbezogenen Daten, die auf dieser Website
              erfasst werden, werden auf den Servern des Hosters gespeichert.
              Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen,
              Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten,
              Namen, Websitezugriffe und sonstige über eine Website generierte
              Daten handeln.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xs tracking-[0.2em] text-white/40 uppercase mb-3">
              3. Allgemeine Hinweise und Pflichtinformationen
            </h2>
            <p className="mb-3 font-display text-white/80">Datenschutz</p>
            <p className="mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz deiner
              persönlichen Daten sehr ernst. Wir behandeln deine
              personenbezogenen Daten vertraulich und entsprechend den
              gesetzlichen Datenschutzvorschriften sowie dieser
              Datenschutzerklärung.
            </p>
            <p className="mb-3 font-display text-white/80">
              Hinweis zur verantwortlichen Stelle
            </p>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser
              Website ist:
            </p>
            <p className="mt-2">Daniel Tonnar-Leyva</p>
            <p>Landsbergerstraße 106</p>
            <p>80339 München</p>
            <p>E-Mail: mail@marlon-prantner.de</p>
          </section>

          <section>
            <h2 className="font-display text-xs tracking-[0.2em] text-white/40 uppercase mb-3">
              4. Datenerfassung auf dieser Website
            </h2>
            <p className="mb-3 font-display text-white/80">Server-Log-Dateien</p>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in sogenannten Server-Log-Dateien, die dein
              Browser automatisch übermittelt. Dies sind: Browsertyp und
              Browserversion, verwendetes Betriebssystem, Referrer URL,
              Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage
              und IP-Adresse. Eine Zusammenführung dieser Daten mit anderen
              Datenquellen wird nicht vorgenommen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xs tracking-[0.2em] text-white/40 uppercase mb-3">
              5. Externe Dienste
            </h2>
            <p>
              Beim Klick auf den Tickets-Button wirst du zu rausgegangen.de
              weitergeleitet. Für die dortige Datenverarbeitung gilt die
              Datenschutzerklärung von rausgegangen.de.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xs tracking-[0.2em] text-white/40 uppercase mb-3">
              6. Reichweitenmessung (Cloudflare Web Analytics)
            </h2>
            <p>
              Diese Website nutzt Cloudflare Web Analytics zur anonymen
              Reichweitenmessung. Es werden keine Cookies gesetzt und keine
              personenbezogenen Daten gespeichert. Erfasst werden ausschließlich
              aggregierte Daten wie Seitenaufrufe, Referrer und ungefähre
              Herkunftsregion. Eine Identifikation einzelner Besucher:innen ist
              nicht möglich. Weitere Informationen:{" "}
              <a
                href="https://www.cloudflare.com/web-analytics/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white/60"
              >
                cloudflare.com/web-analytics
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}
