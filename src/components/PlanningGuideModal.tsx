import React, { useState } from 'react';
import { X, Download, CheckCircle2, BookOpen } from 'lucide-react';

interface PlanningGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PlanningGuideModal: React.FC<PlanningGuideModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [propertyType, setPropertyType] = useState('Private Residence');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1E1B18]/90 backdrop-blur-sm p-4 md:p-6 animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#FAF8F5] text-[#1E1B18] p-8 md:p-10 border border-[#E5DDD2] shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#5A4636] hover:text-[#1E1B18] transition-colors focus:outline-none"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#B08D57] font-medium flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5" />
                Complimentary 42-Page Whitepaper
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-light text-[#1E1B18] leading-tight">
                The 2025 Residential Architectural & Interior Planning Guide
              </h2>
              <p className="text-xs md:text-sm text-[#5A4636] font-light leading-relaxed">
                A rigorous manual authored by Studio Vauquelin partners. Covers budget benchmarking per square meter, navigating historic heritage authorities, stone and timber longevity indexes, and the 10 critical questions to ask before hiring a general contractor.
              </p>
            </div>

            <div className="bg-[#F6F2EC] p-4 text-xs text-[#5A4636] space-y-1.5 border border-[#E5DDD2]">
              <div className="font-medium text-[#1E1B18]">Inside this edition:</div>
              <div>· Real construction cost ranges for Paris, London, and New York</div>
              <div>· The 6 non-negotiable stages of luxury turnkey delivery</div>
              <div>· Avoiding the 5 most expensive contractor change-orders</div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#5A4636] mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Caroline de Beaufort"
                  className="w-full bg-[#FFFFFF] border border-[#E5DDD2] px-3.5 py-2.5 text-sm text-[#1E1B18] focus:outline-none focus:border-[#B08D57]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#5A4636] mb-1">
                  Email Address (PDF will be sent here)
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="c.beaufort@domain.com"
                  className="w-full bg-[#FFFFFF] border border-[#E5DDD2] px-3.5 py-2.5 text-sm text-[#1E1B18] focus:outline-none focus:border-[#B08D57]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#5A4636] mb-1">
                  Primary Property Interest
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full bg-[#FFFFFF] border border-[#E5DDD2] px-3.5 py-2.5 text-sm text-[#1E1B18] focus:outline-none focus:border-[#B08D57]"
                >
                  <option value="Private Residence">Historic European Townhouse / Apartment</option>
                  <option value="Luxury Villa">Mediterranean / Alpine Villa</option>
                  <option value="Manhattan Loft">Penthouse or Urban Loft</option>
                  <option value="Hospitality">Boutique Hotel / Restaurant / Lounge</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#1E1B18] text-[#F6F2EC] hover:bg-[#5A4636] text-xs uppercase tracking-widest font-medium transition-colors flex items-center justify-center gap-2 mt-4"
              >
                <Download className="w-4 h-4 text-[#B08D57]" />
                <span>Instant PDF Download & Access</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#FAF8F5] border border-[#B08D57] flex items-center justify-center text-[#B08D57]">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-light text-[#1E1B18]">
              Your Planning Guide is Ready
            </h3>
            <p className="text-xs md:text-sm text-[#5A4636] max-w-sm mx-auto leading-relaxed">
              We have dispatched the high-resolution 42-page dossier to <strong className="text-[#1E1B18]">{email}</strong>.
              A direct copy has also been generated for immediate offline reading.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#download-complete"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Download starting: 'Studio_Vauquelin_2025_Planning_Guide.pdf'");
                }}
                className="px-6 py-2.5 bg-[#B08D57] text-[#1E1B18] text-xs uppercase tracking-widest font-medium hover:bg-[#1E1B18] hover:text-white transition-colors"
              >
                Save PDF (18.4 MB)
              </a>
              <button
                onClick={onClose}
                className="px-6 py-2.5 border border-[#E5DDD2] text-[#5A4636] text-xs uppercase tracking-widest hover:text-[#1E1B18] transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
