import React from 'react';
import { ChevronLeft, ChevronRight, Maximize, Minimize } from 'lucide-react';
import { cn } from '../utils/cn';

export default function SlideNavigation({ 
  currentSlide, 
  totalSlides, 
  onNext, 
  onPrev,
  onGoTo,
  isFullscreen,
  toggleFullscreen
}) {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/80 p-2 rounded-full shadow-md backdrop-blur-sm border border-gray-100 z-50">
      <button 
        onClick={onPrev}
        disabled={currentSlide === 0}
        className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-30 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} className="text-gray-700" />
      </button>
      
      <div className="flex gap-2 px-2">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => onGoTo(idx)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              currentSlide === idx ? "bg-eco-dark w-4" : "bg-gray-300 hover:bg-gray-400"
            )}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <button 
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-30 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={20} className="text-gray-700" />
      </button>

      <div className="w-px h-6 bg-gray-200 mx-1"></div>
      
      <button 
        onClick={toggleFullscreen}
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Toggle fullscreen"
      >
        {isFullscreen ? (
          <Minimize size={18} className="text-gray-600" />
        ) : (
          <Maximize size={18} className="text-gray-600" />
        )}
      </button>
    </div>
  );
}
