import { useLanguage } from "../context/LanguageContext";
import { Flame, Droplets, Bath, Wrench, HeadsetIcon, Pipette } from "lucide-react";

const serviceIcons = [
  <Flame size={32} />,
  <Droplets size={32} />,
  <Bath size={32} />,
  <Wrench size={32} />,
  <HeadsetIcon size={32} />,
  <Pipette size={32} />,
];

const iconColors = [
  "text-[#F9B130]",
  "text-[#0E6FB3]",
  "text-[#0284C7]",
  "text-[#F9B130]",
  "text-[#0E6FB3]",
  "text-[#0284C7]",
];

const serviceImages = [
  "/img/service-section-heating.webp",
  "/img/service-section-plumbing.webp",
  "/img/service-section-bathroom.webp",
  null,
  null,
  null,
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" data-testid="services-section" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-14 animate-fade-in-up">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#0E6FB3] font-manrope">
            {t.services.overline}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1C1917] font-outfit mt-3">
            <a href="/#services" className="text-inherit no-underline pointer-events-none">{t.services.title}</a>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {t.services.items.map((item, i) => {
            const isLarge = i < 3;
            const colSpan =
              i === 0 ? "md:col-span-7" : i === 1 ? "md:col-span-5" : i === 2 ? "md:col-span-12" : "md:col-span-4";

            return (
              <div
                key={i}
                data-testid={`service-card-${i}`}
                style={{ animationDelay: `${i * 80}ms` }}
                className={`group relative overflow-hidden rounded-sm border border-[#E7E5E4] bg-[#FDFBF7] hover:shadow-md transition-all hover:-translate-y-1 animate-fade-in-up ${colSpan} ${
                  isLarge ? "min-h-[280px]" : "min-h-[200px]"
                }`}
              >
                {serviceImages[i] && (
                  <div className="absolute inset-0">
                    <img
                      src={serviceImages[i]}
                      alt={item.title}
                      width="1200"
                      height="800"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity"
                    />
                  </div>
                )}
                <div className={`relative p-8 md:p-10 flex flex-col h-full ${isLarge ? "justify-end" : "justify-start"}`}>
                  <div className={`mb-4 opacity-80 ${iconColors[i]}`}>{serviceIcons[i]}</div>
                  <h3 className={`font-semibold text-[#1C1917] font-outfit mb-2 ${isLarge ? "text-xl sm:text-2xl" : "text-lg whitespace-nowrap"}`}>{item.title}</h3>
                  <p className="text-sm text-[#57534E] font-manrope leading-relaxed max-w-md">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
