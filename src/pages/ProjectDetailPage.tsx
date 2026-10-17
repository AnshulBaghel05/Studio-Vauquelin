import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Maximize2 } from 'lucide-react';
import { STUDIO_PROJECTS, Project } from '../data/studioData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { LightboxModal } from '../components/LightboxModal';

interface ProjectDetailPageProps {
  slug: string;
  onNavigate: (tab: string, slug?: string) => void;
  onOpenConsultation: () => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenConsultation
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Find project by slug or fallback to first
  const projectIndex = STUDIO_PROJECTS.findIndex((p) => p.slug === slug);
  const project: Project = projectIndex !== -1 ? STUDIO_PROJECTS[projectIndex] : STUDIO_PROJECTS[0];

  // Calculate Next Project
  const nextProjectIndex = (projectIndex + 1) % STUDIO_PROJECTS.length;
  const nextProject = STUDIO_PROJECTS[nextProjectIndex];

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="pt-28 pb-24">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <button
          onClick={() => onNavigate('projects')}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#5A4636] hover:text-[#1E1B18] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Portfolio</span>
        </button>
      </div>

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 space-y-4">
        <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#B08D57] font-mono">
          <span>{project.category}</span>
          <span>·</span>
          <span>{project.location}</span>
          <span>·</span>
          <span className="tabular-nums">{project.year}</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#1E1B18] tracking-tight">
          {project.title}
        </h1>
        <p className="text-base sm:text-lg text-[#5A4636] font-light max-w-3xl leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Full-Bleed Hero Image */}
      <div className="w-full h-[65vh] md:h-[80vh] overflow-hidden bg-[#E7DDD0] relative group">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
        <button
          onClick={() => handleOpenLightbox(0)}
          className="absolute bottom-6 right-6 p-3 bg-[#1E1B18]/80 text-[#FAF8F5] hover:bg-[#B08D57] transition-colors flex items-center gap-2 text-xs uppercase tracking-widest"
        >
          <Maximize2 className="w-4 h-4" />
          <span>View High-Res</span>
        </button>
      </div>

      {/* Project Meta Bar */}
      <div className="border-b border-[#E5DDD2] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
          <div>
            <span className="text-[#8E867E] uppercase tracking-wider block mb-1">Spatial Area</span>
            <span className="font-medium text-[#1E1B18]">{project.area}</span>
          </div>
          <div>
            <span className="text-[#8E867E] uppercase tracking-wider block mb-1">Scope of Work</span>
            <span className="font-medium text-[#1E1B18]">{project.scope}</span>
          </div>
          <div>
            <span className="text-[#8E867E] uppercase tracking-wider block mb-1">Location</span>
            <span className="font-medium text-[#1E1B18]">{project.location}</span>
          </div>
          <div>
            <span className="text-[#8E867E] uppercase tracking-wider block mb-1">Photography</span>
            <span className="font-medium text-[#1E1B18]">{project.photographer}</span>
          </div>
        </div>
      </div>

