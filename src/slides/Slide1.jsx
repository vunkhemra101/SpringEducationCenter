import React from 'react';
import { Earth, Leaf, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Slide1({ onNext }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mb-12"
      >
        <div className="w-48 h-48 bg-eco-light/30 rounded-full flex items-center justify-center shadow-lg relative">
          <Earth className="w-32 h-32 text-eco-dark" strokeWidth={1.5} />
          <motion.div 
            animate={{ rotate: 10, y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-4 -right-4"
          >
            <Leaf className="w-16 h-16 text-green-500 fill-green-500/20" />
          </motion.div>
        </div>
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-1.5 rounded-full shadow border border-gray-100 text-xs font-semibold text-eco-dark uppercase tracking-wider whitespace-nowrap">
          Environmental Education
        </div>
      </motion.div>

      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 tracking-tight"
      >
        Assessing <span className="text-eco-dark">Environmental</span> Learning
      </motion.h1>

      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-12"
      >
        Understanding Knowledge, Skills, Attitudes & Environmental Behavior
      </motion.p>

      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="flex items-center gap-3 bg-eco-dark text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-900 transition-colors shadow-lg shadow-eco-dark/30"
      >
        Start Presentation
        <Play size={20} fill="currentColor" />
      </motion.button>
    </div>
  );
}
