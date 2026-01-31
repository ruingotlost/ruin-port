
import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skills = [
    { name: 'Photoshop', icon: 'Ps', color: '#00c8ff' },
    { name: 'Premiere', icon: 'Pr', color: '#ea77ff' },
    { name: 'After Effects', icon: 'Ae', color: '#cf96fd' },
    { name: 'Lightroom', icon: 'Lr', color: '#31a8ff' },
    { name: 'Davinci', icon: 'Dr', color: '#ff4b2b' },
    { name: 'Figma', icon: 'Fg', color: '#1abc9c' }
  ];

  return (
    <section className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
        >
          <h2 className="font-cinematic text-4xl mb-4 tracking-widest">TECHNICAL ARSENAL</h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto mb-16"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-default"
            >
              <div className="glass-card p-8 rounded-2xl flex flex-col items-center gap-4 border-white/5 transition-all duration-300 group-hover:border-blue-500/50 group-hover:bg-blue-500/[0.05]">
                <div 
                  className="w-16 h-16 flex items-center justify-center text-2xl font-bold rounded-xl bg-black/40 border border-white/10"
                  style={{ color: skill.color, boxShadow: `0 0 20px ${skill.color}20` }}
                >
                  {skill.icon}
                </div>
                <span className="text-xs font-cinematic tracking-widest text-white/40 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
