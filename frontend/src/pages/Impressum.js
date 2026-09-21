import { COMPANY } from '../config/company';
import { useLanguage } from "../context/LanguageContext";
import { ArrowLeft } from "lucide-react";
import SeoHelmet from "../components/SeoHelmet";

export default function Impressum() {
  const { lang } = useLanguage();
  const back = lang === "DE" ? "Zurück zur Startseite" : "Back to Homepage";
  const PH = "px-1 rounded-sm bg-amber-100 text-amber-900 font-semibold";

  return (
    <div data-testid="impressum-page" className="min-h-screen bg-[#FDFBF7]">
      <SeoHelmet title={"Impressum"} description={"Impressum der Roda Haustechnik – Marco Nobis, SHK-Meisterbetrieb in Herzogenrath."} path={"/impressum"} />
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-24">
        <a href="/" data-testid="impressum-back-link" className="inline-flex items-center gap-2 text-[#0E6FB3] hover:text-[#0A5A94] font-manrope font-semibold text-sm mb-8 transition-colors">
          <ArrowLeft size={16} />{back}
        </a>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1C1917] font-outfit mb-8">Impressum</h1>
        <div className="font-manrope text-[#57534E] leading-relaxed space-y-6">
          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">Angaben gemäß § 5 TMG</h2>
            <p>Roda Haustechnik<br />Inhaber: Marco Nobis<br />Schillerstr. 14<br />52134 Herzogenrath<br />Deutschland</p>
          </section>
          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">Kontakt</h2>
            <p>Telefon: +49&nbsp;152&nbsp;2100&nbsp;6829<br />E-Mail: kontakt@roda-haustechnik.de<br />Web: https://roda-haustechnik.de</p>
          </section>
          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p><strong>Berufsbezeichnung:</strong><br />Installateur- und Heizungsbauermeister – Sanitär, Heizung und Klima<br />Verliehen in der Bundesrepublik Deutschland</p>
            <p className="mt-3"><strong>Zuständige Aufsichts- und Zulassungsbehörde / Kammer:</strong><br />Handwerkskammer Aachen<br />Sandkaulbach 21<br />52062 Aachen<br /><a href="https://www.hwk-aachen.de" target="_blank" rel="noopener noreferrer" className="text-[#0E6FB3] hover:underline">www.hwk-aachen.de</a></p>
            <p className="mt-3"><strong>Eintrag in die Handwerksrolle:</strong><br />Handwerkskammer Aachen — Betriebsnummer:&nbsp;<span className={PH}>[Platzhalter: HWK-Betriebsnummer z. B. 12345-67]</span></p>
            <p className="mt-3"><strong>Berufsrechtliche Regelungen:</strong> Handwerksordnung (HwO); einsehbar unter <a href="https://www.gesetze-im-internet.de/hwo/" target="_blank" rel="noopener noreferrer" className="text-[#0E6FB3] hover:underline">gesetze-im-internet.de/hwo</a></p>
          </section>
          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br /><span className={PH}>[Platzhalter: DE123456789]</span></p>
          </section>
          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">Redaktionell verantwortlich gemäß § 18 Abs. 2 MStV</h2>
            <p>Marco Nobis<br />Schillerstr. 14, 52134 Herzogenrath</p>
          </section>
          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">Berufshaftpflichtversicherung</h2>
            <p><strong>Name und Sitz des Versicherers:</strong><br /><span className={PH}>[Platzhalter: Versicherungsname]</span>, <span className={PH}>[PLZ Ort]</span><br /><strong>Geltungsraum:</strong> Bundesrepublik Deutschland</p>
          </section>
          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">Streitbeilegung</h2>
            <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[#0E6FB3] hover:underline">https://ec.europa.eu/consumers/odr/</a>. Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
            <p className="mt-3">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).</p>
          </section>
          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">Haftung für Inhalte</h2>
            <p>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
          </section>
          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">Haftung für Links</h2>
            <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.</p>
          </section>
          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">Urheberrecht</h2>
            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
