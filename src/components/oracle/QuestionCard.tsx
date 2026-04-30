import { motion } from "framer-motion";
import type { Question, Letter } from "@/oracle/data";

interface Props {
  question: Question;
  index: number;
  total: number;
  onAnswer: (letter: Letter) => void;
}

export const QuestionCard = ({ question, index, total, onAnswer }: Props) => (
  <motion.div
    key={question.id}
    initial={{ opacity: 0, y: 30, rotateX: -8, filter: "blur(10px)" }}
    animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
    exit={{ opacity: 0, y: -30, rotateX: 8, filter: "blur(10px)" }}
    transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
    className="glass-card rounded-xl p-8 md:p-12 max-w-3xl w-full"
    style={{ transformPerspective: 1200 }}
  >
    <div className="flex items-center justify-between mb-8">
      <span className="font-display text-xs tracking-[0.3em] text-gold/80">
        VERSE {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
      <div className="flex gap-1">
        {Array.from({ length: total }).map((_, i) => (
          <span key={i}
            className={`h-[3px] w-3 rounded-full transition-all duration-500 ${
              i < index ? "bg-gold" : i === index ? "bg-gold-bright shadow-gold" : "bg-gold/20"
            }`}
          />
        ))}
      </div>
    </div>

    <div className="divider-ornate mb-8 text-xs tracking-[0.4em]">✦</div>

    <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-parchment text-center leading-tight mb-10 glow-text">
      {question.prompt}
    </h2>

    <div className="grid gap-4 md:grid-cols-2">
      {question.options.map((opt, i) => (
        <motion.button
          key={opt.letter + i}
          onClick={() => onAnswer(opt.letter)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
          className="answer-card rounded-lg p-6 text-left group"
        >
          <div className="flex items-start gap-4">
            <span className="font-display text-gold text-2xl leading-none mt-0.5 group-hover:text-gold-bright transition-colors">
              {i === 0 ? "I." : "II."}
            </span>
            <p className="font-body text-lg md:text-xl text-parchment/95 leading-snug italic">
              {opt.text}
            </p>
          </div>
        </motion.button>
      ))}
    </div>
  </motion.div>
);
