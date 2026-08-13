import React, { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import SlideNavigation from './SlideNavigation';
import ProgressBar from './ProgressBar';
import SlideCounter from './SlideCounter';

import Slide0 from '../slides/Slide0';
import Slide1 from '../slides/Slide1';
import Slide1b from '../slides/Slide1b';
import Slide2 from '../slides/Slide2';
import Slide3 from '../slides/Slide3';
import Slide4 from '../slides/Slide4';
import Slide5 from '../slides/Slide5';
import Slide6 from '../slides/Slide6';
import Slide7 from '../slides/Slide7';
import Slide8 from '../slides/Slide8';
import Slide9 from '../slides/Slide9';
import SlideVideo from '../slides/SlideVideo';

const slides = [Slide0, Slide1, Slide1b, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, SlideVideo, Slide9];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);

  const handleNext = useCallback(() => setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1)), []);
  const handlePrev = useCallback(() => setCurrentSlide(prev => Math.max(prev - 1, 0)), []);
  const handleGoTo = useCallback((index) => setCurrentSlide(index), []);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      try { await containerRef.current.requestFullscreen(); setIsFullscreen(true); }
      catch (err) { console.error(err.message); }
    } else {
      await document.exitFullscreen(); setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowRight': case ' ': case 'PageDown': e.preventDefault(); handleNext(); break;
        case 'ArrowLeft': case 'PageUp': e.preventDefault(); handlePrev(); break;
        case 'Home': e.preventDefault(); handleGoTo(0); break;
        case 'End': e.preventDefault(); handleGoTo(slides.length - 1); break;
        default: break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, handleGoTo]);

  useEffect(() => {
    const handleFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div
      ref={containerRef}
      className="w-full h-screen flex items-center justify-center overflow-hidden relative"
      style={{ background: 'linear-gradient(135deg, #f1f5f9 0%, #e9f5ec 100%)' }}
    >
      <ProgressBar currentSlide={currentSlide} totalSlides={slides.length} />

      {/* Slide frame */}
      <div className="slide-bg w-full h-full md:max-w-[177.77vh] md:max-h-[56.25vw] relative shadow-2xl md:rounded-2xl overflow-hidden flex flex-col border border-white/80">



        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="relative z-10 w-full h-full px-8 sm:px-12 md:px-20 py-8 md:py-12 flex flex-col overflow-y-auto hide-scrollbar pb-24 md:pb-20"
          >
            <CurrentSlideComponent onNext={handleNext} onRestart={() => handleGoTo(0)} />
          </motion.div>
        </AnimatePresence>
      </div>

      <SlideCounter currentSlide={currentSlide} totalSlides={slides.length} />
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onNext={handleNext}
        onPrev={handlePrev}
        onGoTo={handleGoTo}
        isFullscreen={isFullscreen}
        toggleFullscreen={toggleFullscreen}
      />
    </div>
  );
}
