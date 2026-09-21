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

      {/* Navigation */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E7E5E4]"
            : "bg-white border-b border-[#E7E5E4]"
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
            <img src="/logo.svg" alt="MK Gebäudemanagement Logo" className="h-8 sm:h-10 md:h-12 w-auto" width="48" height="48" />
            <div className="hidden sm:block">
              <span className={`font-outfit font-bold text-base sm:text-lg tracking-tight text-[#1C1917]`}>
                MK
              </span>
              <span className={`font-outfit font-light text-base sm:text-lg ml-1 text-[#57534E]`}>
                Gebäudemanagement
              </span>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8" data-testid="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={`relative text-sm font-manrope font-medium transition-colors tracking-wide ${
                  activeSection === item.id ? "text-[#0A8EDB]" : "text-[#57534E] hover:text-[#0A8EDB]"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="nav-indicator"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[#0A8EDB]`}
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
              className="text-sm font-manrope font-semibold tracking-wider transition-colors text-[#1C1917]"
            >
              <span className={lang === "DE" ? "text-[#0A8EDB] font-bold" : ""}>DE</span>
              <span className={`mx-1 text-[#78716C]`}>|</span>
              <span className={lang === "EN" ? "text-[#0A8EDB] font-bold" : ""}>EN</span>
            </button>
            <button
              data-testid="mobile-menu-toggle"
              type="button"
              aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-1 text-[#1C1917]`}
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
              className="md:hidden bg-white border-b border-[#E7E5E4] overflow-hidden"
            >
              <div className="px-4 sm:px-6 py-3 flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollTo(item.href)}
                    className={`text-left text-base font-manrope font-medium transition-colors py-2.5 px-3 rounded-sm ${
                      activeSection === item.id
                        ? "text-[#0A8EDB] bg-[#0A8EDB]/5"
                        : "text-[#57534E] hover:text-[#0A8EDB]"
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
