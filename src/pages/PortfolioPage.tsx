import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { STUDIO_PROJECTS, Project } from '../data/studioData';

interface PortfolioPageProps {
  onSelectProject: (slug: string) => void;
  onOpenConsultation: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onSelectProject, onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Residential', 'Luxury Villas', 'Hospitality', 'Commercial'];

  const filteredProjects = selectedCategory === 'All'
    ? STUDIO_PROJECTS
    : STUDIO_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="space-y-4 max-w-3xl mb-12">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#B08D57] font-medium">
          Architectural Portfolio
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#1E1B18] tracking-tight">
          Selected Works & Sanctuaries
        </h1>
        <p className="text-sm md:text-base text-[#5A4636] font-light leading-relaxed">
          A curated archive of private residences, restored Haussmannian apartments, coastal Mediterranean villas, and intimate hospitality spaces across Europe, North America, and Japan.
        </p>
      </div>

      {/* Filter Tabs (Interactive Segmented Buttons) */}
      <div className="flex flex-wrap items-center gap-2 pb-8 mb-12 border-b border-[#E5DDD2]">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-all ${
              selectedCategory === cat
                ? 'bg-[#1E1B18] text-[#F6F2EC]'
                : 'bg-transparent text-[#5A4636] hover:text-[#1E1B18] border border-transparent hover:border-[#E5DDD2]'
            }`}
          >
            {cat}
            {cat === 'All' ? ` (${STUDIO_PROJECTS.length})` : ` (${STUDIO_PROJECTS.filter(p => p.category === cat).length})`}
          </button>
        ))}
      </div>

      {/* Editorial Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {filteredProjects.map((project: Project, index: number) => {
          // Asymmetric visual rhythm: every 4th card can be wider or taller
          const isLarge = index % 5 === 0;

          return (
            <article
              key={project.id}
              onClick={() => onSelectProject(project.slug)}
              className={`cursor-pointer group flex flex-col space-y-4 ${
                isLarge ? 'md:col-span-2' : 'col-span-1'
              }`}
            >
              <div
                className={`relative overflow-hidden bg-[#E7DDD0] ${
                  isLarge ? 'aspect-[16/9]' : 'aspect-[4/3]'
                }`}
              >
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#1E1B18]/15 group-hover:bg-transparent transition-colors duration-500" />

                <div className="absolute top-4 left-4 bg-[#FAF8F5]/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest font-mono text-[#1E1B18]">
                  {project.category}
                </div>

                <div className="absolute bottom-4 right-4 bg-[#1E1B18]/80 text-[#FAF8F5] p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs text-[#8E867E]">
                  <span>{project.location}</span>
                  <span className="font-mono tabular-nums">{project.year}</span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-light text-[#1E1B18] group-hover:text-[#B08D57] transition-colors">
                  {project.title}
                </h2>
                <p className="text-xs text-[#5A4636] font-light line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="pt-1 text-[11px] font-mono text-[#8E867E]">
                  Area: {project.area}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Bottom Commission Prompt */}
      <div className="mt-24 p-12 bg-[#FAF8F5] border border-[#E5DDD2] text-center space-y-6">
        <h3 className="font-serif text-3xl font-light text-[#1E1B18]">
          Have an architectural commission in mind?
        </h3>
        <p className="text-xs md:text-sm text-[#5A4636] max-w-xl mx-auto leading-relaxed">
          We work closely with clients across all time zones. Share your site plans and vision for an initial feasibility review.
        </p>
        <button
          onClick={onOpenConsultation}
          className="px-8 py-4 bg-[#1E1B18] text-[#F6F2EC] hover:bg-[#5A4636] text-xs uppercase tracking-widest font-medium transition-colors"
        >
          Book an Exploratory Consultation
        </button>
      </div>
    </div>
  );
};
