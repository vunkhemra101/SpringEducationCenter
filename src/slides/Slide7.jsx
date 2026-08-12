import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Users, Trash2 } from 'lucide-react';

export default function Slide7() {
  const points = [
    "Participation",
    "Teamwork",
    "Waste Management",
    "Environmental Knowledge",
    "Positive Attitude"
  ];

  return (
    <div className="flex flex-col h-full">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 md:mb-12 text-center"
      >
        School Clean-Up Project
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 flex-1 items-center justify-center">
        {/* Left Side - Illustration */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full md:w-1/2 flex items-center justify-center"
        >
          <div className="relative w-full max-w-md aspect-square bg-eco-light/20 rounded-full flex items-center justify-center border-4 border-white shadow-xl">
            <div className="absolute inset-0 bg-eco-dark/5 rounded-full opacity-50"></div>
            <div className="flex gap-4 items-end relative z-10">
              <Users className="w-24 h-24 text-eco-dark" strokeWidth={1.5} />
              <Trash2 className="w-16 h-16 text-green-600 mb-2" strokeWidth={1.5} />
            </div>
            {/* Small decorative leaves */}
            <div className="absolute top-10 right-10 w-8 h-8 bg-green-400/40 rounded-tl-full rounded-br-full rotate-45"></div>
            <div className="absolute bottom-16 left-12 w-6 h-6 bg-green-500/40 rounded-tl-full rounded-br-full -rotate-12"></div>
          </div>
        </motion.div>

        {/* Right Side - List */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full md:w-1/2 flex flex-col justify-center"
        >
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b border-gray-100 pb-4">What we assess:</h3>
            <ul className="space-y-4">
              {points.map((point, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 text-lg text-gray-700"
                >
                  <CheckCircle2 className="text-green-500 flex-shrink-0" size={24} />
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-auto mb-10 w-full"
      >
        <div className="bg-eco-dark text-white text-center py-4 px-6 rounded-2xl text-xl md:text-2xl font-medium max-w-3xl mx-auto shadow-lg shadow-eco-dark/20">
          Learning + Action = Better Environmental Education
        </div>
      </motion.div>
    </div>
  );
}
