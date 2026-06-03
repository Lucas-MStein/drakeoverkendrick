const quotes = [
  {
    text: "Numbers don't lie. But they can be arranged tastefully.",
    author: "Chief Data Officer, This Website",
  },
  {
    text: "This is not propaganda. This is a dashboard.",
    author: "Research Ethics Committee (Me)",
  },
  {
    text: "Some call it bias. We call it advanced analytics.",
    author: "Peer Review Team of One",
  },
];

export function QuoteSection() {
  return (
    <section
      aria-label="Selected quotes"
      className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-b from-[#1A1F2E] to-[#0A0E1A] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">
        {quotes.map((quote, index) => (
          <figure key={index} className="relative">
            <div
              aria-hidden="true"
              className="absolute -left-2 sm:-left-4 -top-6 sm:-top-8 text-[#5BA8E0]/20 leading-none select-none text-6xl sm:text-7xl md:text-8xl"
            >
              &ldquo;
            </div>
            <div className="relative pl-8 sm:pl-12">
              <blockquote className="mb-4 sm:mb-6 text-[#E8C76A] text-xl sm:text-2xl md:text-[1.875rem] font-semibold leading-snug">
                {quote.text}
              </blockquote>
              <figcaption className="text-white/70 italic text-sm sm:text-base">
                &mdash; {quote.author}
              </figcaption>
            </div>
          </figure>
        ))}

        <div className="pt-8 md:pt-12 text-center">
          <div className="inline-block bg-gradient-to-br from-[#5BA8E0]/10 to-[#8B7FB8]/10 px-6 sm:px-8 py-5 sm:py-6 rounded-2xl border border-[#5BA8E0]/30">
            <p className="text-white/85 mb-2 text-base sm:text-lg">Data Integrity Score</p>
            <div
              className="flex items-center justify-center gap-1"
              role="img"
              aria-label="Five out of five stars"
            >
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#E8C76A] text-2xl sm:text-3xl" aria-hidden="true">
                  ★
                </span>
              ))}
            </div>
            <p className="text-xs text-white/55 mt-2">Rated by ourselves</p>
          </div>
        </div>
      </div>
    </section>
  );
}
