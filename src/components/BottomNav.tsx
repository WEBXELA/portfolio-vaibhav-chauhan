import { useEffect, useState } from 'react';
import { Instagram } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Book', href: '#contact' },
];

export function BottomNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 max-w-[95vw] ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <div
        className="flex items-center justify-between gap-0.5 md:gap-1 px-2 md:px-3 py-2 rounded-full shadow-2xl overflow-x-auto hide-scrollbar"
        style={{
          background: 'rgba(10,8,0,0.9)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(201,168,76,0.25)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.6), 0 0 20px rgba(201,168,76,0.1)',
        }}
      >
        {/* Brand dot */}
        <div className="w-7 h-7 rounded-full border border-[#c9a84c] flex-shrink-0 flex items-center justify-center mr-0.5 md:mr-1 overflow-hidden">
          <img src="/img/profile-vaibhav.png" alt="VC" className="w-full h-full object-cover object-top" />
        </div>

        <div className="w-px h-4 bg-[rgba(255,255,255,0.1)] mx-0.5 md:mx-1 flex-shrink-0" />

        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            id={`nav-${item.label.toLowerCase()}`}
            href={item.href}
            onClick={(e) => {
              if (item.label === 'Book' && (window as any).Calendly) {
                e.preventDefault();
                (window as any).Calendly.initPopupWidget({
                  url: 'https://calendly.com/vaibhavchauhan5804/30min?text_color=0a0a0a&primary_color=c9a84c'
                });
              }
            }}
            className="flex-shrink-0 px-2 md:px-3 py-1.5 rounded-full text-[11px] md:text-xs font-medium text-[rgba(240,236,228,0.65)] hover:text-[#c9a84c] hover:bg-[rgba(201,168,76,0.1)] transition-all duration-200"
          >
            {item.label}
          </a>
        ))}

        <div className="w-px h-4 bg-[rgba(255,255,255,0.1)] mx-0.5 md:mx-1 flex-shrink-0" />

        <a
          id="nav-instagram"
          href="https://www.instagram.com/_artist_vaibhav_/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[rgba(240,236,228,0.5)] hover:text-[#c9a84c] hover:bg-[rgba(201,168,76,0.1)] transition-all duration-200"
        >
          <Instagram size={13} />
        </a>
      </div>
    </div>
  );
}
