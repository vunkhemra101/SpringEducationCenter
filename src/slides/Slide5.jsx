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
          className="accent-pill text-sm px-4 py-1.5 mb-4 inline-flex"
        >
          Scope
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mt-3"
        >
          What Should We Assess?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-500 max-w-xl mx-auto mt-4"
        >
          Environmental assessment measures more than academic knowledge alone.
        </motion.p>
      </div>

      {/* 2×2 box grid */}
      <div className="grid grid-cols-2 gap-5 max-w-4xl mx-auto w-full">
        {dimensions.map((d, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className={`bg-white rounded-2xl border ${d.border} shadow-sm hover:shadow-md transition-all duration-300 p-7 flex flex-col gap-5 group`}
          >
            {/* Icon + tag row */}
            <div className="flex items-center justify-between">
              <div className={`w-14 h-14 rounded-2xl ${d.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <d.icon className={`w-7 h-7 ${d.color}`} />
              </div>
              <span className={`text-sm font-semibold px-3 py-1 rounded-full ${d.bg} ${d.color}`}>
                {d.tag}
              </span>
            </div>

            {/* Text */}
            <div>
              <p className="font-extrabold text-gray-800 text-2xl mb-1.5">{d.label}</p>
              <p className="text-base text-gray-500 leading-relaxed">{d.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
