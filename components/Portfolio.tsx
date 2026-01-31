
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { title: 'Branding Videos', category: 'Creative Direction', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070' },
  { title: 'Documentary', category: 'Video Production', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2071' },
  { title: 'Gaming Videos', category: 'Motion Graphics', image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1974' },
  { title: 'IRL Videos', category: 'Visual Design', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=2070' },
  { title: 'Montages', category: 'Advertising', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2070' },
  { title: 'Motion Graphics', category: 'Concept Art', image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=2070' }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            viewport={{ once: true }}
          >
            <h2 className="font-cinematic text-5xl mb-2">RECAP PROJECT 2025</h2>
            <p className="text-white/40 tracking-widest uppercase text-sm">Deployment Phase // Global</p>
          </motion.div>
          
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-[10px] rounded uppercase tracking-widest border border-blue-500/20">All Works</span>
            <span className="px-3 py-1 bg-white/5 text-white/40 text-[10px] rounded uppercase tracking-widest border border-white/5">No AI</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[400px] overflow-hidden rounded-3xl border border-white/10"
            >
              {/* Image with zoom on hover */}
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-blue-500 font-cinematic text-xs tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  {project.category}
                </p>
                <h3 className="text-2xl font-cinematic leading-none group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <div className="w-0 h-[2px] bg-blue-500 mt-4 group-hover:w-full transition-all duration-500"></div>
              </div>

              {/* Corner Tag */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/80">
                  →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
