import React, { useState, useEffect } from 'react';
import { Calendar, ArrowUpRight } from 'lucide-react';

interface FloatingCTAProps {
  onOpenConsultation: () => void;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({ onOpenConsultation }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const scrolled = window.scrollY / scrollHeight;
        setVisible(scrolled > 0.25);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 animate-fadeIn">
      <button
        onClick={onOpenConsultation}
        className="group flex items-center gap-2.5 px-4 py-3 bg-[#1E1B18]/95 backdrop-blur-md text-[#FAF8F5] border border-[#5A4636] shadow-xl hover:border-[#B08D57] transition-all duration-200 text-xs tracking-wider uppercase"
        aria-label="Book a Design Consultation"
      >
        <Calendar className="w-3.5 h-3.5 text-[#B08D57]" />
        <span className="font-medium">Book Consultation</span>
        <ArrowUpRight className="w-3.5 h-3.5 text-[#B8A99A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </div>
  );
};
