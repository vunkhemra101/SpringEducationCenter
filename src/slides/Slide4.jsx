import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Search, Zap } from 'lucide-react';

export default function Slide4() {
  const reasons = [
    { num: "01", title: "Identify Learning", desc: "Understand what students have learned.", icon: Target },
    { num: "02", title: "Improve Teaching", desc: "Help teachers improve their teaching methods.", icon: TrendingUp },
    { num: "03", title: "Find Weaknesses", desc: "Identify areas where students need more support.", icon: Search },
    { num: "04", title: "Encourage Action", desc: "Encourage students to care for the environment.", icon: Zap },
  ];

  return (
    <div className="flex flex-col h-full justify-center">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-16 text-center"
      >
        Why Do We Assess?
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + index * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-start gap-4 group"
          >
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-eco-light/20 flex items-center justify-center font-bold text-xl text-eco-dark">
              {reason.num}
            </div>
            <div className="pt-2">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                {reason.title}
                <reason.icon size={18} className="text-gray-400 group-hover:text-eco-dark transition-colors" />
              </h3>
              <p className="text-gray-600 leading-relaxed">{reason.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
