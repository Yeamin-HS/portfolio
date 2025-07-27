import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto text-center"
    >
      <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">About Me</h2>
      <p className="text-gray-700 dark:text-gray-300">
        I'm a passionate developer skilled in building modern, interactive web applications using React, Tailwind, and animation libraries like Framer Motion.
      </p>
    </motion.div>
  );
};

export default About;
