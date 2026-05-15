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
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <div
        className="flex items-center gap-1 px-3 py-2.5 rounded-full shadow-2xl"
        style={{
          background: 'rgba(10,8,0,0.9)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(201,168,76,0.25)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.6), 0 0 20px rgba(201,168,76,0.1)',
        }}
      >
        {/* Brand dot */}
        <div className="w-7 h-7 rounded-full bg-[#c9a84c] flex items-center justify-center mr-1">
          <span className="text-black text-[10px] font-black">VC</span>
        </div>

        <div className="w-px h-4 bg-[rgba(255,255,255,0.1)] mx-1" />

        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            id={`nav-${item.label.toLowerCase()}`}
            href={item.href}
            className="px-3 py-1.5 rounded-full text-xs font-medium text-[rgba(240,236,228,0.65)] hover:text-[#c9a84c] hover:bg-[rgba(201,168,76,0.1)] transition-all duration-200"
          >
            {item.label}
          </a>
        ))}

        <div className="w-px h-4 bg-[rgba(255,255,255,0.1)] mx-1" />

        <a
          id="nav-instagram"
          href="https://www.instagram.com/_artist_vaibhav_/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-7 h-7 rounded-full flex items-center justify-center text-[rgba(240,236,228,0.5)] hover:text-[#c9a84c] hover:bg-[rgba(201,168,76,0.1)] transition-all duration-200"
        >
          <Instagram size={13} />
        </a>
      </div>
    </div>
  );
}
