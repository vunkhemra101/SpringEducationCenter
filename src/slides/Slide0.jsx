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
        className="w-44 h-44 md:w-52 md:h-52 bg-white rounded-3xl shadow-lg border border-gray-100 flex items-center justify-center p-4 overflow-hidden"
      >
        <img src={logoImage} alt="Spring Education Center Logo" className="w-full h-full object-contain" />
      </motion.div>

      {/* Title block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="flex flex-col items-center gap-4"
      >
        <span className="accent-pill text-sm px-4 py-1.5">Spring Education Center</span>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight max-w-2xl">
          Assessing <span className="text-eco-dark">Environmental</span> Learning
        </h1>
        <p className="text-xl text-gray-500 font-normal">
          Knowledge · Skills · Attitudes · Behavior
        </p>
      </motion.div>

      {/* Team */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col items-center gap-3"
      >
        <div className="flex items-center gap-2 text-gray-400 text-base font-medium">
          <Users size={16} />
          <span>Presentation Team</span>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {teamMembers.map((member, i) => (
            <span key={i} className="px-5 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 font-semibold text-base">
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
        className="flex items-center gap-2 bg-eco-dark text-white text-base font-semibold px-8 py-3 rounded-full shadow-lg shadow-eco-dark/20 hover:bg-eco-mid transition-colors"
      >
        Start Presentation <ArrowRight size={18} />
      </motion.button>
    </div>
  );
}
