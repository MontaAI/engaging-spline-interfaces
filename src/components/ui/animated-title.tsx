import { motion } from "framer-motion";

interface AnimatedTitleProps {
  text: string;
  className?: string;
}

export const AnimatedTitle = ({ text, className = "" }: AnimatedTitleProps) => {
  const letters = text.split("");
  
  return (
    <motion.h1 
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          className="inline-block text-white" // Add text-white for visibility
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: i * 0.1,
            ease: [0.215, 0.61, 0.355, 1]
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
      <motion.div 
        className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl z-[-1]"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.h1>
  );
};