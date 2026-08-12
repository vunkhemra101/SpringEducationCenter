import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Search, Zap } from 'lucide-react';

const reasons = [
  { num: '01', title: 'Identify Learning',   desc: 'Understand what students have learned.',           icon: Target },
  { num: '02', title: 'Improve Teaching',    desc: 'Help teachers refine their methods.',              icon: TrendingUp },
  { num: '03', title: 'Find Weaknesses',     desc: 'Identify areas where students need support.',      icon: Search },
  { num: '04', title: 'Encourage Action',    desc: 'Motivate students to care for the environment.',   icon: Zap },
];

export default function Slide4() {
  return (
    <div className="flex flex-col h-full justify-center gap-10">
      {/* Header */}
      <div className="text-center">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="accent-pill text-sm px-4 py-1.5 mb-4 inline-flex">
          Purpose
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mt-3"
        >
          Why Do We Assess?
        </motion.h2>
      </div>

      {/* Numbered cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto w-full">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.1 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-6 flex items-start gap-5 group"
          >
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-eco-light/40 text-eco-dark font-extrabold text-xl flex items-center justify-center">
              {r.num}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <p className="font-extrabold text-gray-800 text-xl">{r.title}</p>
                <r.icon size={16} className="text-gray-300 group-hover:text-eco-dark transition-colors flex-shrink-0" />
              </div>
              <p className="text-base text-gray-500 leading-relaxed">{r.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
