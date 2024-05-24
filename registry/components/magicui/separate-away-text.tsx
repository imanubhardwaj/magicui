

"use client";
import { AnimatePresence, motion } from "framer-motion";

interface SeparateAwayProps{
  textTop: string,
  textBottom: string,
  className?: string,
  separateAwayTextVariants?: {
    hidden: { opacity: number; y: number };
    visible: (custom: number) => { opacity: number; y: number; transition: { duration: number } };
  },
}
const SeparateAway = ({textTop,textBottom,className,
                        separateAwayTextVariants = {
                          hidden: { opacity: 0, y: 0 },
                          visible: (custom: number) => ({
                            opacity: 1,
                            y: custom * 5,
                            transition: { duration: 1.5 },
                          }),
                        }
                      }:SeparateAwayProps) => {
  return (
    <div>
      <motion.h1
        custom={-1}
        variants={separateAwayTextVariants}
        initial="hidden"
        animate="visible"
        className={className}
      >
        {textTop}
      </motion.h1>
      <motion.h1
        custom={1}
        variants={separateAwayTextVariants}
        initial="hidden"
        animate="visible"
        className={className}
      >
        {textBottom}
      </motion.h1>
    </div>
  );
}
export default SeparateAway;
