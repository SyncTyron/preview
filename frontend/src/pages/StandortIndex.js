import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { LOCATIONS } from '../data/locations';
import { COMPANY } from '../config/company';

const siteUrl = 'https://roda-haustechnik.de';

const StandortIndex = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Helmet>
        <title>Einsatzgebiete - Sanitär, Heizung & Badsanierungen | {COMPANY.name}</title>
        <meta name="description" content={`${COMPANY.name} - Meisterbetrieb für Sanitär, Heizung, Badsanierungen und 24h-Notdienst in Kohlscheid, Merkstein, Aachen, Alsdorf und weiteren Städten.`} />
        <link rel="canonical" href={`${siteUrl}/standorte`} />
      </Helmet>
      <section className="px-5 pt-28 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6" data-testid="brand-standorte">
            <img src={COMPANY.logo} alt={`${COMPANY.name} Logo`} width="56" height="56" className="h-12 md:h-14 w-auto" />
            <div>
              <div className="text-xs uppercase tracking-widest text-blue-700 font-semibold">{COMPANY.name}</div>
              <div className="text-[11px] text-slate-500">Meisterbetrieb &middot; {COMPANY.address.city}</div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Unsere Einsatzgebiete</h1>
          <p className="mt-5 text-lg text-slate-700 max-w-3xl">
            Sanitär, Heizung, Badsanierungen und 24h-Notdienst in der Region Aachen / Herzogenrath. Wählen Sie Ihre Stadt:
          </p>
        </div>
      </section>
      <section className="px-5 py-16 max-w-5xl mx-auto">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {LOCATIONS.map((l) => (
            <Link key={l.slug} to={`/standort/${l.slug}`} data-testid={`loc-card-${l.slug}`}
                  className="rounded-2xl border border-slate-200 p-5 hover:border-blue-700 hover:shadow-sm transition block">
              <div className="text-xl font-semibold text-slate-900">{l.name}</div>
              <div className="text-sm text-slate-500 mt-1">{l.region} &middot; PLZ {l.zip}</div>
              <div className="mt-3 text-xs text-slate-600">{l.highlights.slice(0,2).join(' · ')}</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default StandortIndex;
