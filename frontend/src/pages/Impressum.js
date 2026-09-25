import { useLanguage } from "../context/LanguageContext";
import { ArrowLeft } from "lucide-react";
import SeoHelmet from "../components/SeoHelmet";

const H2 = "font-outfit font-bold text-[#1C1917] text-xl mb-3";
const LINK = "text-[#0A8EDB] hover:underline";

export default function Impressum() {
  const { lang } = useLanguage();
  const back = lang === "DE" ? "Zurück zur Startseite" : "Back to Homepage";
  const PH = "px-1 rounded-sm bg-amber-100 text-amber-900 font-semibold";

  return (
    <div data-testid="impressum-page" className="min-h-screen bg-[#FDFBF7]">
      <SeoHelmet title={"Impressum"} description={"Impressum von MK Gebäudemanagement – Inhaber Mert Kurnali, Gebäudereinigung, Grünflächenpflege und Winterdienst in Duisburg."} path={"/impressum"} />
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-24">
        <a href="/" data-testid="impressum-back-link" className="inline-flex items-center gap-2 text-[#0A8EDB] hover:text-[#0873B3] font-manrope font-semibold text-sm mb-8 transition-colors">
          <ArrowLeft size={16} />{back}
        </a>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1C1917] font-outfit mb-8">Impressum</h1>
        <div className="font-manrope text-[#57534E] leading-relaxed space-y-6">
          <section>
            <h2 className={H2}>Angaben gemäß § 5 DDG</h2>
            <p>MK Gebäudemanagement<br />Inhaber: Mert Kurnali<br />Auf dem Damm 112<br />47137 Duisburg<br />Deutschland</p>
            <p className="mt-3"><strong>Rechtsform:</strong> Einzelunternehmen</p>
          </section>
          <section>
            <h2 className={H2}>Kontakt</h2>
            <p>Telefon: <a href="tel:+491632106688" className={LINK}>+49&nbsp;163&nbsp;210&nbsp;66&nbsp;88</a><br />E-Mail: <a href="mailto:info@mk-gebaeudemanagement.de" className={LINK}>info@mk-gebaeudemanagement.de</a><br />Web: https://mk-gebaeudemanagement.de</p>
          </section>
          <section>
            <h2 className={H2}>Tätigkeitsbereich und berufsrechtliche Angaben</h2>
            <p><strong>Tätigkeit:</strong><br />Gebäudereinigung (Unterhalts-, Grund- und Glasreinigung), Grünflächenpflege sowie Winterdienst (Räum- und Streudienst).</p>
            <p className="mt-3"><strong>Handwerksrolle / Gewerbe:</strong><br />Das Gebäudereiniger-Handwerk ist ein zulassungsfreies Handwerk (Anlage B Abschnitt 1 Nr. 33 HwO). Eintragung in die Handwerksrolle bei der zuständigen Kammer:</p>
            <p className="mt-2">Handwerkskammer Düsseldorf<br />Georg-Schulhoff-Platz 1<br />40221 Düsseldorf<br /><a href="https://www.hwk-duesseldorf.de" target="_blank" rel="noopener noreferrer" className={LINK}>www.hwk-duesseldorf.de</a></p>
            <p className="mt-3"><strong>Betriebsnummer Handwerksrolle:</strong> <span className={PH}>[bitte eintragen]</span></p>
            <p className="mt-3"><strong>Berufsrechtliche Regelungen:</strong> Handwerksordnung (HwO), einsehbar unter <a href="https://www.gesetze-im-internet.de/hwo/" target="_blank" rel="noopener noreferrer" className={LINK}>gesetze-im-internet.de/hwo</a></p>
          </section>
          <section>
            <h2 className={H2}>Umsatzsteuer</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br /><span className={PH}>[DE + 9 Ziffern eintragen – oder Abschnitt löschen, falls Kleinunternehmerregelung nach § 19 UStG]</span></p>
          </section>
          <section>
            <h2 className={H2}>Berufshaftpflichtversicherung</h2>
            <p><strong>Name und Sitz des Versicherers:</strong><br />DEVK Allgemeine Versicherungs-AG<br />Riehler Straße 190, 50735 Köln<br /><strong>Räumlicher Geltungsbereich:</strong> Bundesrepublik Deutschland</p>
          </section>
          <section>
            <h2 className={H2}>Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV</h2>
            <p>Mert Kurnali<br />Auf dem Damm 112, 47137 Duisburg</p>
          </section>
          <section>
            <h2 className={H2}>Verbraucherstreitbeilegung</h2>
            <p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle im Sinne des Verbraucherstreitbeilegungsgesetzes (VSBG) teilzunehmen.</p>
            <p className="mt-3 text-sm">Hinweis: Die frühere EU-Plattform zur Online-Streitbeilegung (OS-Plattform) wurde zum 20. Juli 2025 eingestellt; eine Verlinkung erfolgt daher nicht mehr.</p>
          </section>
          <section>
            <h2 className={H2}>Social Media und weitere Onlinepräsenzen</h2>
            <p>Dieses Impressum gilt auch für unsere Auftritte in sozialen Netzwerken und auf Bewertungsplattformen, insbesondere: <span className={PH}>[Facebook-/Instagram-Profil-URL eintragen]</span></p>
          </section>
          <section>
            <h2 className={H2}>Haftung für Inhalte</h2>
            <p>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen werden wir diese Inhalte unverzüglich entfernen.</p>
          </section>
          <section>
            <h2 className={H2}>Haftung für Links</h2>
            <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte übernehmen wir keine Gewähr; verantwortlich ist stets der jeweilige Anbieter oder Betreiber der Seiten. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft; rechtswidrige Inhalte waren nicht erkennbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links unverzüglich entfernen.</p>
          </section>
          <section>
            <h2 className={H2}>Urheberrecht</h2>
            <p>Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
            <p className="mt-3"><strong>Vorbehalt der Nutzung für Text und Data Mining (§ 44b Abs. 3 UrhG):</strong> Die Nutzung von Inhalten dieser Website für Text und Data Mining, insbesondere für das Training oder den Betrieb von Systemen künstlicher Intelligenz, ist ohne ausdrückliche schriftliche Zustimmung des Inhabers untersagt. Dieser Vorbehalt gilt unabhängig davon, ob maschinenlesbare Meta-Angaben auf der Website vorhanden sind.</p>
          </section>
          <section>
            <h2 className={H2}>Bildnachweise</h2>
            <p>Verwendete Fotos stammen aus lizenzfreien Bilddatenbanken (u. a. Unsplash, Pexels) und werden gemäß der jeweiligen Lizenzbedingungen genutzt. Logo und Grafiken: MK Gebäudemanagement.</p>
          </section>
          <section>
            <h2 className={H2}>Hinweis auf Rechtsverstöße</h2>
            <p>Sollten Sie innerhalb unseres Internetauftritts Rechtsverstöße bemerken, bitten wir Sie um einen Hinweis an <a href="mailto:info@mk-gebaeudemanagement.de" className={LINK}>info@mk-gebaeudemanagement.de</a>. Wir werden rechtswidrige Inhalte und Links nach Kenntnisnahme unverzüglich entfernen.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
