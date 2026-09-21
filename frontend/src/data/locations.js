// Einsatzgebiete fuer Roda Haustechnik - Local SEO Landing Pages
// DYNAMIC DISTANCE: Entfernung wird zur Laufzeit aus company.js (HQ) berechnet.
// Slugs bleiben ASCII (SEO/URL-Konvention). Display-Namen mit Umlauten.
export const LOCATIONS = [
  {
    slug: 'kohlscheid', name: 'Kohlscheid', region: 'Herzogenrath',
    zip: '52134', lat: 50.8542, lng: 6.0911,
    highlights: ['Sanitärinstallation', 'Heizungsmodernisierung', 'Bad-Komplettsanierung', '24h-Notdienst'],
    intro: 'Als örtlicher Meisterbetrieb sind wir in Kohlscheid seit Jahren fest verwurzelt. Kurze Wege, schnelle Termine, fairer Preis.'
  },
  {
    slug: 'merkstein', name: 'Merkstein', region: 'Herzogenrath',
    zip: '52134', lat: 50.8782, lng: 6.0947,
    highlights: ['Heizungsbau', 'Wärmepumpen-Beratung', 'Rohrbruch-Soforthilfe', 'Altbau-Sanierung'],
    intro: 'Merkstein ist unser direktes Einsatzgebiet. Von der jährlichen Heizungswartung bis zur kompletten Badsanierung - alles aus einer Hand.'
  },
  {
    slug: 'herzogenrath', name: 'Herzogenrath', region: 'Städteregion Aachen',
    zip: '52134', lat: 50.8702, lng: 6.0937,
    highlights: ['Kundendienst Heizung', 'Gasthermen-Wartung', 'Barrierefreies Bad', 'Solarthermie'],
    intro: 'Herzogenrath vertraut auf unsere Handwerksqualität - ob Neubau, Sanierung oder Notfall rund um die Uhr.'
  },
  {
    slug: 'aachen', name: 'Aachen', region: 'Städteregion Aachen',
    zip: '52062', lat: 50.7753, lng: 6.0839,
    highlights: ['Sanitär-Notdienst', 'Heizungsausfall 24h', 'Bad-Modernisierung', 'BAFA-Beratung'],
    intro: 'In Aachen sind wir schnell vor Ort - besonders für den Notdienst bei Rohrbruch oder Heizungsausfall.'
  },
  {
    slug: 'alsdorf', name: 'Alsdorf', region: 'Städteregion Aachen',
    zip: '52477', lat: 50.8770, lng: 6.1620,
    highlights: ['Klempnerarbeiten', 'Heizungstausch', 'Trinkwasser-Hygiene', 'Wärmepumpe'],
    intro: 'Für Alsdorf bieten wir den vollen Leistungsumfang: von der Dachrinne bis zur hochmodernen Wärmepumpe.'
  },
  {
    slug: 'wuerselen', name: 'Würselen', region: 'Städteregion Aachen',
    zip: '52146', lat: 50.8185, lng: 6.1335,
    highlights: ['Heizungssanierung', 'Sanitär-Reparatur', 'Rohrverstopfung', 'Smart-Home-Heizung'],
    intro: 'Würselen gehört zum erweiterten Einsatzgebiet - termintreu, sauber, mit Qualität made in Germany.'
  },
  {
    slug: 'baesweiler', name: 'Baesweiler', region: 'Städteregion Aachen',
    zip: '52499', lat: 50.9080, lng: 6.1870,
    highlights: ['Installateurarbeiten', 'Öl-auf-Gas-Umrüstung', 'Bad-Umbau', 'Solarthermie'],
    intro: 'Baesweiler profitiert von unseren kurzen Reaktionszeiten und qualitativ hochwertiger Arbeit - auf Wunsch mit Fördermittelberatung.'
  },
  {
    slug: 'geilenkirchen', name: 'Geilenkirchen', region: 'Kreis Heinsberg',
    zip: '52511', lat: 50.9680, lng: 6.1150,
    highlights: ['Heizungskundendienst', 'Sanitär-Neuinstallation', 'Dusch-Abfluss', 'Legionellenprüfung'],
    intro: 'In Geilenkirchen und Umgebung übernehmen wir Wartung, Sanierung und Komplettbäder zuverlässig.'
  },
  {
    slug: 'uebach-palenberg', name: 'Übach-Palenberg', region: 'Kreis Heinsberg',
    zip: '52531', lat: 50.9200, lng: 6.1140,
    highlights: ['Heizungsmodernisierung', 'Solar + Heizung', 'Rohrsanierung', 'Wärmepumpe'],
    intro: 'Für Übach-Palenberg bieten wir zukunftssichere Heiztechnik-Lösungen und klassische Sanitärarbeit.'
  },
  {
    slug: 'eschweiler', name: 'Eschweiler', region: 'Städteregion Aachen',
    zip: '52249', lat: 50.8181, lng: 6.2722,
    highlights: ['Bad-Sanierung', 'Heizungsumbau', 'Gasanlagen', 'Trinkwasserfilter'],
    intro: 'Eschweiler liegt im erweiterten Einzugsgebiet - auch hier setzen wir auf Handwerksqualität statt Kompromisse.'
  }
];

export const getLocation = (slug) => LOCATIONS.find((l) => l.slug === slug);
