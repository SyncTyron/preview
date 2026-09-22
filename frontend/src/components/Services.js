import { useLanguage } from "../context/LanguageContext";
import ServiceSlider from "./ServiceSlider";


export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" data-testid="services-section" className="py-20 md:py-32 bg-[#F5F5F4] border-y border-[#E7E5E4]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-14 animate-fade-in-up">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#0A8EDB] font-manrope">
            {t.services.overline}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1C1917] font-outfit mt-3">
            <a href="/#services" className="text-inherit no-underline pointer-events-none">{t.services.title}</a>
          </h2>
        </div>

        <ServiceSlider />
      </div>
    </section>
  );
}
