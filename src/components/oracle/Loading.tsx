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
      <div className="relative mx-auto overflow-hidden rounded-full border border-gold/20 shadow-[0_0_60px_rgba(250,214,95,0.24)]">
        <img src="/image.png" alt="Royal WAZE emblem" className="h-44 w-44 object-cover" />
      </div>

      <div className="mt-10 w-full max-w-md">
        <div className="mb-4 text-xs uppercase tracking-[0.35em] text-gold/80">
          ORACLE LOADING
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-parchment/10 border border-gold/20">
          <div
            className="h-full bg-gradient-to-r from-gold via-amber-300 to-gold/80 transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-3 text-2xl font-mono text-gold">{Math.round(progress)}%</div>
      </div>

      <p className="mt-6 font-body italic text-parchment/70 max-w-md">
        The royal sigil is aligning. Once the bar reaches 100%, touch the box to see your personality.
      </p>

      <motion.button
        type="button"
        onClick={() => ready && onContinue()}
        disabled={!ready}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: ready ? 1 : 0.35 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="mt-10 rounded-3xl border border-gold/30 bg-black/30 px-10 py-4 text-sm uppercase tracking-[0.3em] text-gold shadow-lg shadow-black/20 transition duration-200 disabled:cursor-not-allowed disabled:opacity-40"
      >
        touch here to see your personality
      </motion.button>
    </motion.div>
  );
};
