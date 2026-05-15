import React from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Instagram } from 'lucide-react';

const GALLERY_ITEMS = [
  {
    id: 'g1',
    src: '/img/_P_27052.JPG',
    alt: 'Vaibhav Chauhan performing on stage with mic and stage lights',
    label: 'Stage Performance',
    tag: 'Live Show',
    span: 'lg:col-span-2 lg:row-span-2',
    objectPos: 'object-center',
  },
  {
    id: 'g2',
    src: '/img/0L7A5008~2.JPG',
    alt: 'Vaibhav Chauhan performing mimicry at event',
    label: 'Mimicry Act',
    tag: 'Event',
    span: '',
    objectPos: 'object-top',
  },
  {
    id: 'g3',
    src: '/img/_P_27050.JPG',
    alt: 'Vaibhav Chauhan on open stage performing',
    label: 'Open Stage',
    tag: 'Gujarat',
    span: '',
    objectPos: 'object-top',
  },
  {
    id: 'g4',
    src: '/img/_P_27054.JPG',
    alt: 'Vaibhav Chauhan close up performing with microphone',
    label: 'Close Up',
    tag: 'Show Reel',
    span: 'lg:col-span-2',
    objectPos: 'object-center',
  },
];

export function Gallery() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section
      id="gallery"
      ref={ref as React.RefObject<HTMLElement>}
      className="max-w-6xl mx-auto px-6 py-24"
    >
      {/* Header */}
      <div
        className={`mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.1s' }}
      >
        <div>
          <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            Gallery
          </p>
          <h2 className="font-display text-[40px] md:text-[56px] font-bold text-[#f0ece4] leading-none">
            On Stage &amp;
            <br />
            <span className="text-gold-shimmer">Behind the Lens.</span>
          </h2>
        </div>
        <a
          href="https://www.instagram.com/_artist_vaibhav_/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-[#c9a84c] hover:text-[#e8c96e] transition-colors font-medium group"
        >
          <Instagram size={16} />
          More on Instagram
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>

      {/* Masonry grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[280px] gap-4">
        {GALLERY_ITEMS.map((item, i) => (
          <div
            key={item.id}
            id={item.id}
            className={`relative rounded-3xl overflow-hidden group hover-zoom cursor-pointer
              ${item.span}
              ${isInView ? 'animate-scale-in' : 'opacity-0'}
            `}
            style={{ animationDelay: `${0.15 + i * 0.1}s` }}
          >
            <img
              src={item.src}
              alt={item.alt}
              className={`w-full h-full object-cover ${item.objectPos} transition-transform duration-700 group-hover:scale-105`}
              loading="lazy"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            {/* Labels */}
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#c9a84c] block mb-1">
                    {item.tag}
                  </span>
                  <p className="text-white font-semibold text-base leading-tight">{item.label}</p>
                </div>
                <div className="w-8 h-8 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Instagram size={14} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
