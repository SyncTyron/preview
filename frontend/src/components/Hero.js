import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Phone, ArrowDown } from "lucide-react";

const heroSlides = [
  { src: "/img/clean-hero.jpg", alt: "Professionelle Gebäudereinigung – Reinigungskraft bei der Arbeit in einem modernen Büro" },
  { src: "/img/detail-gruenflaeche.jpg", alt: "Grünflächenpflege – gepflegte Rasenfläche mit Bäumen und Beeten" },
  { src: "/img/detail-winter.jpg", alt: "Winterdienst – geräumte Straße bei Schnee und Sonnenaufgang" },
];

export default function Hero() {
  const { t } = useLanguage();
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    heroSlides.slice(1).forEach((s) => { const img = new Image(); img.src = s.src; });
    const id = setInterval(() => setSlide((i) => (i + 1) % heroSlides.length), 6000);
    return () => clearInterval(id);
  }, []);

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
      <div className="absolute inset-0 bg-[#0F172A]" data-testid="hero-slideshow" data-slide={slide}>
        <AnimatePresence initial={false}>
          <motion.img
            key={slide}
            src={heroSlides[slide].src}
            alt={heroSlides[slide].alt}
            className="absolute inset-0 w-full h-full object-cover"
            width="1920"
            height="1080"
            fetchPriority="high"
            decoding="async"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/85 via-[#0F172A]/60 to-[#0F172A]/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16">
        <div className="max-w-3xl animate-hero-in">
          <span className="inline-block text-sm font-bold tracking-[0.2em] uppercase text-[#7DD3FC] mb-4 font-manrope drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
            {t.hero.overline}
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white font-outfit mb-3 whitespace-nowrap" data-testid="hero-title">
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
              className="inline-flex items-center gap-2 bg-[#0A8EDB] hover:bg-[#0873B3] text-white font-manrope font-semibold px-7 py-3.5 rounded-sm transition-transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              {t.hero.cta}
            </button>
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
