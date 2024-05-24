"use client";
import { AnimatePresence, motion } from "framer-motion";

interface GradualSpacingProps {
  text: string;
  className?: string;
  gradualVariants?: {
    hidden: { opacity: number; x: number };
    visible: { opacity: number; x: number };
  };
  delay?: number;
  duration?: number;
}

const GradualSpacing = ({
                          text,
                          className,
                          gradualVariants = {
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 },
                          },
                          duration = 0.5,
                          delay = 0.1,
                        }: GradualSpacingProps) => {
  return (
    <div className="flex space-x-1 justify-center">
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.h1
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={gradualVariants}
            transition={{ duration: duration, delay: i * delay }}
            className={className}
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default GradualSpacing;

