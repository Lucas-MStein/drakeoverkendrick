const links = [
  { name: "Evidence", href: "#evidence" },
  { name: "Charts", href: "#charts" },
  { name: "Methodology", href: "#methodology" },
  { name: "Verdict", href: "#verdict" },
];

export function Footer() {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 py-10 md:py-12 bg-[#0A0E1A] border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="mb-3 text-[#5BA8E0] text-xl sm:text-2xl font-bold">
              drakeoverkendrick.com
            </h3>
            <p className="text-white/75 text-sm sm:text-base">A biased data project</p>
            <p className="text-white/55 text-xs sm:text-sm mt-2 leading-relaxed">
              No actual peer review was harmed in the making of this website
            </p>
          </div>

          <nav aria-label="Footer">
            <h4 className="mb-4 text-white/85 text-sm font-semibold uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#5BA8E0] focus-visible:outline-none focus-visible:text-[#5BA8E0] focus-visible:underline transition-colors text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4 className="mb-4 text-white/85 text-sm font-semibold uppercase tracking-wider">
              Disclaimer
            </h4>
            <p className="text-white/70 text-sm leading-relaxed">
              This is a work of satirical data visualization. All opinions are intentionally biased.
              Both artists are incredibly talented. We just have a favorite.
            </p>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-white/10 text-center">
          <p className="text-white/55 text-xs sm:text-sm">
            &copy; 2026 drakeoverkendrick.com &middot; Built with questionable methodology and
            unshakeable confidence
          </p>
        </div>
      </div>
    </footer>
  );
}
