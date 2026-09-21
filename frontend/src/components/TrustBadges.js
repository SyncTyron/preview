import { useLanguage } from "../context/LanguageContext";
import { ScrollText, Users, Building2 } from "lucide-react";

export default function TrustBadges() {
  const { t } = useLanguage();

  const badges = [
    { icon: <ScrollText size={28} />, title: t.trust.meisterbrief, desc: t.trust.meisterbriefDesc, color: "text-[#0E6FB3]", bg: "bg-[#0E6FB3]/10" },
    { icon: <Users size={28} />, title: t.trust.innung, desc: t.trust.innungDesc, color: "text-[#F9B130]", bg: "bg-[#F9B130]/10" },
    { icon: <Building2 size={28} />, title: t.trust.hwk, desc: t.trust.hwkDesc, color: "text-[#0284C7]", bg: "bg-[#0284C7]/10" },
  ];

  return (
    <section data-testid="trust-badges-section" className="py-16 bg-[#F5F5F4] border-y border-[#E7E5E4]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {badges.map((badge, i) => (
            <div
              key={i}
              data-testid={`trust-badge-${i}`}
              style={{ animationDelay: `${i * 90}ms` }}
              className="flex items-center gap-5 p-6 bg-white rounded-sm border border-[#E7E5E4] animate-fade-in-up"
            >
              <div className={`w-14 h-14 rounded-sm ${badge.bg} flex items-center justify-center flex-shrink-0`}>
                <div className={badge.color}>{badge.icon}</div>
              </div>
              <div>
                <h3 className="font-outfit font-semibold text-[#1C1917] text-base mb-0.5">{badge.title}</h3>
                <p className="font-manrope text-sm text-[#57534E] leading-relaxed">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
