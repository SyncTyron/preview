import { useLanguage } from "../context/LanguageContext";
import { ArrowLeft } from "lucide-react";
import SeoHelmet from "../components/SeoHelmet";

export default function Widerruf() {
  const { lang } = useLanguage();
  const back = lang === "DE" ? "Zurück zur Startseite" : "Back to Homepage";

  return (
    <div data-testid="widerruf-page" className="min-h-screen bg-[#FDFBF7]">
      <SeoHelmet title={"Widerrufsbelehrung"} description={"Widerrufsbelehrung nach § 355 BGB für Verbraucher – MK Gebäudemanagement, Duisburg."} path={"/widerruf"} />
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-24">
        <a
          href="/"
          data-testid="widerruf-back-link"
          className="inline-flex items-center gap-2 text-[#0A8EDB] hover:text-[#0873B3] font-manrope font-semibold text-sm mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          {back}
        </a>

        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1C1917] font-outfit mb-4">
          Widerrufsbelehrung
        </h1>
        <p className="text-sm text-[#78716C] mb-8">
          Für Verbraucher bei außerhalb von Geschäftsräumen geschlossenen
          Verträgen und Fernabsatzverträgen (§§ 312b, 312c, 355 BGB)
        </p>

        <div className="font-manrope text-[#57534E] leading-relaxed space-y-7">
          <section className="p-4 rounded-sm bg-amber-50 border border-amber-200">
            <p className="text-sm text-amber-900">
              <strong>Wichtiger Hinweis:</strong> Diese Widerrufsbelehrung ist
              nach dem gesetzlichen Muster (Anlage 1 zu Art. 246a § 1 Abs. 2
              Satz 2 EGBGB) erstellt. Sie dient der Information auf der Website.
              Rechtlich entscheidend ist, dass Sie als Verbraucher die Belehrung
              <strong> vor Vertragsschluss in Textform</strong> (z. B. auf dem
              Auftragsformular oder Angebot) erhalten. Erfolgt dies nicht,
              verlängert sich die Widerrufsfrist auf bis zu 12 Monate und
              14 Tage (§ 356 Abs. 3 Satz 2 BGB).
            </p>
          </section>

          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">
              1. Geltungsbereich des Widerrufsrechts
            </h2>
            <p>
              Verbrauchern im Sinne von § 13 BGB steht ein Widerrufsrecht zu,
              wenn der Vertrag
            </p>
            <ul className="list-disc list-outside pl-5 mt-2 space-y-1">
              <li>
                <strong>außerhalb von Geschäftsräumen</strong> geschlossen wird,
                insbesondere bei Vertragsschluss im Haushalt des Kunden oder vor
                Ort im zu reinigenden bzw. zu pflegenden Objekt (z. B. bei der
                Objektbesichtigung) (§ 312b BGB), oder
              </li>
              <li>
                als <strong>Fernabsatzvertrag</strong> ausschließlich unter
                Verwendung von Fernkommunikationsmitteln (Telefon, E-Mail,
                Kontaktformular, WhatsApp etc.) zustande kommt (§ 312c BGB).
              </li>
            </ul>
            <p className="mt-3">
              Unternehmer im Sinne von § 14 BGB haben <strong>kein</strong>{" "}
              Widerrufsrecht.
            </p>
          </section>

          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">
              2. Widerrufsrecht
            </h2>
            <p className="font-semibold text-[#1C1917]">
              Sie haben das Recht, binnen 14 Tagen ohne Angabe von Gründen
              diesen Vertrag zu widerrufen.
            </p>
            <p className="mt-3">
              Die Widerrufsfrist beträgt <strong>14 Tage</strong> ab dem Tag des
              Vertragsabschlusses.
            </p>
            <p className="mt-3">
              Um Ihr Widerrufsrecht auszuüben, müssen Sie uns
            </p>
            <p className="mt-2">
              MK Gebäudemanagement – Inhaber Mert Kurnali<br />
              Auf dem Damm 112<br />
              47137 Duisburg<br />
              Telefon: +49&nbsp;163&nbsp;210&nbsp;66&nbsp;88<br />
              E-Mail: info@mk-gebaeudemanagement.de
            </p>
            <p className="mt-3">
              mittels einer eindeutigen Erklärung (z. B. ein mit der Post
              versandter Brief oder eine E-Mail) über Ihren Entschluss, diesen
              Vertrag zu widerrufen, informieren. Sie können dafür das
              nachfolgende Muster-Widerrufsformular verwenden, das jedoch nicht
              vorgeschrieben ist.
            </p>
            <p className="mt-3">
              Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die
              Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der
              Widerrufsfrist absenden.
            </p>
          </section>

          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">
              3. Folgen des Widerrufs
            </h2>
            <p>
              Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen,
              die wir von Ihnen erhalten haben, einschließlich der Lieferkosten
              (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben,
              dass Sie eine andere Art der Lieferung als die von uns angebotene,
              günstigste Standardlieferung gewählt haben), unverzüglich und
              spätestens binnen <strong>14 Tagen</strong> ab dem Tag
              zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses
              Vertrags bei uns eingegangen ist.
            </p>
            <p className="mt-3">
              Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das
              Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei
              denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in
              keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte
              berechnet.
            </p>
            <p className="mt-3">
              Haben Sie verlangt, dass die Dienstleistungen während der
              Widerrufsfrist beginnen sollen, so haben Sie uns einen angemessenen
              Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem
              Sie uns von der Ausübung des Widerrufsrechts hinsichtlich dieses
              Vertrags unterrichten, bereits erbrachten Dienstleistungen im
              Vergleich zum Gesamtumfang der im Vertrag vorgesehenen
              Dienstleistungen entspricht.
            </p>
          </section>

          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">
              4. Ausschluss bzw. vorzeitiges Erlöschen des Widerrufsrechts
            </h2>
            <p>
              Das Widerrufsrecht erlischt bei einem Vertrag zur Erbringung von
              Dienstleistungen vorzeitig, wenn
            </p>
            <ul className="list-disc list-outside pl-5 mt-2 space-y-1">
              <li>
                wir die Dienstleistung vollständig erbracht haben und
              </li>
              <li>
                mit der Ausführung der Dienstleistung erst begonnen haben,
                nachdem Sie dazu Ihre ausdrückliche Zustimmung gegeben haben
                und gleichzeitig Ihre Kenntnis davon bestätigt haben, dass Sie
                Ihr Widerrufsrecht bei vollständiger Vertragserfüllung durch uns
                verlieren (§ 356 Abs. 4 BGB).
              </li>
            </ul>
            <p className="mt-3">
              Weiterhin besteht gemäß § 312g Abs. 2 BGB <strong>kein</strong>{" "}
              Widerrufsrecht insbesondere bei
            </p>
            <ul className="list-disc list-outside pl-5 mt-2 space-y-1">
              <li>
                Verträgen zur Erbringung <strong>dringender Reparatur- oder
                Instandhaltungsarbeiten</strong>, bei denen der Verbraucher den
                Unternehmer ausdrücklich zu einem Besuch aufgefordert hat, um
                solche Arbeiten vorzunehmen (§ 312 Abs. 2 Nr. 11 BGB) – z. B.
                kurzfristig angeforderter Notfall-Winterdienst bei akuter
                Glättegefahr, sofortige Beseitigung von Sturmschäden auf
                Außenanlagen oder eine dringende Sonderreinigung nach einem
                Wasser- oder Brandschaden. Für weitere, bei diesem Besuch
                zusätzlich beauftragte Leistungen besteht das Widerrufsrecht
                fort.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">
              5. Muster-Widerrufsformular
            </h2>
            <p className="italic">
              (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte
              dieses Formular aus und senden Sie es zurück.)
            </p>
            <div className="mt-4 p-5 rounded-sm border border-[#E7E5E4] bg-white text-[#1C1917] font-manrope text-sm space-y-3">
              <p>
                An:<br />
                MK Gebäudemanagement – Inhaber Mert Kurnali<br />
                Auf dem Damm 112<br />
                47137 Duisburg<br />
                E-Mail: info@mk-gebaeudemanagement.de
              </p>
              <p>
                Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*)
                abgeschlossenen Vertrag über den Kauf der folgenden Waren (*) /
                die Erbringung der folgenden Dienstleistung (*):
              </p>
              <p>
                _____________________________________________________________<br />
                _____________________________________________________________
              </p>
              <p>Bestellt am (*): __________ / erhalten am (*): __________</p>
              <p>Name des/der Verbraucher(s): _____________________________</p>
              <p>Anschrift des/der Verbraucher(s): _________________________</p>
              <p>
                Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf
                Papier): _________________________
              </p>
              <p>Datum: __________</p>
              <p className="text-xs text-[#78716C] pt-2 border-t border-[#E7E5E4]">
                (*) Unzutreffendes streichen.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-outfit font-bold text-[#1C1917] text-xl mb-3">
              6. Hinweis zur Website
            </h2>
            <p>
              Über diese Website werden <strong>keine</strong> Verträge
              geschlossen. Das Kontaktformular dient ausschließlich der
              unverbindlichen Anfrage. Ein Widerrufsrecht entsteht erst mit dem
              tatsächlichen Vertragsabschluss – in der Regel nach der
              Objektbesichtigung vor Ort oder über Fernkommunikationsmittel. Sie erhalten in diesem Fall
              die Widerrufsbelehrung erneut in Textform zusammen mit dem
              Auftragsformular bzw. der Auftragsbestätigung.
            </p>
          </section>

          <section className="pt-4 border-t border-[#E7E5E4] text-sm text-[#78716C]">
            <p>
              MK Gebäudemanagement – Inhaber Mert Kurnali<br />
              Auf dem Damm 112, 47137 Duisburg<br />
              Stand: <span>Juni 2026</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
