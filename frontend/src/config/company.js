/**
 * RODA Haustechnik - zentrale Firmenstammdaten.
 * Einzige Quelle der Wahrheit fuer Adresse, Koordinaten, Telefon, E-Mail.
 * Wird von Location-Pages, SchemaOrg, Footer, Impressum usw. konsumiert.
 *
 * WICHTIG: Bei Adressaenderung NUR hier pflegen.
 */
export const COMPANY = {
  name: 'Roda Haustechnik',
  legalName: 'Roda Haustechnik GmbH',
  phone: '+49 2407 9573300',
  phoneHref: 'tel:+4924079573300',
  email: 'info@roda-haustechnik.de',
  logo: '/logo.svg',        // absolute URL im build - public/$(basename $LOGO_PATH)

  // Firmensitz - BITTE exakt wie im Impressum pflegen
  address: {
    street: 'Kaiserstrasse 1',        // TODO: an Impressum anpassen
    zip:    '52134',
    city:   'Herzogenrath',
    country: 'DE',
  },

  // Geo-Koordinaten fuer Entfernungsberechnung (Haversine)
  // Ermitteln ueber: https://www.openstreetmap.org -> Rechtsklick -> "Koordinaten zeigen"
  geo: {
    lat: 50.8702,   // Standard: Herzogenrath/Kohlscheid - BITTE exakt aus Impressum-Adresse setzen
    lng: 6.0937,
  },
};

/**
 * Haversine-Formel - Entfernung in km zwischen zwei Geo-Punkten.
 * @param {{lat:number,lng:number}} a
 * @param {{lat:number,lng:number}} b
 * @returns {number} km (float)
 */
export const distanceKm = (a, b) => {
  if (!a || !b) return 0;
  const toRad = (d) => (d * Math.PI) / 180;
  const R = 6371; // Erdradius km
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
};

/**
 * Entfernung von einer Stadt zum Firmensitz.
 * @param {{lat:number,lng:number}} city
 * @returns {number} km (gerundet)
 */
export const distanceFromHQKm = (city) => {
  const km = distanceKm(COMPANY.geo, city);
  return Math.round(km);
};
