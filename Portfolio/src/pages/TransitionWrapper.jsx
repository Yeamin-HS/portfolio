import { motion } from 'framer-motion';

const animation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const TransitionWrapper = ({ children }) => (
  <motion.div
    variants={animation}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);

export default TransitionWrapper;
