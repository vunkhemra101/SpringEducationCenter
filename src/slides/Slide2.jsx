import React from 'react';
import { motion } from 'framer-motion';
import { TreePine, Recycle, AlertTriangle, ShieldCheck } from 'lucide-react';
import IconCard from '../components/IconCard';

export default function Slide2() {
  const cards = [
    { icon: TreePine, title: "Nature", delay: 0.2 },
    { icon: Recycle, title: "Sustainability", delay: 0.3 },
    { icon: AlertTriangle, title: "Environmental Problems", delay: 0.4 },
    { icon: ShieldCheck, title: "Environmental Protection", delay: 0.5 },
  ];

  return (
    <div className="flex flex-col h-full justify-center">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center"
      >
        What is Environmental Learning?
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16"
      >
        Environmental learning helps students understand nature, environmental problems, and how to protect our environment.
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto w-full">
        {cards.map((card, index) => (
          <IconCard 
            key={index}
            icon={card.icon}
            title={card.title}
            delay={card.delay}
          />
        ))}
      </div>
    </div>
  );
}
