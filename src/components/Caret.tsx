import { motion } from "framer-motion";

const Caret = () => {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      className="inline-block bg-primary-500 w-0.5 h-7"
      transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
    />
  );
};

export default Caret;
