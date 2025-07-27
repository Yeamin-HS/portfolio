import { motion } from 'framer-motion';

const Contact = () => (
  <section id="contact" className="min-h-screen px-6 py-24 bg-white dark:bg-gray-900">
    <motion.h2
      className="text-3xl font-bold mb-6"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      Contact
    </motion.h2>
    <p className="text-gray-600 dark:text-gray-300">
      Feel free to reach out via email or through the form (coming soon).
    </p>
  </section>
);

export default Contact;
