import { useLanguage } from "../context/LanguageContext";
import { ArrowLeft } from "lucide-react";
import SeoHelmet from "../components/SeoHelmet";

const H2 = "font-outfit font-bold text-[#1C1917] text-xl mb-3";
const LINK = "text-[#0A8EDB] hover:underline";
const P = "mt-3";

export default function AGB() {
  const { lang } = useLanguage();
  const back = lang === "DE" ? "Zurück zur Startseite" : "Back to Homepage";

  return (
    <div data-testid="agb-page" className="min-h-screen bg-[#FDFBF7]">
      <SeoHelmet title={"AGB"} description={"Allgemeine Geschäftsbedingungen von MK Gebäudemanagement – Gebäudereinigung, Grünflächenpflege und Winterdienst in Duisburg."} path={"/agb"} />
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-24">
        <a href="/" data-testid="agb-back-link" className="inline-flex items-center gap-2 text-[#0A8EDB] hover:text-[#0873B3] font-manrope font-semibold text-sm mb-8 transition-colors">
          <ArrowLeft size={16} />{back}
        </a>

        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1C1917] font-outfit mb-4">Allgemeine Geschäftsbedingungen (AGB)</h1>
        <p className="text-sm text-[#78716C] mb-8">Stand: <span>Juni 2026</span></p>

        <div className="font-manrope text-[#57534E] leading-relaxed space-y-7">
          <section className="p-4 rounded-sm bg-amber-50 border border-amber-200">
            <p className="text-sm text-amber-900">
              <strong>Hinweis:</strong> Diese AGB sind auf Dienst- und Werkleistungen der Gebäudereinigung, Grünflächenpflege und des Winterdienstes zugeschnitten. Vor dem produktiven Einsatz empfehlen wir eine Prüfung durch einen Fachanwalt oder den Bundesinnungsverband des Gebäudereiniger-Handwerks (BIV).
            </p>
          </section>

          <section>
            <h2 className={H2}>§ 1 Geltungsbereich, Vertragspartner</h2>
            <p>(1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB“) gelten für alle Verträge zwischen</p>
            <p className="mt-2">
              MK Gebäudemanagement – Inhaber Mert Kurnali<br />
              Auf dem Damm 112, 47137 Duisburg, Deutschland<br />
              Telefon: +49&nbsp;163&nbsp;210&nbsp;66&nbsp;88<br />
              E-Mail: info@mk-gebaeudemanagement.de<br />
              (nachfolgend „Auftragnehmer“)
            </p>
            <p className={P}>und seinen Kunden (nachfolgend „Auftraggeber“) über die Erbringung von Dienst- und Werkleistungen in den Bereichen <strong>Gebäudereinigung</strong> (Unterhalts-, Grund-, Glas- und Sonderreinigung), <strong>Grünflächenpflege</strong> (Rasen-, Hecken-, Beet- und Außenanlagenpflege) sowie <strong>Winterdienst</strong> (Räum- und Streudienst).</p>
            <p className={P}>(2) Regelmäßig wiederkehrende Leistungen (insbesondere Unterhaltsreinigung, laufende Grünflächenpflege und saisonaler Winterdienst) sind Dienstleistungen im Sinne der §§ 611 ff. BGB. Einmalige, erfolgsbezogene Leistungen (insbesondere Grund-, Glas- und Sonderreinigungen sowie einzelne Schnitt- oder Rodungsarbeiten) sind Werkleistungen im Sinne der §§ 631 ff. BGB.</p>
            <p className={P}>(3) Verbraucher im Sinne von § 13 BGB ist jede natürliche Person, die den Vertrag zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können. Unternehmer ist jede natürliche oder juristische Person im Sinne von § 14 BGB.</p>
            <p className={P}>(4) Abweichende, entgegenstehende oder ergänzende Geschäftsbedingungen des Auftraggebers werden nur dann und insoweit Vertragsbestandteil, als der Auftragnehmer ihrer Geltung ausdrücklich in Textform zugestimmt hat.</p>
          </section>

          <section>
            <h2 className={H2}>§ 2 Angebot, Objektbesichtigung und Vertragsschluss</h2>
            <p>(1) Angebote des Auftragnehmers sind freibleibend, sofern sie nicht ausdrücklich als verbindlich gekennzeichnet sind. Angebote gelten – soweit nicht anders vermerkt – 30 Tage ab Angebotsdatum.</p>
            <p className={P}>(2) Angebote beruhen auf den Angaben des Auftraggebers zu Flächen, Ausstattung, Verschmutzungsgrad, Nutzung und Zugänglichkeit des Objekts sowie ggf. auf einer Objektbesichtigung. Erweisen sich diese Angaben als unzutreffend oder ändern sich die Verhältnisse wesentlich, ist der Auftragnehmer berechtigt, das Angebot bzw. die Vergütung entsprechend anzupassen.</p>
            <p className={P}>(3) Der Vertrag kommt durch Auftragserteilung des Auftraggebers (in Textform oder mündlich) und Auftragsbestätigung des Auftragnehmers in Textform oder durch Beginn der Leistungsausführung zustande.</p>
            <p className={P}>(4) Über die Website des Auftragnehmers werden keine Verträge geschlossen; das Kontaktformular dient ausschließlich der unverbindlichen Anfrage.</p>
            <p className={P}>(5) Für außerhalb von Geschäftsräumen geschlossene Verträge sowie Fernabsatzverträge mit Verbrauchern gilt das gesetzliche Widerrufsrecht. Einzelheiten ergeben sich aus der <a href="/widerruf" data-testid="agb-widerruf-link" className={LINK}>Widerrufsbelehrung</a>.</p>
          </section>

          <section>
            <h2 className={H2}>§ 3 Leistungsumfang</h2>
            <p>(1) Art, Umfang, Häufigkeit und Ausführungszeiten der Leistungen ergeben sich aus dem Angebot, der Auftragsbestätigung bzw. dem vereinbarten Leistungsverzeichnis (Reinigungs- oder Pflegeplan). Nicht ausdrücklich aufgeführte Leistungen sind nicht geschuldet und werden nach gesonderter Beauftragung zusätzlich vergütet.</p>
            <p className={P}>(2) <strong>Gebäudereinigung:</strong> Die Leistungen werden fachgerecht nach dem anerkannten Stand der Technik des Gebäudereiniger-Handwerks mit geeigneten Reinigungsmitteln und -geräten ausgeführt. Der Auftragnehmer wählt Reinigungsverfahren und -mittel nach pflichtgemäßem Ermessen aus, sofern nichts anderes vereinbart ist.</p>
            <p className={P}>(3) <strong>Grünflächenpflege:</strong> Umfang und Turnus der Pflegearbeiten (z. B. Rasenschnitt, Hecken- und Gehölzschnitt, Unkraut- und Laubbeseitigung) richten sich nach Vegetationsverlauf und Witterung. Arbeiten, die gesetzlichen Schnittverboten (insbesondere § 39 Abs. 5 BNatSchG, 1. März bis 30. September) unterliegen, werden nur im gesetzlich zulässigen Rahmen ausgeführt. Die Entsorgung von Grünschnitt ist nur geschuldet, wenn dies vereinbart wurde.</p>
            <p className={P}>(4) <strong>Winterdienst:</strong> Der Auftragnehmer übernimmt für die vereinbarten Flächen und den vereinbarten Zeitraum (Wintersaison, regelmäßig 1. November bis 31. März) das Räumen von Schnee und das Abstumpfen bzw. Beseitigen von Glätte innerhalb der vereinbarten Zeiten. Soweit nichts anderes vereinbart ist, orientieren sich die Einsatzzeiten an den ortsüblichen Anforderungen der Straßenreinigungs- und Winterdienstsatzung der Stadt Duisburg. Der Einsatz erfolgt bei Schneefall bzw. Glättebildung nach den Feststellungen des Auftragnehmers und den Wetterdaten anerkannter Wetterdienste. Die Auswahl der Streumittel erfolgt unter Beachtung kommunaler Vorgaben (insbesondere Salzverbote).</p>
            <p className={P}>(5) Bei außergewöhnlichen Witterungsverhältnissen (z. B. anhaltender starker Schneefall, Eisregen, extreme Schneemengen), bei denen ein Räumen und Streuen erkennbar keinen Erfolg verspricht oder unzumutbar ist, ist der Auftragnehmer zur Leistung erst verpflichtet, wenn die Verhältnisse dies wieder zulassen. Ein Anspruch auf einen bestimmten Zeitpunkt der Räumung innerhalb der vereinbarten Zeiten besteht nicht; der Auftragnehmer bemüht sich um eine zeitnahe Ausführung nach Einsatzplan.</p>
            <p className={P}>(6) Der Auftragnehmer ist berechtigt, zur Leistungserbringung geeignete und zuverlässige Subunternehmer einzusetzen. Er bleibt gegenüber dem Auftraggeber für die ordnungsgemäße Leistungserbringung verantwortlich.</p>
          </section>

          <section>
            <h2 className={H2}>§ 4 Mitwirkungspflichten des Auftraggebers</h2>
            <p>(1) Der Auftraggeber gewährt dem Auftragnehmer zu den vereinbarten Zeiten ungehinderten Zugang zu den Räumen und Flächen und stellt Wasser, Strom, ausreichende Beleuchtung sowie – soweit erforderlich – einen abschließbaren Raum zur Lagerung von Geräten und Materialien unentgeltlich zur Verfügung.</p>
            <p className={P}>(2) Überlassene Schlüssel, Transponder oder Zugangscodes werden vom Auftragnehmer sorgfältig verwahrt und nur an eingesetzte Mitarbeiter ausgegeben. Bei Verlust haftet der Auftragnehmer im Rahmen von § 9; die Kosten einer Schließanlagenerneuerung sind auf den nachgewiesenen, erforderlichen Aufwand begrenzt.</p>
            <p className={P}>(3) Der Auftraggeber weist den Auftragnehmer vor Leistungsbeginn auf empfindliche Oberflächen, besondere Materialien, Gefahrenstellen, Alarmanlagen sowie auf Besonderheiten des Objekts hin, die für eine sachgerechte Ausführung erheblich sind. Unterlässt er dies, haftet der Auftragnehmer für hieraus entstehende Schäden nur bei Vorsatz oder grober Fahrlässigkeit.</p>
            <p className={P}>(4) Beim Winterdienst hat der Auftraggeber die zu betreuenden Flächen frei von Hindernissen (insbesondere abgestellten Fahrzeugen, Mülltonnen, Gegenständen) zu halten und Flächen für die Schneelagerung zu dulden. Nicht zugängliche Flächen gelten insoweit als nicht geschuldet.</p>
            <p className={P}>(5) Bei der Grünflächenpflege hat der Auftraggeber auf im Boden verlegte Leitungen, Bewässerungsanlagen, Beleuchtung und ähnliche Einbauten hinzuweisen.</p>
            <p className={P}>(6) Kommt der Auftraggeber seinen Mitwirkungspflichten nicht nach und kann die Leistung deshalb nicht oder nur eingeschränkt erbracht werden, bleibt der Vergütungsanspruch bestehen; ersparte Aufwendungen werden angerechnet. Zusätzlicher Aufwand (z. B. vergebliche Anfahrt) wird gesondert vergütet.</p>
          </section>

          <section>
            <h2 className={H2}>§ 5 Ausführungszeiten, Behinderung</h2>
            <p>(1) Vereinbarte Ausführungszeiten sind verbindlich, soweit sie ausdrücklich als solche in Textform festgelegt wurden. Im Übrigen gelten Zeitangaben als unverbindliche Richtwerte.</p>
            <p className={P}>(2) Ereignisse höherer Gewalt sowie sonstige unvorhersehbare, vom Auftragnehmer nicht zu vertretende Umstände (insbesondere Unwetter, Pandemien, Streik, behördliche Maßnahmen, Betriebsstörungen, Ausfall von Zulieferern) verlängern die Ausführungsfristen um die Dauer der Behinderung. Dauert die Behinderung länger als acht Wochen, sind beide Parteien berechtigt, hinsichtlich des noch nicht erfüllten Teils vom Vertrag zurückzutreten.</p>
            <p className={P}>(3) Gesetzliche Feiertage sind – sofern nicht anders vereinbart – keine Leistungstage. Beim Winterdienst gilt dies nicht; hier werden Leistungen auch an Sonn- und Feiertagen innerhalb der vereinbarten Zeiten erbracht.</p>
          </section>

          <section>
            <h2 className={H2}>§ 6 Vergütung, Preisanpassung, Zahlungsbedingungen</h2>
            <p>(1) Es gelten die im Angebot bzw. in der Auftragsbestätigung vereinbarten Preise. Gegenüber Verbrauchern werden Preise als Endpreise inklusive gesetzlicher Umsatzsteuer angegeben, gegenüber Unternehmern zuzüglich der jeweils gültigen gesetzlichen Umsatzsteuer.</p>
            <p className={P}>(2) Bei Winterdienstverträgen kann eine Bereitstellungspauschale (Saisonpauschale) für die Vorhaltung von Personal, Geräten und Streumitteln vereinbart werden, die unabhängig von der Anzahl der tatsächlichen Einsätze anfällt. Einsätze werden – je nach Vereinbarung – pauschal oder nach tatsächlicher Anzahl abgerechnet.</p>
            <p className={P}>(3) Bei Dauerverträgen mit einer Laufzeit von mehr als vier Monaten ist der Auftragnehmer berechtigt, die Vergütung anzupassen, wenn sich die Lohnkosten aufgrund allgemeinverbindlicher Tarifverträge im Gebäudereiniger-Handwerk, der gesetzliche Mindestlohn oder die Kosten für Betriebsstoffe und Material nach Vertragsschluss ändern. Die Anpassung erfolgt im Verhältnis der Kostenänderung frühestens zum Zeitpunkt der Kostenänderung und wird dem Auftraggeber mindestens sechs Wochen vorher in Textform angezeigt. Beträgt die Erhöhung mehr als 5 % der bisherigen Vergütung, kann der Auftraggeber den Vertrag innerhalb von vier Wochen nach Zugang der Anzeige zum Zeitpunkt des Wirksamwerdens der Erhöhung kündigen. Kostensenkungen werden in gleicher Weise weitergegeben.</p>
            <p className={P}>(4) Wiederkehrende Leistungen werden monatlich nachträglich abgerechnet, sofern nichts anderes vereinbart ist. Einmalige Leistungen werden nach Abnahme bzw. Fertigstellung abgerechnet. Bei umfangreichen Einzelaufträgen kann der Auftragnehmer angemessene Abschlagszahlungen verlangen (§ 632a BGB).</p>
            <p className={P}>(5) Rechnungen sind innerhalb von 14 Tagen nach Zugang ohne Abzug zahlbar. Der Auftraggeber kommt spätestens 30 Tage nach Fälligkeit und Zugang der Rechnung in Verzug; gegenüber Verbrauchern gilt dies nur, wenn in der Rechnung besonders darauf hingewiesen wurde (§ 286 Abs. 3 BGB).</p>
            <p className={P}>(6) Während des Verzugs ist die Geldschuld gegenüber Verbrauchern mit 5 Prozentpunkten, gegenüber Unternehmern mit 9 Prozentpunkten über dem Basiszinssatz zu verzinsen (§ 288 BGB). Gegenüber Unternehmern fällt zusätzlich eine Verzugspauschale von 40 € an (§ 288 Abs. 5 BGB). Die Geltendmachung eines weitergehenden Schadens bleibt vorbehalten.</p>
            <p className={P}>(7) Aufrechnungs- und Zurückbehaltungsrechte stehen dem Auftraggeber nur zu, soweit seine Gegenansprüche rechtskräftig festgestellt, unbestritten oder vom Auftragnehmer anerkannt sind oder auf demselben Vertragsverhältnis beruhen.</p>
          </section>

          <section>
            <h2 className={H2}>§ 7 Vertragslaufzeit und Kündigung von Dauerverträgen</h2>
            <p>(1) Verträge über wiederkehrende Leistungen (Unterhaltsreinigung, laufende Grünflächenpflege, Winterdienst) werden für die vereinbarte Laufzeit geschlossen. Ist keine Laufzeit vereinbart, gilt der Vertrag als auf unbestimmte Zeit geschlossen und kann von beiden Seiten mit einer Frist von drei Monaten zum Monatsende gekündigt werden.</p>
            <p className={P}>(2) Gegenüber <strong>Verbrauchern</strong> beträgt die anfängliche Laufzeit höchstens zwei Jahre. Nach Ablauf verlängert sich der Vertrag auf unbestimmte Zeit und kann jederzeit mit einer Frist von einem Monat gekündigt werden (§ 309 Nr. 9 BGB). Winterdienstverträge mit Verbrauchern enden mit Ablauf der vereinbarten Saison, sofern keine Verlängerung vereinbart wurde.</p>
            <p className={P}>(3) Gegenüber <strong>Unternehmern</strong> verlängert sich der Vertrag nach Ablauf der Erstlaufzeit jeweils um zwölf Monate, wenn er nicht mit einer Frist von drei Monaten zum Ende der jeweiligen Laufzeit gekündigt wird.</p>
            <p className={P}>(4) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt. Ein wichtiger Grund liegt für den Auftragnehmer insbesondere vor, wenn der Auftraggeber mit zwei aufeinanderfolgenden Monatsrechnungen in Verzug ist oder seine Mitwirkungspflichten trotz Abmahnung nachhaltig verletzt.</p>
            <p className={P}>(5) Kündigungen bedürfen der Textform (§ 126b BGB), z. B. per E-Mail oder Brief.</p>
            <p className={P}>(6) Bei einmaligen Werkleistungen kann der Auftraggeber den Vertrag bis zur Fertigstellung jederzeit kündigen (§ 648 BGB). Der Auftragnehmer ist in diesem Fall berechtigt, die vereinbarte Vergütung abzüglich ersparter Aufwendungen zu verlangen.</p>
          </section>

          <section>
            <h2 className={H2}>§ 8 Abnahme, Reklamation, Gewährleistung</h2>
            <p>(1) Einmalige Werkleistungen (z. B. Grund- oder Glasreinigung) sind vom Auftraggeber nach Fertigstellung abzunehmen (§ 640 BGB). Erkennbare Mängel sind dem Auftragnehmer <strong>unverzüglich, spätestens innerhalb von drei Werktagen</strong> nach Leistungserbringung in Textform anzuzeigen, damit eine Überprüfung im noch unveränderten Zustand möglich ist. Bei Verbrauchern bleiben die gesetzlichen Gewährleistungsrechte durch eine verspätete Anzeige unberührt; der Auftragnehmer kann jedoch einwenden, dass eine Verschlechterung auf der zwischenzeitlichen Nutzung beruht.</p>
            <p className={P}>(2) Bei wiederkehrenden Dienstleistungen sind Beanstandungen unverzüglich mitzuteilen. Berechtigte Beanstandungen werden im Rahmen der Nachbesserung kurzfristig – regelmäßig innerhalb von 24 Stunden an Werktagen – behoben. Ein Anspruch auf Minderung der Vergütung besteht nur, wenn die Nachbesserung fehlschlägt oder vom Auftragnehmer verweigert wird.</p>
            <p className={P}>(3) Für Werkleistungen richtet sich die Gewährleistung nach den gesetzlichen Vorschriften (§§ 633 ff. BGB). Die Gewährleistungsfrist beträgt gegenüber Verbrauchern zwei Jahre ab Abnahme; gegenüber Unternehmern ein Jahr, soweit gesetzlich zulässig.</p>
            <p className={P}>(4) Keine Mängel sind insbesondere: Verschmutzungen, die nach Leistungserbringung durch Nutzung oder Witterung eintreten; Beeinträchtigungen durch vorhandene Substanz- oder Materialschäden (z. B. blinde Glasscheiben, verkratzte oder poröse Oberflächen, dauerhafte Verfärbungen); Erscheinungen, die auf unterlassene Hinweise des Auftraggebers nach § 4 zurückgehen; sowie beim Winterdienst erneute Schnee- oder Glättebildung nach einem ordnungsgemäß durchgeführten Einsatz.</p>
          </section>

          <section>
            <h2 className={H2}>§ 9 Haftung</h2>
            <p>(1) Der Auftragnehmer haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie für Schäden, die auf Vorsatz oder grober Fahrlässigkeit des Auftragnehmers, seiner gesetzlichen Vertreter oder Erfüllungsgehilfen beruhen.</p>
            <p className={P}>(2) Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt. Im Übrigen ist die Haftung für leichte Fahrlässigkeit ausgeschlossen.</p>
            <p className={P}>(3) <strong>Winterdienst:</strong> Mit dem Winterdienstvertrag übernimmt der Auftragnehmer die Durchführung der Räum- und Streupflicht für die vereinbarten Flächen und Zeiten. Die dem Auftraggeber als Eigentümer bzw. Anlieger obliegende Verkehrssicherungspflicht sowie seine Überwachungspflicht gegenüber dem Auftragnehmer bleiben hiervon unberührt. Außerhalb der vereinbarten Zeiten und Flächen sowie bei Unmöglichkeit der Leistung nach § 3 Abs. 5 haftet der Auftragnehmer nicht. Der Auftragnehmer dokumentiert seine Einsätze (Datum, Uhrzeit, Witterung, Maßnahme) und stellt diese Nachweise dem Auftraggeber auf Anforderung zur Verfügung.</p>
            <p className={P}>(4) Der Auftragnehmer haftet nicht für Schäden, die auf ungeeigneter oder mangelhafter Beschaffenheit der zu reinigenden bzw. zu pflegenden Objekte beruhen (z. B. lose Fliesen, schadhafte Bodenbeläge, morsche Gehölze), sofern diese nicht offensichtlich erkennbar waren und der Auftraggeber nicht darauf hingewiesen hat.</p>
            <p className={P}>(5) Die Haftung nach dem Produkthaftungsgesetz sowie aus einer übernommenen Garantie bleibt unberührt. Der Auftragnehmer unterhält eine Betriebshaftpflichtversicherung; Angaben hierzu finden sich im <a href="/impressum" className={LINK}>Impressum</a>.</p>
            <p className={P}>(6) Soweit die Haftung des Auftragnehmers ausgeschlossen oder beschränkt ist, gilt dies auch für die persönliche Haftung seiner Mitarbeiter, Vertreter und Erfüllungsgehilfen.</p>
          </section>

          <section>
            <h2 className={H2}>§ 10 Personal, Abwerbeverbot</h2>
            <p>(1) Der Auftragnehmer setzt ausschließlich zuverlässiges, eingewiesenes Personal ein und stellt die Einhaltung der arbeits-, sozialversicherungs- und mindestlohnrechtlichen Vorschriften sicher.</p>
            <p className={P}>(2) Der Auftraggeber ist nicht berechtigt, dem Personal des Auftragnehmers Weisungen zu erteilen; Wünsche und Beanstandungen sind an den Auftragnehmer zu richten.</p>
            <p className={P}>(3) Gegenüber Unternehmern gilt: Der Auftraggeber verpflichtet sich, während der Vertragslaufzeit und sechs Monate danach keine Mitarbeiter des Auftragnehmers, die im Objekt eingesetzt waren, abzuwerben oder ohne Zustimmung des Auftragnehmers zu beschäftigen.</p>
          </section>

          <section>
            <h2 className={H2}>§ 11 Datenschutz</h2>
            <p>Personenbezogene Daten des Auftraggebers werden im Rahmen der Vertragsabwicklung gemäß der Datenschutz-Grundverordnung (DSGVO) und dem Bundesdatenschutzgesetz (BDSG) verarbeitet. Einzelheiten ergeben sich aus der <a href="/datenschutz" data-testid="agb-datenschutz-link" className={LINK}>Datenschutzerklärung</a>.</p>
          </section>

          <section>
            <h2 className={H2}>§ 12 Verbraucherstreitbeilegung</h2>
            <p>Der Auftragnehmer ist nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle im Sinne des Verbraucherstreitbeilegungsgesetzes (VSBG) teilzunehmen.</p>
          </section>

          <section>
            <h2 className={H2}>§ 13 Schlussbestimmungen</h2>
            <p>(1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG). Gegenüber Verbrauchern gilt diese Rechtswahl nur, soweit ihnen dadurch nicht der Schutz zwingender Bestimmungen des Rechts des Staates entzogen wird, in dem sie ihren gewöhnlichen Aufenthalt haben.</p>
            <p className={P}>(2) Erfüllungsort ist das jeweilige Objekt des Auftraggebers. Ist der Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen, ist ausschließlicher Gerichtsstand für alle Streitigkeiten aus diesem Vertrag Duisburg.</p>
            <p className={P}>(3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. An die Stelle der unwirksamen Bestimmung tritt die gesetzliche Regelung.</p>
          </section>

          <section className="pt-4 border-t border-[#E7E5E4] text-sm text-[#78716C]">
            <p>
              MK Gebäudemanagement – Inhaber Mert Kurnali<br />
              Auf dem Damm 112, 47137 Duisburg<br />
              Stand der AGB: <span>Juni 2026</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
