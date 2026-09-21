import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Reviews() {
  const { t } = useLanguage();

  return (
    <section
      id="reviews"
      data-testid="reviews-section"
      className="py-20 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#0A8EDB] font-manrope">
            {t.reviews.overline}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1C1917] font-outfit mt-3 mb-4">
            {t.reviews.title}
          </h2>
        </motion.div>

        {/* Trustpilot-style header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-center mb-10"
        >
          <div className="flex items-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <div key={s} className="w-8 h-8 bg-[#00B67A] flex items-center justify-center">
                <Star size={18} fill="white" stroke="none" />
              </div>
            ))}
          </div>
          <p className="font-manrope text-sm text-[#57534E]">
            4.9 / 5.0 &middot; Trustpilot
          </p>
          <div className="mt-3 inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-manrope font-semibold px-3 py-1.5 rounded-sm">
            PLATZHALTER
          </div>
        </motion.div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.reviews.items.map((review, i) => (
            <motion.div
              key={i}
              data-testid={`review-card-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-[#FDFBF7] border border-[#E7E5E4] rounded-sm p-6 flex flex-col"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    size={16}
                    fill={s < review.rating ? "#00B67A" : "#E7E5E4"}
                    stroke="none"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="font-manrope text-sm text-[#1C1917] leading-relaxed flex-1 mb-4">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-[#E7E5E4]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0A8EDB]/15 flex items-center justify-center">
                    <span className="font-outfit font-bold text-[#0A8EDB] text-sm">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <span className="font-manrope font-semibold text-sm text-[#1C1917]">
                    {review.name}
                  </span>
                </div>
                <span className="font-manrope text-xs text-[#57534E]">
                  {review.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trustpilot link placeholder */}
        <div className="text-center mt-8">
          <a
            href="https://www.trustpilot.com"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="trustpilot-link"
            className="inline-flex items-center gap-2 font-manrope font-semibold text-sm text-[#0A8EDB] hover:text-[#0873B3] transition-colors"
          >
            Alle Bewertungen auf Trustpilot ansehen
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
