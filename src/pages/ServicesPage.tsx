import React, { useState } from 'react';
import { ArrowUpRight, Check, ChevronDown, HelpCircle, Shield } from 'lucide-react';
import { STUDIO_SERVICES, STUDIO_FAQS } from '../data/studioData';

interface ServicesPageProps {
  onOpenConsultation: () => void;
  onOpenGuideModal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenConsultation, onOpenGuideModal }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const engagementTiers = [
    {
      name: 'Initial Architectural Consultation & Feasibility Dossier',
      tag: 'Strategic Beginning',
      price: '€3,500',
      period: 'One-time engagement',
      description: 'A focused, high-impact diagnostic review before committing to major property acquisition or construction contracts.',
      features: [
        'Half-day on-site inspection or detailed laser-scan review',
        'Zoning, heritage classification & structural feasibility audit',
        'Preliminary 2D spatial layout sketches and flow optimization',
        'Realistic total project budget model per square meter',
        'Actionable 15-page Architectural Feasibility Dossier'
      ],
      ideal: 'Prospective buyers evaluating luxury properties or homeowners assessing renovation viability.'
    },
    {
      name: 'Comprehensive Interior Architecture & Design',
      tag: 'Most Requested',
      price: 'From €75,000',
      period: '12% – 15% of construction value',
      description: 'Full-spectrum spatial architecture, millwork detailing, lighting choreography, and bespoke furniture specification.',
      features: [
        'Complete spatial reconfiguration and architectural drawings (1:50 & 1:20)',
        'Custom millwork blueprints for kitchen, wardrobes, and library joinery',
        'Curated physical material tray (travertine, french oak, aged brass, linen)',
        'Comprehensive FF&E lookbooks and trade discount access',
        'Full contractor tender documentation and bidding evaluation'
      ],
      ideal: 'Private clients undertaking complete gut-renovations, historic restorations, or luxury villa interiors.'
    },
    {
      name: 'Turnkey Architectural Delivery & Site Direction',
      tag: 'Complete Peace of Mind',
      price: 'From €125,000',
      period: 'All-inclusive single source',
      description: 'Total stewardship from demolition to the first evening. We manage all contractors, artisan workshops, and move-in logistics.',
      features: [
        'Everything in Comprehensive Interior Architecture',
        'Dedicated senior project architect on-site throughout construction',
        'Weekly photographic audit reports and line-item budget reconciliation',
        'Consolidated international logistics, customs, and climate warehousing',
        'White-glove installation: art hanging, linen steaming, turnkey key delivery'
      ],
      ideal: 'Overseas homeowners, international collectors, and executives demanding uncompromising perfection without operational stress.'
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="space-y-4 max-w-3xl mb-16">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#B08D57] font-medium">
          Studio Capabilities
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#1E1B18] tracking-tight">
          Architectural Services & Disciplines
        </h1>
        <p className="text-sm md:text-base text-[#5A4636] font-light leading-relaxed">
          We combine architectural rigor with bespoke artisan procurement. Our practice handles every phase of spatial transformation under a unified vision.
        </p>
      </div>

      {/* Detailed Service Blocks */}
      <div className="space-y-24 mb-32">
        {STUDIO_SERVICES.map((service, index) => (
          <section
            key={service.number}
            className="pt-12 border-t border-[#E5DDD2] grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          >
            {/* Left Col: Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm text-[#B08D57] font-semibold">
                  {service.number}
                </span>
                <span className="text-xs uppercase tracking-widest text-[#8E867E]">
                  Scope & Deliverables
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#1E1B18]">
                {service.title}
              </h2>

              <p className="text-sm md:text-base text-[#5A4636] font-light leading-relaxed">
                {service.tagline}
              </p>

              <div className="space-y-4 pt-2">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-[#1E1B18]">
                  Architectural Scope
                </h3>
                <ul className="space-y-2 text-xs text-[#5A4636]">
                  {service.scope.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B08D57] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 pt-2">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-[#1E1B18]">
                  Core Deliverables
                </h3>
                <ul className="space-y-2 text-xs text-[#5A4636]">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="w-3.5 h-3.5 text-[#B08D57] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-[#FAF8F5] border border-[#E5DDD2] text-xs space-y-1">
                <span className="text-[#8E867E] uppercase tracking-wider block">Ideal For</span>
                <p className="text-[#1E1B18]">{service.idealFor}</p>
                <div className="pt-2 text-[11px] font-mono text-[#B08D57]">
                  Investment: {service.pricingEstimate}
                </div>
              </div>
            </div>

            {/* Right Col: Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#E7DDD0] border border-[#E5DDD2]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Engagement Tiers with Transparent Pricing */}
      <section className="py-20 border-t border-[#E5DDD2]">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#B08D57] font-medium">
            Engagement Structures
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#1E1B18]">
            Transparent Investment Models
          </h2>
          <p className="text-xs md:text-sm text-[#5A4636] font-light leading-relaxed">
            We operate with clear, line-item fee models and pass trade discounts directly to clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {engagementTiers.map((tier, index) => (
            <div
              key={index}
              className={`p-8 flex flex-col justify-between border ${
                index === 1
                  ? 'bg-[#FAF8F5] border-[#B08D57] shadow-lg relative'
                  : 'bg-[#FFFFFF] border-[#E5DDD2]'
              }`}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest font-mono text-[#B08D57]">
                    {tier.tag}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-light text-[#1E1B18] leading-snug">
                    {tier.name}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-serif text-3xl font-light text-[#1E1B18] tabular-nums">
                      {tier.price}
                    </span>
                    <span className="text-xs text-[#8E867E]">/ {tier.period}</span>
                  </div>
                </div>

                <p className="text-xs text-[#5A4636] font-light leading-relaxed">
                  {tier.description}
                </p>

                <div className="border-t border-[#E5DDD2] pt-4 space-y-3">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#1E1B18] block">
                    Scope Included:
                  </span>
                  <ul className="space-y-2 text-xs text-[#5A4636]">
                    {tier.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#B08D57] mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={onOpenConsultation}
                  className={`w-full py-3 text-xs uppercase tracking-widest font-medium transition-colors ${
                    index === 1
                      ? 'bg-[#1E1B18] text-[#FAF8F5] hover:bg-[#5A4636]'
                      : 'bg-[#F6F2EC] text-[#1E1B18] hover:bg-[#1E1B18] hover:text-white border border-[#E5DDD2]'
                  }`}
                >
                  Select Engagement
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion (8 Questions) */}
      <section className="py-20 border-t border-[#E5DDD2]">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B08D57] font-medium flex items-center justify-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              Frequently Asked Questions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#1E1B18]">
              Architectural Practice & Client Engagement
            </h2>
            <p className="text-xs text-[#5A4636]">
              Clear answers regarding fees, contractor coordination, historic preservation, and timelines.
            </p>
          </div>

          <div className="divide-y divide-[#E5DDD2] border-y border-[#E5DDD2]">
            {STUDIO_FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="py-6">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between text-left text-sm md:text-base font-serif font-normal text-[#1E1B18] hover:text-[#B08D57] transition-colors gap-4"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#B08D57] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="pt-4 text-xs md:text-sm text-[#5A4636] font-light leading-relaxed pr-8 animate-fadeIn">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center pt-8">
            <button
              onClick={onOpenGuideModal}
              className="text-xs uppercase tracking-widest text-[#B08D57] hover:text-[#1E1B18] underline transition-colors"
            >
              Need more details? Download our 2025 Planning Guide (PDF)
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
