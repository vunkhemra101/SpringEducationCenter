import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Wrench, Heart, Activity } from 'lucide-react';

export default function Slide3() {
  const items = [
    { icon: BookOpen, label: "Knowledge", color: "bg-blue-100 text-blue-600", border: "border-blue-200" },
    { icon: Wrench, label: "Skills", color: "bg-orange-100 text-orange-600", border: "border-orange-200" },
    { icon: Heart, label: "Attitudes", color: "bg-pink-100 text-pink-600", border: "border-pink-200" },
    { icon: Activity, label: "Behavior", color: "bg-green-100 text-green-600", border: "border-green-200" }
  ];

  return (
    <div className="flex flex-col h-full justify-center items-center">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center"
      >
        What is Assessment?
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-16"
      >
        Assessment is the process of checking what students know, understand, and can do.
      </motion.p>

      <div className="relative w-full max-w-2xl aspect-video md:aspect-[21/9] flex items-center justify-center">
        {/* Connection Lines (Desktop only for simplicity) */}
        <div className="absolute inset-0 hidden md:block">
          <svg className="w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              d="M 50% 50% L 20% 30% M 50% 50% L 80% 30% M 50% 50% L 20% 70% M 50% 50% L 80% 70%" 
              stroke="#e5e7eb" strokeWidth="2" strokeDasharray="6 6" fill="none" 
            />
          </svg>
        </div>

        {/* Center Node */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="absolute z-10 bg-eco-dark text-white rounded-full w-32 h-32 flex items-center justify-center font-bold text-xl shadow-xl shadow-eco-dark/20"
        >
          ASSESSMENT
        </motion.div>

        {/* Outer Nodes */}
        {items.map((item, index) => {
          const positions = [
            "top-0 left-0 md:top-8 md:left-12",
            "top-0 right-0 md:top-8 md:right-12",
            "bottom-0 left-0 md:bottom-8 md:left-12",
            "bottom-0 right-0 md:bottom-8 md:right-12"
          ];
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className={`absolute ${positions[index]} flex flex-col items-center justify-center bg-white p-4 rounded-xl border ${item.border} shadow-sm w-32 md:w-40`}
            >
              <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center mb-3`}>
                <item.icon size={24} />
              </div>
              <span className="font-semibold text-gray-700">{item.label}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
