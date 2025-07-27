import { motion } from 'framer-motion';

const ProjectCard = ({ title, description }) => (
  <motion.div
    className="rounded-lg bg-white dark:bg-gray-800 shadow-md p-6 hover:shadow-xl transition-shadow"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>
);

export default ProjectCard;
