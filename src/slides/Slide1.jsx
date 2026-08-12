import React from 'react';
import { Earth, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Slide1() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center gap-7">
      {/* Icon */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative"
      >
        <div className="w-36 h-36 bg-eco-pale rounded-full flex items-center justify-center shadow-inner border border-eco-light/60">
          <Earth className="w-20 h-20 text-eco-dark" strokeWidth={1.5} />
        </div>
        <motion.div
          animate={{ y: [0, -6, 0], rotate: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
          className="absolute -top-3 -right-3"
        >
          <Leaf className="w-10 h-10 text-green-500 fill-green-100" />
        </motion.div>
      </motion.div>

      {/* Headline */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col items-center gap-4"
      >
        <span className="accent-pill text-sm px-4 py-1.5">Topic Overview</span>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight max-w-2xl">
          Assessing <span className="text-eco-dark">Environmental</span> Learning
        </h1>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="text-xl text-gray-500 max-w-xl"
      >
        Understanding how students develop knowledge, skills, attitudes, and behavior toward the environment.
      </motion.p>

      {/* Tags */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap justify-center gap-3"
      >
        {['Knowledge', 'Skills', 'Attitudes', 'Behavior'].map((tag, i) => (
          <span key={i} className="px-4 py-1.5 text-sm font-semibold rounded-full bg-eco-pale border border-eco-light/70 text-eco-dark">
            {tag}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
