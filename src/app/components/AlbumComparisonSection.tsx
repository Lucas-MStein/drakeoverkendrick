import { Star, Radio, MessageSquare, Heart, Headphones } from "lucide-react";
import { SpotifyImage } from "./SpotifyImage";

type Album = {
  title: string;
  year: string;
  /** Spotify album ID — used to pull the live cover art via oEmbed */
  spotifyId: string;
  replayValue: number;
  carTest: number;
  captionPotential: number;
  lateNightText: number;
  auxSafety: number;
};

const drakeAlbums: Album[] = [
  {
    title: "ICEMAN",
    year: "2026",
    spotifyId: "0OAv7DCME2AV4q1KPO95HY",
    replayValue: 99,
    carTest: 100,
    captionPotential: 98,
    lateNightText: 97,
    auxSafety: 99,
  },
  {
    title: "HABIBTI",
    year: "2026",
    spotifyId: "0P6B5R3yRSkhkmequL5Yno",
    replayValue: 97,
    carTest: 98,
    captionPotential: 99,
    lateNightText: 100,
    auxSafety: 98,
  },
  {
    title: "MAID OF HONOUR",
    year: "2026",
    spotifyId: "71yBvOeRZ9os9LYFEy9eOk",
    replayValue: 98,
    carTest: 97,
    captionPotential: 100,
    lateNightText: 99,
    auxSafety: 97,
  },
];

const kendrickAlbums: Album[] = [
  {
    title: "GNX",
    year: "2024",
    spotifyId: "0hvT3yIEysuuvkK73vgdcW",
    replayValue: 74,
    carTest: 71,
    captionPotential: 58,
    lateNightText: 42,
    auxSafety: 68,
  },
  {
    title: "Mr. Morale & The Big Steppers",
    year: "2022",
    spotifyId: "1atjqOZTCdrjxjMyCPZc2g",
    replayValue: 68,
    carTest: 62,
    captionPotential: 45,
    lateNightText: 38,
    auxSafety: 55,
  },
];

const overall = (a: Album) =>
  Math.round((a.replayValue + a.carTest + a.captionPotential + a.lateNightText + a.auxSafety) / 5);

