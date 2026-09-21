import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const detailImages = [
  {
    src: "/img/detail-gebaeudereinigung.jpg",
    alt: "Reinigungskraft reinigt den Boden eines Gebäudes",
  },
  {
    src: "/img/detail-gruenflaeche.jpg",
    alt: "Gepflegte grüne Rasenfläche mit Bäumen und Beeten",
  },
  {
    src: "/img/detail-winter.jpg",
    alt: "Winterdienst räumt eine verschneite Straße bei Sonnenaufgang",
  },
];

export default function Bathroom() {
  const { t } = useLanguage();
  const items = t.details.items;

  return (
    <>
      {items.map((item, idx) => {
        const img = detailImages[idx] || detailImages[0];
        const reverse = idx % 2 === 1;
        const bg = reverse ? "bg-[#F5F5F4]" : "bg-[#FDFBF7]";

        return (
          <section
            key={idx}
            id={idx === 0 ? "bathroom" : item.anchor}
            data-testid={`detail-section-${idx}`}
            className={`py-20 md:py-32 ${bg}`}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <motion.div
                  initial={{ opacity: 0, x: reverse ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`relative ${reverse ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="overflow-hidden rounded-sm">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-[300px] sm:h-[400px] lg:h-[520px] object-cover"
                      data-testid={`detail-image-${idx}`}
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-[#0A8EDB] rounded-sm hidden lg:flex items-center justify-center p-3">
                    <img src="/logo-white.svg" alt="MK Gebäudemanagement Logo" className="w-full h-full object-contain" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: reverse ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={reverse ? "lg:order-1" : "lg:order-2"}
                >
                  <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#0A8EDB] font-manrope">
                    {item.tag}
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1C1917] font-outfit mt-3 mb-6">
                    {item.title}
                  </h2>
                  <p className="text-base leading-relaxed text-[#57534E] font-manrope mb-8">{item.description}</p>

                  <div className="space-y-4">
                    {item.points.map((point, i) => (
                      <div key={i} className="flex items-start gap-3" data-testid={`detail-${idx}-point-${i}`}>
                        <div className="w-7 h-7 rounded-full bg-[#0A8EDB]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={16} className="text-[#0A8EDB]" />
                        </div>
                        <span className="font-manrope text-[#1C1917]">{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
