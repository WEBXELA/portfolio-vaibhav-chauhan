const SKILLS = [
  '🎤 Mimicry Artist',
  '🎵 Songwriter',
  '🎨 Visual Artist',
  '🎭 Stage Performer',
  '📸 Content Creator',
  '🖌️ Commissioned Artwork',
  '🎙️ Voice Actor',
  '🏆 Show Host',
  '🌟 Stage Soul Society',
  '🇮🇳 Gujarat Based',
];

const doubled = [...SKILLS, ...SKILLS];

export function SkillsMarquee() {
  return (
    <div className="py-12 overflow-hidden" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)' }}>
      {/* Top border */}
      <div className="divider mb-6" />

      {/* Row 1 – forward */}
      <div className="flex marquee-track mb-4">
        {doubled.map((skill, i) => (
          <div
            key={`a-${i}`}
            className="flex-shrink-0 flex items-center gap-3 mx-6"
          >
            <span className="text-[#f0ece4] text-sm font-medium whitespace-nowrap">{skill}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] opacity-60" />
          </div>
        ))}
      </div>

      {/* Row 2 – reverse */}
      <div className="flex marquee-track-reverse">
        {doubled.map((skill, i) => (
          <div
            key={`b-${i}`}
            className="flex-shrink-0 flex items-center gap-3 mx-6"
          >
            <span className="text-[rgba(201,168,76,0.5)] text-xs font-medium whitespace-nowrap uppercase tracking-widest">{skill}</span>
            <span className="w-1 h-1 rounded-full bg-[rgba(240,236,228,0.2)]" />
          </div>
        ))}
      </div>

      {/* Bottom border */}
      <div className="divider mt-6" />
    </div>
  );
}
