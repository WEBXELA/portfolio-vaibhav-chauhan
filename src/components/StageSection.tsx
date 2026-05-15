import React from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { ExternalLink, Users, Mic, Heart } from 'lucide-react';

export function StageSection() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section
      id="stage-soul"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-6"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #111111 100%)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Image collage */}
          <div
            className={`relative ${isInView ? 'animate-scale-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.1s' }}
          >
            <div className="relative rounded-3xl overflow-hidden h-[480px]">
              <img
                src="/img/_P_27052.JPG"
                alt="Vaibhav Chauhan performing on stage for Stage Soul Society"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Floating badge */}
              <div className="absolute top-5 left-5 glass rounded-2xl px-4 py-3">
                <p className="text-xs font-bold text-[#c9a84c] uppercase tracking-widest">Stage Soul Society</p>
                <p className="text-xs text-[rgba(240,236,228,0.5)] mt-0.5">Est. 2024 · Gujarat</p>
              </div>
            </div>

            {/* Floating stat cards */}
            <div className="absolute -right-4 top-1/3 glass rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[rgba(201,168,76,0.15)] flex items-center justify-center">
                  <Users size={18} className="text-[#c9a84c]" />
                </div>
                <div>
                  <p className="text-lg font-bold text-[#f0ece4]">Community</p>
                  <p className="text-xs text-[rgba(240,236,228,0.4)]">Performers & Creators</p>
                </div>
              </div>
            </div>

            <div className="absolute -left-4 bottom-10 glass rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[rgba(255,107,53,0.15)] flex items-center justify-center">
                  <Heart size={18} className="text-[#ff6b35]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#f0ece4]">Empowering</p>
                  <p className="text-xs text-[rgba(240,236,228,0.4)]">Raw Talent</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div
            className={`space-y-8 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.25s' }}
          >
            <div>
              <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] font-semibold mb-3">
                The Community
              </p>
              <h2 className="font-display text-[40px] md:text-[50px] font-bold text-[#f0ece4] leading-none mb-6">
                The Stage Soul
                <br />
                <span className="text-gold-shimmer">Society.</span>
              </h2>
              <p className="text-[rgba(240,236,228,0.65)] text-lg leading-relaxed">
                Vaibhav didn't just perform — he built a movement. The Stage Soul Society is a creative
                community dedicated to giving authentic performers a platform to grow, perform, and connect.
              </p>
            </div>

            {/* Feature list */}
            <div className="space-y-4">
              {[
                { icon: <Mic size={16} />, title: 'Live Performances', desc: 'Regular open-mic and showcase events across Gujarat' },
                { icon: <Users size={16} />, title: 'Artist Collaborations', desc: 'Connecting performers, musicians, and visual artists' },
                { icon: <Heart size={16} />, title: 'Mentorship', desc: 'Guiding emerging talent to find their stage voice' },
              ].map((f) => (
                <div key={f.title} className="flex gap-4 p-4 glass rounded-2xl hover:border-[rgba(201,168,76,0.2)] transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(201,168,76,0.1)] flex items-center justify-center flex-shrink-0 text-[#c9a84c]">
                    {f.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#f0ece4] mb-0.5">{f.title}</p>
                    <p className="text-xs text-[rgba(240,236,228,0.45)]">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              id="stage-soul-link"
              href="https://www.instagram.com/the_stage_soul_society/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full glass border-[rgba(201,168,76,0.3)] hover:bg-[rgba(201,168,76,0.08)] transition-all duration-300 group text-[#c9a84c] font-semibold text-sm"
            >
              <ExternalLink size={16} />
              Visit Stage Soul Society
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
