import React from 'react';
import { motion } from 'framer-motion';
import { TreePine, Recycle, AlertTriangle, ShieldCheck } from 'lucide-react';

const cards = [
  { icon: TreePine, label: 'Nature', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-100' },
  { icon: Recycle, label: 'Sustainability', color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100' },
  { icon: AlertTriangle, label: 'Environmental Problems', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100' },
  { icon: ShieldCheck, label: 'Environmental Protection', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
];

export default function Slide2() {
  return (
    <div className="flex flex-col h-full justify-center gap-10">
      {/* Header */}
      <div className="text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="accent-pill mb-4 inline-flex"
        >
          Background
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="slide-title mt-3"
        >
          What is Environmental Learning?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="slide-subtitle max-w-2xl mx-auto mt-3"
        >
          Environmental learning helps students understand nature, environmental problems, and how to protect our world.
        </motion.p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto w-full">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.1 }}
            className={`clean-card p-6 flex flex-col items-center text-center gap-3 group ${card.border}`}
          >
            <div className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
              <card.icon className={`w-6 h-6 ${card.color}`} />
            </div>
            <p className="text-sm font-semibold text-gray-700">{card.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
