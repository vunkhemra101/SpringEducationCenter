import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import logoImage from '../assets/image.png';

export default function Slide0({ onNext }) {
  const teamMembers = [
    "Vun Khemra",
    "Heng Sombath",
    "Chan reach"
  ];

  return (
    <div className="flex flex-col h-full items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 flex flex-col items-center"
      >
        {/* Logo Container */}
        <div className="w-48 h-48 md:w-56 md:h-56 bg-white rounded-3xl shadow-lg border border-gray-100 flex items-center justify-center p-4 mb-8 overflow-hidden">
          <img
            src={logoImage}
            alt="Spring Education Center Logo"
            className="w-full h-full object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/400?text=SPRING+EDUCATION";
            }}
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
          Assessing Environmental Learning
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="bg-eco-light/20 p-8 rounded-3xl shadow-sm border border-eco-light/50 w-full max-w-2xl"
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <Users className="text-eco-dark" size={28} />
          <h2 className="text-2xl font-semibold text-gray-700">Presentation Team</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          {teamMembers.map((member, index) => (
            <React.Fragment key={index}>
              <span className="text-xl font-medium text-eco-dark bg-white px-6 py-2 rounded-full shadow-sm border border-gray-100">
                {member}
              </span>
              {index < teamMembers.length - 1 && (
                <span className="hidden md:block text-gray-300">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="mt-12 text-gray-500 hover:text-eco-dark font-medium transition-colors"
      >
        Click or press space to begin →
      </motion.button>
    </div>
  );
}
