import { useLanguage } from "../context/LanguageContext";
import { ArrowLeft, Settings2 } from "lucide-react";
import SeoHelmet from "../components/SeoHelmet";

const H2 = "font-outfit font-bold text-[#1C1917] text-xl mb-3";
const H3 = "font-outfit font-semibold text-[#1C1917] text-base mb-1";
const LINK = "text-[#0A8EDB] hover:underline";
const TD = "p-2 border-b border-[#E7E5E4]";

export default function Datenschutz() {
  const { lang } = useLanguage();
  const back = lang === "DE" ? "Zurück zur Startseite" : "Back to Homepage";
  const openCookies = () => window.dispatchEvent(new CustomEvent("open-cookie-settings"));
  const PH = "px-1 rounded-sm bg-amber-100 text-amber-900 font-semibold";

  return (
    <div data-testid="datenschutz-page" className="min-h-screen bg-[#FDFBF7]">
      <SeoHelmet title={"Datenschutzerklärung"} description={"Datenschutzerklärung von MK Gebäudemanagement (Duisburg) nach DSGVO und TDDDG."} path={"/datenschutz"} />
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-24">
        <a href="/" data-testid="datenschutz-back-link" className="inline-flex items-center gap-2 text-[#0A8EDB] hover:text-[#0873B3] font-manrope font-semibold text-sm mb-8 transition-colors"><ArrowLeft size={16} />{back}</a>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1C1917] font-outfit mb-4">Datenschutzerklärung</h1>
        <p className="text-sm text-[#78716C] mb-8">Stand: <span>Juni 2026</span></p>
        <div className="font-manrope text-[#57534E] leading-relaxed space-y-7">
          <section>
            <h2 className={H2}>1. Verantwortlicher</h2>
            <p>Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und des Telekommunikation-Digitale-Dienste-Datenschutz-Gesetzes (TDDDG):</p>
            <p className="mt-2">MK Gebäudemanagement – Inhaber Mert Kurnali<br />Auf dem Damm 112, 47137 Duisburg, Deutschland<br />Telefon: +49&nbsp;163&nbsp;210&nbsp;66&nbsp;88<br />E-Mail: <a href="mailto:info@mk-gebaeudemanagement.de" className={LINK}>info@mk-gebaeudemanagement.de</a></p>
            <p className="mt-3"><strong>Datenschutzbeauftragter:</strong> Nicht bestellt, da keine gesetzliche Pflicht nach Art. 37 DSGVO / § 38 BDSG besteht.</p>
          </section>
          <section>
            <h2 className={H2}>2. Allgemeine Hinweise</h2>
            <p>Diese Datenschutzerklärung informiert Sie darüber, welche personenbezogenen Daten wir beim Besuch unserer Website, bei der Kontaktaufnahme und im Rahmen unserer Dienstleistungen (Gebäudereinigung, Grünflächenpflege, Winterdienst) verarbeiten, zu welchen Zwecken dies geschieht und auf welcher Rechtsgrundlage. Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen.</p>
          </section>
          <section>
            <h2 className={H2}>3. Ihre Rechte als betroffene Person</h2>
            <ul className="list-disc list-outside pl-5 space-y-1">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruchsrecht gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (Art. 21 DSGVO)</li>
              <li>Recht, eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen (Art. 7 Abs. 3 DSGVO)</li>
              <li>Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO). Zuständig für uns: <strong>Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen</strong>, Kavalleriestraße 2–4, 40213 Düsseldorf, <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer" className={LINK}>www.ldi.nrw.de</a></li>
            </ul>
            <p className="mt-3">Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an die oben genannten Kontaktdaten.</p>
          </section>
          <section>
            <h2 className={H2}>4. Hosting und Server-Logfiles</h2>
            <p>Unsere Website wird bei folgendem Anbieter gehostet: <span className={PH}>[Hosting-Anbieter, Anschrift eintragen]</span>. Mit dem Hoster besteht ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO.</p>
            <p className="mt-3">Beim Aufruf unserer Website werden automatisch Informationen in Server-Logfiles gespeichert: IP-Adresse (gekürzt), Datum und Uhrzeit des Zugriffs, aufgerufene Seite/Datei, übertragene Datenmenge, Browsertyp und -version, Betriebssystem sowie Referrer-URL.</p>
            <ul className="list-disc list-outside pl-5 mt-2 space-y-1">
              <li><strong>Zweck:</strong> Bereitstellung, Stabilität und Sicherheit der Website.</li>
              <li><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).</li>
              <li><strong>Speicherdauer:</strong> maximal 14 Tage, anschließend automatische Löschung.</li>
            </ul>
          </section>
          <section>
            <h2 className={H2}>5. Cookies und Einwilligungsverwaltung</h2>
            <p>Wir setzen Cookies und vergleichbare Technologien ein. Technisch notwendige Cookies werden auf Grundlage von <strong>§ 25 Abs. 2 Nr. 2 TDDDG</strong> gesetzt. Alle nicht notwendigen Cookies setzen wir nur mit Ihrer Einwilligung nach <strong>§ 25 Abs. 1 TDDDG</strong> i. V. m. Art. 6 Abs. 1 lit. a DSGVO. Ihre Auswahl können Sie jederzeit über den folgenden Button ändern oder widerrufen:</p>
            <button type="button" onClick={openCookies} data-testid="datenschutz-open-cookies-btn" className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-[#0A8EDB] hover:bg-[#0873B3] text-white text-sm font-semibold rounded-sm transition-colors"><Settings2 size={14} />Cookie-Einstellungen öffnen</button>
            <div className="mt-5 space-y-5">
              <div>
                <h3 className={H3}>5.1 Notwendige Cookies / Speicherung</h3>
                <table className="w-full mt-2 text-sm border border-[#E7E5E4]">
                  <thead className="bg-[#F5F5F4]"><tr><th className={`text-left ${TD}`}>Name</th><th className={`text-left ${TD}`}>Zweck</th><th className={`text-left ${TD}`}>Dauer</th></tr></thead>
                  <tbody>
                    <tr><td className={TD}>cookie_consent_v2</td><td className={TD}>Speicherung Ihrer Cookie-Auswahl</td><td className={TD}>12 Monate</td></tr>
                    <tr><td className="p-2">language</td><td className="p-2">Speicherung der Sprachauswahl (DE/EN)</td><td className="p-2">12 Monate</td></tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h3 className={H3}>5.2 Funktionale, Statistik- und Marketing-Cookies</h3>
                <p>Derzeit setzen wir <strong>keine</strong> Analyse-, Tracking- oder Marketing-Tools ein. Sollte sich dies ändern, werden wir diese Datenschutzerklärung aktualisieren und Ihre Einwilligung vorab über das Cookie-Banner einholen.</p>
              </div>
            </div>
          </section>
          <section>
            <h2 className={H2}>6. Kontaktformular, E-Mail und Telefon</h2>
            <p>Bei Kontaktaufnahme über unser Kontaktformular verarbeiten wir die von Ihnen angegebenen Daten: Name, E-Mail-Adresse, Telefonnummer (optional), gewählter Betreff (Gebäudereinigung, Grünflächenpflege, Winterdienst oder individuelles Anliegen) sowie Ihre Nachricht. Nach dem Absenden erhalten Sie automatisch eine Eingangsbestätigung per E-Mail an die angegebene Adresse.</p>
            <ul className="list-disc list-outside pl-5 mt-2 space-y-1">
              <li><strong>Zweck:</strong> Bearbeitung Ihrer Anfrage, Erstellung eines Angebots, Vertragsanbahnung.</li>
              <li><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).</li>
              <li><strong>Empfänger:</strong> Der Versand erfolgt über unseren E-Mail-Dienstleister <span className={PH}>[E-Mail-/SMTP-Anbieter eintragen]</span> (Auftragsverarbeiter, Art. 28 DSGVO).</li>
              <li><strong>Speicherdauer:</strong> Anfragen ohne Vertragsschluss löschen wir spätestens 6 Monate nach abschließender Bearbeitung. Kommt ein Vertrag zustande, gelten die handels- und steuerrechtlichen Aufbewahrungsfristen (6 bzw. 8 Jahre, § 257 HGB, § 147 AO).</li>
            </ul>
            <p className="mt-3">Gleiches gilt für Anfragen, die uns per E-Mail oder Telefon erreichen. Die Angabe der Telefonnummer ist freiwillig.</p>
          </section>
          <section>
            <h2 className={H2}>7. Kontakt über WhatsApp</h2>
            <p>Auf unserer Website bieten wir einen Button an, über den Sie einen WhatsApp-Chat mit uns starten können. Beim Klick werden Sie zu WhatsApp (Anbieter: WhatsApp Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland – Teil der Meta Platforms) weitergeleitet. Erst mit dem Klick und der Nutzung von WhatsApp werden Daten (z. B. Ihre Telefonnummer, Nachrichteninhalte, Metadaten) an WhatsApp übermittelt; es gelten die <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noopener noreferrer" className={LINK}>Datenschutzhinweise von WhatsApp</a>. Wir nutzen WhatsApp ausschließlich zur Kommunikation mit Ihnen; die Inhalte werden nicht an Dritte weitergegeben. Rechtsgrundlage: Art. 6 Abs. 1 lit. b und lit. f DSGVO. Wenn Sie WhatsApp nicht nutzen möchten, verwenden Sie bitte Telefon, E-Mail oder das Kontaktformular.</p>
          </section>
          <section>
            <h2 className={H2}>8. Datenverarbeitung bei Auftragsdurchführung</h2>
            <p>Im Rahmen unserer Dienstleistungen verarbeiten wir Daten von Auftraggebern und Ansprechpartnern (Name, Anschrift des Objekts, Kontaktdaten, Zugangs- und Schlüsselinformationen, Leistungs- und Einsatznachweise, Abrechnungsdaten). Beim Winterdienst dokumentieren wir zudem Einsatzzeiten und Witterungsverhältnisse als Nachweis zur Erfüllung der Räum- und Streupflicht.</p>
            <ul className="list-disc list-outside pl-5 mt-2 space-y-1">
              <li><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung), Art. 6 Abs. 1 lit. c DSGVO (gesetzliche Aufbewahrungspflichten), Art. 6 Abs. 1 lit. f DSGVO (Nachweis- und Haftungsinteressen).</li>
              <li><strong>Speicherdauer:</strong> für die Dauer des Vertragsverhältnisses und anschließend gemäß gesetzlicher Fristen; Einsatznachweise des Winterdienstes bis zum Ablauf der regelmäßigen Verjährungsfrist (3 Jahre).</li>
            </ul>
          </section>
          <section>
            <h2 className={H2}>9. SSL-/TLS-Verschlüsselung</h2>
            <p>Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an „https://“ und dem Schloss-Symbol in Ihrer Browserzeile.</p>
          </section>
          <section>
            <h2 className={H2}>10. Externe Schriftarten</h2>
            <p>Die auf dieser Website verwendeten Schriftarten werden <strong>lokal</strong> von unserem Server ausgeliefert. Eine Verbindung zu Servern von Google oder anderen Schriftanbietern findet dabei nicht statt.</p>
          </section>
          <section>
            <h2 className={H2}>11. Social-Media-Links</h2>
            <p>Die Links zu unseren Profilen in sozialen Netzwerken (z. B. Facebook, Instagram) sind <strong>reine Verlinkungen</strong>. Beim Aufruf unserer Website werden keine Daten an die Netzwerke übertragen; erst mit dem Klick verlassen Sie unsere Seite. Für die Datenverarbeitung auf den Plattformen ist der jeweilige Anbieter verantwortlich.</p>
          </section>
          <section>
            <h2 className={H2}>12. Weitergabe von Daten</h2>
            <p>Eine Weitergabe Ihrer Daten an Dritte erfolgt nur, soweit dies zur Vertragserfüllung erforderlich ist (z. B. Subunternehmer für einzelne Leistungen, Steuerberater, Zahlungsdienstleister), Sie eingewilligt haben oder wir gesetzlich dazu verpflichtet sind. Eine Übermittlung in Drittländer außerhalb der EU/des EWR findet – abgesehen von der von Ihnen gewählten Kontaktaufnahme über WhatsApp – nicht statt.</p>
          </section>
          <section>
            <h2 className={H2}>13. Keine automatisierte Entscheidungsfindung</h2>
            <p>Eine automatisierte Entscheidungsfindung oder ein Profiling im Sinne von Art. 22 DSGVO findet nicht statt.</p>
          </section>
          <section>
            <h2 className={H2}>14. Änderung dieser Datenschutzerklärung</h2>
            <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen umzusetzen. Es gilt jeweils die auf dieser Seite veröffentlichte Fassung.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
