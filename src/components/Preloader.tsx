import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsFading(true), 150);
          setTimeout(() => onComplete(), 750);
          return 100;
        }
        const increment = Math.floor(Math.random() * 12) + 5;
        return Math.min(100, prev + increment);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#1E1B18] text-[#F6F2EC] p-8 md:p-12 transition-opacity duration-700 ease-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-hidden={isFading}
    >
      <div className="w-full flex justify-between items-center text-xs tracking-[0.25em] uppercase text-[#B8A99A]">
        <span>Studio Vauquelin</span>
        <span>Paris · New York · Kyoto</span>
      </div>

      <div className="flex flex-col items-center text-center max-w-md">
        <span className="font-serif text-5xl md:text-7xl font-light tracking-wider text-[#FAF8F5] mb-4">
          SV
        </span>
        <p className="font-serif italic text-lg md:text-xl text-[#B8A99A] tracking-wide">
          Spaces that feel like you.
        </p>
      </div>

      <div className="w-full max-w-xs flex flex-col items-center gap-2">
        <div className="w-full h-[1px] bg-[#5A4636] relative overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-[#B08D57] transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="w-full flex justify-between text-[11px] font-mono tracking-widest text-[#B8A99A] tabular-nums">
          <span>INITIALIZING SPATIAL AUDIT</span>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
};
