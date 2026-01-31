
import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinematic text-8xl md:text-[12rem] text-white/5 leading-none select-none">
            THANK YOU
          </h2>
          <div className="font-cinematic text-2xl tracking-[1em] -mt-10 md:-mt-16 text-white/20">
            2025
          </div>
        </motion.div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 text-white/30 text-[10px] tracking-[0.3em] uppercase">
          <div className="flex items-center gap-4">
            <span className="w-8 h-px bg-white/10"></span>
            DESIGNED BY Ruin
          </div>
          
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">PRIVATE POLICY</a>
            <a href="#" className="hover:text-white transition-colors">DATA LOG</a>
          </div>

          <div className="font-cinematic text-white/60">
            &copy; Ruin // 2025
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
