import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Wrench, Heart, Activity } from 'lucide-react';

const dimensions = [
  {
    icon: BookOpen,
    label: 'Knowledge',
    desc: 'Understanding environmental facts, concepts, and principles.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    tag: 'Cognitive',
  },
  {
    icon: Wrench,
    label: 'Skills',
    desc: 'Practical abilities to take action and protect the environment.',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
    tag: 'Practical',
  },
  {
    icon: Heart,
    label: 'Attitudes',
    desc: 'Values, feelings, and motivation toward environmental care.',
    color: 'text-pink-600',
    bg: 'bg-pink-50',
    border: 'border-pink-100',
    tag: 'Affective',
  },
  {
    icon: Activity,
    label: 'Behavior',
    desc: 'Daily habits and actions that reflect environmental responsibility.',
    color: 'text-green-600',
    bg: 'bg-green-50',
    border: 'border-green-100',
    tag: 'Action',
  },
];

export default function Slide5() {
  return (
    <div className="flex flex-col h-full justify-center gap-10">
      {/* Header */}
      <div className="text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="accent-pill mb-4 inline-flex"
        >
          Scope
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="slide-title mt-3"
        >
          What Should We Assess?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="slide-subtitle max-w-xl mx-auto mt-3"
        >
          Environmental assessment measures more than academic knowledge alone.
        </motion.p>
      </div>

      {/* 2×2 box grid */}
      <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto w-full">
        {dimensions.map((d, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className={`clean-card p-6 flex flex-col gap-4 border ${d.border} group`}
          >
            {/* Icon + tag row */}
            <div className="flex items-center justify-between">
              <div className={`w-11 h-11 rounded-xl ${d.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <d.icon className={`w-5 h-5 ${d.color}`} />
              </div>
              <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${d.bg} ${d.color}`}>
                {d.tag}
              </span>
            </div>

            {/* Text */}
            <div>
              <p className="font-bold text-gray-800 text-base mb-1">{d.label}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{d.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
