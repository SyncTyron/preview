import { useLanguage } from "../context/LanguageContext";
import { Phone, ArrowDown } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/img/hero-section-modern-bathroom.webp"
          alt="Modernes Badezimmer mit freistehender Wanne, begehbarer Dusche, großem Spiegel, wandmontiertem Waschbecken und Handtuchhalter"
          className="w-full h-full object-cover"
          width="1920"
          height="1080"
          fetchpriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/85 via-[#0F172A]/60 to-[#0F172A]/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16">
        <div className="max-w-2xl animate-hero-in">
          <span className="inline-block text-sm font-bold tracking-[0.2em] uppercase text-[#7DD3FC] mb-4 font-manrope drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
            {t.hero.overline}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white font-outfit mb-3">
            {t.hero.title}
          </h1>
          <p className="text-xl sm:text-2xl font-outfit font-light text-white/90 mb-6">
            {t.hero.subtitle}
          </p>
          <p className="text-base leading-relaxed text-white/85 font-manrope mb-10 max-w-lg">
            {t.hero.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              data-testid="hero-cta-primary"
              type="button"
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center gap-2 bg-[#0E6FB3] hover:bg-[#0A5A94] text-white font-manrope font-semibold px-7 py-3.5 rounded-sm transition-transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              {t.hero.cta}
            </button>
            <a
              data-testid="hero-cta-emergency"
              href="tel:+4915221006829"
              className="inline-flex items-center gap-2 border-2 border-white/50 hover:border-[#0E6FB3] text-white font-manrope font-semibold px-7 py-3.5 rounded-sm transition-all hover:-translate-y-0.5"
            >
              <Phone size={18} aria-hidden="true" />
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      <button
        data-testid="scroll-indicator"
        type="button"
        aria-label="Zum nächsten Abschnitt scrollen"
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/95 hover:text-white transition-colors animate-scroll-bounce"
      >
        <ArrowDown size={28} aria-hidden="true" />
      </button>
    </section>
  );
}
