import React from 'react';
import { motion } from 'framer-motion';
import { Earth, Leaf, RotateCcw } from 'lucide-react';

export default function Slide9({ onRestart }) {
  const keywords = ["Knowledge", "Skills", "Attitudes", "Behavior"];

  return (
    <div className="flex flex-col h-full items-center text-center">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-8"
      >
        Conclusion
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-eco-light/30 text-eco-dark px-8 py-4 rounded-2xl text-2xl md:text-3xl font-semibold mb-8 shadow-sm border border-eco-light/50"
      >
        Good assessment creates responsible environmental citizens.
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {keywords.map((keyword, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="bg-white px-5 py-2 rounded-full border border-gray-200 text-gray-700 font-medium shadow-sm"
          >
            {keyword}
          </motion.span>
        ))}
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-lg text-gray-600 max-w-3xl leading-relaxed mb-12"
      >
        Assessing environmental learning helps teachers understand students' knowledge, skills, attitudes, and behavior. Using different assessment methods can make environmental education more effective.
      </motion.p>

      <div className="mt-auto flex flex-col items-center">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
          className="relative mb-6 rounded-xl overflow-hidden shadow-lg border-4 border-white max-w-sm w-full aspect-video bg-eco-light/30"
        >
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c0/A_Day_in_the_Forest.webm/A_Day_in_the_Forest.webm.480p.vp9.webm"
          >
            Your browser does not support the video tag.
          </video>
          <Leaf className="w-8 h-8 text-green-500 absolute -top-2 -right-2 drop-shadow-md" />
        </motion.div>

        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-3xl font-bold text-gray-800 mb-8"
        >
          Thank You!
        </motion.h3>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onRestart}
          className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition-colors shadow-md mb-8"
        >
          <RotateCcw size={18} />
          Restart Presentation
        </motion.button>
      </div>
    </div>
  );
}
