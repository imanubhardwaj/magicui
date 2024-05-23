

"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

interface GradualSpacingProps {
  text:string;
  className?: string;
  gradualVariants?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
}
const GradualSpacing = ({text,className,duration=0.5}:GradualSpacingProps) => {
  const gradualVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };
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
            transition={{ duration, delay: i * 0.1 }}
            className={cn(className)}
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}
export default GradualSpacing;
