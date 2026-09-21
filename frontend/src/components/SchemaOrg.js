import { COMPANY } from '../config/company';
// TODO(company.js): Telefonnummer/Adresse/Geo aus COMPANY verwenden.
import { useEffect } from "react";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  "name": "Roda Haustechnik",
  "description": "Meisterbetrieb f\u00fcr Sanit\u00e4r, Heizung und Badsanierung in Herzogenrath und Aachen.",
  "url": "https://www.roda-haustechnik.de",
  "telephone": "+4915221006829",
  "email": "kontakt@roda-haustechnik.de",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Schillerstr. 14",
    "addressLocality": "Herzogenrath",
    "postalCode": "52134",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "50.8686",
    "longitude": "6.0936"
  },
  "areaServed": [
    "Herzogenrath", "Aachen", "Eschweiler", "Stolberg", "W\u00fcrselen", "Roetgen", "Kreis Heinsberg", "Kreis D\u00fcren"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Leistungen",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Heizungsbau" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sanit\u00e4rinstallationen" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Badsanierung" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Rohrbruchbehebung" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kundendienst & Reparaturen" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gas- & Wasserinstallationen" } }
    ]
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
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
