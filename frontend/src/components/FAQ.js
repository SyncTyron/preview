import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion";

export default function FAQ() {
  const { t } = useLanguage();

  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="py-20 md:py-32 bg-[#F5F5F4]"
    >
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#0E6FB3] font-manrope">
            {t.faq.overline}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1C1917] font-outfit mt-3">
            <a href="/#faq" className="text-inherit no-underline pointer-events-none">{t.faq.title}</a>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {t.faq.items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                data-testid={`faq-item-${i}`}
                className="border-b border-[#E7E5E4]"
              >
                <AccordionTrigger className="font-outfit font-semibold text-[#1C1917] text-base py-5 hover:no-underline hover:text-[#0E6FB3] transition-colors">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="font-manrope text-[#57534E] text-sm leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
