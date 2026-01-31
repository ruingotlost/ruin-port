
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading for cinematic effect
    const timer = setTimeout(() => setIsLoaded(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-blue-600 selection:text-white">
      {/* Background Noise/Grain */}
      <div className="grain" />
      
      {/* Deep Background Gradient */}
      <div className="fixed inset-0 bg-[#050505] z-[-2]" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(10,25,50,1)_0%,rgba(5,5,5,1)_80%)] z-[-1]" />

      <AnimatePresence>
        {!isLoaded ? (
          <motion.div 
            key="loader"
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-white font-cinematic text-2xl tracking-[0.5em]"
            >
              INITIALIZING...
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Portfolio />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
