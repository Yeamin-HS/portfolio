import { motion } from 'framer-motion';
import CanvasScene from './CanvasScene';

const Hero = () => (
  <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-white dark:from-gray-800 dark:to-gray-900 text-center px-6 pt-20 space-y-10">
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl font-bold mb-4">
        Hi, I'm Yeamin Hossain Shihab
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
        I build elegant UIs and interactive experiences using React, Tailwind & Framer Motion.
      </p>
    </motion.div>
    <CanvasScene />
  </section>
);

export default Hero;
