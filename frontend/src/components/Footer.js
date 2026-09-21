import { useLanguage } from "../context/LanguageContext";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer data-testid="footer-section" className="bg-[#0F172A] text-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.svg" alt="MK Gebäudemanagement Logo" className="h-10 w-auto brightness-110" width="40" height="40" />
              <div>
                <span className="font-outfit font-bold text-[#F1F5F9] text-lg">MK</span>
                <span className="font-outfit font-light text-white/95 text-lg ml-1">Gebäudemanagement</span>
              </div>
            </div>
            <p className="text-white/75 font-manrope text-sm leading-relaxed">{t.footer.meisterbetrieb}</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-outfit font-semibold text-[#F1F5F9] text-base mb-4">{t.contact.overline}</h3>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-[#0E6FB3]" />
              <a href="tel:+491632106688" className="text-white/95 hover:text-[#7DD3FC] font-manrope text-sm transition-colors" data-testid="footer-phone">+49 163 210 66 88</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-[#0E6FB3]" />
              <a href="mailto:info@mk-gebaeudemanagement.de" className="text-white/95 hover:text-[#7DD3FC] font-manrope text-sm transition-colors" data-testid="footer-email">info@mk-gebaeudemanagement.de</a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-[#0E6FB3] mt-0.5" />
              <p className="text-white/95 font-manrope text-sm">Auf dem Damm 112, 47137 Duisburg</p>
            </div>
          </div>

          <div>
            <h3 className="font-outfit font-semibold text-[#F1F5F9] text-base mb-4">{t.nav.services}</h3>
            <ul className="space-y-2">
              {t.services.items.slice(0, 4).map((item, i) => (
                <li key={i}><span className="text-white/80 font-manrope text-sm">{item.title}</span></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Links: Copyright */}
          <p className="text-white/75 font-manrope text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} MK Gebäudemanagement. {t.footer.rights}
          </p>

          {/* Mitte: Legal Links – zentriert */}
          <nav aria-label="Rechtliches" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <a href="/impressum" data-testid="footer-impressum-link" className="text-white/95 hover:text-[#7DD3FC] font-manrope text-sm transition-colors">{t.footer.impressum}</a>
            <a href="/datenschutz" data-testid="footer-datenschutz-link" className="text-white/95 hover:text-[#7DD3FC] font-manrope text-sm transition-colors">{t.footer.datenschutz}</a>
            <a href="/agb" data-testid="footer-agb-link" className="text-white/95 hover:text-[#7DD3FC] font-manrope text-sm transition-colors">{t.footer.agb}</a>
            <a href="/widerruf" data-testid="footer-widerruf-link" className="text-white/95 hover:text-[#7DD3FC] font-manrope text-sm transition-colors">{t.footer.widerruf}</a>
          </nav>

          {/* Rechts: Social Icons */}
          <div className="flex items-center gap-4 justify-center md:justify-end">
            <a href="https://www.facebook.com/profile.php?id=61566809496292" target="_blank" rel="nofollow noopener noreferrer" className="text-white/75 hover:text-[#7DD3FC] transition-colors" data-testid="footer-facebook" aria-label="MK Gebäudemanagement auf Facebook öffnen (in neuem Tab)">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
            <a href="https://www.instagram.com/roda_haustechnik/" target="_blank" rel="nofollow noopener noreferrer" className="text-white/75 hover:text-[#F9B130] transition-colors" data-testid="footer-instagram" aria-label="MK Gebäudemanagement auf Instagram öffnen (in neuem Tab)">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            </a>
            <a href="https://x.com/roda_haustechnik" target="_blank" rel="nofollow noopener noreferrer" className="text-white/75 hover:text-[#F1F5F9] transition-colors" data-testid="footer-x" aria-label="MK Gebäudemanagement auf X/Twitter öffnen (in neuem Tab)">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
