import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Phone, AlertTriangle, X } from "lucide-react";

export default function NotdienstBanner() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      data-testid="notdienst-banner"
      className="relative z-[51] bg-[#C0562F] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-2.5 flex items-center justify-between gap-2">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <AlertTriangle size={16} className="flex-shrink-0 animate-pulse" />
          <span className="font-manrope font-bold text-sm whitespace-nowrap">
            {t.emergency.title}
          </span>
          <span className="hidden lg:inline text-white font-manrope text-sm truncate">
            {t.emergency.subtitle}
          </span>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href="tel:+491632106688"
            data-testid="notdienst-call-btn"
            className="inline-flex items-center gap-1.5 bg-white text-[#C0562F] font-manrope font-bold text-xs px-3 py-1.5 rounded-sm hover:bg-white/90 transition-colors whitespace-nowrap"
          >
            <Phone size={12} />
            +49 163 210 66 88
          </a>
          <button
            data-testid="notdienst-close-btn"
            type="button"
            aria-label="Notdienst-Banner schließen"
            onClick={() => setVisible(false)}
            className="text-white hover:text-white transition-colors"
          >
            <X size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
