
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-16">
        
        {/* Profile Avatar Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, x: -50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          {/* Diffused Glow */}
          <div className="absolute -inset-10 bg-blue-500/10 rounded-full blur-[100px] group-hover:bg-blue-500/20 transition-all duration-1000"></div>
          
          <div className="relative aspect-square w-64 md:w-[400px] rounded-[3rem] overflow-hidden border border-white/10 glass-card p-2 shadow-2xl">
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-transparent transform rotate-45 translate-x-12 -translate-y-12"></div>
            
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-[#111]">
              <img 
                src="https://i.ibb.co/4nnqJThh/Jan-28-2026-10-40-35-PM.png" 
                alt="Ruin Character"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>

            {/* Scanning Line Animation */}
            <motion.div 
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-px bg-blue-500/20 z-10 pointer-events-none shadow-[0_0_15px_rgba(47,128,255,0.5)]"
            />
          </div>

          {/* Floating HUD Tag */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 glass-card px-5 py-2 rounded-xl border-blue-500/30 text-[10px] tracking-[0.4em] font-cinematic text-blue-400 shadow-xl"
          >
            ACTIVE SESSION
          </motion.div>
        </motion.div>

        {/* Hero Typography */}
        <div className="text-center md:text-left z-10 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h1 className="font-cinematic text-7xl md:text-8xl lg:text-9xl tracking-tighter leading-none mb-6">
              PORTFOLIO <br/>
              <span className="text-white/10 group-hover:text-white/30 transition-colors duration-1000">2025</span>
            </h1>
            <div className="flex items-center justify-center md:justify-start gap-6 mb-10">
              <span className="w-16 h-px bg-blue-600 shadow-[0_0_10px_#2f80ff]"></span>
              <p className="uppercase tracking-[0.5em] text-blue-400 font-bold text-xs md:text-sm">
                CREATIVE ARCHITECT // EDITOR
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-8"
          >
            <a href="#portfolio" className="group relative px-12 py-5 glass-card rounded-full overflow-hidden border border-blue-500/30">
              <span className="relative z-10 font-cinematic tracking-[0.2em] text-xs group-hover:text-blue-400 transition-colors">INITIALIZE PROJECT</span>
              <div className="absolute inset-0 bg-blue-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </a>
            <a href="#about" className="text-white/30 hover:text-white font-cinematic tracking-[0.2em] text-xs transition-all duration-300 border-b border-white/5 hover:border-blue-500/50 pb-1">
              SYSTEM PROFILE
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-20"
      >
        <span className="uppercase text-[9px] tracking-[0.6em] font-medium">Scroll down</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white via-white/50 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