      {/* Concept Narrative: Challenge → Approach → Result */}
      <section className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B08D57] font-medium block">
              Architectural Narrative
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-[#1E1B18]">
              The Spatial Journey
            </h2>
            <p className="text-xs text-[#5A4636] font-light leading-relaxed pt-2">
              Every Studio Vauquelin project resolves the friction between historical permanence and contemporary lifestyle fluidity.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-3 pb-8 border-b border-[#E5DDD2]">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B08D57]">
                01. The Challenge
              </span>
              <h3 className="font-serif text-2xl font-light text-[#1E1B18]">
                Overcoming Rigid Boundaries
              </h3>
              <p className="text-sm text-[#5A4636] font-light leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="space-y-3 pb-8 border-b border-[#E5DDD2]">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B08D57]">
                02. The Architectural Approach
              </span>
              <h3 className="font-serif text-2xl font-light text-[#1E1B18]">
                Materiality & Calibrated Light
              </h3>
              <p className="text-sm text-[#5A4636] font-light leading-relaxed">
                {project.approach}
              </p>
            </div>

            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B08D57]">
                03. The Result
              </span>
              <h3 className="font-serif text-2xl font-light text-[#1E1B18]">
                An Enduring Sanctuary
              </h3>
              <p className="text-sm text-[#5A4636] font-light leading-relaxed">
                {project.result}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Before / After Slider Section (if available) */}
      {project.beforeImage && project.afterImage && (
        <section className="py-16 md:py-24 bg-[#FAF8F5] border-y border-[#E5DDD2] px-6 md:px-12">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#B08D57] font-medium">
                Metamorphosis
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-[#1E1B18]">
                Original State vs. Transformed Architecture
              </h2>
              <p className="text-xs text-[#5A4636]">
                Slide across to witness how compartmentalized, dark rooms were unified into a continuous light sanctuary.
              </p>
            </div>

            <BeforeAfterSlider
              beforeImage={project.beforeImage}
              afterImage={project.afterImage}
              beforeAlt="Before restoration"
              afterAlt="Completed Studio Vauquelin interior"
            />
          </div>
        </section>
      )}

      {/* Materials & Palette Swatches */}
      {project.materials && project.materials.length > 0 && (
        <section className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E5DDD2] pb-6">
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#B08D57] font-medium block mb-2">
                  Material Palette
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-light text-[#1E1B18]">
                  Tactile Finishes & Provenance
                </h2>
              </div>
              <p className="text-xs text-[#5A4636] max-w-md">
                Selected for their capacity to absorb natural illumination and deepen in character over generations.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {project.materials.map((mat, i) => (
                <div key={i} className="p-5 bg-[#FAF8F5] border border-[#E5DDD2] space-y-4">
                  <div
                    className="w-full aspect-[4/3] border border-[#E5DDD2]/50 shadow-inner"
                    style={{ backgroundColor: mat.color }}
                  />
                  <div>
                    <h3 className="font-serif text-lg font-normal text-[#1E1B18]">{mat.name}</h3>
                    <p className="text-[11px] text-[#8E867E] uppercase tracking-wider">{mat.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Image Gallery (Alternating Full-Width & 2-Up) */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto space-y-12 pb-24">
        <div className="flex items-center justify-between border-b border-[#E5DDD2] pb-4">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#B08D57] font-medium">
            Architectural Plates
          </span>
          <span className="text-xs text-[#8E867E]">Click any photograph to expand</span>
        </div>

        <div className="space-y-8">
          {project.gallery.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleOpenLightbox(idx)}
              className="cursor-pointer group relative overflow-hidden bg-[#E7DDD0] aspect-[16/9] border border-[#E5DDD2]"
            >
              <img
                src={item.url}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1E1B18]/80 to-transparent p-6 flex justify-between items-end text-xs text-[#FAF8F5]">
                <p className="font-light max-w-xl">{item.caption}</p>
                <div className="p-2 bg-[#1E1B18]/80 hover:bg-[#B08D57] transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Testimonial (if available) */}
      {project.testimonial && (
        <section className="py-20 bg-[#FAF8F5] border-y border-[#E5DDD2] px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#B08D57] font-medium">
              Client Reflection
            </span>
            <blockquote className="font-serif text-2xl sm:text-3xl font-light text-[#1E1B18] italic leading-relaxed">
              “{project.testimonial.quote}”
            </blockquote>
            <div className="text-xs">
              <span className="font-semibold text-[#1E1B18] block">{project.testimonial.author}</span>
              <span className="text-[#8E867E]">{project.testimonial.title}</span>
            </div>
          </div>
        </section>
      )}

      {/* Next Project Large Navigation */}
      <section className="pt-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="border-t border-[#E5DDD2] pt-12">
          <span className="text-xs uppercase tracking-widest text-[#8E867E] block mb-4">
            Next Project
          </span>
          <div
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              onNavigate('project-detail', nextProject.slug);
            }}
            className="group cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6 py-6 border-b border-[#E5DDD2] hover:border-[#1E1B18] transition-colors"
          >
            <div>
              <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#1E1B18] group-hover:text-[#B08D57] transition-colors">
                {nextProject.title}
              </h2>
              <p className="text-xs text-[#8E867E] mt-2 tracking-wider uppercase">
                {nextProject.category} · {nextProject.location}
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#1E1B18] group-hover:translate-x-2 transition-transform">
              <span>View Case Study</span>
              <ArrowUpRight className="w-5 h-5 text-[#B08D57]" />
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal Component */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={project.gallery}
        currentIndex={lightboxIndex}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </div>
  );
};
