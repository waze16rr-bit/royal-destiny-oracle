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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center text-center px-6"
    >
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="relative mx-auto flex h-48 w-48 items-center justify-center"
      >
        <div className="absolute inset-0 rounded-full border border-gold/20 shadow-[0_0_70px_rgba(255,220,128,0.25)]" />
        <motion.div
          initial={{ scale: 0.95, opacity: 0.8 }}
          animate={{ scale: [0.95, 1.03, 0.95], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-4 rounded-full bg-gradient-to-br from-gold/10 via-transparent to-amber-200/10"
        />
        <img src="/image.png" alt="Royal WAZE emblem" className="relative h-44 w-44 rounded-full object-cover" />
      </motion.div>

      <div className="mt-10 w-full max-w-md">
        <div className="mb-4 text-xs uppercase tracking-[0.35em] text-gold/80">
          ORACLE LOADING
        </div>
        <div className="relative h-3 overflow-hidden rounded-full bg-parchment/10 border border-gold/20 shadow-inner shadow-black/10">
          <motion.div
            className="h-full bg-gradient-to-r from-gold via-amber-300 to-gold/80"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />
          <motion.div
            className="absolute inset-y-0 left-0 w-16 bg-white/20 blur-2xl"
            animate={{ x: [`${Math.max(0, progress - 16)}%`, `${progress}%`, `${Math.min(100, progress + 16)}%`] }}
            transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="mt-3 text-2xl font-mono text-gold">{Math.round(progress)}%</div>
      </div>

      <p className="mt-6 font-body italic text-parchment/70 max-w-md">
        The royal sigil is aligning. Once the bar reaches 100%, the reveal box will glow.
      </p>

      <motion.div
        className="mt-10 rounded-[2rem] border px-12 py-4 text-sm uppercase tracking-[0.3em] text-gold shadow-[0_20px_90px_rgba(255,227,128,0.15)] backdrop-blur-md"
        animate={ready ? { scale: [1, 1.02, 1], boxShadow: ["0_20px_90px_rgba(255,227,128,0.15)", "0_30px_100px_rgba(255,227,128,0.30)", "0_20px_90px_rgba(255,227,128,0.15)"] } : {} }
        transition={{ duration: 1.2, repeat: ready ? Infinity : 0, ease: "easeInOut" }}
      >
        <button
          type="button"
          disabled={!ready}
          onClick={() => ready && onContinue()}
          className="w-full rounded-[2rem] bg-black/30 px-6 py-4 text-sm uppercase tracking-[0.3em] text-gold transition duration-200 disabled:cursor-not-allowed disabled:text-gold/40 disabled:opacity-40"
        >
          {ready ? "touch here to see your personality" : "preparing the oracle..."}
        </button>
      </motion.div>
    </motion.div>
  );
};
