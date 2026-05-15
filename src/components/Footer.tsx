import { Instagram, ExternalLink, Heart } from 'lucide-react';

const FOOTER_LINKS = [
  {
    title: 'Navigate',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Stage Soul Society', href: '#stage-soul' },
      { label: 'Book A Show', href: '#contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Mimicry Performances', href: '#services' },
      { label: 'Songwriting', href: '#services' },
      { label: 'Commissioned Artwork', href: '#services' },
      { label: 'Event Hosting', href: '#services' },
      { label: 'Collaborations', href: '#services' },
    ],
  },
  {
    title: 'Instagram',
    links: [
      { label: '@_artist_vaibhav_', href: 'https://www.instagram.com/_artist_vaibhav_/', external: true },
      { label: '@the_stage_soul_society', href: 'https://www.instagram.com/the_stage_soul_society/', external: true },
      { label: '@_vaibhav._.says_', href: 'https://www.instagram.com/_vaibhav._.says_/', external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.1)]" style={{ background: '#080808' }}>
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-32">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[rgba(201,168,76,0.5)]">
                <img
                  src="/img/profile-vaibhav.png"
                  alt="Vaibhav Chauhan"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <p className="font-display text-[#f0ece4] font-bold text-lg leading-none">Vaibhav</p>
                <p className="text-[#c9a84c] text-xs font-semibold">Chauhan</p>
              </div>
            </div>
            <p className="text-sm text-[rgba(240,236,228,0.7)] leading-relaxed max-w-[200px] mb-4">
              Mimicry Artist · Songwriter · Visual Artist · Founder of Stage Soul Society
            </p>
            <div className="flex items-center gap-1.5 text-xs text-[rgba(240,236,228,0.6)]">
              <span>Gujarat, India</span>
            </div>
          </div>

          {/* Links */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[rgba(240,236,228,0.6)] mb-5">
                {group.title}
              </p>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={'external' in link && link.external ? '_blank' : undefined}
                      rel={'external' in link && link.external ? 'noopener noreferrer' : undefined}
                      className="text-sm text-[rgba(240,236,228,0.8)] hover:text-[#c9a84c] transition-colors duration-200 flex items-center gap-1.5 group font-medium"
                    >
                      {link.label}
                      {'external' in link && link.external && (
                        <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider mb-8 opacity-50" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[rgba(240,236,228,0.6)] flex items-center gap-1.5 font-medium">
            © 2026 Vaibhav Chauhan. All rights reserved.
          </p>
          <p className="text-sm text-[rgba(240,236,228,0.6)] flex items-center gap-1.5 font-medium">
            Designed by{' '}
            <a
              href="https://uimitra.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c9a84c] hover:text-[#e8c96e] hover:underline transition-colors font-bold"
            >
              Uimitra
            </a>
          </p>
          <a
            href="https://www.instagram.com/_artist_vaibhav_/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[rgba(240,236,228,0.7)] hover:text-[#c9a84c] transition-colors font-medium"
          >
            <Instagram size={14} />
            Follow on Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
