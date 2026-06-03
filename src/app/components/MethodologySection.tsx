import { Users, TrendingUp, Shield, FlaskConical } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Card = {
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  title: string;
  headline: string;
  caption: string;
};

const cards: Card[] = [
  {
    icon: Users,
    iconColor: "text-[#5BA8E0]",
    iconBg: "bg-[#5BA8E0]/20",
    title: "Sample Size",
    headline: "Everyone I asked agreed with me",
    caption: "n = people who gave the right answer",
  },
  {
    icon: TrendingUp,
    iconColor: "text-[#8B7FB8]",
    iconBg: "bg-[#8B7FB8]/20",
    title: "Confidence Level",
    headline: "100%, emotionally",
    caption: "σ = unwavering conviction",
  },
  {
    icon: Shield,
    iconColor: "text-[#E8C76A]",
    iconBg: "bg-[#E8C76A]/20",
    title: "Bias Adjustment",
    headline: "Removed all anti-Drake bias",
    caption: "Pro-Drake bias remains for accuracy",
  },
  {
    icon: FlaskConical,
    iconColor: "text-[#5BA8E0]",
    iconBg: "bg-[#5BA8E0]/20",
    title: "Control Group",
    headline: 'People who say "real hip-hop" too often',
    caption: "Excluded for being buzzkills",
  },
];

const tableRows = [
  { condition: "3AM thoughts resonance", drake: "99.8%", kendrick: "34.2%", conclusion: "Drake wins", drakeWins: true },
  { condition: "Wedding reception viability", drake: "97.3%", kendrick: "22.1%", conclusion: "Drake wins", drakeWins: true },
  { condition: "Instagram story soundtrack quality", drake: "100%", kendrick: "41.8%", conclusion: "Drake wins", drakeWins: true },
  { condition: "Literary merit and cultural impact", drake: "82.1%", kendrick: "95.7%", conclusion: "Not measured", drakeWins: false },
];

export function MethodologySection() {
  return (
    <section
      id="methodology"
      aria-labelledby="methodology-title"
      className="scroll-mt-20 px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-b from-[#1A1F2E] to-[#0A0E1A]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2
            id="methodology-title"
            className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          >
            Our <span className="text-[#8B7FB8]">Research</span> Methodology
          </h2>
          <p className="text-white/70 text-base md:text-lg">
            Peer-reviewed by people who agree with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-10 md:mb-12">
          {cards.map(({ icon: Icon, iconColor, iconBg, title, headline, caption }) => (
            <article
              key={title}
              className="bg-gradient-to-br from-[#5BA8E0]/10 to-[#8B7FB8]/10 p-6 sm:p-8 rounded-2xl border border-[#5BA8E0]/30 hover:border-[#5BA8E0]/50 transition-colors"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 ${iconBg} rounded-xl flex items-center justify-center mb-4`}>
                <Icon className={`w-7 h-7 sm:w-8 sm:h-8 ${iconColor}`} aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-lg sm:text-xl md:text-2xl font-bold text-white">
                {title}
              </h3>
              <p className="text-[#E8C76A] text-xl sm:text-2xl md:text-[1.75rem] font-bold leading-snug">
                {headline}
              </p>
              <p className="mt-3 text-white/70 text-sm sm:text-base">{caption}</p>
            </article>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#1A1F2E] to-[#0A0E1A] p-5 sm:p-6 md:p-8 rounded-2xl border border-white/10 shadow-lg shadow-black/30">
          <h3 className="mb-6 text-center text-xl sm:text-2xl md:text-[1.75rem] font-bold text-white">
            Experimental Results Summary
          </h3>
          <div className="overflow-x-auto -mx-2 px-2">
            <table className="w-full min-w-[560px]">
              <thead>
                <tr className="border-b border-white/20">
                  <th scope="col" className="text-left py-3 px-3 sm:px-4 text-white/80 text-xs sm:text-sm uppercase tracking-wider font-semibold">
                    Test Condition
                  </th>
                  <th scope="col" className="text-center py-3 px-3 sm:px-4 text-[#5BA8E0] text-xs sm:text-sm uppercase tracking-wider font-semibold">
                    Drake
                  </th>
                  <th scope="col" className="text-center py-3 px-3 sm:px-4 text-[#C8553D]/80 text-xs sm:text-sm uppercase tracking-wider font-semibold">
                    Kendrick
                  </th>
                  <th scope="col" className="text-right py-3 px-3 sm:px-4 text-white/80 text-xs sm:text-sm uppercase tracking-wider font-semibold">
                    Conclusion
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr
                    key={row.condition}
                    className={i < tableRows.length - 1 ? "border-b border-white/10" : ""}
                  >
                    <td className="py-3 px-3 sm:px-4 text-white/90 text-sm sm:text-base">
                      {row.condition}
                    </td>
                    <td className={`text-center py-3 px-3 sm:px-4 font-bold tabular-nums ${row.drakeWins ? "text-[#5BA8E0]" : "text-white/55"}`}>
                      {row.drake}
                    </td>
                    <td className={`text-center py-3 px-3 sm:px-4 tabular-nums ${row.drakeWins ? "text-white/55" : "text-[#C8553D]/80"}`}>
                      {row.kendrick}
                    </td>
                    <td className={`text-right py-3 px-3 sm:px-4 text-sm sm:text-base ${row.drakeWins ? "text-[#E8C76A]" : "text-white/55 italic"}`}>
                      {row.conclusion}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-center text-xs text-white/55">
            *All data triple-checked against desired outcome
          </p>
        </div>
      </div>
    </section>
  );
}
