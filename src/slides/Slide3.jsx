import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Wrench, Heart, Activity } from 'lucide-react';

const items = [
  { icon: BookOpen, label: 'Knowledge', desc: 'What students know about the environment.',       color: 'text-blue-600',   bg: 'bg-blue-50',   border: 'border-blue-100' },
  { icon: Wrench,   label: 'Skills',    desc: 'Practical abilities to act for the environment.',  color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-100' },
  { icon: Heart,    label: 'Attitudes', desc: 'Values and feelings toward the environment.',      color: 'text-pink-600',   bg: 'bg-pink-50',   border: 'border-pink-100' },
  { icon: Activity, label: 'Behavior',  desc: 'Everyday actions that protect the environment.',   color: 'text-green-600',  bg: 'bg-green-50',  border: 'border-green-100' },
];

export default function Slide3() {
  return (
    <div className="flex flex-col h-full justify-center gap-10">
      {/* Header */}
      <div className="text-center">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="accent-pill text-sm px-4 py-1.5 mb-4 inline-flex">
          Definition
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mt-3"
        >
          What is Assessment?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-500 max-w-xl mx-auto mt-4"
        >
          Assessment is the process of checking what students know, understand, and can do.
        </motion.p>
      </div>

      {/* 4 dimension cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto w-full">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className={`bg-white rounded-2xl border ${item.border} shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col gap-4 group`}
          >
            <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
              <item.icon className={`w-7 h-7 ${item.color}`} />
            </div>
            <div>
              <p className="font-extrabold text-gray-800 text-xl">{item.label}</p>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
