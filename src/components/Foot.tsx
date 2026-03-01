function Footer() {
  return (
    <footer className="border-t border-white/7 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-22 mb-12">

          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="font-semibold text-sm">Climate Change PH</span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs">
              A deep dive at the laws, programs, and history behind the Philippines' fight against climate change.
            </p>
            <p className="text-white/20 text-xs mt-4">
              For educational purposes only.
            </p>
          </div>

          <div>
            <div className="text-white/25 text-xs font-semibold tracking-widest uppercase mb-4">
              Navigate
            </div>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Laws', href: '#laws' },
                { label: 'Programs', href: '#programs' },
                { label: 'History', href: '#history' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/45 text-sm hover:text-white transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-white/25 text-xs font-semibold tracking-widest uppercase mb-4">
              Sources
            </div>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Climate Change Commission', href: 'https://climate.gov.ph' },
                { label: 'Official Gazette', href: 'https://officialgazette.gov.ph' },
                { label: 'DENR', href: 'https://denr.gov.ph' },
              ].map((source) => (
                <li key={source.label}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/45 text-sm hover:text-white transition-colors duration-200"
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-white/7 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            Built with React, Tailwind, and Typescript · Hosted with Vercel.
          </p>
          <p className="text-white/25 text-xs">
            Brent Adrian M. Fogarty · Grade 8 - Bohr
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;