import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { lazy, Suspense } from "react";
const About = lazy(() => import("./components/About"));
const TrustBadges = lazy(() => import("./components/TrustBadges"));
const Services = lazy(() => import("./components/Services"));
const Gallery = lazy(() => import("./components/Gallery"));
const Bathroom = lazy(() => import("./components/Bathroom"));
const FAQ = lazy(() => import("./components/FAQ"));
const Contact = lazy(() => import("./components/Contact"));
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import CookieBanner from "./components/CookieBanner";
import SchemaOrg from "./components/SchemaOrg";
const Impressum = lazy(() => import("./pages/Impressum"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));
const AGB = lazy(() => import("./pages/AGB"));
const Widerruf = lazy(() => import("./pages/Widerruf"));
import { HelmetProvider } from 'react-helmet-async';
import Standort from './pages/Standort';
import StandortIndex from './pages/StandortIndex';

function LandingPage() {
  return (
    <>
      <a href="#main-content" className="skip-to-main">
        Zum Hauptinhalt springen
      </a>
      <Header showBanner={true} />
      <main id="main-content">
        <Hero />
        <Suspense fallback={null}>
          <About />
          <TrustBadges />
          <Services />
          <Gallery />
          <Bathroom />
          <FAQ />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
      <SchemaOrg />
    </>
  );
}

function LegalPage({ children }) {
  return (
    <>
      <a href="#main-content" className="skip-to-main">
        Zum Hauptinhalt springen
      </a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <div className="App font-manrope">
        <HelmetProvider>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/impressum" element={<Suspense fallback={null}><LegalPage><Impressum /></LegalPage></Suspense>} />
            <Route path="/datenschutz" element={<Suspense fallback={null}><LegalPage><Datenschutz /></LegalPage></Suspense>} />} />} />
            <Route path="/agb" element={<Suspense fallback={null}><LegalPage><AGB /></LegalPage></Suspense>} />
            <Route path="/widerruf" element={<Suspense fallback={null}><LegalPage><Widerruf /></LegalPage></Suspense>} />
              <Route path="/standorte" element={<StandortIndex />} />
        <Route path="/standort/:slug" element={<Standort />} />
      </Routes>
        </BrowserRouter>
    </HelmetProvider>
        <CookieBanner />
      </div>
    </LanguageProvider>
  );
}

export default App;
