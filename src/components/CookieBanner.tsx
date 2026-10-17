import React, { useState, useEffect } from 'react';

export const CookieBanner: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('sv_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('sv_cookie_consent', 'accepted');
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem('sv_cookie_consent', 'essential_only');
    setShow(false);
  };

  if (!show) return null;

  return (
    <aside
      aria-label="Cookie preferences"
      className="fixed bottom-6 right-6 z-40 max-w-sm bg-[#1E1B18] text-[#F6F2EC] p-5 border border-[#5A4636] shadow-xl text-xs space-y-3"
    >
      <div className="flex items-center justify-between text-[10px] tracking-widest uppercase text-[#B8A99A]">
        <span>Privacy Preferences</span>
        <span>Studio Vauquelin</span>
      </div>
      <p className="text-[#B8A99A] leading-relaxed">
        We utilize essential performance cookies to ensure smooth architectural rendering and font delivery. We do not engage in third-party ad tracking.
      </p>
      <div className="flex items-center gap-3 pt-1">
        <button
          onClick={handleAccept}
          className="flex-1 py-2 bg-[#B08D57] text-[#1E1B18] text-[10px] uppercase tracking-widest font-medium hover:bg-[#FAF8F5] transition-colors"
        >
          Accept All
        </button>
        <button
          onClick={handleDecline}
          className="px-3 py-2 text-[10px] uppercase tracking-widest text-[#B8A99A] hover:text-[#FAF8F5] transition-colors"
        >
          Essential Only
        </button>
      </div>
    </aside>
  );
};
