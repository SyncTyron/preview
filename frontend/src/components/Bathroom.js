import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Bathroom() {
  const { t } = useLanguage();

  return (
    <section id="bathroom" data-testid="bathroom-section" className="py-20 md:py-32 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }} className="relative"
          >
            <div className="overflow-hidden rounded-sm">
              <img
                src="/img/bathroom-renovation-header-white-modern-bathroom.webp"
                alt="Bathroom renovation" className="w-full h-[300px] sm:h-[400px] lg:h-[520px] object-cover"
                data-testid="bathroom-main-image" loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-[#0E6FB3] rounded-sm hidden lg:flex items-center justify-center p-3">
              <img src="/logo-white.svg" alt="Roda Logo" className="w-full h-full object-contain" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#0E6FB3] font-manrope">
              {t.bathroom.overline}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1C1917] font-outfit mt-3 mb-6">
              <a href="/#bathroom" className="text-inherit no-underline pointer-events-none">{t.bathroom.title}</a>
            </h2>
            <p className="text-base leading-relaxed text-[#57534E] font-manrope mb-4">{t.bathroom.description}</p>
            <p className="text-base leading-relaxed text-[#57534E] font-manrope mb-8">{t.bathroom.description2}</p>

            <div className="space-y-4">
              {t.bathroom.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3" data-testid={`bathroom-feature-${i}`}>
                  <div className="w-7 h-7 rounded-full bg-[#0E6FB3]/10 flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-[#0E6FB3]" />
                  </div>
                  <span className="font-manrope text-[#1C1917] font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
