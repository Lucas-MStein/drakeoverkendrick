import { Award } from "lucide-react";

export function VerdictSection() {
  return (
    <section
      id="verdict"
      aria-labelledby="verdict-title"
      className="scroll-mt-20 px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32 bg-gradient-to-b from-[#0A0E1A] via-[#1A1F2E] to-[#0A0E1A] relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(91,168,224,0.12),transparent_55%)] pointer-events-none"
      ></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-block mb-6">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[#5BA8E0]/30 blur-2xl rounded-full"
              ></div>
              <div className="relative bg-gradient-to-br from-[#5BA8E0] to-[#8B7FB8] p-8 sm:p-10 md:p-12 rounded-full">
                <Award className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-white" aria-hidden="true" />
              </div>
            </div>
          </div>

          <h2
            id="verdict-title"
            className="mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]"
          >
            The <span className="text-[#E8C76A]">Verdict</span>
          </h2>

          <div className="bg-gradient-to-br from-[#1A1F2E] to-[#0A0E1A] p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl border border-[#5BA8E0]/30 mb-8 shadow-2xl shadow-black/40">
            <p className="text-white/95 leading-relaxed text-base sm:text-lg md:text-xl lg:text-2xl">
              After reviewing the charts, vibes, formulas, and absolutely no conflicting evidence,
              we conclude that Drake is <span className="text-[#5BA8E0] font-semibold">scientifically</span>,{" "}
              <span className="text-[#8B7FB8] font-semibold">emotionally</span>, and{" "}
              <span className="text-[#E8C76A] font-semibold">algorithmically</span> over Kendrick.
            </p>
          </div>

          <div className="relative inline-block mb-8 max-w-full">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-[#5BA8E0]/30 to-[#E8C76A]/30 blur-xl"
            ></div>
            <div className="relative bg-gradient-to-br from-[#5BA8E0] to-[#E8C76A] px-8 sm:px-12 md:px-16 py-5 sm:py-7 md:py-8 rounded-2xl rotate-[-2deg] shadow-2xl">
              <p className="text-white font-black tracking-[0.08em] sm:tracking-[0.1em] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                DRAKE WINS
              </p>
            </div>
          </div>

          <div className="bg-white/5 p-5 sm:p-6 rounded-2xl border border-white/10 max-w-2xl mx-auto">
            <p className="text-white/70 italic text-sm sm:text-base leading-relaxed">
              * Kendrick Lamar remains extremely talented, influential, and worthy of respect. This
              website remains extremely unserious.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-10 md:mt-12 text-center">
          <div className="bg-[#5BA8E0]/10 p-4 sm:p-5 rounded-xl border border-[#5BA8E0]/25">
            <p className="text-[#5BA8E0] text-3xl sm:text-4xl md:text-5xl font-bold">∞</p>
            <p className="text-xs sm:text-sm text-white/70 mt-1">Charts Consulted</p>
          </div>
          <div className="bg-[#8B7FB8]/10 p-4 sm:p-5 rounded-xl border border-[#8B7FB8]/25">
            <p className="text-[#8B7FB8] text-3xl sm:text-4xl md:text-5xl font-bold tabular-nums">
              100%
            </p>
            <p className="text-xs sm:text-sm text-white/70 mt-1">Certainty Level</p>
          </div>
          <div className="bg-[#E8C76A]/10 p-4 sm:p-5 rounded-xl border border-[#E8C76A]/25">
            <p className="text-[#E8C76A] text-3xl sm:text-4xl md:text-5xl font-bold tabular-nums">
              0
            </p>
            <p className="text-xs sm:text-sm text-white/70 mt-1">Regrets</p>
          </div>
        </div>
      </div>
    </section>
  );
}
