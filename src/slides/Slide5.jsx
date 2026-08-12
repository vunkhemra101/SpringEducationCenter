import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Wrench, Heart, Activity } from 'lucide-react';

const dimensions = [
  { icon: BookOpen, label: 'Knowledge', pct: 25, color: '#3b82f6', lightColor: '#eff6ff' },
  { icon: Wrench,   label: 'Skills',    pct: 25, color: '#f97316', lightColor: '#fff7ed' },
  { icon: Heart,    label: 'Attitudes', pct: 25, color: '#ec4899', lightColor: '#fdf2f8' },
  { icon: Activity, label: 'Behavior',  pct: 25, color: '#22c55e', lightColor: '#f0fdf4' },
];

export default function Slide5() {
  return (
    <div className="flex flex-col h-full justify-center gap-10">
      {/* Header */}
      <div className="text-center">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="accent-pill mb-4 inline-flex">
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

      {/* Horizontal bar chart */}
      <div className="max-w-2xl mx-auto w-full flex flex-col gap-3">
        {dimensions.map((d, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 + i * 0.1 }}
            className="clean-card p-4 flex items-center gap-4"
          >
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: d.lightColor }}>
              <d.icon size={18} style={{ color: d.color }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between mb-1.5">
                <span className="text-sm font-semibold text-gray-700">{d.label}</span>
                <span className="text-xs text-gray-400 font-medium">25%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.7, ease: 'easeOut' }}
                  className="h-full rounded-full"
                  style={{ background: d.color }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
