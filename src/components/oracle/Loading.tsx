import { motion } from "framer-motion";
import { OracleSigil } from "./OracleSigil";

export const Loading = () => (
  <motion.div
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    className="flex flex-col items-center text-center px-6"
  >
    <div className="animate-glow-pulse"><OracleSigil size={170} /></div>
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 1.2 }}
      className="mt-10 font-display tracking-[0.3em] text-gold text-sm md:text-base glow-text"
    >
      THE ORACLE IS WEIGHING YOUR SOUL
    </motion.p>
    <motion.div
      className="mt-6 h-[1px] w-64 bg-gradient-to-r from-transparent via-gold to-transparent"
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <p className="mt-6 font-body italic text-parchment/70 max-w-md">
      The runes turn… the silver mirror clouds… the verdict is near.
    </p>
  </motion.div>
);
