import React from 'react';
import { motion } from 'framer-motion';
import { Users, ArrowRight } from 'lucide-react';
import logoImage from '../assets/image.png';

export default function Slide0({ onNext }) {
  const teamMembers = ["Vun Khemra", "Heng Sombath", "Chan reach"];

  return (
    <div className="flex flex-col h-full items-center justify-center text-center gap-8">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-3xl shadow-lg border border-gray-100 flex items-center justify-center p-3 overflow-hidden"
      >
        <img src={logoImage} alt="Spring Education Center Logo" className="w-full h-full object-contain" />
      </motion.div>

      {/* Title block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="flex flex-col items-center gap-3"
      >
        <span className="accent-pill">Spring Education Center</span>
        <h1 className="slide-title max-w-xl">
          Assessing <span className="text-eco-dark">Environmental</span> Learning
        </h1>
        <p className="slide-subtitle max-w-sm">
          Knowledge · Skills · Attitudes · Behavior
        </p>
      </motion.div>

      {/* Team */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
          <Users size={14} />
          <span>Presentation Team</span>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {teamMembers.map((member, i) => (
            <span key={i} className="px-4 py-1.5 rounded-full bg-white border border-gray-100 shadow-sm text-gray-700 font-medium text-sm">
              {member}
            </span>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={onNext}
        className="flex items-center gap-2 bg-eco-dark text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-lg shadow-eco-dark/20 hover:bg-eco-mid transition-colors"
      >
        Start Presentation <ArrowRight size={15} />
      </motion.button>
    </div>
  );
}
