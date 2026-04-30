import { motion } from "framer-motion";
import type { Hue } from "@/oracle/data";

const hueColors: Record<Hue, string> = {
  crimson: "hsl(350 78% 22% / 0.55)",
  emerald: "hsl(155 55% 22% / 0.55)",
  sapphire: "hsl(218 65% 25% / 0.55)",
  royal: "hsl(280 50% 22% / 0.55)",
  gold: "hsl(38 70% 30% / 0.45)",
};

export const HuePainter = ({ hue }: { hue: Hue | null }) => (
  <motion.div
    aria-hidden
    className="fixed inset-0 pointer-events-none -z-0"
    animate={{
      background: hue
        ? `radial-gradient(ellipse at 50% 30%, ${hueColors[hue]} 0%, transparent 60%), radial-gradient(ellipse at 50% 80%, ${hueColors[hue]} 0%, transparent 70%)`
        : "radial-gradient(ellipse at 50% 30%, hsl(350 78% 22% / 0.25) 0%, transparent 60%)",
    }}
    transition={{ duration: 2.5, ease: "easeInOut" }}
  />
);
