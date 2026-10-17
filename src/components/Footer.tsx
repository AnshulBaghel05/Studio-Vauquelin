import React, { useState } from 'react';
import { ArrowUp, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenConsultation: () => void;
  onOpenGuideModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation, onOpenGuideModal }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setIsSubscribed(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1E1B18] text-[#F6F2EC] pt-24 pb-12 border-t border-[#38332E]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Newsletter & Briefing Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#38332E]">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B8A99A]">
              The Vauquelin Monograph
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-light text-[#FAF8F5] leading-snug">
              Quarterly essays on quiet architectural luxury, rare stone provenance, and collectible design.
            </h3>
            <p className="text-sm text-[#B8A99A] font-light max-w-md">
              Reserved for collectors, architects, and discerning homeowners. Zero promotional clutter.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            {isSubscribed ? (
              <div className="flex items-center gap-3 p-4 bg-[#2A2622] border border-[#5A4636] text-[#FAF8F5]">
                <CheckCircle2 className="w-5 h-5 text-[#B08D57] shrink-0" />
                <p className="text-sm">
                  You are now enrolled in the Monograph. Our next private edition will arrive in your inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-[#2A2622] border border-[#5A4636] px-4 py-3.5 text-sm text-[#FAF8F5] placeholder-[#8E867E] focus:outline-none focus:border-[#B08D57] transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-[#B08D57] text-[#1E1B18] text-xs uppercase tracking-widest font-medium hover:bg-[#FAF8F5] transition-colors shrink-0 flex items-center justify-center gap-2"
                >
                  <span>Subscribe</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="mt-4 flex items-center gap-4 text-xs text-[#B8A99A]">
              <span>Complimentary resource:</span>
              <button
                type="button"
                onClick={onOpenGuideModal}
                className="underline hover:text-[#FAF8F5] transition-colors"
              >
                Download 2025 Interior Planning Guide (PDF)
              </button>
            </div>
          </div>
        </div>

        {/* Studio Locations and Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 py-16 border-b border-[#38332E] text-sm">
          {/* Col 1: Paris Atelier */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#B08D57]">
              Paris Atelier
            </span>
            <p className="text-[#B8A99A] leading-relaxed text-xs">
              18 Rue de l’Université<br />
              75007 Paris, France<br />
              Saint-Germain-des-Prés<br />
              +33 1 42 68 55 00
            </p>
          </div>

          {/* Col 2: New York Studio */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#B08D57]">
              New York Studio
            </span>
            <p className="text-[#B8A99A] leading-relaxed text-xs">
              64 White Street, 4th Floor<br />
              Tribeca, New York, NY 10013<br />
              United States<br />
              +1 212 946 2200
            </p>
          </div>

          {/* Col 3: Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#B08D57]">
              Studio Navigation
            </span>
            <ul className="space-y-2 text-xs text-[#B8A99A]">
              <li>
                <button onClick={() => onNavigate('projects')} className="hover:text-[#FAF8F5] transition-colors">
                  Selected Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#FAF8F5] transition-colors">
                  Architectural Services & Tiers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('process')} className="hover:text-[#FAF8F5] transition-colors">
                  Six-Stage Methodology
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#FAF8F5] transition-colors">
                  Founder Story & Philosophy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('journal')} className="hover:text-[#FAF8F5] transition-colors">
                  Editorial Essays & Journal
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Engagements & Legal */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#B08D57]">
              Inquiries & Bookings
            </span>
            <ul className="space-y-2 text-xs text-[#B8A99A]">
              <li>
                <button onClick={onOpenConsultation} className="hover:text-[#FAF8F5] font-medium text-white transition-colors">
                  Book a Design Consultation
                </button>
              </li>
              <li>
                <a href="mailto:atelier@studiovauquelin.com" className="hover:text-[#FAF8F5] transition-colors">
                  atelier@studiovauquelin.com
                </a>
              </li>
              <li>
                <a href="mailto:press@studiovauquelin.com" className="hover:text-[#FAF8F5] transition-colors">
                  press@studiovauquelin.com
                </a>
              </li>
              <li className="pt-2 text-[11px] text-[#8E867E]">
                Atelier visits strictly by prior appointment.
              </li>
            </ul>
          </div>
        </div>

        {/* Monumental Serif Wordmark */}
        <div className="pt-16 pb-8 text-center select-none overflow-hidden">
          <h2 className="font-serif text-[12vw] leading-none font-light tracking-tight text-[#2B2723] whitespace-nowrap">
            STUDIO VAUQUELIN
          </h2>
        </div>

        {/* Bottom bar with quiet copyright, legal, back to top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-[#8E867E] border-t border-[#2A2622]">
          <p>© {new Date().getFullYear()} Studio Vauquelin Architecture & Interiors. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#B8A99A] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#B8A99A] cursor-pointer">Terms of Engagement</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-[#FAF8F5] text-[#B8A99A] transition-colors ml-4"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
