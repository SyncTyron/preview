# PRD – Website-Rebrand: SHK → Gebäudereinigung/Gebäudemanagement

## Ursprüngliche Aufgabe
Bestehende SHK-Seite (Roda Haustechnik, React-Repo SyncTyron/preview) inhaltlich auf
Gebäudereinigung/Gebäudemanagement (MK Gebäudemanagement, Duisburg) umstellen.
Nur Inhalte/Texte/Bilder/Kontaktinfos ändern – Design/Layout unverändert. Logo bleibt (Kunde tauscht später manuell).
Inhaltsquelle: https://mk-gebaeudemanagement.de/
Rechtliche Seiten (Impressum, Datenschutz, AGB, Widerruf) und Cookie-Banner NICHT ändern.

## Architektur
- Frontend: React (CRA) in /app/frontend, i18n über src/data/translations.js (DE/EN)
- Inhalte zentral in translations.js; Komponenten in src/components
- Läuft via Supervisor (frontend:3000, backend:8001)

## Umgesetzt (2026-06)
- translations.js: hero, about, trust, services(6), gallery, details(3), faq, reviews, contact, footer, nav → Gebäudereinigung/Grünflächenpflege/Winterdienst
- Bathroom.js: umgebaut → 3 Detailabschnitte (Gebäudereinigung [id=bathroom], Grünflächenpflege, Winterdienst) mit je 3 Stichpunkten, alternierendes Layout
- Services.js: 6 Reinigungs-Leistungen + neue Icons + Bilder
- Hero/Header/Footer/Contact/WhatsApp/NotdienstBanner: Marke „MK Gebäudemanagement", Tel +49 163 210 66 88, info@mk-gebaeudemanagement.de, Auf dem Damm 112, 47137 Duisburg
- Neue Stockbilder in /app/frontend/public/img (clean-*, detail-*, gallery-1..5)
- SchemaOrg.js + public/index.html: SEO/JSON-LD auf MK Gebäudemanagement (Duisburg)
- Fix: fetchpriority → fetchPriority (React-Warnung)
- Hero.js: Titel „MK Gebäudemanagement" einzeilig (whitespace-nowrap, Container max-w-3xl, mobil text-3xl)
- Leistungen: Detailabschnitte (Gebäudereinigung/Grünflächenpflege/Winterdienst) in Services-Sektion als interaktiver Expanding-Card-Slider (ServiceSlider.js, Klick zum Aufklappen, Fortschrittsbalken; mobil vertikal). Bathroom.js entfernt, Nav-Punkt „Gebäudereinigung" entfernt; Grid zeigt nur noch 3 weitere Leistungen
- Kontaktformular: Pflichtfeld „Betreff" als Dropdown (Gebäudereinigung/Grünflächenpflege/Winterdienst/Individuelles Anliegen, data/subjects.js); Slider-CTA setzt Betreff automatisch per CustomEvent; Backend speichert `subject` und nutzt es in der Admin-Mail-Betreffzeile („{Betreff} – Kontaktanfrage von {Name}")
- Services.js: die 3 kleinen Leistungs-Kacheln unter dem Slider entfernt – Sektion besteht nur noch aus Überschrift + Slider
- ServiceSlider: Auto-Play alle 6 s, pausiert bei Hover/Fokus (data-paused)
- server.py: alle Mail-Texte (Absendername, Admin-Mail-Fußzeile, Bestätigungs-Mail plain+HTML, Footer, Farben #0A8EDB) auf MK Gebäudemanagement (Auf dem Damm 112, 47137 Duisburg, +49 163 210 66 88, mk-gebaeudemanagement.de); Root-Message umbenannt. mail-logo.png noch alt (Kunde tauscht)
- ServiceSlider: Nummerierungs-/Fortschrittsleiste ersetzt durch Hinweistext (t.services.sliderHint, DE/EN) mit Info-Icon: „Kontakt aufnehmen“-Button führt zum Formular, Betreff vorausgewählt
- Farben: Hauptfarbe #0E6FB3 → #0A8EDB (Hover #0873B3), CSS-Var --primary/--ring angepasst, theme-color; Header immer weiß mit dunklem Text (Header.js)

## Bewusst unverändert
- Impressum/Datenschutz/AGB/Widerruf-Seiten + CookieBanner (noch alte Firma – Kunde aktualisiert)
- Logo (logo.svg / logo-white.svg) – Kunde tauscht manuell
- Social-Media-Links im Footer (aria-Labels aktualisiert, hrefs alt)
- .env: REACT_APP_BACKEND_URL zeigt auf externe Produktionsdomain (unverändert)

## Test
- testing_agent iteration_1.json: 100% Frontend-Checks bestanden, keine SHK-Reste auf Startseite, alle Bilder laden (200)

## Backlog / Nächste Schritte (P1/P2)
- Logo durch MK-Logo ersetzen (public/logo.svg, logo-white.svg)
- Impressum/Datenschutz/AGB auf MK Gebäudemanagement aktualisieren
- Footer Social-Media-hrefs auf echte MK-Kanäle setzen
- Optional: Kontaktformular-Backend/Empfangsmail auf MK umstellen
- robots.txt / sitemap.xml Domain ggf. anpassen
