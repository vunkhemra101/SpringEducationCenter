import React from 'react';
import { motion } from 'framer-motion';

export default function Slide5() {
  const segments = [
    { label: "Knowledge", color: "bg-blue-500", text: "text-blue-900" },
    { label: "Skills", color: "bg-orange-500", text: "text-orange-900" },
    { label: "Attitudes", color: "bg-pink-500", text: "text-pink-900" },
    { label: "Behavior", color: "bg-green-500", text: "text-green-900" }
  ];

  return (
    <div className="flex flex-col h-full justify-center items-center">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center"
      >
        What Should We Assess?
      </motion.h2>

      <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center my-8">
        {/* Animated Circular Segments (Stylized using absolute positioning) */}
        {segments.map((segment, index) => {
          const rotation = index * 90;
          return (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
              className="absolute inset-0 flex justify-center"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <div 
                className={`w-32 h-32 md:w-44 md:h-44 ${segment.color} opacity-20 rounded-full mt-[-20px] md:mt-[-30px] shadow-lg`} 
              />
              <div 
                className={`absolute top-4 md:top-6 font-bold ${segment.text} text-lg md:text-xl`}
                style={{ transform: `rotate(-${rotation}deg)` }}
              >
                {segment.label}
              </div>
            </motion.div>
          );
        })}

        {/* Center Node */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, type: "spring", bounce: 0.5 }}
          className="absolute z-10 w-40 h-40 md:w-48 md:h-48 bg-white rounded-full flex flex-col items-center justify-center shadow-xl border-4 border-eco-light/50"
        >
          <span className="text-center font-bold text-eco-dark text-xl md:text-2xl leading-tight px-4">
            Environmental<br/>Learning
          </span>
        </motion.div>
      </div>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-xl text-gray-600 text-center max-w-2xl bg-eco-light/20 p-6 rounded-2xl border border-eco-light/50 mt-4"
      >
        Environmental assessment should measure more than academic knowledge.
      </motion.p>
    </div>
  );
}
