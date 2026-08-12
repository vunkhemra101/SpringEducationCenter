import React from 'react';
import { motion } from 'framer-motion';

export default function IconCard({ icon: Icon, title, description, delay = 0 }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center text-center group"
    >
      <div className="w-16 h-16 rounded-full bg-eco-light/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="text-eco-dark w-8 h-8" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      {description && <p className="text-sm text-gray-600 leading-relaxed">{description}</p>}
    </motion.div>
  );
}
