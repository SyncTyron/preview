import { useLanguage } from "../context/LanguageContext";
import { ArrowLeft } from "lucide-react";
import SeoHelmet from "../components/SeoHelmet";

export default function AGB() {
  const { lang } = useLanguage();
  const back = lang === "DE" ? "Zurück zur Startseite" : "Back to Homepage";
  const PH = "px-1 rounded-sm bg-amber-100 text-amber-900 font-semibold";

  return (
    <div data-testid="agb-page" className="min-h-screen bg-[#FDFBF7]">
      <SeoHelmet title={"AGB"} description={"Allgemeine Geschäftsbedingungen der Roda Haustechnik – Sanitär, Heizung und Badsanierung in Herzogenrath."} path={"/agb"} />
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-24">
        <a
          href="/"
          data-testid="agb-back-link"
          className="inline-flex items-center gap-2 text-[#0A8EDB] hover:text-[#0873B3] font-manrope font-semibold text-sm mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          {back}
        </a>

        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1C1917] font-outfit mb-4">
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>
        <p className="text-sm text-[#78716C] mb-8">
          Stand: <span>April 2026</span>
        </p>

        <div className="font-manrope text-[#57534E] leading-relaxed space-y-7">
          <section className="p-4 rounded-sm bg-amber-50 border border-amber-200">
            <p className="text-sm text-amber-900">
              <strong>Hinweis:</strong> Diese AGB sind ein branchentypisches Muster
              für Handwerksleistungen im Bereich Sanitär, Heizung und Badsanierung.
              Vor dem produktiven Einsatz sollten sie von einem Fachanwalt oder
              der Handwerkskammer Aachen (HWK) / dem Zentralverband Sanitär
              Heizung Klima (ZVSHK) geprüft werden.
            </p>
          </section>

          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">
              § 1 Geltungsbereich, Vertragspartner
            </h2>
            <p>
              (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") gelten
              für alle Verträge zwischen
            </p>
            <p className="mt-2">
              Roda Haustechnik – Inhaber Marco Nobis<br />
              Schillerstr. 14, 52134 Herzogenrath, Deutschland<br />
              Telefon: +49&nbsp;152&nbsp;2100&nbsp;6829<br />
              E-Mail: kontakt@roda-haustechnik.de<br />
              (nachfolgend „Auftragnehmer")
            </p>
            <p className="mt-3">
              und seinen Kunden (nachfolgend „Auftraggeber") über die Ausführung
              von Werk- und Dienstleistungen im Bereich Sanitär-, Heizungs- und
              Klimatechnik, insbesondere Installation, Wartung, Reparatur,
              Modernisierung und Badsanierung sowie den Verkauf und die
              Montage von Zubehör und Ersatzteilen.
            </p>
            <p className="mt-3">
              (2) Für Verbraucher im Sinne von § 13 BGB gelten die gesetzlichen
              Vorschriften des Bürgerlichen Gesetzbuches (BGB), insbesondere die
              §§ 631 ff. BGB (Werkvertrag).
            </p>
            <p className="mt-3">
              (3) Gegenüber Unternehmern im Sinne von § 14 BGB wird die Vergabe-
              und Vertragsordnung für Bauleistungen – Teil B (VOB/B) in der jeweils
              aktuellen Fassung vereinbart, soweit dies ausdrücklich schriftlich
              bestätigt ist.
            </p>
            <p className="mt-3">
              (4) Abweichende, entgegenstehende oder ergänzende Geschäfts-
              bedingungen des Auftraggebers werden nur dann und insoweit
              Vertragsbestandteil, als der Auftragnehmer ihrer Geltung ausdrücklich
              schriftlich zugestimmt hat.
            </p>
          </section>

          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">
              § 2 Angebot, Kostenvoranschlag und Vertragsschluss
            </h2>
            <p>
              (1) Angebote des Auftragnehmers sind freibleibend, sofern sie nicht
              ausdrücklich als verbindlich gekennzeichnet sind. Angebote gelten
              – soweit nicht anders vermerkt – 30 Tage ab Angebotsdatum.
            </p>
            <p className="mt-3">
              (2) Kostenvoranschläge sind unverbindliche Schätzungen der
              voraussichtlichen Kosten. Unwesentliche Überschreitungen bis zu
              15 % sind zulässig und müssen vom Auftraggeber getragen werden.
              Eine wesentliche Überschreitung wird dem Auftraggeber unverzüglich
              angezeigt (§ 650 BGB).
            </p>
            <p className="mt-3">
              (3) Kostenvoranschläge, Zeichnungen, Berechnungen und andere
              Unterlagen sind grundsätzlich <strong>kostenpflichtig</strong>, sofern
              sie mit erheblichem Aufwand erstellt werden müssen. Die Vergütung
              für einen detaillierten Kostenvoranschlag wird im Falle einer
              Auftragserteilung auf die Werklohnforderung angerechnet.
            </p>
            <p className="mt-3">
              (4) Der Vertrag kommt durch Auftragserteilung des Auftraggebers
              (schriftlich, per E-Mail oder mündlich) und schriftliche oder
              elektronische Auftragsbestätigung des Auftragnehmers oder durch
              Beginn der Ausführung zustande.
            </p>
            <p className="mt-3">
              (5) Für außerhalb von Geschäftsräumen geschlossene Verträge sowie
              Fernabsatzverträge mit Verbrauchern gilt das gesetzliche
              Widerrufsrecht. Einzelheiten ergeben sich aus der
              <a
                href="/widerruf"
                data-testid="agb-widerruf-link"
                className="text-[#0A8EDB] hover:underline"
              >
                {" "}Widerrufsbelehrung
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">
              § 3 Leistungsumfang, Mitwirkungspflichten
            </h2>
            <p>
              (1) Der Leistungsumfang ergibt sich aus dem Angebot, der
              Auftragsbestätigung oder dem unterzeichneten Auftragsformular.
              Leistungsänderungen bedürfen der Textform.
            </p>
            <p className="mt-3">
              (2) Der Auftraggeber stellt dem Auftragnehmer während der
              Arbeitszeiten freien und kostenlosen Zugang zur Baustelle / zum
              Arbeitsort sicher. Er hat ferner Strom, Wasser sowie eine
              abschließbare Lagermöglichkeit für Werkzeug und Material
              unentgeltlich zur Verfügung zu stellen.
            </p>
            <p className="mt-3">
              (3) Auf verdeckte Leitungen, Rohre, Kabel oder sonstige Einbauten
              hat der Auftraggeber vor Beginn der Arbeiten ausdrücklich
              hinzuweisen. Unterlässt er dies, haftet der Auftragnehmer nicht für
              hieraus entstehende Schäden, es sei denn, es liegt Vorsatz oder
              grobe Fahrlässigkeit vor.
            </p>
            <p className="mt-3">
              (4) Notwendige behördliche Genehmigungen (z. B. nach
              Bauordnungs-, Denkmalschutz- oder Wohnungseigentumsrecht) sowie
              die Zustimmung des Vermieters bzw. der Eigentümergemeinschaft
              sind vom Auftraggeber rechtzeitig einzuholen.
            </p>
          </section>

          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">
              § 4 Ausführungsfristen, Verzug
            </h2>
            <p>
              (1) Termine und Fristen sind nur verbindlich, wenn sie ausdrücklich
              als verbindlich schriftlich vereinbart wurden. Im Übrigen gelten
              Termine als unverbindliche Richtwerte.
            </p>
            <p className="mt-3">
              (2) Ereignisse höherer Gewalt (insbesondere Pandemien, Streik,
              Aussperrung, behördliche Maßnahmen, Lieferverzögerungen von
              Vorlieferanten, Energie- und Rohstoffmangel), die die Leistung
              wesentlich erschweren oder unmöglich machen, berechtigen den
              Auftragnehmer, die Ausführung für die Dauer der Behinderung
              hinauszuschieben. Dauert die Behinderung länger als acht Wochen,
              sind beide Parteien berechtigt, vom Vertrag zurückzutreten; bereits
              erbrachte Leistungen sind zu vergüten.
            </p>
            <p className="mt-3">
              (3) Gerät der Auftragnehmer mit der Leistung in Verzug, haftet er
              bei leichter Fahrlässigkeit auf den typischen, vorhersehbaren
              Schaden. Die Haftung ist auf 5 % der Netto-Auftragssumme begrenzt.
              Die Haftung für Vorsatz, grobe Fahrlässigkeit und die Verletzung
              von Leben, Körper und Gesundheit bleibt unberührt.
            </p>
          </section>

          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">
              § 5 Preise, Zahlungsbedingungen
            </h2>
            <p>
              (1) Alle Preise verstehen sich – sofern nicht anders ausgewiesen –
              in Euro zzgl. der jeweils gültigen gesetzlichen Umsatzsteuer.
            </p>
            <p className="mt-3">
              (2) Soweit nichts anderes vereinbart ist, sind Rechnungen
              <strong> sofort nach Zugang ohne Abzug</strong> zahlbar. Bei
              Umfangreicheren Aufträgen ist der Auftragnehmer berechtigt,
              Abschlagszahlungen nach Leistungsfortschritt (§ 632a BGB) zu
              verlangen.
            </p>
            <p className="mt-3">
              (3) Bei Neukunden, Aufträgen über 5.000 € netto oder
              Materialvorleistungen ist der Auftragnehmer berechtigt, eine
              angemessene Anzahlung (in der Regel bis zu 30 % der
              Auftragssumme) zu verlangen.
            </p>
            <p className="mt-3">
              (4) Der Auftraggeber kommt ohne gesonderte Mahnung 30 Tage nach
              Fälligkeit und Zugang der Rechnung in Verzug; bei Verbrauchern nur,
              wenn auf diese Rechtsfolge in der Rechnung besonders hingewiesen
              wurde (§ 286 Abs. 3 BGB).
            </p>
            <p className="mt-3">
              (5) Während des Verzugs ist die Geldschuld bei Verbrauchern mit
              5 Prozentpunkten, bei Unternehmern mit 9 Prozentpunkten über dem
              Basiszinssatz zu verzinsen (§ 288 BGB). Die Geltendmachung eines
              weitergehenden Schadens bleibt vorbehalten. Bei Unternehmern wird
              zusätzlich eine Verzugspauschale von 40 € fällig (§ 288 Abs. 5
              BGB).
            </p>
            <p className="mt-3">
              (6) Aufrechnungs- und Zurückbehaltungsrechte stehen dem
              Auftraggeber nur zu, wenn seine Gegenforderungen rechtskräftig
              festgestellt, unbestritten oder vom Auftragnehmer anerkannt sind.
            </p>
          </section>

          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">
              § 6 Eigentumsvorbehalt
            </h2>
            <p>
              (1) Gelieferte, aber noch nicht fest verbaute Waren bleiben bis zur
              vollständigen Bezahlung aller Forderungen aus der Geschäfts-
              verbindung Eigentum des Auftragnehmers.
            </p>
            <p className="mt-3">
              (2) Soweit Materialien durch den Einbau wesentlicher Bestandteil
              des Grundstücks oder Gebäudes werden (§§ 93, 94 BGB), tritt der
              Auftraggeber bereits jetzt seine Ansprüche aus einem etwaigen
              Verkauf oder der Vermietung der Sache in Höhe der offenen
              Forderung an den Auftragnehmer ab; der Auftragnehmer nimmt die
              Abtretung hiermit an.
            </p>
            <p className="mt-3">
              (3) Der Auftraggeber ist verpflichtet, die unter Eigentumsvorbehalt
              gelieferten Waren pfleglich zu behandeln und sie auf seine Kosten
              gegen Diebstahl, Feuer-, Wasser- und sonstige Schäden ausreichend
              zu versichern.
            </p>
          </section>

          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">
              § 7 Abnahme
            </h2>
            <p>
              (1) Der Auftraggeber ist zur Abnahme des Werks nach Fertigstellung
              verpflichtet (§ 640 BGB). Nimmt der Auftraggeber das Werk trotz
              Fertigstellung und Aufforderung innerhalb einer vom Auftragnehmer
              gesetzten angemessenen Frist (mindestens 12 Werktage) nicht ab,
              ohne einen wesentlichen Mangel zu rügen, gilt das Werk als
              abgenommen.
            </p>
            <p className="mt-3">
              (2) Mit der Abnahme beginnt die Gewährleistungsfrist. Etwaige
              Mängel sind bei der Abnahme zu protokollieren.
            </p>
            <p className="mt-3">
              (3) Wegen unwesentlicher Mängel kann die Abnahme nicht verweigert
              werden (§ 640 Abs. 1 Satz 2 BGB).
            </p>
          </section>

          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">
              § 8 Gewährleistung / Sachmängelhaftung
            </h2>
            <p>
              (1) Die Gewährleistung richtet sich nach den gesetzlichen
              Vorschriften der §§ 633 ff. BGB, soweit nachfolgend nichts
              Abweichendes geregelt ist.
            </p>
            <p className="mt-3">
              (2) Die Gewährleistungsfrist beträgt
            </p>
            <ul className="list-disc list-outside pl-5 mt-2 space-y-1">
              <li>
                bei Arbeiten an einem Bauwerk und dazugehörenden
                Planungs-/Überwachungsleistungen <strong>5 Jahre</strong> ab
                Abnahme (§ 634a Abs. 1 Nr. 2 BGB);
              </li>
              <li>
                bei sonstigen Werkleistungen gegenüber Verbrauchern
                <strong> 2 Jahre</strong> ab Abnahme;
              </li>
              <li>
                bei reinen Warenverkäufen gegenüber Unternehmern
                <strong> 1 Jahr</strong> ab Gefahrübergang (soweit gesetzlich
                zulässig).
              </li>
            </ul>
            <p className="mt-3">
              (3) Mängel sind dem Auftragnehmer unverzüglich nach Entdeckung
              schriftlich oder in Textform anzuzeigen.
            </p>
            <p className="mt-3">
              (4) Im Fall eines Mangels wird der Auftragnehmer nach seiner Wahl
              Nacherfüllung durch Beseitigung des Mangels oder durch Herstellung
              eines neuen, mangelfreien Werks leisten. Schlägt die Nacherfüllung
              fehl, ist sie unzumutbar oder wird sie vom Auftragnehmer zu Unrecht
              verweigert, kann der Auftraggeber nach den gesetzlichen
              Bestimmungen mindern, zurücktreten oder Schadensersatz verlangen.
            </p>
            <p className="mt-3">
              (5) Ansprüche wegen Verschleiß bei bestimmungsgemäßem Gebrauch,
              unsachgemäßer Behandlung oder Wartungsmängeln auf Seiten des
              Auftraggebers sind ausgeschlossen.
            </p>
          </section>

          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">
              § 9 Haftung
            </h2>
            <p>
              (1) Der Auftragnehmer haftet unbeschränkt für Vorsatz und grobe
              Fahrlässigkeit sowie bei Verletzung von Leben, Körper und
              Gesundheit. Gleiches gilt bei der Verletzung vertragswesentlicher
              Pflichten (Kardinalpflichten), deren Erfüllung die ordnungsgemäße
              Durchführung des Vertrags überhaupt erst ermöglicht und auf deren
              Einhaltung der Vertragspartner regelmäßig vertraut und vertrauen
              darf.
            </p>
            <p className="mt-3">
              (2) Im Übrigen ist die Haftung für leichte Fahrlässigkeit
              ausgeschlossen. Bei der Verletzung von Kardinalpflichten aus
              leichter Fahrlässigkeit ist die Haftung auf den vertragstypisch
              vorhersehbaren Schaden beschränkt.
            </p>
            <p className="mt-3">
              (3) Die Haftung nach dem Produkthaftungsgesetz bleibt unberührt.
            </p>
            <p className="mt-3">
              (4) Der Auftragnehmer verfügt über eine Betriebshaftpflicht-
              versicherung. Details siehe
              <a
                href="/impressum"
                className="text-[#0A8EDB] hover:underline"
              >
                {" "}Impressum
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">
              § 10 Kündigung
            </h2>
            <p>
              (1) Bis zur Fertigstellung des Werks kann der Auftraggeber jederzeit
              den Vertrag kündigen (§ 648 BGB). Kündigt er, ist der Auftragnehmer
              berechtigt, die vereinbarte Vergütung zu verlangen; er muss sich
              jedoch dasjenige anrechnen lassen, was er infolge der Aufhebung
              des Vertrags an Aufwendungen erspart oder durch anderweitige
              Verwendung seiner Arbeitskraft erwirbt oder zu erwerben böswillig
              unterlässt.
            </p>
            <p className="mt-3">
              (2) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund
              (§ 648a BGB) bleibt für beide Parteien unberührt.
            </p>
          </section>

          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">
              § 11 Datenschutz
            </h2>
            <p>
              Personenbezogene Daten des Auftraggebers werden im Rahmen der
              Vertragsabwicklung gemäß den Bestimmungen der
              Datenschutz-Grundverordnung (DSGVO) und des Bundesdatenschutz-
              gesetzes (BDSG) verarbeitet. Einzelheiten ergeben sich aus der
              <a
                href="/datenschutz"
                data-testid="agb-datenschutz-link"
                className="text-[#0A8EDB] hover:underline"
              >
                {" "}Datenschutzerklärung
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">
              § 12 Streitbeilegung
            </h2>
            <p>
              (1) Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A8EDB] hover:underline"
              >
                {" "}https://ec.europa.eu/consumers/odr/
              </a>.
            </p>
            <p className="mt-3">
              (2) Der Auftragnehmer ist nicht bereit und nicht verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen (§ 36 VSBG).
            </p>
          </section>

          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">
              § 13 Schlussbestimmungen
            </h2>
            <p>
              (1) Es gilt ausschließlich das Recht der Bundesrepublik Deutschland
              unter Ausschluss des UN-Kaufrechts (CISG). Bei Verbrauchern gilt
              diese Rechtswahl nur, soweit hierdurch der gewährte Schutz durch
              zwingende Bestimmungen des Rechts des Staates, in dem der
              Verbraucher seinen gewöhnlichen Aufenthalt hat, nicht entzogen
              wird.
            </p>
            <p className="mt-3">
              (2) Erfüllungsort und – soweit gesetzlich zulässig – ausschließlicher
              Gerichtsstand für alle Streitigkeiten aus diesem Vertrag mit
              Kaufleuten, juristischen Personen des öffentlichen Rechts und
              öffentlich-rechtlichen Sondervermögen ist der Sitz des
              Auftragnehmers in 52134 Herzogenrath.
            </p>
            <p className="mt-3">
              (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder
              werden, so wird die Wirksamkeit der übrigen Bestimmungen hiervon
              nicht berührt. An die Stelle der unwirksamen Bestimmung tritt die
              gesetzliche Regelung.
            </p>
          </section>

          <section className="pt-4 border-t border-[#E7E5E4] text-sm text-[#78716C]">
            <p>
              Roda Haustechnik – Inhaber Marco Nobis<br />
              Schillerstr. 14, 52134 Herzogenrath<br />
              Stand der AGB: <span>April 2026</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
