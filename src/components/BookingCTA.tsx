import React, { useEffect, useRef } from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Instagram } from 'lucide-react';

const PREVIEW_IMAGES = [
  '/img/_P_27050.JPG',
  '/img/_P_27052.JPG',
  '/img/_P_27054.JPG',
  '/img/0L7A5008~2.JPG',
];

interface TrailItem {
  el: HTMLImageElement;
  opacity: number;
}

export function BookingCTA() {
  const { ref, isInView } = useInViewAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<TrailItem[]>([]);
  const imageIndexRef = useRef(0);
  const lastSpawnRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastSpawnRef.current < 350) return;
      lastSpawnRef.current = now;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const img = document.createElement('img');
      img.src = PREVIEW_IMAGES[imageIndexRef.current % PREVIEW_IMAGES.length];
      imageIndexRef.current++;

      img.className = 'pointer-events-none absolute rounded-2xl object-cover shadow-2xl';
      img.style.cssText = `
        width: 120px; height: 160px;
        left: ${x - 60}px; top: ${y - 80}px;
        opacity: 0; transition: opacity 0.25s ease, transform 0.25s ease;
        z-index: 10; transform: rotate(${(Math.random() - 0.5) * 12}deg) scale(0.95);
        object-fit: cover; object-position: top;
      `;

      container.appendChild(img);
      requestAnimationFrame(() => {
        img.style.opacity = '0.85';
        img.style.transform = `rotate(${(Math.random() - 0.5) * 8}deg) scale(1)`;
      });

      const trail: TrailItem = { el: img, opacity: 0.85 };
      trailRef.current.push(trail);

      setTimeout(() => {
        img.style.opacity = '0';
        setTimeout(() => {
          if (img.parentNode) img.parentNode.removeChild(img);
          trailRef.current = trailRef.current.filter((t) => t !== trail);
        }, 300);
      }, 700);
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-6"
    >
      <div
        ref={containerRef}
        className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden cursor-crosshair select-none"
        style={{
          background: 'linear-gradient(135deg, #1a1200 0%, #0f0a00 50%, #0a0a0a 100%)',
          border: '1px solid rgba(201,168,76,0.2)',
          boxShadow: '0 0 60px rgba(201,168,76,0.08), inset 0 0 60px rgba(201,168,76,0.03)',
        }}
      >
        {/* Gold corner accents */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[rgba(201,168,76,0.4)] rounded-tl-3xl" />
        <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[rgba(201,168,76,0.4)] rounded-tr-3xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[rgba(201,168,76,0.4)] rounded-bl-3xl" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[rgba(201,168,76,0.4)] rounded-br-3xl" />

        {/* Center glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.06)_0%,transparent_70%)] pointer-events-none" />

        {/* Content */}
        <div
          className={`relative z-20 px-10 py-20 text-center ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.1s' }}
        >
          <span className="inline-block text-[#c9a84c] text-xs uppercase tracking-[0.4em] font-semibold mb-6 opacity-70">
            Book Vaibhav
          </span>

          <h2 className="font-display text-[40px] md:text-[64px] lg:text-[72px] font-bold text-[#f0ece4] leading-none mb-6">
            Ready to Make
            <br />
            <span className="text-gold-shimmer">Your Event</span>
            <br />
            Unforgettable?
          </h2>

          <p className="text-[rgba(240,236,228,0.5)] text-base md:text-xl mb-12 max-w-xl mx-auto leading-relaxed">
            Whether it's a live mimicry show, commissioned artwork, or a full creative collaboration —
            Vaibhav brings energy and artistry to everything he does.
          </p>

          {/* Contact options */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a
              id="contact-instagram-btn"
              href="https://www.instagram.com/_artist_vaibhav_/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow flex items-center gap-3 px-8 py-4 rounded-full bg-[#c9a84c] text-black font-bold text-sm uppercase tracking-widest hover:bg-[#e8c96e] transition-all duration-300 shadow-[0_0_30px_rgba(201,168,76,0.4)]"
            >
              <Instagram size={18} />
              DM on Instagram
            </a>
            <a
              id="contact-stage-btn"
              href="https://www.instagram.com/the_stage_soul_society/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-full glass font-semibold text-sm text-[#f0ece4] uppercase tracking-widest hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300"
            >
              Stage Soul Society →
            </a>
          </div>

          {/* Social handles */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[rgba(240,236,228,0.35)]">
            <span>@_artist_vaibhav_</span>
            <span className="w-1 h-1 rounded-full bg-[rgba(240,236,228,0.2)] self-center" />
            <span>@the_stage_soul_society</span>
            <span className="w-1 h-1 rounded-full bg-[rgba(240,236,228,0.2)] self-center" />
            <span>@_vaibhav._.says_</span>
          </div>

          {/* Hover instruction */}
          <p className="absolute bottom-4 right-6 text-[10px] text-[rgba(240,236,228,0.15)] uppercase tracking-widest">
            Hover to explore
          </p>
        </div>
      </div>
    </section>
  );
}
