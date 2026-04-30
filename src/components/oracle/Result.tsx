import { motion } from "framer-motion";
import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import type { Personality, Group } from "@/oracle/data";
import { OracleSigil } from "./OracleSigil";

const groupGradient: Record<Group, string> = {
  Analyst: "from-royal/30 via-ink to-sapphire/30",
  Diplomat: "from-emerald/30 via-ink to-sapphire/30",
  Sentinel: "from-gold-deep/25 via-ink to-crimson-deep/25",
  Explorer: "from-crimson-deep/35 via-ink to-gold-deep/20",
};

const groupVerse: Record<Group, string> = {
  Analyst: "Of the House of Vision — minds that build kingdoms before stones are laid.",
  Diplomat: "Of the House of Hearts — souls who shepherd the unseen worth in others.",
  Sentinel: "Of the House of Stone — keepers of oath, hearth, and the long quiet duty.",
  Explorer: "Of the House of Flame — bold hands that meet the world bare and unafraid.",
};

export const Result = ({ p, onRestart }: { p: Personality; onRestart: () => void }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const exportScroll = async () => {
    if (!scrollRef.current) return;
    const canvas = await html2canvas(scrollRef.current, {
      backgroundColor: "#1a1410", scale: 2, useCORS: true,
    });
    const img = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait", unit: "px",
      format: [canvas.width, canvas.height],
    });
    pdf.addImage(img, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save(`royal-oracle-${p.code}.pdf`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
      className="w-full max-w-4xl px-4"
    >
      <div ref={scrollRef} className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${groupGradient[p.group]} border border-gold/40 shadow-deep`}>
        {/* ornamental frame */}
        <div className="absolute inset-3 border border-gold/30 rounded-xl pointer-events-none" />
        <div className="absolute top-4 left-4 text-gold text-2xl font-display">⚜</div>
        <div className="absolute top-4 right-4 text-gold text-2xl font-display">⚜</div>
        <div className="absolute bottom-4 left-4 text-gold text-2xl font-display">⚜</div>
        <div className="absolute bottom-4 right-4 text-gold text-2xl font-display">⚜</div>

        <div className="p-8 md:p-14 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex justify-center mb-4"
          >
            <OracleSigil size={90} />
          </motion.div>

          <p className="font-display tracking-[0.4em] text-gold/80 text-xs md:text-sm">
            THE ORACLE HAS SPOKEN
          </p>

          <motion.div
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.15em" }}
            transition={{ delay: 0.5, duration: 1.4 }}
            className="mt-6 font-display text-5xl md:text-7xl text-gold-gradient glow-text"
          >
            {p.code}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="mt-4 font-display text-3xl md:text-5xl text-parchment glow-text"
          >
            {p.title}
          </motion.h2>

          <p className="mt-3 font-body italic text-lg md:text-xl text-gold/90">
            “{p.tagline}”
          </p>

          <div className="divider-ornate my-8 max-w-md mx-auto text-xs">✦ {p.group.toUpperCase()} ✦</div>

          <p className="font-body italic text-sm md:text-base text-parchment/70 max-w-xl mx-auto">
            {groupVerse[p.group]}
          </p>

          {/* Animated cinematic destiny "video" placeholder — pure CSS scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="mt-10 mx-auto max-w-2xl aspect-video rounded-lg overflow-hidden border border-gold/40 relative bg-ink"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${groupGradient[p.group]}`} />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <OracleSigil size={220} />
            </motion.div>
            <motion.div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(ellipse at center, transparent 30%, hsl(var(--ink)) 80%)",
              }}
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <div className="absolute bottom-3 left-0 right-0 text-center">
              <p className="font-display text-xs tracking-[0.4em] text-gold/80">
                ✦ DESTINY OF THE {p.group.toUpperCase()}S ✦
              </p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="mt-10 font-body text-lg md:text-xl text-parchment/95 leading-relaxed max-w-2xl mx-auto text-left md:text-center"
          >
            {p.description}
          </motion.p>

          <div className="mt-12 grid md:grid-cols-2 gap-6 text-left">
            <div className="rounded-lg border border-gold/30 bg-ink/40 p-6">
              <h3 className="font-display text-gold text-sm tracking-[0.3em] mb-4">⚔ STRENGTHS</h3>
              <ul className="space-y-2 font-body text-parchment/90 text-base">
                {p.strengths.map(s => (
                  <li key={s} className="flex gap-2"><span className="text-gold">✦</span><span>{s}</span></li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-crimson/40 bg-ink/40 p-6">
              <h3 className="font-display text-crimson-glow text-sm tracking-[0.3em] mb-4">☾ SHADOWS</h3>
              <ul className="space-y-2 font-body text-parchment/90 text-base">
                {p.shadows.map(s => (
                  <li key={s} className="flex gap-2"><span className="text-crimson-glow">✦</span><span>{s}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <button onClick={exportScroll} className="btn-royal px-8 py-3 rounded-md text-sm">
          📜 Download Results as Scroll
        </button>
        <button
          onClick={onRestart}
          className="px-8 py-3 rounded-md text-sm font-display tracking-[0.2em] uppercase border border-gold/40 text-parchment hover:bg-gold/10 transition-all"
        >
          ↺ Consult the Oracle Anew
        </button>
      </div>
    </motion.div>
  );
};
