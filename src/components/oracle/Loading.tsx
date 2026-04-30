import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type LoadingProps = {
  onContinue: () => void;
};

export const Loading = ({ onContinue }: LoadingProps) => {
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setProgress(0);
    setReady(false);
    const totalDuration = 4000;
    const updateInterval = 40;
    const step = 100 / (totalDuration / updateInterval);

    const timer = window.setInterval(() => {
      setProgress((value) => {
        const next = Math.min(100, value + step);
        if (next >= 100) {
          window.clearInterval(timer);
          setReady(true);
        }
        return next;
      });
    }, updateInterval);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="flex flex-col items-center text-center px-6"
    >
      <motion.div
        animate={{ scale: [1, 1.03, 1], rotate: [0, 2, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative mx-auto overflow-hidden rounded-full border border-gold/20 shadow-[0_0_60px_rgba(250,214,95,0.24)]"
      >
        <img src="/image.png" alt="Royal WAZE emblem" className="h-44 w-44 object-cover" />
      </motion.div>

      <div className="mt-10 w-full max-w-md">
        <div className="mb-4 text-xs uppercase tracking-[0.35em] text-gold/80">
          ORACLE LOADING
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-parchment/10 border border-gold/20 shadow-inner shadow-black/10">
          <motion.div
            className="h-full bg-gradient-to-r from-gold via-amber-300 to-gold/80"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />
        </div>
        <div className="mt-3 text-2xl font-mono text-gold">{Math.round(progress)}%</div>
      </div>

      <p className="mt-6 font-body italic text-parchment/70 max-w-md">
        The royal sigil is aligning. Once the bar reaches 100%, the box appears—touch it to reveal your personality.
      </p>

      {ready ? (
        <motion.button
          type="button"
          onClick={onContinue}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mt-10 rounded-[2rem] border border-gold/30 bg-black/40 px-12 py-4 text-sm uppercase tracking-[0.3em] text-gold shadow-[0_20px_90px_rgba(255,227,128,0.15)] backdrop-blur-md hover:-translate-y-0.5 hover:shadow-[0_30px_90px_rgba(255,227,128,0.22)] transition-transform duration-200"
        >
          touch here to see your personality
        </motion.button>
      ) : (
        <div className="mt-10 rounded-[2rem] border border-gold/10 bg-black/20 px-12 py-4 text-sm uppercase tracking-[0.3em] text-gold/40">
          preparing the oracle...
        </div>
      )}
    </motion.div>
  );
};
