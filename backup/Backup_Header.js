import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Menu, X, Phone, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sectionIds = ["hero", "services", "gallery", "bathroom", "contact"];

export default function Header({ showBanner = false }) {
  const { lang, toggleLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(showBanner);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    let ticking = false;
    const run = () => {
      setScrolled(window.scrollY > 40);
      // Scroll spy – minimaler Layout-Read (einmal pro Frame)
      let current = "hero";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop - (window.scrollY + 150);
        if (top <= 0) current = id;
      }
      setActiveSection(current);
      ticking = false;
    };
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(run);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    run();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.home, href: "#hero", id: "hero" },
    { label: t.nav.services, href: "#services", id: "services" },
    { label: t.nav.gallery, href: "#gallery", id: "gallery" },
    { label: t.nav.bathroom, href: "#bathroom", id: "bathroom" },
    { label: t.nav.contact, href: "#contact", id: "contact" },
  ];

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header data-testid="main-header" className="fixed top-0 left-0 right-0 z-50">
      {/* Notdienst Banner */}
      {bannerVisible && (
         <div data-testid="notdienst-banner" className="bg-[#0E6FB3] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-2 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
              <AlertTriangle size={15} className="flex-shrink-0 animate-pulse" />
              <span className="font-manrope font-bold text-xs sm:text-sm whitespace-nowrap">
                {t.emergency.title}
              </span>
              <span className="hidden lg:inline text-white font-manrope text-xs truncate">
                {t.emergency.subtitle}
              </span>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <a
                href="tel:+4915221006829"
                data-testid="notdienst-call-btn"
                className="inline-flex items-center gap-1.5 bg-white text-[#0E6FB3] font-manrope font-bold text-xs px-3 py-1 rounded-sm hover:bg-white/90 transition-colors whitespace-nowrap"
              >
                <Phone size={11} />
                <span className="hidden sm:inline">+49 152 2100 6829</span>
                <span className="sm:hidden">Anrufen</span>
              </a>
              <button
                data-testid="notdienst-close-btn"
                type="button"
                aria-label="Notdienst-Banner schließen"
                onClick={() => setBannerVisible(false)}
                className="text-white hover:text-white transition-colors p-1"
              >
                <X size={15} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}


      {/* Navigation */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-[#FDFBF7]/95 backdrop-blur-md shadow-sm border-b border-[#E7E5E4]"
            : "bg-[#0F172A]/85 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between h-14 sm:h-16 md:h-20">
          <button
            data-testid="header-logo"
            onClick={(e) => {
              if (window.location.pathname !== "/") {
                window.location.href = "/";
              } else {
                e.preventDefault();
                scrollTo("#hero");
              }
            }}
            className="flex items-center gap-2 sm:gap-3 cursor-pointer"
          >
            <img src="/logo.svg" alt="Roda Haustechnik Logo" className="h-8 sm:h-10 md:h-12 w-auto" width="48" height="48" />
            <div className="hidden sm:block">
              <span className={`font-outfit font-bold text-base sm:text-lg tracking-tight ${scrolled ? "text-[#1C1917]" : "text-white"}`}>
                Roda
              </span>
              <span className={`font-outfit font-light text-base sm:text-lg ml-1 ${scrolled ? "text-[#57534E]" : "text-white/70"}`}>
                Haustechnik
              </span>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8" data-testid="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={`relative text-sm font-manrope font-medium transition-colors tracking-wide ${
                  scrolled
                    ? activeSection === item.id ? "text-[#0E6FB3]" : "text-[#57534E] hover:text-[#0E6FB3]"
                    : activeSection === item.id ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="nav-indicator"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${scrolled ? "bg-[#0E6FB3]" : "bg-white"}`}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <button
              data-testid="language-switcher"
              type="button"
              aria-label={`Sprache wechseln. Aktuelle Sprache: ${lang === "DE" ? "Deutsch" : "Englisch"}`}
              onClick={toggleLang}
              className={`text-sm font-manrope font-semibold tracking-wider transition-colors ${
                scrolled ? "text-[#1C1917]" : "text-white"
              }`}
            >
              <span className={lang === "DE" ? (scrolled ? "text-[#0284C7] font-bold" : "text-[#7DD3FC] font-bold") : ""}>DE</span>
              <span className={`mx-1 ${scrolled ? "text-[#78716C]" : "text-white/60"}`}>|</span>
              <span className={lang === "EN" ? (scrolled ? "text-[#0284C7] font-bold" : "text-[#7DD3FC] font-bold") : ""}>EN</span>
            </button>
            <button
              data-testid="mobile-menu-toggle"
              type="button"
              aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-1 ${scrolled ? "text-[#1C1917]" : "text-white"}`}
            >
              {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              id="mobile-nav"
              data-testid="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#FDFBF7] border-b border-[#E7E5E4] overflow-hidden"
            >
              <div className="px-4 sm:px-6 py-3 flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollTo(item.href)}
                    className={`text-left text-base font-manrope font-medium transition-colors py-2.5 px-3 rounded-sm ${
                      activeSection === item.id
                        ? "text-[#0E6FB3] bg-[#0E6FB3]/5"
                        : "text-[#57534E] hover:text-[#0E6FB3]"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
