import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "../context/LanguageContext";
import { X, Shield, BarChart3, Megaphone, Settings2, Info } from "lucide-react";

const CONSENT_VERSION = 2;
const CONSENT_KEY = "cookie_consent_v2";
const defaultPrefs = { essential: true, functional: false, statistics: false, marketing: false };

function readConsent() {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch { return null; }
}
function writeConsent(prefs) {
  const payload = { version: CONSENT_VERSION, prefs: { ...defaultPrefs, ...prefs, essential: true }, timestamp: new Date().toISOString(), userAgent: navigator.userAgent.slice(0, 120) };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(payload));
  window.hasConsent = (cat) => !!payload.prefs[cat];
  window.dispatchEvent(new CustomEvent("cookie-consent-changed", { detail: payload }));
  return payload;
}
if (typeof window !== "undefined") {
  const existing = readConsent();
  window.hasConsent = existing ? (cat) => !!existing.prefs[cat] : () => false;
}

export default function CookieBanner() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [prefs, setPrefs] = useState(defaultPrefs);

  useEffect(() => {
    const existing = readConsent();
    if (!existing) setVisible(true);
    else setPrefs(existing.prefs);
    const open = () => { const cur = readConsent(); if (cur) setPrefs(cur.prefs); setVisible(true); setShowPrefs(true); };
    window.addEventListener("open-cookie-settings", open);
    return () => window.removeEventListener("open-cookie-settings", open);
  }, []);

  const save = useCallback((newPrefs) => { writeConsent(newPrefs); setVisible(false); setShowPrefs(false); }, []);
  const acceptAll = () => save({ essential: true, functional: true, statistics: true, marketing: true });
  const rejectAll = () => save({ essential: true, functional: false, statistics: false, marketing: false });
  const saveSelection = () => save(prefs);

  if (!visible) return null;
  const c = t.cookie || {};
  const lbl = c.labels || {};

  return (
    <>
      {showPrefs && <div className="fixed inset-0 bg-black/60 z-[59]" aria-hidden="true" onClick={() => setShowPrefs(false)} />}
      <div data-testid="cookie-banner" role="dialog" aria-modal="true" aria-labelledby="cookie-title" aria-describedby="cookie-desc"
        className={`fixed z-[60] bg-[#0F172A] text-[#F1F5F9] shadow-2xl border-t border-white/10 ${showPrefs ? "inset-x-4 top-1/2 -translate-y-1/2 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[560px] max-h-[85vh] rounded-lg overflow-y-auto" : "bottom-0 left-0 right-0"}`}>
        <div className={showPrefs ? "p-5 md:p-7" : "max-w-7xl mx-auto p-4 md:p-6"}>
          {!showPrefs ? (
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <h2 id="cookie-title" className="font-outfit font-semibold text-base mb-1 flex items-center gap-2"><Shield size={18} className="text-[#7DD3FC]" aria-hidden="true" />{c.title || "Datenschutz-Einstellungen"}</h2>
                <p id="cookie-desc" className="font-manrope text-sm leading-relaxed text-[#F1F5F9]">{c.text}{" "}<a href="/datenschutz" className="underline hover:text-[#7DD3FC]" data-testid="cookie-privacy-link">{c.privacyLink || "Datenschutzerklärung"}</a>.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 md:w-auto">
                <button data-testid="cookie-reject-btn" type="button" onClick={rejectAll} className="font-manrope text-sm font-semibold bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-sm transition-colors border border-white/30 whitespace-nowrap">{c.rejectAll || "Nur notwendige"}</button>
                <button data-testid="cookie-accept-btn" type="button" onClick={acceptAll} className="font-manrope text-sm font-semibold bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-sm transition-colors border border-white/30 whitespace-nowrap">{c.acceptAll || "Alle akzeptieren"}</button>
                <button data-testid="cookie-settings-btn" type="button" onClick={() => setShowPrefs(true)} className="font-manrope text-sm text-[#7DD3FC] hover:text-white px-3 py-2.5 rounded-sm transition-colors flex items-center gap-1.5 whitespace-nowrap"><Settings2 size={14} aria-hidden="true" />{c.settings || "Einstellungen"}</button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-start justify-between mb-4">
                <h2 id="cookie-title" className="font-outfit font-bold text-lg flex items-center gap-2"><Shield size={20} className="text-[#7DD3FC]" aria-hidden="true" />{c.prefsTitle || "Datenschutz-Einstellungen"}</h2>
                <button type="button" onClick={() => setShowPrefs(false)} aria-label={c.close || "Schließen"} className="text-white/70 hover:text-white" data-testid="cookie-close-btn"><X size={20} /></button>
              </div>
              <p id="cookie-desc" className="font-manrope text-sm leading-relaxed text-[#F1F5F9] mb-5">{c.prefsIntro}{" "}<a href="/datenschutz" className="underline hover:text-[#7DD3FC]">{c.privacyLink || "Datenschutzerklärung"}</a></p>
              <div className="space-y-3 mb-5">
                <Category icon={<Shield size={18} />} title={lbl.essential || "Notwendig"} desc={c.essentialDesc} checked={true} locked onChange={() => {}} testId="pref-essential" />
                <Category icon={<Settings2 size={18} />} title={lbl.functional || "Funktional"} desc={c.functionalDesc} checked={prefs.functional} onChange={(v) => setPrefs((p) => ({ ...p, functional: v }))} testId="pref-functional" />
                <Category icon={<BarChart3 size={18} />} title={lbl.statistics || "Statistik"} desc={c.statisticsDesc} checked={prefs.statistics} onChange={(v) => setPrefs((p) => ({ ...p, statistics: v }))} testId="pref-statistics" />
                <Category icon={<Megaphone size={18} />} title={lbl.marketing || "Marketing"} desc={c.marketingDesc} checked={prefs.marketing} onChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))} testId="pref-marketing" />
              </div>
              <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t border-white/10">
                <button type="button" onClick={saveSelection} className="flex-1 font-manrope text-sm font-semibold bg-[#0A8EDB] hover:bg-[#0873B3] text-white px-5 py-2.5 rounded-sm transition-colors" data-testid="cookie-save-btn">{c.saveSelection || "Auswahl speichern"}</button>
                <button type="button" onClick={rejectAll} className="flex-1 font-manrope text-sm font-semibold bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-sm transition-colors border border-white/30">{c.rejectAll || "Nur notwendige"}</button>
                <button type="button" onClick={acceptAll} className="flex-1 font-manrope text-sm font-semibold bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-sm transition-colors border border-white/30">{c.acceptAll || "Alle akzeptieren"}</button>
              </div>
              <p className="text-xs text-white/60 mt-4 leading-relaxed flex items-start gap-2"><Info size={12} aria-hidden="true" className="mt-0.5 flex-shrink-0" /><span>{c.legalNote}</span></p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
function Category({ icon, title, desc, checked, onChange, locked, testId }) {
  return (
    <label className={`flex items-start gap-3 p-3 rounded-sm border border-white/10 transition-colors ${locked ? "bg-white/5" : "bg-white/5 hover:bg-white/10 cursor-pointer"}`}>
      <div className="text-[#7DD3FC] mt-0.5">{icon}</div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-3">
          <span className="font-outfit font-semibold text-sm">{title}</span>
          <span className="relative flex-shrink-0">
            <input type="checkbox" checked={checked} disabled={locked} onChange={(e) => onChange(e.target.checked)} className="sr-only peer" data-testid={testId} />
            <span aria-hidden="true" className={`block w-10 h-5 rounded-full transition-colors ${checked ? "bg-[#0A8EDB]" : "bg-white/20"} ${locked ? "opacity-60" : ""}`} />
            <span aria-hidden="true" className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform ${checked ? "translate-x-5" : "translate-x-0.5"}`} />
          </span>
        </div>
        <p className="font-manrope text-xs text-white/80 mt-1 leading-relaxed">{desc}</p>
      </div>
    </label>
  );
}
