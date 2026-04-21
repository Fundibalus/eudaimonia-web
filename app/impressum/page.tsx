import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = { title: "Impressum · EUDAIMONIA" };

export default function Impressum() {
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
          Impressum
        </h1>

        <div className="space-y-8 text-white/70 text-sm leading-relaxed">
          <section>
            <h2 className="font-display text-xs tracking-[0.2em] text-white/40 uppercase mb-3">
              Angaben gemäß § 5 DDG
            </h2>
            <p>Marlon Prantner</p>
            <p>[Straße + Hausnummer]</p>
            <p>[PLZ + Ort]</p>
          </section>

          <section>
            <h2 className="font-display text-xs tracking-[0.2em] text-white/40 uppercase mb-3">
              Vertreten durch
            </h2>
            <p>Marlon Prantner</p>
          </section>

          <section>
            <h2 className="font-display text-xs tracking-[0.2em] text-white/40 uppercase mb-3">
              Kontakt
            </h2>
            <p>Telefon: [Telefonnummer]</p>
            <p>E-Mail: mail@marlon-prantner.de</p>
          </section>

          <section>
            <h2 className="font-display text-xs tracking-[0.2em] text-white/40 uppercase mb-3">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p>Marlon Prantner</p>
            <p>[Straße + Hausnummer]</p>
            <p>[PLZ + Ort]</p>
          </section>

          <section>
            <h2 className="font-display text-xs tracking-[0.2em] text-white/40 uppercase mb-3">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p>
              Wir nehmen nicht an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teil und sind dazu auch nicht
              verpflichtet.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xs tracking-[0.2em] text-white/40 uppercase mb-3">
              Haftungsausschluss
            </h2>

            <p className="mb-3 font-display text-white/80">Haftung für Inhalte</p>
            <p className="mb-4">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
              sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
              bis 10 DDG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen
              zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
              oder Sperrung der Nutzung von Informationen nach den allgemeinen
              Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung
              ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
              Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>

            <p className="mb-3 font-display text-white/80">Haftung für Links</p>
            <p className="mb-4">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
              der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
              einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>

            <p className="mb-3 font-display text-white/80">Urheberrecht</p>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten,
              nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
              dieser Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
              Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>

          <section>
            <p className="text-white/30 text-xs">
              Impressum von{" "}
              <a
                href="https://impressum-generator.de"
                className="underline hover:text-white/60"
                rel="dofollow"
              >
                Impressum-Generator.de
              </a>
              . Powered by{" "}
              <a
                href="https://www.kanzlei-hasselbach.de/"
                className="underline hover:text-white/60"
                rel="nofollow"
              >
                Franziska Hasselbach, Bonn
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
