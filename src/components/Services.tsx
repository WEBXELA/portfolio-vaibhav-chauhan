import React from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Mic, Pen, Palette, Users, Camera, Music } from 'lucide-react';

const SERVICES = [
  {
    id: 'mimicry',
    icon: <Mic size={28} />,
    title: 'Mimicry Performances',
    desc: 'Spot-on impressions of Bollywood stars, politicians, and iconic personalities. Perfect for events, shows, corporate functions, and entertainment nights.',
    tags: ['Live Shows', 'Events', 'Corporate'],
    highlight: true,
  },
  {
    id: 'songwriting',
    icon: <Music size={28} />,
    title: 'Songwriting',
    desc: 'Original compositions that carry emotion and meaning. From personal anthems to event jingles — Vaibhav writes music that resonates.',
    tags: ['Original Songs', 'Jingles', 'Lyrics'],
    highlight: false,
  },
  {
    id: 'artwork',
    icon: <Palette size={28} />,
    title: 'Commissioned Artwork',
    desc: 'Detailed hand-drawn portraits and illustrations. Birthdays, anniversaries, personalised gifts — every piece tells a story through lines and shades.',
    tags: ['Portraits', 'Illustrations', 'Gifts'],
    highlight: false,
  },
  {
    id: 'hosting',
    icon: <Camera size={28} />,
    title: 'Event Hosting & Anchoring',
    desc: 'Energetic and engaging host for college events, social gatherings, and brand activations. Keeps the crowd alive and the energy high throughout.',
    tags: ['College Fests', 'Social Events', 'Brand Events'],
    highlight: false,
  },
  {
    id: 'collab',
    icon: <Users size={28} />,
    title: 'Collaborations',
    desc: 'Open to creative collaborations with musicians, artists, and brands. Let\'s create something memorable together — DM to start the conversation.',
    tags: ['Music Collabs', 'Brand Deals', 'Artist Collabs'],
    highlight: false,
  },
  {
    id: 'stage-soul',
    icon: <Pen size={28} />,
    title: 'Stage Soul Society',
    desc: 'A community platform for aspiring performers. Vaibhav founded this to nurture raw talent and give emerging artists a proper stage to shine.',
    tags: ['Community', 'Mentorship', 'Platform'],
    highlight: false,
  },
];

export function Services() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section
      id="services"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-6"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #111111 100%)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.1s' }}
        >
          <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            What I Offer
          </p>
          <h2 className="font-display text-[40px] md:text-[56px] font-bold text-[#f0ece4] leading-none">
            Creative
            <br />
            <span className="text-gold-shimmer">Services.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <div
              key={s.id}
              id={`service-${s.id}`}
              className={`relative rounded-3xl p-7 transition-all duration-500 group cursor-default
                ${s.highlight
                  ? 'bg-[#c9a84c] text-black'
                  : 'glass hover:border-[rgba(201,168,76,0.25)] hover:bg-[rgba(201,168,76,0.03)]'
                }
                ${isInView ? 'animate-fade-in-up' : 'opacity-0'}
              `}
              style={{ animationDelay: `${0.15 + i * 0.07}s` }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5
                  ${s.highlight ? 'bg-black/10' : 'bg-[rgba(201,168,76,0.1)] text-[#c9a84c]'}
                `}
              >
                {s.icon}
              </div>

              <h3 className={`text-xl font-bold mb-3 ${s.highlight ? 'text-black' : 'text-[#f0ece4]'}`}>
                {s.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-5 ${s.highlight ? 'text-black/70' : 'text-[rgba(240,236,228,0.55)]'}`}>
                {s.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider
                      ${s.highlight ? 'bg-black/15 text-black' : 'bg-[rgba(201,168,76,0.1)] text-[#c9a84c]'}
                    `}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover glow — only for non-highlighted */}
              {!s.highlight && (
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: 'inset 0 0 40px rgba(201,168,76,0.04)' }}
                />
              )}
            </div>
          ))}
        </div>

        {/* DM notice */}
        <div
          className={`mt-12 text-center ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.65s' }}
        >
          <p className="text-[rgba(240,236,228,0.4)] text-sm">
            📩 DM for show booking · commissioned artwork · collaboration
          </p>
        </div>
      </div>
    </section>
  );
}
