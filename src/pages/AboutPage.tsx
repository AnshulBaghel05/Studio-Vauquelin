import React from 'react';
import { Award, Compass, Shield, Heart } from 'lucide-react';
import { STUDIO_TEAM, STUDIO_AWARDS, STUDIO_PRESS } from '../data/studioData';

interface AboutPageProps {
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation }) => {
  const coreValues = [
    {
      title: 'Geological & Material Honesty',
      desc: 'We refuse synthetic veneers, faux stones, and plasticized finishes. We specify natural travertine, hand-planed oak, unlacquered bronze, and raw linen—materials that breathe, age with dignity, and gather patina over decades.',
      icon: Compass
    },
    {
      title: 'Acoustic & Sensory Stillness',
      desc: 'True luxury is quiet. We integrate concealed micro-acoustic insulation, soft natural wool carpeting, and insulated timber joinery so that stepping inside feels like an immediate drop in blood pressure.',
      icon: Heart
    },
    {
      title: 'Proportion Before Ornament',
      desc: 'A magnificent space does not require decorative clutter. When ceiling heights, door reveals, window embrasures, and sightlines are mathematically pure, space itself becomes the ornamentation.',
      icon: Shield
    },
    {
      title: 'Rigorous Financial Stewardship',
      desc: 'We consider budget adherence an architectural art form. Our detailed tender packages and transparent trade fee passing guarantee absolute clarity without surprise contractor markups.',
      icon: Award
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="space-y-4 max-w-3xl mb-16">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#B08D57] font-medium">
          The Practice
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#1E1B18] tracking-tight">
          Crafting Quiet Sanctuaries
        </h1>
        <p className="text-sm md:text-base text-[#5A4636] font-light leading-relaxed">
          Founded in Paris in 2007 by Hélène Vauquelin, our studio practices a disciplined architecture of tactile restraint, balancing European historical context with contemporary ease.
        </p>
      </div>

      {/* Founder Narrative Split */}
      <section className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden bg-[#E7DDD0] border border-[#E5DDD2] shadow-lg">
            <img
              src="/images/founder_portrait.jpg"
              alt="Hélène Vauquelin, Founder & Creative Director"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#1E1B18]/80 text-[#FAF8F5] p-3 text-xs">
              <span className="font-serif block text-sm">Hélène Vauquelin</span>
              <span className="text-[#B8A99A] text-[11px]">Founder & Creative Director</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#B08D57] font-medium">
            Founder Story
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#1E1B18] leading-snug">
            “Architecture must hold space for human vulnerability and unhurried conversation.”
          </h2>
          <div className="space-y-4 text-xs md:text-sm text-[#5A4636] font-light leading-relaxed">
            <p>
              Trained at Paris’s École Camondo and the Architectural Association in London, Hélène began her career working on classical restoration of 18th-century hôtels particuliers across Saint-Germain and the Marais.
            </p>
            <p>
              She observed a recurring tragedy: grand classical homes were either frozen into lifeless, uncomfortable museum pieces or stripped into sterile, glossy white cubes devoid of memory.
            </p>
            <p>
              In 2007, she established Studio Vauquelin to champion an uncompromising third path: the tactile sanctuary. A methodology where ancient stone, restored boiseries, and contemporary bespoke furniture exist in warm, effortless harmony.
            </p>
            <p>
              Today, the studio leads commissions worldwide with offices in Paris, New York, and an ongoing research atelier in Kyoto.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 border-t border-[#E5DDD2]">
        <div className="max-w-2xl mb-12 space-y-2">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#B08D57] font-medium">
            Studio Principles
          </span>
          <h2 className="font-serif text-3xl font-light text-[#1E1B18]">
            The Non-Negotiable Standards of Our Practice
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div key={idx} className="p-8 bg-[#FAF8F5] border border-[#E5DDD2] space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#F6F2EC] border border-[#E5DDD2] text-[#B08D57]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-normal text-[#1E1B18]">
                    {val.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#5A4636] font-light leading-relaxed">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 border-t border-[#E5DDD2]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B08D57] font-medium">
              Partners & Directors
            </span>
            <h2 className="font-serif text-3xl font-light text-[#1E1B18]">
              The Leadership Ensemble
            </h2>
          </div>
          <p className="text-xs text-[#5A4636] max-w-sm">
            Architects, stone specialists, and collectible design curators uniting classical rigor with modern site precision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STUDIO_TEAM.map((member, i) => (
            <div key={i} className="group space-y-3">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#E7DDD0] border border-[#E5DDD2]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                />
              </div>
              <div>
                <h3 className="font-serif text-xl font-light text-[#1E1B18]">
                  {member.name}
                </h3>
                <p className="text-[11px] font-mono uppercase tracking-wider text-[#B08D57]">
                  {member.role}
                </p>
                <p className="mt-2 text-xs text-[#5A4636] font-light leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards & Press */}
      <section className="py-20 border-t border-[#E5DDD2] grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#B08D57] font-medium">
            Recognitions
          </span>
          <h2 className="font-serif text-3xl font-light text-[#1E1B18]">
            Selected Honors & Citations
          </h2>
          <div className="divide-y divide-[#E5DDD2] border-y border-[#E5DDD2]">
            {STUDIO_AWARDS.map((award, i) => (
              <div key={i} className="py-4 flex items-baseline justify-between text-xs">
                <div>
                  <span className="font-semibold text-[#1E1B18] block sm:inline mr-2">
                    {award.title}
                  </span>
                  <span className="text-[#8E867E]">{award.body}</span>
                </div>
                <span className="font-mono text-[#B08D57] ml-4 shrink-0">{award.year}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#B08D57] font-medium">
            Press Perspective
          </span>
          <h2 className="font-serif text-3xl font-light text-[#1E1B18]">
            Critical Commentary
          </h2>
          <div className="space-y-4">
            {STUDIO_PRESS.map((press, i) => (
              <div key={i} className="p-4 bg-[#FAF8F5] border border-[#E5DDD2] space-y-1 text-xs">
                <span className="font-serif text-base text-[#1E1B18] block">{press.name}</span>
                <p className="text-[#5A4636] italic leading-relaxed">“{press.quote}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
