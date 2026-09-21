import { useLanguage } from "../context/LanguageContext";
import { Shield, Award, MapPin } from "lucide-react";

export default function About() {
  const { lang, t } = useLanguage();

  const trustItems = [
    {
      icon: <Shield size={28} />,
      title: "Meisterbetrieb",
      desc:
        lang === "DE"
          ? "Zertifizierter Fachbetrieb mit Meisterqualifikation"
          : "Certified specialist with master craftsman qualification",
    },
    {
      icon: <Award size={28} />,
      title: lang === "DE" ? "Qualit\u00e4t" : "Quality",
      desc:
        lang === "DE"
          ? "H\u00f6chste Pr\u00e4zision und Zuverl\u00e4ssigkeit"
          : "Highest precision and reliability",
    },
  ];

  return (
    <section id="about" data-testid="about-section" className="py-20 md:py-32 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#0E6FB3] font-manrope">
              {t.about.overline}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1C1917] font-outfit mt-3 mb-6">
              <a href="/#about" className="text-inherit no-underline pointer-events-none">{t.about.title}</a>
            </h2>
            <p className="text-base leading-relaxed text-[#57534E] font-manrope mb-4">
              {t.about.description}
            </p>
            <p className="text-base leading-relaxed text-[#57534E] font-manrope mb-6">
              {t.about.description2}
            </p>
            <div className="flex items-start gap-3 p-4 bg-[#0E6FB3]/5 rounded-sm border border-[#0E6FB3]/15">
              <MapPin size={20} className="text-[#0E6FB3] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[#57534E] font-manrope">{t.about.area}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {trustItems.map((item, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-sm border border-[#E7E5E4] hover:shadow-md transition-shadow"
              >
                <div className="text-[#0E6FB3] mb-4">{item.icon}</div>
                <h3 className="font-outfit font-semibold text-[#1C1917] text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-[#57534E] font-manrope leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
