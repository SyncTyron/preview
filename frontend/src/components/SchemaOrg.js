import { COMPANY } from '../config/company';
import { useEffect } from "react";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "MK Gebäudemanagement",
  "description": "Gebäudereinigung, Grünflächenpflege und Winterdienst für Büro, Praxis und Gewerbe in Duisburg und im Ruhrgebiet.",
  "url": "https://mk-gebaeudemanagement.de",
  "telephone": "+491632106688",
  "email": "info@mk-gebaeudemanagement.de",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Auf dem Damm 112",
    "addressLocality": "Duisburg",
    "postalCode": "47137",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "51.4344",
    "longitude": "6.7623"
  },
  "areaServed": [
    "Duisburg", "Ruhrgebiet"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Leistungen",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gebäudereinigung" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Grünflächenpflege" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Winterdienst" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fenster- & Glasreinigung" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Grund- & Sonderreinigung" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Individuelle Objektpflege" } }
    ]
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "16:30"
    }
  ],
  "priceRange": "$$"
};

export default function SchemaOrg() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schemaData);
    script.setAttribute("data-testid", "schema-org-script");
    document.head.appendChild(script);
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return null;
}
