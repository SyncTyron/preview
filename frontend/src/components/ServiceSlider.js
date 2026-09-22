import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Building2, Sprout, Snowflake, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { CONTACT_SUBJECTS, SUBJECT_EVENT } from "../data/subjects";

const slideImages = [
  { src: "/img/detail-gebaeudereinigung.jpg", alt: "Reinigungskraft reinigt den Boden eines Gebäudes" },
  { src: "/img/detail-gruenflaeche.jpg", alt: "Gepflegte grüne Rasenfläche mit Bäumen und Beeten" },
  { src: "/img/detail-winter.jpg", alt: "Winterdienst räumt eine verschneite Straße bei Sonnenaufgang" },
];

const slideIcons = [<Building2 size={22} />, <Sprout size={22} />, <Snowflake size={22} />];

export default function ServiceSlider() {
  const { t } = useLanguage();
  const items = t.details.items;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % items.length), 6000);
    return () => clearInterval(id);
  }, [paused, active, items.length]);

  const scrollToContact = (idx) => {
    window.dispatchEvent(new CustomEvent(SUBJECT_EVENT, { detail: CONTACT_SUBJECTS[idx] }));
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div data-testid="service-slider">
      <div
        className="flex flex-col md:flex-row gap-3 h-[720px] md:h-[560px] lg:h-[600px]"
        role="tablist"
        aria-label={t.services.overline}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        data-paused={paused}
      >
        {items.map((item, idx) => {
          const isActive = idx === active;
          const img = slideImages[idx];
          return (
            <div
              key={item.anchor}
              id={idx === 0 ? "bathroom" : item.anchor}
              role="tab"
              tabIndex={0}
              aria-selected={isActive}
              data-testid={`service-slide-${idx}`}
              data-active={isActive}
              onClick={() => setActive(idx)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setActive(idx)}
              style={{ flex: isActive ? 7 : 1, transition: "flex 0.7s cubic-bezier(0.32, 0.72, 0, 1)" }}
              className={`group relative overflow-hidden rounded-sm min-h-0 min-w-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A8EDB] ${
                isActive ? "" : "hover:brightness-110"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
                  isActive ? "scale-100" : "scale-110 group-hover:scale-105"
                }`}
              />
              <div
                className={`absolute inset-0 transition-colors duration-500 ${
                  isActive
                    ? "bg-gradient-to-t from-[#0F172A]/95 via-[#0F172A]/55 to-[#0F172A]/10"
                    : "bg-[#0F172A]/60 group-hover:bg-[#0F172A]/45"
                }`}
              />

              {!isActive && (
                <div className="absolute inset-0 flex md:flex-col items-center justify-between md:justify-end px-5 md:px-0 md:pb-8 gap-4 text-white">
                  <span className="text-[#7DD3FC]">{slideIcons[idx]}</span>
                  <span className="font-outfit font-semibold text-lg md:text-xl tracking-tight md:[writing-mode:vertical-rl] md:rotate-180 whitespace-nowrap">
                    {item.tag}
                  </span>
                  <span className="font-manrope text-xs font-bold tracking-[0.2em] text-white/60">
                    0{idx + 1}
                  </span>
                </div>
              )}

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-12 text-white"
                  >
                    <span className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.2em] uppercase text-[#7DD3FC] font-manrope mb-3">
                      {slideIcons[idx]}
                      {item.tag}
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight font-outfit mb-4" data-testid={`service-slide-title-${idx}`}>
                      {item.title}
                    </h3>
                    <p className="font-manrope text-sm sm:text-base text-white/85 leading-relaxed max-w-2xl mb-5">
                      {item.description}
                    </p>
                    <ul className="space-y-2.5 mb-7 max-w-2xl">
                      {item.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 font-manrope text-sm text-white/90" data-testid={`service-slide-${idx}-point-${i}`}>
                          <span className="w-6 h-6 rounded-full bg-[#0A8EDB] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check size={14} />
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); scrollToContact(idx); }}
                      data-testid={`service-slide-cta-${idx}`}
                      className="inline-flex items-center gap-2 bg-[#0A8EDB] hover:bg-[#0873B3] text-white font-manrope font-semibold px-6 py-3 rounded-sm transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
                    >
                      {t.hero.cta}
                      <ArrowRight size={16} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex items-center gap-5" data-testid="service-slider-progress">
        <span className="font-manrope text-sm font-bold tracking-[0.2em] text-[#1C1917]">0{active + 1}</span>
        <div className="relative flex-1 h-1 rounded-full bg-[#E7E5E4] overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-[#0A8EDB]"
            style={{ width: `${((active + 1) / items.length) * 100}%`, transition: "width 0.7s cubic-bezier(0.32, 0.72, 0, 1)" }}
          />
        </div>
        <span className="font-manrope text-sm font-bold tracking-[0.2em] text-[#78716C]">0{items.length}</span>
      </div>
    </div>
  );
}
