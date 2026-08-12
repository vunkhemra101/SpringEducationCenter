import React, { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import SlideNavigation from './SlideNavigation';
import ProgressBar from './ProgressBar';
import SlideCounter from './SlideCounter';

import Slide0 from '../slides/Slide0';
import Slide1 from '../slides/Slide1';
import Slide2 from '../slides/Slide2';
import Slide3 from '../slides/Slide3';
import Slide4 from '../slides/Slide4';
import Slide5 from '../slides/Slide5';
import Slide6 from '../slides/Slide6';
import Slide7 from '../slides/Slide7';
import Slide8 from '../slides/Slide8';
import Slide9 from '../slides/Slide9';

const slides = [
  Slide0,
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9
];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);

  const handleNext = useCallback(() => {
    setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1));
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  }, []);

  const handleGoTo = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      try {
        await containerRef.current.requestFullscreen();
        setIsFullscreen(true);
      } catch (err) {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      }
    } else {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          handleNext();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          handlePrev();
          break;
        case 'Home':
          e.preventDefault();
          handleGoTo(0);
          break;
        case 'End':
          e.preventDefault();
          handleGoTo(slides.length - 1);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, handleGoTo]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div 
      ref={containerRef}
      className="w-full h-screen bg-gray-50 flex items-center justify-center overflow-hidden relative font-sans"
    >
      <ProgressBar currentSlide={currentSlide} totalSlides={slides.length} />
      
      {/* Presentation Container */}
      <div className="w-full h-full md:max-w-[177.77vh] md:max-h-[56.25vw] relative bg-white shadow-2xl md:rounded-xl overflow-hidden flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full p-4 sm:p-8 md:p-16 flex flex-col overflow-y-auto hide-scrollbar pb-24 md:pb-16"
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
