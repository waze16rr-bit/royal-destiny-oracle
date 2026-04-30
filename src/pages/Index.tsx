import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  questions, oracleOpinions, scoreAnswers, personalities,
  type Letter, type Hue,
} from "@/oracle/data";
import { Intro } from "@/components/oracle/Intro";
import { QuestionCard } from "@/components/oracle/QuestionCard";
import { OracleOpinion } from "@/components/oracle/OracleOpinion";
import { HuePainter } from "@/components/oracle/HuePainter";
import { Loading } from "@/components/oracle/Loading";
import { Result } from "@/components/oracle/Result";

type Stage = "intro" | "quiz" | "loading" | "result";

const Index = () => {
  const [stage, setStage] = useState<Stage>("intro");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Letter[]>([]);
  const [opinion, setOpinion] = useState<string | null>(null);
  const [hue, setHue] = useState<Hue | null>(null);

  const result = useMemo(() => {
    if (stage !== "result" || answers.length < questions.length) return null;
    return personalities[scoreAnswers(answers)];
  }, [stage, answers]);

  const handleAnswer = (letter: Letter) => {
    const q = questions[step];
    const opt = q.options.find(o => o.letter === letter);
    if (opt) setHue(opt.hue);
    setOpinion(oracleOpinions[Math.floor(Math.random() * oracleOpinions.length)]);
    const next = [...answers, letter];
    setAnswers(next);

    if (step + 1 >= questions.length) {
      setStage("loading");
      setTimeout(() => setStage("result"), 2800);
    } else {
      setTimeout(() => setStep(step + 1), 450);
    }
  };

  const restart = () => {
    setAnswers([]); setStep(0); setOpinion(null); setHue(null); setStage("intro");
  };

  return (
    <>
      <Helmet>
        <title>The Royal Oracle — Personality of the Crown</title>
        <meta name="description" content="A 13-verse mystical personality rite. Discover which of the 16 royal souls slumbers within thee, judged by the Ancient Oracle." />
        <link rel="canonical" href="/" />
      </Helmet>

      <HuePainter hue={hue} />
      <div className="starfield" />

      <main className="relative z-10 min-h-screen w-full flex flex-col">
        <header className="pt-6 px-6 flex justify-center">
          <p className="font-display tracking-[0.5em] text-gold/60 text-[10px] md:text-xs">
            ⚜ THE ROYAL ORACLE ⚜
          </p>
        </header>

        <section className="flex-1 flex flex-col items-center justify-center py-10 px-4">
          {stage === "quiz" && <OracleOpinion text={opinion} />}

          <AnimatePresence mode="wait">
            {stage === "intro" && (
              <Intro key="intro" onBegin={() => { setStage("quiz"); setOpinion(oracleOpinions[0]); }} />
            )}
            {stage === "quiz" && (
              <QuestionCard
                key={questions[step].id}
                question={questions[step]}
                index={step}
                total={questions.length}
                onAnswer={handleAnswer}
              />
            )}
            {stage === "loading" && <Loading key="loading" />}
            {stage === "result" && result && (
              <Result key="result" p={result} onRestart={restart} />
            )}
          </AnimatePresence>
        </section>

        <footer className="py-6 text-center font-display text-[10px] tracking-[0.3em] text-parchment/40">
          ✦ FORGED IN CANDLELIGHT · 16 SOVEREIGN SOULS ✦
        </footer>
      </main>
    </>
  );
};

export default Index;
