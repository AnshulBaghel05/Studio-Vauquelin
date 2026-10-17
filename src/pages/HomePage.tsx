import React, { useState } from 'react';
import { ArrowUpRight, ArrowDown, ChevronRight, Award, Compass, ShieldCheck, Sparkles } from 'lucide-react';
import { STUDIO_PROJECTS, STUDIO_SERVICES, STUDIO_PRESS } from '../data/studioData';

interface HomePageProps {
  onNavigate: (tab: string, slug?: string) => void;
  onOpenConsultation: () => void;
  onOpenGuideModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenGuideModal
}) => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const featuredProjects = STUDIO_PROJECTS.slice(0, 4);

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#B08D57] font-medium">
              <span>Boutique Architecture & Interiors</span>
              <span className="w-8 h-[1px] bg-[#B08D57]" />
              <span>Paris · New York · Kyoto</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#1E1B18] tracking-tight leading-[1.05] text-balance">
              Spaces that feel like you.
            </h1>

            <p className="text-base sm:text-lg text-[#5A4636] font-light max-w-2xl leading-relaxed">
              We design private residences, coastal villas, and boutique hospitality spaces with quiet monastic restraint, noble materials, and an obsessive dedication to natural light.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-8 py-4 bg-[#1E1B18] text-[#F6F2EC] hover:bg-[#5A4636] text-xs uppercase tracking-widest font-medium transition-colors flex items-center justify-center gap-2 group"
              >
                <span>Book a Consultation</span>
                <ArrowUpRight className="w-4 h-4 text-[#B08D57] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('projects')}
                className="px-8 py-4 border border-[#B8A99A] text-[#1E1B18] hover:border-[#1E1B18] text-xs uppercase tracking-widest font-medium transition-colors text-center"
              >
                Explore Selected Works
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end text-xs text-[#5A4636] space-y-2 border-t lg:border-t-0 lg:border-l border-[#E5DDD2] pt-4 lg:pt-0 lg:pl-8">
            <span className="font-mono text-[#B08D57] text-[11px] tracking-widest uppercase">
              STUDIO MANIFESTO 2025
            </span>
            <p className="font-light leading-relaxed">
              Quiet luxury is not an aesthetic trend; it is the discipline of eliminating the superfluous until only timeless proportion, tactile stone, and honest warmth remain.
            </p>
          </div>
        </div>

        {/* Hero Visual Display with 16:9 Image */}
        <div className="mt-12 relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-[#E7DDD0] group">
          <img
            src="/images/hero_interior_villa.jpg"
            alt="Villa Saint-Germain living volume with monolithic travertine fireplace"
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B18]/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-[#FAF8F5]">
            <span className="tracking-widest uppercase font-mono text-[11px]">
              VILLA SAINT-GERMAIN · SALON PRINCIPAL
            </span>
            <span className="hidden sm:inline font-light text-[#E7DDD0]">
              Natural daylight filtered through floor-to-ceiling sheer linen
            </span>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="#intro"
            className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#5A4636] hover:text-[#1E1B18] transition-colors"
          >
            <span>Scroll to Discover</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#B08D57] animate-bounce" />
          </a>
        </div>
      </section>

      {/* 2. INTRO PHILOSOPHY STATEMENT */}
      <section id="intro" className="py-24 md:py-36 bg-[#FAF8F5] border-y border-[#E5DDD2]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-8">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#B08D57] font-medium">
            The Studio Philosophy
          </span>

          <p className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1E1B18] leading-[1.3] tracking-tight">
            “We believe an interior is not a showroom of prestige, but an acoustic, luminous, and tactile sanctuary that deepens the quiet rituals of daily life.”
          </p>

          <div className="w-12 h-[1px] bg-[#B08D57] mx-auto" />

          <p className="text-sm md:text-base text-[#5A4636] font-light max-w-2xl mx-auto leading-relaxed">
            By rejecting synthetic fast-furnishings in favor of quarried travertine, hand-planed French oak, patinated brass, and Belgian flax, our spaces grow more beautiful as the years accumulate.
          </p>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS (Editorial Grid) */}
      <section className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#E5DDD2] pb-8">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B08D57] font-medium block mb-2">
              Selected Portfolio
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-[#1E1B18]">
              Sanctuaries of Quiet Proportion
            </h2>
          </div>
          <button
            onClick={() => onNavigate('projects')}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#5A4636] hover:text-[#1E1B18] transition-colors"
          >
            <span>View All 8 Works</span>
            <ArrowUpRight className="w-4 h-4 text-[#B08D57]" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {featuredProjects.map((project, idx) => (
            <article
              key={project.id}
              onClick={() => onNavigate('project-detail', project.slug)}
              className={`cursor-pointer group flex flex-col space-y-4 ${
                idx % 2 === 1 ? 'md:mt-16' : ''
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#E7DDD0]">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-4 left-4 bg-[#FAF8F5]/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest font-mono text-[#1E1B18]">
                  {project.category}
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs text-[#8E867E]">
                  <span>{project.location}</span>
                  <span className="font-mono tabular-nums">{project.year}</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-light text-[#1E1B18] group-hover:text-[#B08D57] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-[#5A4636] font-light line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="pt-1 flex items-center gap-1.5 text-xs text-[#B08D57] font-medium tracking-wider uppercase group-hover:translate-x-1 transition-transform">
                <span>View Case Study</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. SERVICES OVERVIEW (01–05 With Interactive Preview) */}
      <section className="py-24 md:py-36 bg-[#FAF8F5] border-y border-[#E5DDD2]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#B08D57] font-medium">
                Disciplines & Services
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-light text-[#1E1B18] leading-tight">
                Architectural rigor, bespoke artisan execution.
              </h2>
              <p className="text-sm text-[#5A4636] font-light leading-relaxed">
                Whether undertaking a historic Parisian Haussmannian gut-renovation, constructing a cliffside Mediterranean estate, or sculpting a boutique hotel lounge, our practice delivers comprehensive single-source accountability.
              </p>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('services')}
                  className="px-6 py-3.5 bg-[#1E1B18] text-[#F6F2EC] hover:bg-[#5A4636] text-xs uppercase tracking-widest font-medium transition-colors inline-flex items-center gap-2"
                >
                  <span>Detailed Scope & Pricing Tiers</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B08D57]" />
                </button>
              </div>

              {/* Service Preview Box */}
              <div className="hidden lg:block pt-8">
                <div className="relative aspect-[4/3] overflow-hidden border border-[#E5DDD2] bg-[#E7DDD0]">
                  <img
                    src={STUDIO_SERVICES[activeServiceIndex].image}
                    alt={STUDIO_SERVICES[activeServiceIndex].title}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1E1B18]/80 to-transparent p-4 text-xs text-[#F6F2EC]">
                    <div className="font-medium text-[#FAF8F5]">
                      {STUDIO_SERVICES[activeServiceIndex].title}
                    </div>
                    <div className="text-[11px] text-[#B8A99A]">
                      {STUDIO_SERVICES[activeServiceIndex].pricingEstimate}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col divide-y divide-[#E5DDD2]">
              {STUDIO_SERVICES.map((srv, index) => (
                <div
                  key={srv.number}
                  onMouseEnter={() => setActiveServiceIndex(index)}
                  onClick={() => onNavigate('services')}
                  className={`py-8 cursor-pointer group transition-colors ${
                    activeServiceIndex === index ? 'bg-[#F6F2EC]/60 px-4 -mx-4' : ''
                  }`}
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-mono text-xs text-[#B08D57] font-semibold">
                      {srv.number}
                    </span>
                    <span className="text-xs text-[#8E867E] font-mono">
                      {srv.pricingEstimate.split('(')[0]}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-light text-[#1E1B18] group-hover:text-[#B08D57] transition-colors mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#5A4636] font-light leading-relaxed max-w-xl">
                    {srv.tagline}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. STATS STRIP (Count-up / Quantitative Rigor) */}
      <section className="py-20 bg-[#1E1B18] text-[#F6F2EC]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-1">
            <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#FAF8F5] tabular-nums">
              18+
            </span>
            <p className="text-xs uppercase tracking-widest text-[#B8A99A]">Years of Practice</p>
            <p className="text-[11px] text-[#8E867E]">Founded in Paris, 2007</p>
          </div>
          <div className="space-y-1">
            <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#FAF8F5] tabular-nums">
              150+
            </span>
            <p className="text-xs uppercase tracking-widest text-[#B8A99A]">Sanctuaries Delivered</p>
            <p className="text-[11px] text-[#8E867E]">Across 7 countries</p>
          </div>
          <div className="space-y-1">
            <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#FAF8F5] tabular-nums">
              98%
            </span>
            <p className="text-xs uppercase tracking-widest text-[#B8A99A]">Direct Client Referrals</p>
            <p className="text-[11px] text-[#8E867E]">Unmatched client trust</p>
          </div>
          <div className="space-y-1">
            <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#FAF8F5] tabular-nums">
              14
            </span>
            <p className="text-xs uppercase tracking-widest text-[#B8A99A]">Design Honors</p>
            <p className="text-[11px] text-[#8E867E]">AD100, Wallpaper* Awards</p>
          </div>
        </div>
      </section>

      {/* 6. SIGNATURE PROCESS TEASER */}
      <section className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16 space-y-4">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#B08D57] font-medium">
            Our Methodology
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-[#1E1B18]">
            Six disciplined stages from spatial audit to turnkey handover.
          </h2>
          <p className="text-sm text-[#5A4636] font-light leading-relaxed">
            We eliminate the anxiety of architectural renovation through rigorous phase gates, fixed line-item budgets, and continuous on-site director oversight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-[#FAF8F5] border border-[#E5DDD2] space-y-4">
            <span className="font-mono text-xs text-[#B08D57]">PHASE 01 – 02</span>
            <h3 className="font-serif text-2xl font-light text-[#1E1B18]">
              Discovery & Spatial Architecture
            </h3>
            <p className="text-xs text-[#5A4636] leading-relaxed">
              3D laser scanning of physical conditions, lifestyle ritual audit, and floorplan flow reconfiguration to harness natural light paths.
            </p>
          </div>

          <div className="p-8 bg-[#FAF8F5] border border-[#E5DDD2] space-y-4">
            <span className="font-mono text-xs text-[#B08D57]">PHASE 03 – 04</span>
            <h3 className="font-serif text-2xl font-light text-[#1E1B18]">
              Development & Artisan Procurement
            </h3>
            <p className="text-xs text-[#5A4636] leading-relaxed">
              Millimetric CAD joinery drafting, stone slab selection in Verona quarries, and bespoke collectible furniture sourcing.
            </p>
          </div>

          <div className="p-8 bg-[#FAF8F5] border border-[#E5DDD2] space-y-4">
            <span className="font-mono text-xs text-[#B08D57]">PHASE 05 – 06</span>
            <h3 className="font-serif text-2xl font-light text-[#1E1B18]">
              Site Execution & White-Glove Styling
            </h3>
            <p className="text-xs text-[#5A4636] leading-relaxed">
              Strict general contractor inspection, acoustic attenuation tuning, fine art hanging, and handover down to the scent of cedar.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('process')}
            className="text-xs uppercase tracking-widest text-[#1E1B18] hover:text-[#B08D57] transition-colors font-medium inline-flex items-center gap-1.5"
          >
            <span>Explore the Complete 6-Stage Timeline</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 7. TESTIMONIAL & PRESS CAROUSEL */}
      <section className="py-24 md:py-36 bg-[#E7DDD0]/40 border-y border-[#E5DDD2]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center space-y-12">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#B08D57] font-medium">
            Client Voices & Critical Acclaim
          </span>

          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-[#1E1B18] leading-relaxed italic">
            “Hélène Vauquelin and her team did not merely redesign our Haussmannian hôtel particulier; they distilled how we wish to live. Every morning light pattern against the travertine feels intentionally orchestrated.”
          </blockquote>

          <div className="space-y-1 text-xs">
            <p className="font-medium text-[#1E1B18] tracking-wider uppercase">
              Éléonore & Marc de Valois
            </p>
            <p className="text-[#5A4636]">
              Private Residence, Paris 7th Arrondissement
            </p>
          </div>

          {/* Press Row */}
          <div className="pt-12 border-t border-[#D9CFC2] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center opacity-80">
            {STUDIO_PRESS.map((item) => (
              <div key={item.name} className="text-center">
                <span className="font-serif text-base md:text-lg text-[#1E1B18] tracking-wider">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CONSULTATION CTA BAND */}
      <section className="relative py-28 md:py-40 bg-[#1E1B18] text-[#F6F2EC] overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="/images/project_coastal_residence.jpg"
            alt="Cap d'Antibes Residence"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center space-y-8 z-10">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B08D57] font-medium">
            Begin Your Spatial Journey
          </span>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#FAF8F5] leading-tight">
            Let’s design your space.
          </h2>

          <p className="text-sm md:text-base text-[#B8A99A] font-light max-w-xl mx-auto leading-relaxed">
            We accept a strictly limited number of private residential and boutique hospitality commissions each calendar year. Schedule an exploratory consultation with our partners.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-4 bg-[#B08D57] text-[#1E1B18] hover:bg-[#FAF8F5] text-xs uppercase tracking-widest font-medium transition-colors flex items-center justify-center gap-2"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenGuideModal}
              className="w-full sm:w-auto px-8 py-4 border border-[#5A4636] text-[#FAF8F5] hover:border-[#B08D57] text-xs uppercase tracking-widest font-medium transition-colors"
            >
              Download 2025 Planning Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
