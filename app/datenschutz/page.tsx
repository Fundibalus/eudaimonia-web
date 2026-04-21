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
              2. Hosting (Cloudflare Pages)
            </h2>
            <p className="mb-4">
              Diese Website wird über Cloudflare Pages gehostet. Anbieter ist
              Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA.
              Beim Aufruf der Website werden automatisch Server-Log-Dateien
              erfasst, darunter IP-Adresse, Browsertyp und -version, verwendetes
              Betriebssystem, Referrer URL und Uhrzeit der Serveranfrage.
            </p>
            <p className="mb-4">
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
              DSGVO (berechtigtes Interesse am sicheren und stabilen Betrieb der
              Website). Die Daten werden nicht mit anderen Quellen
              zusammengeführt. Cloudflare verarbeitet die Daten gemäß seiner
              Datenschutzerklärung unter{" "}
              <a
                href="https://www.cloudflare.com/privacypolicy/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white/60"
              >
                cloudflare.com/privacypolicy
              </a>
              .
            </p>
            <p>
              Mit Cloudflare besteht ein Auftragsverarbeitungsvertrag (AVV)
              gemäß Art. 28 DSGVO.
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
            <p>E-Mail: info@eudaimonia-event.de</p>
          </section>

          <section>
            <h2 className="font-display text-xs tracking-[0.2em] text-white/40 uppercase mb-3">
              4. Deine Rechte
            </h2>
            <p className="mb-4">
              Du hast gegenüber uns folgende Rechte hinsichtlich deiner
              personenbezogenen Daten:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
            <p className="mb-4">
              Zur Ausübung deiner Rechte wende dich an: info@eudaimonia-event.de
            </p>
            <p className="mb-3 font-display text-white/80">
              Beschwerderecht bei der Aufsichtsbehörde
            </p>
            <p>
              Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde
              über die Verarbeitung deiner personenbezogenen Daten zu beschweren.
              Zuständig ist das Bayerische Landesamt für Datenschutzaufsicht
              (BayLDA), Promenade 27, 91522 Ansbach,{" "}
              <a
                href="https://www.lda.bayern.de"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white/60"
              >
                lda.bayern.de
              </a>
              .
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
            <p className="mb-4">
              Diese Website nutzt Cloudflare Web Analytics zur anonymen
              Reichweitenmessung. Es werden keine Cookies gesetzt und keine
              personenbezogenen Daten gespeichert. Erfasst werden ausschließlich
              aggregierte Daten wie Seitenaufrufe, Referrer und ungefähre
              Herkunftsregion. Eine Identifikation einzelner Besucher:innen ist
              nicht möglich.
            </p>
            <p>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
              DSGVO (berechtigtes Interesse an anonymer Nutzungsstatistik).
              Weitere Informationen:{" "}
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
