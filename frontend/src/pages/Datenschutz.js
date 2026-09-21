import { COMPANY } from '../config/company';
import { useLanguage } from "../context/LanguageContext";
import { ArrowLeft, Settings2 } from "lucide-react";
import SeoHelmet from "../components/SeoHelmet";

export default function Datenschutz() {
  const { lang } = useLanguage();
  const back = lang === "DE" ? "Zurück zur Startseite" : "Back to Homepage";
  const openCookies = () => window.dispatchEvent(new CustomEvent("open-cookie-settings"));
  const PH = "px-1 rounded-sm bg-amber-100 text-amber-900 font-semibold";

  return (
    <div data-testid="datenschutz-page" className="min-h-screen bg-[#FDFBF7]">
      <SeoHelmet title={"Datenschutzerklärung"} description={"Datenschutzerklärung der Roda Haustechnik nach DSGVO und TTDSG."} path={"/datenschutz"} />
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-24">
        <a href="/" data-testid="datenschutz-back-link" className="inline-flex items-center gap-2 text-[#0A8EDB] hover:text-[#0873B3] font-manrope font-semibold text-sm mb-8 transition-colors"><ArrowLeft size={16} />{back}</a>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1C1917] font-outfit mb-4">Datenschutzerklärung</h1>
        <p className="text-sm text-[#78716C] mb-8">Stand: <span>April 2026</span></p>
        <div className="font-manrope text-[#57534E] leading-relaxed space-y-7">
          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">1. Verantwortlicher</h2>
            <p>Verantwortlicher im Sinne der DSGVO und des TTDSG:</p>
            <p className="mt-2">Roda Haustechnik — Inhaber Marco Nobis<br />Schillerstr. 14, 52134 Herzogenrath, Deutschland<br />Telefon: +49&nbsp;152&nbsp;2100&nbsp;6829<br />E-Mail: kontakt@roda-haustechnik.de</p>
            <p className="mt-3"><strong>Datenschutzbeauftragter:</strong> <span>Nicht bestellt, da keine gesetzliche Pflicht nach Art. 37 DSGVO / § 38 BDSG besteht.</span></p>
          </section>
          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">2. Allgemeine Hinweise</h2>
            <p>Diese Datenschutzerklärung klärt Sie darüber auf, welche personenbezogenen Daten wir beim Besuch unserer Website verarbeiten, zu welchen Zwecken dies geschieht und auf welcher Rechtsgrundlage.</p>
          </section>
          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">3. Ihre Rechte als betroffene Person</h2>
            <ul className="list-disc list-outside pl-5 space-y-1">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
              <li>Widerruf einer Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
              <li>Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO) — zuständig: <strong>Landesbeauftragte für Datenschutz und Informationsfreiheit NRW</strong>, Kavalleriestr. 2-14, 40213 Düsseldorf</li>
            </ul>
          </section>
          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">4. Hosting</h2>
            <p>Unsere Website wird auf Servern folgenden Anbieters gehostet:</p>
            <p className="mt-2"><span>Strato AG</span>, <span>Otto-Ostrowski-Straße 7, 10249 Berlin, Deutschland</span></p>
            <p className="mt-3">Der Hoster verarbeitet in unserem Auftrag Server-Logfiles zu Zwecken der Bereitstellung und Sicherheit (Art. 6 Abs. 1 lit. f DSGVO). Mit dem Hoster besteht ein Vertrag zur Auftragsverarbeitung (Art. 28 DSGVO). Speicherdauer: max. 14 Tage.</p>
          </section>
          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">5. Cookies und ähnliche Technologien</h2>
            <p>Wir setzen Cookies und vergleichbare Technologien ein. Rechtsgrundlage für nicht notwendige Cookies: <strong>§ 25 TTDSG</strong> i. V. m. Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Für technisch notwendige Cookies: <strong>§ 25 Abs. 2 Nr. 2 TTDSG</strong>.</p>
            <button type="button" onClick={openCookies} data-testid="datenschutz-open-cookies-btn" className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-[#0A8EDB] hover:bg-[#0873B3] text-white text-sm font-semibold rounded-sm transition-colors"><Settings2 size={14} />Cookie-Einstellungen öffnen</button>
            <div className="mt-5 space-y-5">
              <div>
                <h3 className="font-outfit font-semibold text-[#1C1917] text-base mb-1">5.1 Notwendige Cookies</h3>
                <p>Zwingend erforderlich; ohne sie funktioniert die Seite nicht (§ 25 Abs. 2 Nr. 2 TTDSG).</p>
                <table className="w-full mt-2 text-sm border border-[#E7E5E4]">
                  <thead className="bg-[#F5F5F4]"><tr><th className="text-left p-2 border-b border-[#E7E5E4]">Name</th><th className="text-left p-2 border-b border-[#E7E5E4]">Zweck</th><th className="text-left p-2 border-b border-[#E7E5E4]">Dauer</th></tr></thead>
                  <tbody>
                    <tr><td className="p-2 border-b border-[#E7E5E4]">cookie_consent_v2</td><td className="p-2 border-b border-[#E7E5E4]">Einwilligung</td><td className="p-2 border-b border-[#E7E5E4]">12 Monate</td></tr>
                    <tr><td className="p-2">language</td><td className="p-2">Sprachauswahl</td><td className="p-2">12 Monate</td></tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h3 className="font-outfit font-semibold text-[#1C1917] text-base mb-1">5.2 Funktionale Cookies (Einwilligung erforderlich)</h3>
                <p>Werden derzeit <strong>nicht</strong> aktiv eingesetzt.</p>
              </div>
              <div>
                <h3 className="font-outfit font-semibold text-[#1C1917] text-base mb-1">5.3 Statistik-Cookies (Einwilligung erforderlich)</h3>
                <p>Derzeit <strong>keine</strong> Statistik-Tools aktiv.</p>
              </div>
              <div>
                <h3 className="font-outfit font-semibold text-[#1C1917] text-base mb-1">5.4 Marketing-Cookies (Einwilligung erforderlich)</h3>
                <p>Derzeit <strong>keine</strong> Marketing-Tools aktiv.</p>
              </div>
            </div>
          </section>
          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">6. Kontaktformular und Kontaktaufnahme</h2>
            <p>Daten aus dem Kontaktformular (Name, E-Mail, Telefonnummer, Nachricht) werden zur Bearbeitung Ihrer Anfrage verarbeitet.</p>
            <ul className="list-disc list-outside pl-5 mt-2 space-y-1">
              <li><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO bzw. bei bloßer Anfrage Art. 6 Abs. 1 lit. a DSGVO.</li>
              <li><strong>Speicherdauer:</strong> bis Bearbeitung abgeschlossen, anschließend 6 Monate. Bei Vertragsabschluss gelten handels-/steuerrechtliche Fristen (bis zu 10 Jahre).</li>
            </ul>
          </section>
          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">7. Server-Logfiles</h2>
            <p>Beim Zugriff werden folgende Daten gespeichert: IP-Adresse (gekürzt), Datum/Uhrzeit, Browser, aufgerufene Ressource, Referrer.</p>
            <ul className="list-disc list-outside pl-5 mt-2 space-y-1">
              <li><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (Betriebssicherheit).</li>
              <li><strong>Speicherdauer:</strong> maximal 14 Tage.</li>
              <li><strong>Widerspruch:</strong> gem. Art. 21 DSGVO möglich.</li>
            </ul>
          </section>
          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">8. SSL-/TLS-Verschlüsselung</h2>
            <p>Diese Seite nutzt aus Sicherheitsgründen SSL-/TLS-Verschlüsselung.</p>
          </section>
          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">9. Social-Media-Links</h2>
            <p>Links zu unseren Profilen bei Facebook, Instagram und X sind <strong>reine Verlinkungen</strong> — keine Daten werden vor dem Klick übermittelt.</p>
          </section>
          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">10. Keine automatisierte Entscheidungsfindung</h2>
            <p>Profiling im Sinne von Art. 22 DSGVO findet nicht statt.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
