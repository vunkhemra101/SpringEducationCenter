import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Activity, Users, Box } from 'lucide-react';
import IconCard from '../components/IconCard';

export default function Slide8() {
  const challenges = [
    { icon: Clock, title: "Limited Time", desc: "Teachers may not have enough time.", delay: 0.2 },
    { icon: Activity, title: "Difficult to Measure Behavior", desc: "Behavior can be difficult to measure accurately.", delay: 0.3 },
    { icon: Users, title: "Different Student Levels", desc: "Students have different knowledge and abilities.", delay: 0.4 },
    { icon: Box, title: "Limited Resources", desc: "Schools may have limited materials and resources.", delay: 0.5 },
  ];

  return (
    <div className="flex flex-col h-full justify-center">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-16 text-center"
      >
        Challenges of Assessment
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
        {challenges.map((challenge, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: challenge.delay, duration: 0.4 }}
            className="bg-red-50/50 rounded-2xl p-6 shadow-sm border border-red-100 flex items-start gap-4 group hover:bg-red-50 transition-colors"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
              <challenge.icon size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{challenge.title}</h3>
              <p className="text-gray-600 leading-relaxed">{challenge.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
