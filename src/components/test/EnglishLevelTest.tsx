"use client";

import { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles, Users } from "lucide-react";
import {
  getResult,
  MAX_SCORE,
  QUESTIONS,
  type ResultBracket,
} from "@/lib/englishTest";
import { WHATSAPP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

const courseDetails: Record<
  ResultBracket["courseSlug"],
  {
    title: string;
    href: string;
    badge: string;
    bullets: string[];
    cta: string;
  }
> = {
  "from-scratch": {
    title: "From Scratch: desde cero 🧩",
    href: "/cursos/from-scratch",
    badge: "Para principiantes",
    bullets: [
      "Aprendé las bases del inglés aplicadas a contextos reales.",
      "Practicá cómo presentarte y hablar de tu rol en IT.",
      "Hablá en inglés desde la primera clase.",
    ],
    cta: "Ver detalles del curso",
  },
  "speaking-hub": {
    title: "Speaking Hub: hablá con confianza 💬",
    href: "/cursos/speaking-hub",
    badge: "Para quienes ya tienen base",
    bullets: [
      "Perdé el miedo a hablar con práctica constante.",
      "Expresá tus ideas con claridad en inglés.",
      "Recibí feedback personalizado para mejorar rápido.",
    ],
    cta: "Ver detalles del curso",
  },
};

const slide = {
  initial: { opacity: 0, x: 16 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -16 },
};

export function EnglishLevelTest() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(() =>
    QUESTIONS.map(() => null)
  );

  const currentQuestion = QUESTIONS[step];
  const selectedPoints = answers[step];
  const score = useMemo(
    () => answers.reduce<number>((acc, p) => acc + (p ?? 0), 0),
    [answers]
  );
  const isResult = step >= QUESTIONS.length;
  const result = isResult ? getResult(score) : null;

  const handleSelect = useCallback((questionIndex: number, points: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[questionIndex] = points;
      return next;
    });
  }, []);

  const handleNext = useCallback(() => {
    if (step < QUESTIONS.length - 1) {
      setStep((s) => s + 1);
      return;
    }
    if (step === QUESTIONS.length - 1) {
      setStep(QUESTIONS.length);
    }
  }, [step]);

  const handleBack = useCallback(() => {
    if (step > 0) setStep((s) => s - 1);
  }, [step]);

  const handleRestart = useCallback(() => {
    setStep(0);
    setAnswers(QUESTIONS.map(() => null));
  }, []);

  const progress = ((Math.min(step, QUESTIONS.length - 1) + 1) / QUESTIONS.length) * 100;

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <section className="border-b border-zinc-200 bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white">
            Test gratis
          </span>
          <h1 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
            Can you survive the IT meeting in English?
          </h1>
          <p className="mt-3 text-sm text-zinc-600 sm:text-base">
            Sin gramática ni trampas: son 6 situaciones y tardás menos de 5
            minutos. Sé honesto/a — es el único truco.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:px-8">
        {!isResult && (
          <div className="mb-6 space-y-2">
            <div
              className="flex items-center justify-between text-xs font-medium text-zinc-600 sm:text-sm"
              aria-live="polite"
              aria-atomic="true"
            >
              <span>Situación {step + 1} de {QUESTIONS.length}</span>
              <span>
                Te quedan {QUESTIONS.length - step - 1} por responder
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-zinc-200">
              <motion.div
                className="h-full rounded-full bg-[#ffed00]"
                initial={false}
                animate={{ width: `${progress}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {!isResult && currentQuestion ? (
            <motion.div
              key={currentQuestion.id}
              variants={slide}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.22 }}
              className="rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Situación {currentQuestion.id}
              </p>
              <p className="mt-3 text-base font-medium text-zinc-900 sm:text-lg">
                {currentQuestion.prompt}
              </p>

              {currentQuestion.englishQuote ? (
                <blockquote
                  className={cn(
                    "mt-4 border-l-4 border-[#ffed00] bg-zinc-50/80 px-4 py-3 text-sm italic text-zinc-800",
                    "rounded-r-xl"
                  )}
                >
                  “{currentQuestion.englishQuote}”
                </blockquote>
              ) : null}

              {currentQuestion.audioSrc ? (
                <div className="mt-4 space-y-3">
                  <audio
                    controls
                    preload="none"
                    src={currentQuestion.audioSrc}
                    className="w-full max-w-full rounded-lg"
                  >
                    Tu navegador no reproduce audio.
                  </audio>
                  {currentQuestion.audioTranscript ? (
                    <details className="rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3 text-sm text-zinc-700">
                      <summary className="cursor-pointer font-medium text-zinc-900">
                        Ver transcripción
                      </summary>
                      <p className="mt-2 leading-relaxed">
                        {currentQuestion.audioTranscript}
                      </p>
                    </details>
                  ) : null}
                </div>
              ) : null}

              <div
                className="mt-6 space-y-3"
                role="radiogroup"
                aria-label={`Opciones situación ${currentQuestion.id}`}
              >
                {currentQuestion.options.map((opt) => {
                  const selected = selectedPoints === opt.points;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() => handleSelect(step, opt.points)}
                      className={cn(
                        "flex w-full items-start gap-3 rounded-2xl border px-4 py-3.5 text-left text-sm transition",
                        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400",
                        selected
                          ? "border-zinc-900 bg-[#ffed00]/35 shadow-sm"
                          : "border-zinc-200 bg-white hover:border-zinc-300 hover:bg-zinc-50"
                      )}
                    >
                      <span className="text-xl leading-none" aria-hidden>
                        {opt.emoji}
                      </span>
                      <span className="text-zinc-800">{opt.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={step === 0}
                  aria-disabled={step === 0}
                  className={cn(
                    "rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-800",
                    "transition hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-40"
                  )}
                >
                  Anterior
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={selectedPoints === null}
                  aria-disabled={selectedPoints === null}
                  className={cn(
                    "rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm",
                    "transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40"
                  )}
                >
                  {step === QUESTIONS.length - 1 ? "Ver mi resultado" : "Siguiente"}
                </button>
              </div>
            </motion.div>
          ) : result ? (
            <motion.div
              key="result"
              variants={slide}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.22 }}
              className="space-y-8"
            >
              <div className="rounded-3xl border border-zinc-100 bg-white p-6 text-center shadow-sm sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  Tu puntaje
                </p>
                <p className="mt-2 text-4xl font-bold tabular-nums text-zinc-900 sm:text-5xl">
                  {score}{" "}
                  <span className="text-2xl font-semibold text-zinc-500">
                    / {MAX_SCORE}
                  </span>
                </p>
                <h2 className="mt-6 text-xl font-semibold text-zinc-900 sm:text-2xl">
                  {result.headline}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-700 sm:text-base">
                  {result.comment}
                </p>
              </div>

              <RecommendedCourseCard bracket={result} />

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-full bg-[#ffed00] px-6 py-3 text-sm font-semibold text-zinc-950 shadow-sm",
                    "transition hover:-translate-y-0.5 hover:shadow-md"
                  )}
                >
                  <MessageCircle size={18} aria-hidden />
                  Hablar con Anita
                </a>
                <button
                  type="button"
                  onClick={handleRestart}
                  className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50"
                >
                  Hacer el test otra vez
                </button>
              </div>

              <p className="text-center text-sm text-zinc-600">
                ¿Querés ver el otro curso?{" "}
                <Link
                  href={
                    result.courseSlug === "from-scratch"
                      ? "/cursos/speaking-hub"
                      : "/cursos/from-scratch"
                  }
                  className="font-semibold text-zinc-900 underline underline-offset-2 hover:text-zinc-700"
                >
                  Ver{" "}
                  {result.courseSlug === "from-scratch"
                    ? "Speaking Hub"
                    : "From Scratch"}
                </Link>
              </p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}

function RecommendedCourseCard({ bracket }: { bracket: ResultBracket }) {
  const course = courseDetails[bracket.courseSlug];
  const IconForBullet = [Sparkles, Users, MessageCircle] as const;

  return (
    <article
      className={cn(
        "flex flex-col rounded-3xl border border-zinc-100 bg-white p-7 shadow-sm",
        "border-zinc-100 transition hover:shadow-md"
      )}
    >
      <div className="mb-4">
        <h3 className="text-lg font-bold tracking-tight text-zinc-900 sm:text-xl">
          {course.title}
        </h3>
        <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-[#ffed00]" />
          {course.badge}
        </div>
      </div>
      <ul className="space-y-3 text-sm text-zinc-800">
        {course.bullets.map((text, i) => {
          const Icon = IconForBullet[i % IconForBullet.length]!;
          return (
            <li key={text} className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ffed00]/40 text-zinc-900">
                <Icon size={18} />
              </span>
              <span>{text}</span>
            </li>
          );
        })}
      </ul>
      <div className="mt-6 w-full pt-2">
        <Link
          href={course.href}
          className={cn(
            "flex w-full items-center justify-center gap-2 rounded-2xl border border-zinc-400 px-4 py-3.5",
            "bg-gradient-to-br from-white via-zinc-100 to-zinc-200",
            "text-sm font-semibold text-zinc-900 transition",
            "hover:border-zinc-500 hover:from-zinc-100 hover:via-zinc-200 hover:to-zinc-300",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
          )}
        >
          {course.cta}
          <ArrowRight size={18} className="shrink-0" aria-hidden />
        </Link>
      </div>
    </article>
  );
}
