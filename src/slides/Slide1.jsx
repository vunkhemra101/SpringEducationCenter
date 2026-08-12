import React from 'react';
import { Earth, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Slide1() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center gap-6">
      {/* Icon */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative"
      >
        <div className="w-28 h-28 bg-eco-pale rounded-full flex items-center justify-center shadow-inner border border-eco-light/60">
          <Earth className="w-14 h-14 text-eco-dark" strokeWidth={1.5} />
        </div>
        <motion.div
          animate={{ y: [0, -6, 0], rotate: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
          className="absolute -top-2 -right-2"
        >
          <Leaf className="w-8 h-8 text-green-500 fill-green-100" />
        </motion.div>
      </motion.div>

      {/* Headline */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col items-center gap-3"
      >
        <span className="accent-pill">Topic Overview</span>
        <h1 className="slide-title max-w-2xl">
          Assessing <span className="text-eco-dark">Environmental</span> Learning
        </h1>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="slide-subtitle max-w-xl"
      >
        Understanding how students develop knowledge, skills, attitudes, and behavior toward the environment.
      </motion.p>

      {/* Divider tag row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap justify-center gap-2 mt-2"
      >
        {['Knowledge', 'Skills', 'Attitudes', 'Behavior'].map((tag, i) => (
          <span key={i} className="px-3 py-1 text-xs font-semibold rounded-full bg-eco-pale border border-eco-light/70 text-eco-dark">
            {tag}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
