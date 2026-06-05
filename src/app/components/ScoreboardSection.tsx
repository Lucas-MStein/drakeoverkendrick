export function ScoreboardSection() {
  const metrics = [
    { name: "Streaming Dominance", drake: 97, kendrick: 82 },
    { name: "Hook Efficiency", drake: 99, kendrick: 78 },
    { name: "Instagram Caption Quotability", drake: 100, kendrick: 71 },
    { name: "Club Rotation Survival Rate", drake: 98, kendrick: 65 },
    { name: "Sad Boy Resonance", drake: 100, kendrick: 45 },
    { name: "Lyrical Complexity", drake: 88, kendrick: 99, kendrickWins: true },
    { name: "Pulitzer Distraction Penalty", drake: 100, kendrick: -5, kendrickWins: true },
    { name: "Certified Banger Density", drake: 99, kendrick: 77 },
  ];

  return (
    <section
      id="evidence"
      aria-labelledby="evidence-title"
      className="scroll-mt-20 px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-b from-[#0A0E1A] to-[#1A1F2E]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2
            id="evidence-title"
            className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          >
            The Officially Unofficial{" "}
            <span className="text-[#5BA8E0] block sm:inline">Rap Superiority Index</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg">
            A completely fair and balanced comparison
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#1A1F2E] to-[#0A0E1A] rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/10 shadow-2xl shadow-black/40">
          <div className="hidden md:grid md:grid-cols-[1fr_2fr_1fr] gap-4 mb-4 pb-4 border-b border-white/10">
            <div className="text-center">
              <h3 className="text-[#5BA8E0] text-xl md:text-2xl font-bold">Drake</h3>
            </div>
            <div className="text-center">
              <h3 className="text-white/70 text-sm uppercase tracking-wider font-semibold">
                Metric
              </h3>
            </div>
            <div className="text-center">
              <h3 className="text-[#C8553D] text-xl md:text-2xl font-bold">Kendrick</h3>
            </div>
          </div>

          <ul className="space-y-3 md:space-y-4">
            {metrics.map((metric, index) => (
              <li
                key={index}
                className={`rounded-xl p-3 sm:p-4 ${
                  metric.kendrickWins ? "bg-white/5" : "bg-[#5BA8E0]/5"
                }`}
              >
                <div className="md:grid md:grid-cols-[1fr_2fr_1fr] md:gap-4 md:items-center">
                  <p
                    className={`md:hidden mb-2 text-center text-sm font-medium ${
                      metric.kendrickWins ? "text-white/70" : "text-white/85"
                    }`}
                  >
                    {metric.name}
                    {metric.kendrickWins && (
                      <span className="block text-xs text-white/45 mt-0.5">
                        (Less important metric)
                      </span>
                    )}
                  </p>

                  <div className="flex md:contents items-center justify-between gap-3">
                    <div className="flex-1 md:flex-none text-center">
                      <span className="block text-xs text-[#5BA8E0]/70 uppercase tracking-wider md:hidden">
                        Drake
                      </span>
                      <span className="text-[#5BA8E0] text-2xl sm:text-3xl md:text-4xl font-bold tabular-nums">
                        {metric.drake}
                      </span>
                    </div>

                    <div className="hidden md:block text-center">
                      <p className={metric.kendrickWins ? "text-sm text-white/55" : "text-white/85"}>
                        {metric.name}
                      </p>
                      {metric.kendrickWins && (
                        <p className="text-xs text-white/45 mt-1">(Less important metric)</p>
                      )}
                    </div>

                    <div className="flex-1 md:flex-none text-center">
                      <span className="block text-xs text-[#C8553D]/70 uppercase tracking-wider md:hidden">
                        Kendrick
                      </span>
                      <span
                        className={`${
                          metric.kendrickWins ? "text-[#C8553D]" : "text-white/55"
                        } text-xl sm:text-2xl md:text-3xl font-bold tabular-nums`}
                      >
                        {metric.kendrick}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div className="text-center p-5 sm:p-6 bg-gradient-to-br from-[#5BA8E0]/20 to-[#8B7FB8]/20 rounded-2xl border border-[#5BA8E0]/20">
                <p className="mb-2 text-[#E8C76A] text-sm uppercase tracking-wider font-semibold">
                  Final Score
                </p>
                <p className="text-[#5BA8E0] text-4xl sm:text-5xl md:text-6xl font-bold tabular-nums">
                  98.7
                </p>
                <p className="mt-2 text-white/85">Undisputed Champion</p>
              </div>
              <div className="text-center p-5 sm:p-6 bg-white/5 rounded-2xl border border-white/10">
                <p className="mb-2 text-white/70 text-sm uppercase tracking-wider font-semibold">
                  Final Score
                </p>
                <p className="text-[#C8553D] text-2xl sm:text-3xl md:text-4xl font-semibold">
                  Very Respectable
                </p>
                <p className="mt-2 text-white/55">A truly admirable effort</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
