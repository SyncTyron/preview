import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!consent) { setStatus("error"); return; }
    setLoading(true);
    setStatus(null);
    try {
      await axios.post(`${API}/contact`, form);
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
      setConsent(false);
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#0E6FB3] font-manrope">
              {t.contact.overline}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1C1917] font-outfit mt-3 mb-4">
              <a href="/#contact" className="text-inherit no-underline pointer-events-none">{t.contact.title}</a>
            </h2>
            <p className="text-base leading-relaxed text-[#57534E] font-manrope mb-10">{t.contact.description}</p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-[#0E6FB3]/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={22} className="text-[#0E6FB3]" />
                </div>
                <div>
                  <p className="font-manrope font-semibold text-[#1C1917] text-sm mb-0.5">{t.contact.phoneLabel}</p>
                  <a href="tel:+4915221006829" className="font-manrope text-[#57534E] hover:text-[#0E6FB3] transition-colors text-lg" data-testid="contact-phone-link">
                    +49 152 2100 6829
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-[#0E6FB3]/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={22} className="text-[#0E6FB3]" />
                </div>
                <div>
                  <p className="font-manrope font-semibold text-[#1C1917] text-sm mb-0.5">{t.contact.emailLabel}</p>
                  <a href="mailto:kontakt@roda-haustechnik.de" className="font-manrope text-[#57534E] hover:text-[#0E6FB3] transition-colors" data-testid="contact-email-link">
                    kontakt@roda-haustechnik.de
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-[#0E6FB3]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-[#0E6FB3]" />
                </div>
                <div>
                  <p className="font-manrope font-semibold text-[#1C1917] text-sm mb-0.5">{t.contact.address}</p>
                  <p className="font-manrope text-[#57534E]">Schillerstr. 14<br />52134 Herzogenrath</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
            <form onSubmit={handleSubmit} data-testid="contact-form" className="bg-[#FDFBF7] border border-[#E7E5E4] rounded-sm p-8 md:p-10 space-y-6">
              <div>
                <Label htmlFor="name" className="font-manrope font-medium text-[#1C1917] mb-2 block">{t.contact.name} *</Label>
                <Input id="name" name="name" data-testid="contact-input-name" value={form.name} onChange={handleChange} required className="bg-white border-[#E7E5E4] font-manrope focus-visible:ring-[#0E6FB3]" />
              </div>
              <div>
                <Label htmlFor="email" className="font-manrope font-medium text-[#1C1917] mb-2 block">{t.contact.email} *</Label>
                <Input id="email" name="email" type="email" data-testid="contact-input-email" value={form.email} onChange={handleChange} required className="bg-white border-[#E7E5E4] font-manrope focus-visible:ring-[#0E6FB3]" />
              </div>
              <div>
                <Label htmlFor="phone" className="font-manrope font-medium text-[#1C1917] mb-2 block">{t.contact.phone}</Label>
                <Input id="phone" name="phone" type="tel" data-testid="contact-input-phone" value={form.phone} onChange={handleChange} className="bg-white border-[#E7E5E4] font-manrope focus-visible:ring-[#0E6FB3]" />
              </div>
              <div>
                <Label htmlFor="message" className="font-manrope font-medium text-[#1C1917] mb-2 block">{t.contact.message} *</Label>
                <Textarea id="message" name="message" data-testid="contact-input-message" value={form.message} onChange={handleChange} required rows={5} className="bg-white border-[#E7E5E4] font-manrope focus-visible:ring-[#0E6FB3] resize-none" />
              </div>
              <div className="flex items-start gap-3 p-4 bg-white border border-[#E7E5E4] rounded-sm">
                <input type="checkbox" id="privacy-consent" data-testid="contact-consent-checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} required className="mt-1 h-4 w-4 accent-[#0E6FB3] flex-shrink-0 cursor-pointer" />
                <label htmlFor="privacy-consent" className="font-manrope text-xs text-[#57534E] leading-relaxed cursor-pointer">
                  Ich willige ein, dass meine Angaben zur Bearbeitung meiner Anfrage gespeichert werden. Ich kann meine Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Weitere Informationen in der{" "}<a href="/datenschutz" className="text-[#0E6FB3] underline hover:text-[#0A5A94]" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a>.<span className="text-red-600">&nbsp;*</span>
                </label>
              </div>
              <Button type="submit" data-testid="submit-contact-form" disabled={loading || !consent} className="w-full bg-[#0E6FB3] hover:bg-[#0A5A94] text-white font-manrope font-semibold py-3 rounded-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                {loading ? (
                  <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />...</span>
                ) : (
                  <span className="flex items-center gap-2"><Send size={16} />{t.contact.submit}</span>
                )}
              </Button>
              {status === "success" && (
                <div data-testid="contact-success-message" className="flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 rounded-sm p-3">
                  <CheckCircle size={18} /><span className="font-manrope text-sm">{t.contact.success}</span>
                </div>
              )}
              {status === "error" && (
                <div data-testid="contact-error-message" className="flex items-center gap-2 text-red-700 bg-red-50 border border-red-200 rounded-sm p-3">
                  <AlertCircle size={18} /><span className="font-manrope text-sm">{t.contact.error}</span>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
