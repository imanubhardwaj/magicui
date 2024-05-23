import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";


interface WavyTextProps {
  text: string;
  framerProps?: HTMLMotionProps<"h1">;
  className?: string;
}
export default function WavyText({text,className,  framerProps = {
  initial: "hidden",
  animate: "visible",
  exit: "hidden",
  transition: { yoyo: Infinity, duration: 0.5, delay: 0.2 }
},}: WavyTextProps) {
  const variants1 = {
    hidden: { y: 10 },
    visible: { y: -10 },
  };
  return (
    <div className="flex space-x-2 justify-center">
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.h1
            key={i}
            variants={variants1}
            {...framerProps}
            className={cn(className)}
          >
            {char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}