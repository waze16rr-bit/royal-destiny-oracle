import { motion, AnimatePresence } from "framer-motion";

export const OracleOpinion = ({ text }: { text: string | null }) => (
  <div className="h-12 flex items-center justify-center px-4">
    <AnimatePresence mode="wait">
      {text && (
        <motion.p
          key={text}
          initial={{ opacity: 0, y: -8, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: 8, filter: "blur(8px)" }}
          transition={{ duration: 0.7 }}
          className="font-display italic text-gold/90 text-sm md:text-base tracking-[0.15em] text-center glow-text"
        >
          ❝ {text} ❞
        </motion.p>
      )}
    </AnimatePresence>
  </div>
);
