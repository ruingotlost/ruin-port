
import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const socials = [
    { name: 'Instagram', handle: '@workwithruin', icon: 'IG' },
    { name: 'YouTube', handle: '@workwithruin', icon: 'YT' },
    { name: 'Email', handle: 'contactruin@gmail.com', icon: 'ML' }
  ];

  return (
    <section id="contact" className="py-40 px-6 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[180px] -z-10 rounded-full"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center justify-between">
          
          <div className="w-full lg:w-1/2">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              viewport={{ once: true }}
            >
              <h2 className="font-cinematic text-7xl md:text-8xl mb-8 leading-none">
                SECURE <br/><span className="text-blue-500">COMMUNS.</span>
              </h2>
              <p className="text-white/40 max-w-md text-lg leading-relaxed mb-12 font-light">
                Ready to deploy? Contact Ruin for creative collaborations, high-end editing, and brand identity projects.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {socials.map((social, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="glass-card p-5 rounded-2xl flex items-center gap-5 hover:border-blue-500/40 transition-all group bg-white/[0.01]"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[10px] font-bold group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shadow-inner">
                    {social.icon}
                  </div>
                  <div>
                    <h4 className="text-[9px] font-cinematic text-white/30 tracking-[0.4em] mb-1">{social.name}</h4>
                    <p className="text-sm font-semibold tracking-wide text-white/80">{social.handle}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div 
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            viewport={{ once: true }}
            className="w-full lg:w-auto flex justify-center"
          >
            <div className="relative p-1 glass-card rounded-[4rem] border-blue-500/20 shadow-2xl">
              <div className="relative aspect-square w-72 md:w-96 rounded-[3.8rem] overflow-hidden bg-black">
                <img 
                  src="file:///C:/Users/aatul/Downloads/Jan_28__2026__10_40_35_PM-removebg-preview.png" 
                  alt="Ruin Contact Profile"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                {/* Visual Soft Blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none"></div>
              </div>
              
              {/* Status Floating Badge */}
              <div className="absolute -bottom-8 -right-8 glass-card p-8 rounded-[2rem] border border-blue-500/40 blue-glow bg-[#0a0a0a] z-20">
                <div className="flex flex-col gap-1">
                  <span className="font-cinematic text-[9px] tracking-[0.5em] text-blue-400">STATUS_CMD</span>
                  <span className="text-lg font-bold tracking-widest text-white leading-none">OPEN_4_WORK</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
