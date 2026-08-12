import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Users, Trash2 } from 'lucide-react';

const points = [
  'Participation',
  'Teamwork',
  'Waste Management',
  'Environmental Knowledge',
  'Positive Attitude',
];

export default function Slide7() {
  return (
    <div className="flex flex-col h-full justify-center gap-8">
      {/* Header */}
      <div className="text-center">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="accent-pill text-sm px-4 py-1.5 mb-4 inline-flex">
          Case Study
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mt-3"
        >
          School Clean-Up Project
        </motion.h2>
      </div>

      {/* Content row */}
      <div className="flex flex-col md:flex-row gap-6 items-center max-w-5xl mx-auto w-full">
        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="md:w-2/5 flex items-center justify-center"
        >
          <div className="w-full max-w-xs aspect-square bg-eco-pale rounded-3xl flex items-center justify-center border border-eco-light/50 shadow-sm">
            <div className="flex gap-4 items-end">
              <Users className="w-24 h-24 text-eco-dark" strokeWidth={1.5} />
              <Trash2 className="w-16 h-16 text-green-500 mb-2" strokeWidth={1.5} />
            </div>
          </div>
        </motion.div>

        {/* Checklist */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="md:w-3/5 bg-white rounded-2xl border border-gray-100 shadow-sm p-7"
        >
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-5">What we assess</p>
          <ul className="space-y-4">
            {points.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.08 }}
                className="flex items-center gap-3 text-gray-700 font-semibold text-lg"
              >
                <CheckCircle2 className="text-green-500 flex-shrink-0" size={22} />
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="text-center"
      >
        <div className="inline-block bg-eco-dark text-white text-base font-semibold px-8 py-3 rounded-full shadow-lg shadow-eco-dark/20">
          Learning + Action = Better Environmental Education
        </div>
      </motion.div>
    </div>
  );
}
