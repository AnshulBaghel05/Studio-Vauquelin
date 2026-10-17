import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tab: string, slug?: string) => void;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onNavigate, onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false); // scrolling down
      } else {
        setIsVisible(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { id: 'projects', label: 'Portfolio' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'about', label: 'Studio' },
    { id: 'journal', label: 'Journal' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled
            ? 'bg-[#F6F2EC]/95 backdrop-blur-md border-b border-[#E5DDD2] py-4 shadow-[0_4px_24px_rgba(0,0,0,0.02)]'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left font-serif text-2xl md:text-3xl font-light tracking-wide text-[#1E1B18] whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity focus:outline-none"
            aria-label="Studio Vauquelin Home"
          >
            Studio Vauquelin
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium tracking-[0.15em] uppercase text-[#5A4636]">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors hover:text-[#1E1B18] ${
                    isActive ? 'text-[#1E1B18] font-semibold' : 'text-[#5A4636]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#B08D57]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action CTA */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium tracking-wider uppercase text-[#F6F2EC] bg-[#1E1B18] hover:bg-[#5A4636] transition-colors rounded-none whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-[#B08D57]"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B8A99A]" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#1E1B18] hover:text-[#5A4636] transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-[#1E1B18] text-[#F6F2EC] flex flex-col justify-between p-8 pt-28">
          <div className="flex flex-col space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#B8A99A]">
              Navigation
            </span>
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-left font-serif text-3xl font-light tracking-wide hover:text-[#B08D57] transition-colors text-white"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-[#5A4636]/60 pt-6 flex flex-col gap-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-4 text-center text-xs tracking-widest uppercase font-medium bg-[#B08D57] text-[#1E1B18] hover:bg-[#F6F2EC] transition-colors"
            >
              Book a Consultation
            </button>
            <div className="flex justify-between text-xs text-[#B8A99A] tracking-wider">
              <span>Paris: +33 1 42 68 55 00</span>
              <span>New York: +1 212 946 2200</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
