import { motion } from "framer-motion";

export const OracleSigil = ({ size = 120 }: { size?: number }) => (
  <motion.svg
    width={size} height={size} viewBox="0 0 120 120"
    initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
    animate={{ opacity: 1, scale: 1, rotate: 0 }}
    transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
    className="drop-shadow-[0_0_25px_hsl(var(--gold)/0.6)]"
  >
    <defs>
      <radialGradient id="sigilGold" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="hsl(var(--gold-bright))" />
        <stop offset="60%" stopColor="hsl(var(--gold))" />
        <stop offset="100%" stopColor="hsl(var(--gold-deep))" />
      </radialGradient>
    </defs>
    <motion.g
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "60px 60px" }}
    >
      <circle cx="60" cy="60" r="52" fill="none" stroke="url(#sigilGold)" strokeWidth="0.6" strokeDasharray="2 4" opacity="0.7" />
      <circle cx="60" cy="60" r="44" fill="none" stroke="url(#sigilGold)" strokeWidth="0.5" opacity="0.5" />
    </motion.g>
    <motion.g
      animate={{ rotate: -360 }}
      transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "60px 60px" }}
    >
      <polygon points="60,18 96,80 24,80" fill="none" stroke="url(#sigilGold)" strokeWidth="0.8" opacity="0.7" />
      <polygon points="60,102 24,40 96,40" fill="none" stroke="url(#sigilGold)" strokeWidth="0.8" opacity="0.7" />
    </motion.g>
    <circle cx="60" cy="60" r="6" fill="url(#sigilGold)" />
    <circle cx="60" cy="60" r="14" fill="none" stroke="url(#sigilGold)" strokeWidth="1" />
  </motion.svg>
);
