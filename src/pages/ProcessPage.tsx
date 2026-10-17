import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Clock } from 'lucide-react';
import { STUDIO_PROCESS_STEPS } from '../data/studioData';

interface ProcessPageProps {
  onOpenConsultation: () => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onOpenConsultation }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="space-y-4 max-w-3xl mb-16">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#B08D57] font-medium">
          Architectural Methodology
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#1E1B18] tracking-tight">
          The Six-Stage Spatial Journey
        </h1>
        <p className="text-sm md:text-base text-[#5A4636] font-light leading-relaxed">
          From laser-scanned baseline measurements to the final scented candle lit before key handover, our phased delivery ensures absolute design fidelity and budget control.
        </p>
      </div>

      {/* Scrollytelling Interactive Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Col: Timeline Steps */}
        <div className="lg:col-span-7 space-y-16">
          {STUDIO_PROCESS_STEPS.map((step, index) => {
            const isActive = activeStepIndex === index;
            return (
              <div
                key={step.number}
                onMouseEnter={() => setActiveStepIndex(index)}
                onClick={() => setActiveStepIndex(index)}
                className={`p-8 border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#FAF8F5] border-[#B08D57] shadow-sm'
                    : 'bg-transparent border-[#E5DDD2] hover:border-[#B8A99A]'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-mono text-[#B08D57] font-semibold">
                    {step.stage} · STAGE {step.number}
                  </span>
                  <div className="flex items-center gap-1.5 text-[#8E867E]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{step.duration}</span>
                  </div>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#1E1B18] mb-4">
                  {step.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#5A4636] font-light leading-relaxed mb-6">
                  {step.description}
                </p>

                <div className="border-t border-[#E5DDD2] pt-4 space-y-2">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#1E1B18] block">
                    Phase Key Deliverables:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#5A4636]">
                    {step.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B08D57] mt-0.5 shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mobile Image preview (only if small screen) */}
                <div className="mt-6 lg:hidden aspect-[16/9] overflow-hidden bg-[#E7DDD0]">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Col: Sticky Image Panel on Desktop */}
        <div className="hidden lg:block lg:col-span-5 sticky top-32">
          <div className="space-y-4">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#E7DDD0] border border-[#E5DDD2] shadow-xl">
              <img
                src={STUDIO_PROCESS_STEPS[activeStepIndex].image}
                alt={STUDIO_PROCESS_STEPS[activeStepIndex].title}
                className="w-full h-full object-cover transition-all duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 bg-[#1E1B18]/80 text-[#FAF8F5] text-[10px] tracking-widest uppercase font-mono px-3 py-1">
                {STUDIO_PROCESS_STEPS[activeStepIndex].stage}
              </div>
            </div>

            <div className="p-6 bg-[#FAF8F5] border border-[#E5DDD2] space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-[#B08D57] font-semibold">
                Studio Standard
              </span>
              <h3 className="font-serif text-lg text-[#1E1B18]">
                {STUDIO_PROCESS_STEPS[activeStepIndex].title}
              </h3>
              <p className="text-xs text-[#5A4636] leading-relaxed">
                Every milestone requires mutual sign-off before proceeding, safeguarding both budget discipline and aesthetic precision.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Band */}
      <div className="mt-24 p-12 bg-[#1E1B18] text-[#F6F2EC] flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#B08D57]">
            Next Step
          </span>
          <h3 className="font-serif text-3xl font-light text-[#FAF8F5]">
            Ready to initiate Phase 01 for your property?
          </h3>
          <p className="text-xs text-[#B8A99A]">
            Schedule an introductory consultation to discuss feasibility and initial timelines.
          </p>
        </div>
        <button
          onClick={onOpenConsultation}
          className="px-8 py-4 bg-[#B08D57] text-[#1E1B18] hover:bg-[#FAF8F5] text-xs uppercase tracking-widest font-medium transition-colors shrink-0 flex items-center gap-2"
        >
          <span>Book Consultation</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