function Metric({
  value,
  icon,
  label,
}: {
  value: number;
  icon: React.ReactNode;
  label: string;
}) {
  const color = value >= 90 ? "#5BA8E0" : value >= 70 ? "#E8C76A" : "rgba(255,255,255,0.6)";
  const textColor = value >= 90 ? "text-[#5BA8E0]" : value >= 70 ? "text-[#E8C76A]" : "text-white/65";
  return (
    <div className="flex items-center gap-2.5" aria-label={`${label}: ${value}`}>
      <div className="text-white/70 shrink-0" aria-hidden="true">
        {icon}
      </div>
      <div className="flex-1 bg-white/8 rounded-full h-2 overflow-hidden">
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${Math.max(0, Math.min(100, value))}%`, backgroundColor: color }}
        />
      </div>
      <span className={`w-10 text-right tabular-nums text-sm font-semibold ${textColor}`}>
        {value}
      </span>
    </div>
  );
}

function AlbumMetrics({ album }: { album: Album }) {
  return (
    <div className="space-y-3 text-sm">
      <Metric value={album.replayValue} icon={<Star className="w-4 h-4" />} label="Replay value" />
      <Metric value={album.carTest} icon={<Radio className="w-4 h-4" />} label="Car test" />
      <Metric value={album.captionPotential} icon={<MessageSquare className="w-4 h-4" />} label="Caption potential" />
      <Metric value={album.lateNightText} icon={<Heart className="w-4 h-4" />} label="Late night text" />
      <Metric value={album.auxSafety} icon={<Headphones className="w-4 h-4" />} label="Aux safety" />
    </div>
  );
}

export function AlbumComparisonSection() {
  return (
    <section
      aria-labelledby="albums-title"
      className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-[#0A0E1A]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2
            id="albums-title"
            className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          >
            Album <span className="text-[#5BA8E0]">Performance</span> Analysis
          </h2>
          <p className="text-white/70 text-base md:text-lg">
            Measuring what really matters: vibes per minute
          </p>
        </div>

        <div className="mb-12 md:mb-16">
          <h3 className="mb-6 md:mb-8 text-[#5BA8E0] text-2xl sm:text-3xl md:text-[2rem] font-bold">
            Drake&apos;s Catalog Excellence
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {drakeAlbums.map((album) => (
              <article key={album.title} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#5BA8E0]/20 to-[#8B7FB8]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all pointer-events-none"></div>
                <div className="relative bg-gradient-to-br from-[#1A1F2E] to-[#0A0E1A] p-5 sm:p-6 rounded-2xl border border-[#5BA8E0]/30 h-full flex flex-col">
                  <div className="w-full aspect-square rounded-xl mb-4 overflow-hidden bg-gradient-to-br from-[#5BA8E0] to-[#8B7FB8] flex items-center justify-center ring-1 ring-white/10 shadow-lg shadow-black/40">
                    <SpotifyImage
                      type="album"
                      id={album.spotifyId}
                      alt={`${album.title} album cover`}
                      className="w-full h-full object-cover"
                      fallback={
                        <span className="text-5xl sm:text-6xl" aria-hidden="true">
                          🎵
                        </span>
                      }
                    />
                  </div>
                  <h4 className="mb-1 text-lg sm:text-xl font-bold text-white">{album.title}</h4>
                  <p className="text-white/65 mb-4 text-sm">{album.year}</p>

                  <AlbumMetrics album={album} />

                  <div className="mt-4 pt-4 border-t border-white/10 text-center">
                    <span className="text-[#E8C76A] text-2xl sm:text-3xl font-bold tabular-nums">
                      {overall(album)}
                    </span>
                    <p className="text-xs text-white/65 mt-1 uppercase tracking-wider">
                      Overall Score
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 md:mb-8 text-[#C8553D]/80 text-xl sm:text-2xl md:text-[1.75rem] font-semibold">
            Kendrick&apos;s Albums (For Reference)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {kendrickAlbums.map((album) => (
              <article
                key={album.title}
                className="bg-gradient-to-br from-[#1A1F2E]/70 to-[#0A0E1A]/70 p-5 sm:p-6 rounded-2xl border border-white/10 h-full flex flex-col"
              >
                <div className="w-full aspect-square rounded-xl mb-4 overflow-hidden bg-gradient-to-br from-[#C8553D]/40 to-[#C8553D]/15 flex items-center justify-center ring-1 ring-white/10 shadow-lg shadow-black/40">
                  <SpotifyImage
                    type="album"
                    id={album.spotifyId}
                    alt={`${album.title} album cover`}
                    className="w-full h-full object-cover"
                    fallback={
                      <span className="text-5xl sm:text-6xl" aria-hidden="true">
                        📚
                      </span>
                    }
                  />
                </div>
                <h4 className="mb-1 text-lg sm:text-xl font-semibold text-white/90">
                  {album.title}
                </h4>
                <p className="text-white/55 mb-4 text-sm">{album.year}</p>

                <AlbumMetrics album={album} />

                <div className="mt-4 pt-4 border-t border-white/10 text-center">
                  <span className="text-white/75 text-xl sm:text-2xl font-semibold tabular-nums">
                    {overall(album)}
                  </span>
                  <p className="text-xs text-white/55 mt-1 uppercase tracking-wider">
                    Overall Score
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 md:mt-12 text-center">
          <div className="inline-block px-5 sm:px-6 py-4 sm:py-3 bg-white/5 rounded-xl border border-white/10 max-w-3xl text-left sm:text-center">
            <p className="text-xs sm:text-[13px] text-white/65 leading-relaxed">
              <span className="block sm:inline">
                <Star className="inline w-3.5 h-3.5 text-[#5BA8E0] -mt-0.5 mr-1" aria-hidden="true" />
                Replay Value
              </span>
              <span className="hidden sm:inline mx-2">•</span>
              <span className="block sm:inline">
                <Radio className="inline w-3.5 h-3.5 text-[#5BA8E0] -mt-0.5 mr-1" aria-hidden="true" />
                Car Test Score
              </span>
              <span className="hidden sm:inline mx-2">•</span>
              <span className="block sm:inline">
                <MessageSquare className="inline w-3.5 h-3.5 text-[#5BA8E0] -mt-0.5 mr-1" aria-hidden="true" />
                Caption Potential
              </span>
              <span className="hidden sm:inline mx-2">•</span>
              <span className="block sm:inline">
                <Heart className="inline w-3.5 h-3.5 text-[#5BA8E0] -mt-0.5 mr-1" aria-hidden="true" />
                Late Night Text Probability
              </span>
              <span className="hidden sm:inline mx-2">•</span>
              <span className="block sm:inline">
                <Headphones className="inline w-3.5 h-3.5 text-[#5BA8E0] -mt-0.5 mr-1" aria-hidden="true" />
                Aux Cord Safety
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
