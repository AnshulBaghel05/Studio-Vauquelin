import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: { url: string; caption: string }[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate
}) => {
  const currentImage = images[currentIndex];

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !currentImage) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1E1B18]/95 backdrop-blur-md p-4 md:p-8 animate-fadeIn">
      {/* Top Bar with counter & close */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-xs text-[#B8A99A] tracking-widest z-10">
        <span className="font-mono">
          PLATE {currentIndex + 1} / {images.length}
        </span>
        <button
          onClick={onClose}
          className="p-2 text-[#F6F2EC] hover:text-[#B08D57] transition-colors focus:outline-none"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Prev button */}
      {images.length > 1 && (
        <button
          onClick={handlePrev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 bg-[#1E1B18]/60 hover:bg-[#B08D57] text-[#FAF8F5] transition-colors z-10"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Main Image & Caption */}
      <div className="max-w-6xl max-h-[85vh] flex flex-col items-center justify-center">
        <img
          src={currentImage.url}
          alt={currentImage.caption || 'Architectural View'}
          className="max-h-[75vh] max-w-full object-contain shadow-2xl"
        />
        {currentImage.caption && (
          <p className="mt-4 text-center text-xs md:text-sm font-light text-[#B8A99A] max-w-xl">
            {currentImage.caption}
          </p>
        )}
      </div>

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={handleNext}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 bg-[#1E1B18]/60 hover:bg-[#B08D57] text-[#FAF8F5] transition-colors z-10"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};
