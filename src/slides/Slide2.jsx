import React from 'react';
import { motion } from 'framer-motion';
import { TreePine, Recycle, AlertTriangle, ShieldCheck } from 'lucide-react';

const cards = [
  { icon: TreePine,      label: 'Nature',                   color: 'text-green-600',   bg: 'bg-green-50',   border: 'border-green-100' },
  { icon: Recycle,       label: 'Sustainability',            color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100' },
  { icon: AlertTriangle, label: 'Environmental Problems',    color: 'text-amber-600',   bg: 'bg-amber-50',   border: 'border-amber-100' },
  { icon: ShieldCheck,   label: 'Environmental Protection',  color: 'text-blue-600',    bg: 'bg-blue-50',    border: 'border-blue-100' },
];

export default function Slide2() {
  return (
    <div className="flex flex-col h-full justify-center gap-10">
      {/* Header */}
      <div className="text-center">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="accent-pill text-sm px-4 py-1.5 mb-4 inline-flex">
          Background
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mt-3"
        >
          What is Environmental Learning?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-500 max-w-2xl mx-auto mt-4"
        >
          Environmental learning helps students understand nature, environmental problems, and how to protect our world.
        </motion.p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto w-full">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.1 }}
            className={`bg-white rounded-2xl border ${card.border} shadow-sm hover:shadow-md transition-all duration-300 p-7 flex flex-col items-center text-center gap-4 group`}
          >
            <div className={`w-16 h-16 rounded-2xl ${card.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
              <card.icon className={`w-8 h-8 ${card.color}`} />
            </div>
            <p className="text-lg font-bold text-gray-700">{card.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
