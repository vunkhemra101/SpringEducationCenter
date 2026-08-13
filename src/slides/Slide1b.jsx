import React from 'react';
import { motion } from 'framer-motion';
import { List, BookOpen, Target, TrendingUp, Search, Zap, CheckCircle2 } from 'lucide-react';

const outlineItems = [
  { title: "What is Environmental Learning?", icon: BookOpen, color: "text-blue-600", bg: "bg-blue-50" },
  { title: "What is Assessment?", icon: Target, color: "text-indigo-600", bg: "bg-indigo-50" },
  { title: "Why Do We Assess?", icon: Search, color: "text-purple-600", bg: "bg-purple-50" },
  { title: "Methods of Assessment", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50" },
  { title: "Conclusion", icon: CheckCircle2, color: "text-green-600", bg: "bg-green-50" },
];

export default function Slide1b() {
  return (
    <div className="flex flex-col h-full justify-center gap-8">
      {/* Header */}
      <div className="text-left">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="accent-pill text-sm px-4 py-1.5 mb-4 inline-flex items-center gap-2">
          <List size={16} /> Table of Contents
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mt-3"
        >
          Presentation Outline
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-500 max-w-2xl mt-4"
        >
          An overview of the key topics we will cover in today's presentation.
        </motion.p>
      </div>

      {/* Outline Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
      >
        {outlineItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
              <item.icon className={`w-6 h-6 ${item.color}`} />
            </div>
            <div>
              <p className="text-sm text-gray-400 font-semibold mb-0.5">Topic {index + 1}</p>
              <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
