import { ArrowRight } from "lucide-react";
import { SpotifyImage } from "./SpotifyImage";

const DRAKE_SPOTIFY_ID = "3TVXtAsR1Inumwj472S9r4";
const KENDRICK_SPOTIFY_ID = "2YZyLoL8N0Wb9xBt1NhZWg";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E1A] via-[#1A1F2E] to-[#0A0E1A] opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-[#5BA8E0]/40 bg-[#5BA8E0]/10">
            <span className="text-[#5BA8E0] tracking-wider text-xs sm:text-sm font-medium uppercase">
              Premium Analytics
            </span>
          </div>

          <h1
            id="hero-title"
            className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight break-words"
          >
            drakeoverkendrick.com
          </h1>

          <p className="mb-4 text-white/90 text-lg sm:text-2xl md:text-3xl font-semibold leading-snug max-w-3xl mx-auto">
            Finally, a totally unbiased data analysis proving Drake is better.
          </p>

          <p className="mb-10 md:mb-12 text-[#E8C76A] text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Charts, numbers, vibes, and extremely selective statistics.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-12 md:mb-16">
            <a
              href="#evidence"
              className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#5BA8E0] text-white rounded-lg font-semibold text-base md:text-lg shadow-lg shadow-[#5BA8E0]/20 hover:bg-[#4A97CF] hover:shadow-[#5BA8E0]/40 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5BA8E0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E1A] transition-all"
            >
              View the Evidence
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="#methodology"
              className="cursor-pointer inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/25 text-white rounded-lg font-semibold text-base md:text-lg hover:border-white/50 hover:bg-white/5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E1A] transition-all"
            >
              Question the Methodology
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#5BA8E0]/20 to-[#8B7FB8]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative bg-gradient-to-br from-[#1A1F2E] to-[#0A0E1A] p-6 sm:p-8 rounded-2xl border border-[#5BA8E0]/30">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#5BA8E0] to-[#8B7FB8] p-[3px] flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#0A0E1A] overflow-hidden flex items-center justify-center">
                  <SpotifyImage
                    type="artist"
                    id={DRAKE_SPOTIFY_ID}
                    alt="Drake"
                    className="w-full h-full object-cover rounded-full"
                    fallback={
                      <span className="text-4xl sm:text-5xl" aria-hidden="true">
                        🏆
                      </span>
                    }
                  />
                </div>
              </div>
              <h3 className="text-center mb-2 text-xl sm:text-2xl font-bold">Drake</h3>
              <p className="text-center text-[#E8C76A]">Statistically Preferred Artist</p>
              <div className="mt-4 text-center">
                <div className="inline-block px-4 py-2 bg-[#5BA8E0]/20 rounded-lg">
                  <span className="text-[#5BA8E0] text-2xl sm:text-3xl md:text-4xl font-bold tabular-nums">
                    98.7
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#C8553D]/10 to-[#C8553D]/5 rounded-2xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-[#1A1F2E]/80 to-[#0A0E1A]/80 p-6 sm:p-8 rounded-2xl border border-white/10">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#C8553D]/50 to-[#C8553D]/30 p-[3px] flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#0A0E1A] overflow-hidden flex items-center justify-center">
                  <SpotifyImage
                    type="artist"
                    id={KENDRICK_SPOTIFY_ID}
                    alt="Kendrick Lamar"
                    className="w-full h-full object-cover rounded-full"
                    fallback={
                      <span className="text-4xl sm:text-5xl" aria-hidden="true">
                        📖
                      </span>
                    }
                  />
                </div>
              </div>
              <h3 className="text-center mb-2 text-xl sm:text-2xl font-bold">Kendrick</h3>
              <p className="text-center text-white/75">Respected But Inconvenient Opponent</p>
              <div className="mt-4 text-center">
                <div className="inline-block px-4 py-2 bg-white/5 rounded-lg">
                  <span className="text-white/80 text-base sm:text-lg md:text-xl font-semibold">
                    Very Respectable
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
