import React, { useEffect, useRef } from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Instagram, Mic, Pen, Palette, Star } from 'lucide-react';

const ROLES = ['Mimicry Artist', 'Songwriter', 'Visual Artist', 'Content Creator', 'Performer'];

export function Hero() {
  const { ref, isInView } = useInViewAnimation();
  const roleRef = useRef<HTMLSpanElement>(null);
  const indexRef = useRef(0);
  const charIndexRef = useRef(0);
  const deletingRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = roleRef.current;
    if (!el) return;

    const type = () => {
      const current = ROLES[indexRef.current];
      if (!deletingRef.current) {
        charIndexRef.current++;
        el.textContent = current.slice(0, charIndexRef.current);
        if (charIndexRef.current === current.length) {
          deletingRef.current = true;
          timerRef.current = setTimeout(type, 1800);
          return;
        }
        timerRef.current = setTimeout(type, 90);
      } else {
        charIndexRef.current--;
        el.textContent = current.slice(0, charIndexRef.current);
        if (charIndexRef.current === 0) {
          deletingRef.current = false;
          indexRef.current = (indexRef.current + 1) % ROLES.length;
          timerRef.current = setTimeout(type, 300);
          return;
        }
        timerRef.current = setTimeout(type, 45);
      }
    };

    timerRef.current = setTimeout(type, 600);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  return (
    <section
      id="home"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-8 pb-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.08)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[radial-gradient(ellipse_at_bottom-left,rgba(255,107,53,0.05)_0%,transparent_70%)]" />
      </div>

      {/* Flag badge */}
      <div
        className={`mb-8 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.1s' }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-[rgba(240,236,228,0.6)] tracking-widest uppercase font-medium">
          Based in Gujarat, India
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
        </span>
      </div>

      {/* Profile image */}
      <div
        className={`relative mb-10 ${isInView ? 'animate-scale-in' : 'opacity-0'}`}
        style={{ animationDelay: '0.2s' }}
      >
        {/* Rotating ring */}
        <div className="absolute -inset-4 rounded-full border border-dashed border-[rgba(201,168,76,0.3)] animate-spin-slow" />
        {/* Gold ring */}
        <div className="absolute -inset-2 rounded-full border-gold-glow" />
        <div className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden">
          <img
            src="/img/profile-vaibhav.png"
            alt="Vaibhav Chauhan — Artist from Gujarat"
            className="w-full h-full object-cover object-top"
          />
          {/* Inner overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        {/* Live badge */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#c9a84c] text-black text-[10px] font-bold px-3 py-1 rounded-full shadow-lg border-2 border-[#0a0a0a] z-10 tracking-widest">
          LIVE
        </div>
      </div>

      {/* Name */}
      <div
        className={`text-center mb-4 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.3s' }}
      >
        <h1 className="font-display text-[52px] md:text-[80px] lg:text-[96px] font-bold leading-none tracking-tight text-[#f0ece4]">
          Vaibhav <span className="text-gold-shimmer">Chauhan</span>
        </h1>
      </div>

      {/* Typewriter role */}
      <div
        className={`flex items-center gap-3 mb-10 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.45s' }}
      >
        <span className="text-[#c9a84c] text-xl md:text-2xl font-medium min-w-[220px] text-center">
          <span ref={roleRef} />
          <span className="inline-block w-0.5 h-6 bg-[#c9a84c] ml-0.5 align-middle animate-pulse" />
        </span>
      </div>

      {/* Tagline */}
      <div
        className={`max-w-md text-center mb-10 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.55s' }}
      >
        <p className="text-[rgba(240,236,228,0.55)] text-base md:text-lg leading-relaxed">
          Bringing characters to life through voice. Writing songs that move souls.
          Creating art that speaks without words.
        </p>
      </div>

      {/* Quick stats */}
      <div
        className={`flex flex-wrap justify-center gap-8 mb-12 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.65s' }}
      >
        {[
          { icon: <Mic size={16} />, label: 'Mimicry', sub: 'Artist' },
          { icon: <Pen size={16} />, label: 'Song', sub: 'Writer' },
          { icon: <Palette size={16} />, label: 'Visual', sub: 'Artist' },
          { icon: <Star size={16} />, label: 'Stage Soul', sub: 'Founder' },
        ].map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-[#c9a84c]">
              {s.icon}
            </div>
            <span className="text-xs font-semibold text-[#f0ece4] leading-none">{s.label}</span>
            <span className="text-[10px] text-[rgba(240,236,228,0.4)] leading-none">{s.sub}</span>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div
        className={`flex flex-wrap gap-4 justify-center ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.75s' }}
      >
        <a
          id="hero-book-btn"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if ((window as any).Calendly) {
              (window as any).Calendly.initPopupWidget({
                url: 'https://calendly.com/vaibhavchauhan5804/30min?text_color=0a0a0a&primary_color=c9a84c'
              });
            }
          }}
          className="btn-glow px-8 py-4 rounded-full bg-[#c9a84c] text-black font-bold text-sm uppercase tracking-widest hover:bg-[#e8c96e] transition-all duration-300 shadow-[0_0_30px_rgba(201,168,76,0.35)]"
        >
          Book A Show
        </a>
        <a
          id="hero-collab-btn"
          href="https://www.instagram.com/_artist_vaibhav_/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-full glass font-semibold text-sm text-[#f0ece4] uppercase tracking-widest hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300 flex items-center gap-2"
        >
          <Instagram size={16} />
          Follow
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#c9a84c] to-transparent" />
      </div>
    </section>
  );
}
