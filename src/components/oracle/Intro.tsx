import { motion } from "framer-motion";
import { OracleSigil } from "./OracleSigil";

export const Intro = ({ onBegin }: { onBegin: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, scale: 0.96, filter: "blur(10px)" }}
    transition={{ duration: 1.2 }}
    className="flex flex-col items-center text-center max-w-3xl px-6"
  >
    <div className="animate-float-slow"><OracleSigil size={140} /></div>
    <p className="mt-8 font-display tracking-[0.5em] text-gold/80 text-xs md:text-sm">
      THE ROYAL ORACLE
    </p>
    <h1 className="mt-4 font-display text-5xl md:text-7xl lg:text-8xl text-parchment glow-text leading-none">
      <span className="text-gold-gradient">Personality</span>
      <br />of the Crown
    </h1>
    <div className="divider-ornate my-8 max-w-md mx-auto text-xs">⚜</div>
    <p className="font-body italic text-lg md:text-2xl text-parchment/85 leading-relaxed max-w-2xl">
      Thirteen verses. Thirteen reckonings.
      <br />
      Step before the seer's flame, and let the ancient measure unveil
      <br className="hidden md:block" />
      which sovereign soul slumbers within thee.
    </p>
    <motion.button
      onClick={onBegin}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="btn-royal mt-10 px-10 py-4 rounded-md text-sm md:text-base"
    >
      ✦ Approach the Oracle ✦
    </motion.button>
    <p className="mt-6 text-xs tracking-[0.2em] text-parchment/50 font-display">
      A 13-VERSE RITE · ~3 MINUTES
    </p>
  </motion.div>
);
