import React from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Instagram, ExternalLink } from 'lucide-react';

const HIGHLIGHTS = [
  { number: '3+', label: 'Instagram Profiles', sub: 'Artist · Stage · Words' },
  { number: '∞', label: 'Voices Mastered', sub: 'Mimicry specialization' },
  { number: '100+', label: 'Shows Performed', sub: 'Stages across Gujarat' },
  { number: '2024', label: 'Stage Soul Society', sub: 'Founded by Vaibhav' },
];

const INSTAGRAM_LINKS = [
  {
    handle: '@_artist_vaibhav_',
    url: 'https://www.instagram.com/_artist_vaibhav_/',
    desc: 'Main creative & performance page',
    tag: 'Main',
    color: '#c9a84c',
  },
  {
    handle: '@the_stage_soul_society',
    url: 'https://www.instagram.com/the_stage_soul_society/',
    desc: 'The community he founded — stages & souls',
    tag: 'Community',
    color: '#ff6b35',
  },
  {
    handle: '@_vaibhav._.says_',
    url: 'https://www.instagram.com/_vaibhav._.says_/',
    desc: 'Thoughts, words & expressions',
    tag: 'Words',
    color: '#7c6ef5',
  },
];

export function About() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="max-w-6xl mx-auto px-6 py-24"
    >
      {/* Section header */}
      <div
        className={`mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.1s' }}
      >
        <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] font-semibold mb-3">
          About
        </p>
        <h2 className="font-display text-[40px] md:text-[56px] font-bold text-[#f0ece4] leading-none">
          Many Faces,
          <br />
          <span className="text-gold-shimmer">One Soul.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left — bio text */}
        <div
          className={`space-y-6 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          <p className="text-[rgba(240,236,228,0.7)] text-lg leading-relaxed">
            Based in the heart of <strong className="text-[#f0ece4]">Gujarat, India</strong>, Vaibhav Chauhan
            is a multi-talented creative who lives and breathes performance. From perfectly mimicking
            your favourite Bollywood stars to writing original songs that touch your heart — he does it all.
          </p>
          <p className="text-[rgba(240,236,228,0.7)] text-lg leading-relaxed">
            As the <strong className="text-[#c9a84c]">Founder of The Stage Soul Society</strong>, Vaibhav
            has built a thriving creative community that celebrates authentic artistic expression — giving
            a stage to voices that deserve to be heard.
          </p>
          <p className="text-[rgba(240,236,228,0.7)] text-lg leading-relaxed">
            His art doesn't stop at performance. He's also a passionate <strong className="text-[#f0ece4]">visual
            artist</strong>, creating commissioned drawings that capture emotion in every stroke.
          </p>

          {/* Instagram links */}
          <div className="space-y-3 pt-4">
            <p className="text-xs uppercase tracking-widest text-[rgba(240,236,228,0.4)] font-medium mb-4">
              Find Vaibhav On Instagram
            </p>
            {INSTAGRAM_LINKS.map((link) => (
              <a
                key={link.handle}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl glass hover:border-[rgba(201,168,76,0.3)] hover:bg-[rgba(201,168,76,0.03)] transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: `${link.color}20` }}>
                    <Instagram size={14} style={{ color: link.color }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#f0ece4] group-hover:text-[#c9a84c] transition-colors">
                      {link.handle}
                    </p>
                    <p className="text-xs text-[rgba(240,236,228,0.4)]">{link.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: `${link.color}20`, color: link.color }}>
                    {link.tag}
                  </span>
                  <ExternalLink size={14} className="text-[rgba(240,236,228,0.3)] group-hover:text-[#c9a84c] transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right — stats & image */}
        <div
          className={`space-y-6 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.35s' }}
        >
          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {HIGHLIGHTS.map((h) => (
              <div key={h.label} className="glass rounded-2xl p-6 hover:border-[rgba(201,168,76,0.3)] transition-all duration-300">
                <p className="text-[#c9a84c] text-3xl font-bold mb-1">{h.number}</p>
                <p className="text-[#f0ece4] text-sm font-semibold mb-0.5">{h.label}</p>
                <p className="text-[rgba(240,236,228,0.4)] text-xs">{h.sub}</p>
              </div>
            ))}
          </div>

          {/* Quote card */}
          <div className="glass rounded-2xl p-6 border-l-2 border-[#c9a84c]">
            <p className="font-display text-xl italic text-[rgba(240,236,228,0.8)] leading-relaxed mb-4">
              "Every voice I mimic, every song I write, every line I draw — it's all one conversation
              with the universe."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-[rgba(201,168,76,0.4)]">
                <img
                  src="/img/profile-vaibhav.png"
                  alt="Vaibhav Chauhan"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#c9a84c]">Vaibhav Chauhan</p>
                <p className="text-xs text-[rgba(240,236,228,0.4)]">Artist · Gujarat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
