import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Activity, Users, Box } from 'lucide-react';

const challenges = [
  { icon: Clock,     title: 'Limited Time',               desc: 'Teachers may not have enough time for thorough assessment.', color: 'text-red-500',    bg: 'bg-red-50',    border: 'border-red-100' },
  { icon: Activity,  title: 'Difficult to Measure Behavior', desc: 'Behavior is nuanced and hard to measure accurately.',      color: 'text-orange-500', bg: 'bg-orange-50', border: 'border-orange-100' },
  { icon: Users,     title: 'Different Student Levels',   desc: 'Students have varying knowledge and abilities.',              color: 'text-violet-500', bg: 'bg-violet-50', border: 'border-violet-100' },
  { icon: Box,       title: 'Limited Resources',          desc: 'Schools may lack adequate materials and resources.',          color: 'text-blue-500',   bg: 'bg-blue-50',   border: 'border-blue-100' },
];

export default function Slide8() {
  return (
    <div className="flex flex-col h-full justify-center gap-10">
      {/* Header */}
      <div className="text-center">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="accent-pill mb-4 inline-flex">
          Challenges
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="slide-title mt-3"
        >
          Challenges of Assessment
        </motion.h2>
      </div>

      {/* Challenge cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto w-full">
        {challenges.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 + i * 0.1 }}
            className={`clean-card p-5 flex items-start gap-4 border ${c.border} group`}
          >
            <div className={`flex-shrink-0 w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
              <c.icon size={18} className={c.color} />
            </div>
            <div>
              <p className="font-bold text-gray-800 text-sm">{c.title}</p>
              <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{c.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
