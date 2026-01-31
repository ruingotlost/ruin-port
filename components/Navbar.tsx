
import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const navItems = [
    { name: 'Start', href: '#home' },
    { name: 'Profile', href: '#about' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed top-8 left-0 w-full z-40 flex justify-center px-4">
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="glass-card flex items-center gap-2 p-2 rounded-full border border-white/10 shadow-2xl"
      >
        {navItems.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className="px-5 py-2 text-xs uppercase tracking-widest font-medium text-white/60 hover:text-white transition-all duration-300 relative group"
          >
            {item.name}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_10px_#2f80ff]"></span>
          </a>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar;
