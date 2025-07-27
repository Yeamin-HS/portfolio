import React from 'react';
import { motion } from 'framer-motion';
import CanvasScene from '../components/CanvasScene';

const AnimatedHero = () => {
  return (
    <section className="relative w-screen min-h-screen overflow-hidden text-white">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-animated-gradient z-0" />

      {/* Overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6 space-y-8">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
           <span className="text-blue-300">Yeamin Hossain Shihab</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-2xl text-white/80"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          I build elegant UIs and interactive experiences using React, Tailwind & 3D Motion.
        </motion.p>

        <CanvasScene />
      </div>
    </section>
  );
};

export default AnimatedHero;
