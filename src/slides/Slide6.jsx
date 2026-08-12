import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Eye, Hammer, Presentation as PresentationIcon, ClipboardList } from 'lucide-react';
import IconCard from '../components/IconCard';

export default function Slide6() {
  const methods = [
    { icon: FileText, title: "Quiz / Test", desc: "Checks environmental knowledge.", delay: 0.2 },
    { icon: Eye, title: "Observation", desc: "Checks student behavior and participation.", delay: 0.3 },
    { icon: Hammer, title: "Project", desc: "Measures practical environmental skills.", delay: 0.4 },
    { icon: PresentationIcon, title: "Presentation", desc: "Checks communication and understanding.", delay: 0.5 },
    { icon: ClipboardList, title: "Questionnaire", desc: "Measures opinions and attitudes.", delay: 0.6 },
  ];

  return (
    <div className="flex flex-col h-full justify-center">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center"
      >
        Methods of Assessment
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto w-full">
        {methods.map((method, index) => (
          <div key={index} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-xs">
            <IconCard 
              icon={method.icon}
              title={method.title}
              description={method.desc}
              delay={method.delay}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
