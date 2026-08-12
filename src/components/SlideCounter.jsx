import React from 'react';

export default function SlideCounter({ currentSlide, totalSlides }) {
  return (
    <div className="absolute bottom-6 right-6 text-gray-500 font-medium text-sm z-50 bg-white/80 px-3 py-1 rounded-full shadow-sm backdrop-blur-sm border border-gray-100">
      {currentSlide + 1} / {totalSlides}
    </div>
  );
}
