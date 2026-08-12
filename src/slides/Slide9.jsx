import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, RotateCcw } from 'lucide-react';

const keywords = ['Knowledge', 'Skills', 'Attitudes', 'Behavior'];

export default function Slide9({ onRestart }) {
  return (
    <div className="flex flex-col h-full items-center justify-center text-center gap-8">
      {/* Icon badge */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-16 h-16 bg-eco-pale rounded-2xl border border-eco-light/60 flex items-center justify-center shadow-sm"
      >
        <Leaf className="w-8 h-8 text-eco-dark" />
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="flex flex-col items-center gap-3"
      >
        <span className="accent-pill">Conclusion</span>
        <h2 className="slide-title max-w-xl mt-2">Thank You!</h2>
      </motion.div>

      {/* Key quote */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="clean-card border border-eco-light/50 bg-eco-pale px-8 py-5 max-w-lg"
      >
        <p className="text-lg font-semibold text-eco-dark leading-snug">
          "Good assessment creates responsible environmental citizens."
        </p>
      </motion.div>

      {/* Keyword pills */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="flex flex-wrap justify-center gap-2"
      >
        {keywords.map((kw, i) => (
          <span key={i} className="px-4 py-1.5 rounded-full bg-white border border-gray-100 shadow-sm text-gray-600 text-sm font-medium">
            {kw}
          </span>
        ))}
      </motion.div>

      {/* Summary paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="slide-subtitle max-w-xl"
      >
        Using diverse assessment methods makes environmental education more effective and meaningful for every student.
      </motion.p>

      {/* Restart button */}
      <motion.button
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={onRestart}
        className="flex items-center gap-2 bg-gray-800 text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-md hover:bg-gray-700 transition-colors"
      >
        <RotateCcw size={15} />
        Restart Presentation
      </motion.button>
    </div>
  );
}
