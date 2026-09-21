import React, { useEffect, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { LOCATIONS, getLocation } from '../data/locations';
import { COMPANY, distanceFromHQKm } from '../config/company';

const siteUrl = 'https://roda-haustechnik.de';

// Umlaute -> ASCII fuer stabile data-testids
const toAscii = (s) =>
  String(s)
    .replace(/ä/g, 'ae').replace(/Ä/g, 'Ae')
    .replace(/ö/g, 'oe').replace(/Ö/g, 'Oe')
    .replace(/ü/g, 'ue').replace(/Ü/g, 'Ue')
    .replace(/ß/g, 'ss');

const Standort = () => {
  const { slug } = useParams();
  const loc = getLocation(slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  const km = useMemo(
    () => (loc ? distanceFromHQKm({ lat: loc.lat, lng: loc.lng }) : 0),
    [loc]
  );

  const ld = useMemo(() => {
    if (!loc) return null;
    return {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'Plumber', 'HVACBusiness'],
      name: `${COMPANY.name} - Sanitär, Heizung & Badsanierungen in ${loc.name}`,
      url: `${siteUrl}/standort/${loc.slug}`,
      telephone: COMPANY.phone,
      image: `${siteUrl}${COMPANY.logo}`,
      logo: `${siteUrl}${COMPANY.logo}`,
      priceRange: '€€',
      areaServed: { '@type': 'City', name: loc.name },
      address: {
        '@type': 'PostalAddress',
        streetAddress: COMPANY.address.street,
        addressLocality: COMPANY.address.city,
        postalCode: COMPANY.address.zip,
        addressCountry: COMPANY.address.country,
      },
      geo: { '@type': 'GeoCoordinates', latitude: COMPANY.geo.lat, longitude: COMPANY.geo.lng },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '07:00', closes: '17:00' }
      ],
      makesOffer: loc.highlights.map((h) => ({
        '@type': 'Offer', itemOffered: { '@type': 'Service', name: h }
      }))
    };
  }, [loc]);

  if (!loc) return <Navigate to="/" replace />;

  const title = `Sanitär, Heizung, Badsanierungen & Notdienst ${loc.name} | ${COMPANY.name}`;
  const desc  = `${COMPANY.name} - Ihr Meisterbetrieb für Sanitär, Heizung, Badsanierungen und 24h-Notdienst in ${loc.name} (${loc.region}). ${loc.intro.slice(0, 80)}`;

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={`${siteUrl}/standort/${loc.slug}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={`${siteUrl}/standort/${loc.slug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${siteUrl}${COMPANY.logo}`} />
        <script type="application/ld+json">{JSON.stringify(ld)}</script>
      </Helmet>

      <section className="px-5 pt-28 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6" data-testid={`brand-${loc.slug}`}>
            <img
              src={COMPANY.logo}
              alt={`${COMPANY.name} Logo`}
              width="56"
              height="56"
              loading="eager"
              className="h-12 md:h-14 w-auto"
            />
            <div>
              <div className="text-xs uppercase tracking-widest text-blue-700 font-semibold">{COMPANY.name}</div>
              <div className="text-[11px] text-slate-500">Meisterbetrieb &middot; {COMPANY.address.city}</div>
            </div>
          </div>

          <nav className="text-xs text-slate-500 mb-4" aria-label="Breadcrumb" data-testid={`breadcrumb-${loc.slug}`}>
            <Link to="/" className="hover:text-blue-700">Start</Link>
            <span className="mx-2">›</span>
            <Link to="/standorte" className="hover:text-blue-700">Einsatzgebiete</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-700">{loc.name}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Sanitär, Heizung, Badsanierungen &amp; Notdienst in{' '}
            <span className="text-blue-700">{loc.name}</span>
          </h1>

          <p className="mt-5 text-lg text-slate-700 max-w-3xl">
            <strong>{COMPANY.name}</strong> - {loc.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={COMPANY.phoneHref} data-testid={`cta-call-${loc.slug}`}
               className="inline-flex items-center rounded-full bg-blue-700 text-white px-6 py-3 font-medium hover:bg-blue-800 transition">
              Jetzt anrufen: {COMPANY.phone}
            </a>
            <Link to="/#kontakt" data-testid={`cta-contact-${loc.slug}`}
                  className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 font-medium hover:border-blue-700 hover:text-blue-700 transition">
              Termin anfragen
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 max-w-5xl mx-auto">
        <h2 className="text-base md:text-lg font-semibold text-blue-700 uppercase tracking-wide">
          Unsere Schwerpunkte in {loc.name}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {loc.highlights.map((h) => (
            <div key={h}
                 data-testid={`highlight-${loc.slug}-${toAscii(h).toLowerCase().replace(/\s+/g,'-')}`}
                 className="rounded-2xl border border-slate-200 p-5 hover:border-blue-700 hover:shadow-sm transition">
              <div className="text-slate-900 font-medium">{h}</div>
              <div className="text-sm text-slate-500 mt-1">{COMPANY.name} &middot; {loc.region}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-base md:text-lg font-semibold text-blue-700 uppercase tracking-wide">
            Warum Kunden in {loc.name} uns wählen
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div>
              <div className="text-3xl font-bold text-slate-900">
                {km === 0 ? 'vor Ort' : `ca. ${km} km`}
              </div>
              <div className="text-sm text-slate-600 mt-1">
                {km === 0
                  ? `Unser Firmensitz liegt in ${loc.name} - kürzeste Reaktionszeit.`
                  : `Luftlinie vom Firmensitz (${COMPANY.address.city}) - kurze Reaktionszeit.`}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">PLZ {loc.zip}</div>
              <div className="text-sm text-slate-600 mt-1">
                Wir kennen {loc.name} - lokale Preise, lokale Ansprechpartner.
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">24/7</div>
              <div className="text-sm text-slate-600 mt-1">
                Notdienst bei Rohrbruch oder Heizungsausfall.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 max-w-5xl mx-auto">
        <h2 className="text-base md:text-lg font-semibold text-blue-700 uppercase tracking-wide">
          Weitere Einsatzgebiete
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {LOCATIONS.filter((l) => l.slug !== loc.slug).map((l) => (
            <Link key={l.slug} to={`/standort/${l.slug}`} data-testid={`xref-${l.slug}`}
                  className="text-sm rounded-full border border-slate-200 px-4 py-2 hover:border-blue-700 hover:text-blue-700 transition">
              {l.name}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Standort;
