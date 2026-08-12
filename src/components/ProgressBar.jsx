import React from 'react';
import { motion } from 'framer-motion';

export default function ProgressBar({ currentSlide, totalSlides }) {
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="fixed top-0 left-0 right-0 h-0.5 bg-gray-200/60 z-50">
      <motion.div
        className="h-full bg-eco-dark rounded-r-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      />
    </div>
  );
}

