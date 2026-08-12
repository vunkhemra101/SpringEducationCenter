import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Eye, Hammer, Presentation as PresentationIcon, ClipboardList } from 'lucide-react';

const methods = [
  { icon: FileText,         title: 'Quiz / Test',   desc: 'Checks environmental knowledge.',          color: 'text-blue-600',   bg: 'bg-blue-50',   border: 'border-blue-100' },
  { icon: Eye,              title: 'Observation',   desc: 'Checks student behavior & participation.', color: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-100' },
  { icon: Hammer,           title: 'Project',       desc: 'Measures practical environmental skills.',  color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-100' },
  { icon: PresentationIcon, title: 'Presentation',  desc: 'Checks communication and understanding.',   color: 'text-teal-600',   bg: 'bg-teal-50',   border: 'border-teal-100' },
  { icon: ClipboardList,    title: 'Questionnaire', desc: 'Measures opinions and attitudes.',          color: 'text-pink-600',   bg: 'bg-pink-50',   border: 'border-pink-100' },
];

export default function Slide6() {
  return (
    <div className="flex flex-col h-full justify-center gap-10">
      {/* Header */}
      <div className="text-center">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="accent-pill text-sm px-4 py-1.5 mb-4 inline-flex">
          Methods
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mt-3"
        >
          Methods of Assessment
        </motion.h2>
      </div>

      {/* Method cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto w-full">
        {methods.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.08 }}
            className={`bg-white rounded-2xl border ${m.border} shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col gap-4 group`}
          >
            <div className={`w-14 h-14 rounded-2xl ${m.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
              <m.icon className={`w-7 h-7 ${m.color}`} />
            </div>
            <div>
              <p className="font-extrabold text-gray-800 text-xl">{m.title}</p>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">{m.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
