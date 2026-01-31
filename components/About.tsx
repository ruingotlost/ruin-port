
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -top-16 -left-16 text-[12rem] font-cinematic text-white/[0.03] pointer-events-none select-none">
                01
              </div>
              <h2 className="font-cinematic text-6xl mb-10 leading-none">
                VISUAL <br/><span className="text-blue-500">ENGINEERING.</span>
              </h2>
              <div className="space-y-8 text-white/50 leading-relaxed text-lg max-w-xl font-light">
                <p>
                  I'm Ruin, a high-fidelity visual designer specialized in the intersection of character-driven storytelling and futuristic UI/UX.
                </p>
                <p>
                  My approach focuses on "Creative Professionalism"—blending the fun of gaming aesthetics with the precision required for premium brand content.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-10 mt-16">
                <div className="relative p-6 rounded-2xl glass-card border-white/5 group hover:border-blue-500/30 transition-all">
                  <h4 className="font-cinematic text-[10px] tracking-[0.3em] text-white/30 mb-3 group-hover:text-blue-400">MISSION LOG</h4>
                  <p className="text-white font-semibold">Senior Creative</p>
                  <p className="text-[11px] text-white/40 mt-1 tracking-widest font-cinematic">LVL. 99 EDITOR</p>
                </div>
                <div className="relative p-6 rounded-2xl glass-card border-white/5 group hover:border-blue-500/30 transition-all">
                  <h4 className="font-cinematic text-[10px] tracking-[0.3em] text-white/30 mb-3 group-hover:text-blue-400">UPTIME</h4>
                  <p className="text-white font-semibold">1.5 Years</p>
                  <p className="text-[11px] text-white/40 mt-1 tracking-widest font-cinematic">CONTINUOUS OPS</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative group p-1 glass-card rounded-[3.5rem] border-white/10">
              <div className="absolute inset-0 bg-blue-500/10 blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-[3.2rem] bg-black">
                 <img 
                  src="https://i.ibb.co/4nnqJThh/Jan-28-2026-10-40-35-PM.png" 
                  alt="Ruin Character Profile"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                
                {/* HUD Elements Overlay */}
                <div className="absolute inset-0 border-[20px] border-black/10 pointer-events-none"></div>
                <div className="absolute top-10 left-10 w-10 h-10 border-t border-l border-blue-500/40"></div>
                <div className="absolute bottom-10 right-10 w-10 h-10 border-b border-r border-blue-500/40"></div>
                
                {/* Dynamic Data Labels */}
                <div className="absolute bottom-12 left-12 font-cinematic text-[8px] tracking-[0.5em] text-white/20">
                  REF_ID: RUIN_01
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
