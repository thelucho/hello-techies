"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Monitor, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function EnglishTestTeaser() {
  return (
    <motion.section
      className="relative overflow-hidden bg-zinc-950 py-16 sm:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      transition={{ duration: 0.6, ease: "easeOut" as const }}
      aria-labelledby="english-test-teaser-heading"
    >
      <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#ffed00]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/90 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.55)]",
            "ring-1 ring-white/5"
          )}
        >
          <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900/95 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/90" aria-hidden />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" aria-hidden />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" aria-hidden />
            <span className="ml-2 font-mono text-[11px] text-zinc-500 sm:text-xs">
              Daily standup · 10:00 AM
            </span>
          </div>

          <div className="px-5 py-8 sm:px-8 sm:py-10">
            <p className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700/80 bg-zinc-800/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#ffed00]">
              <Monitor className="h-3.5 w-3.5" aria-hidden />
              Gratis · sin registro
            </p>

            <h2
              id="english-test-teaser-heading"
              className="mt-5 text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            >
              Can you survive the IT meeting in English? 🖥️
            </h2>
            <p className="mt-2 text-sm text-zinc-400 sm:text-base">
              A quick English check — no grammar rules, no trick questions.
            </p>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-zinc-300 sm:text-[0.9375rem]">
              <p>
                Imaginá que te sumás a una reunión de trabajo en inglés. Todo
                pasa en tiempo real: tu manager habla, un colega da un update,
                alguien te hace una pregunta de golpe. Tu único trabajo es
                responder con honestidad — no con lo que querés que sea cierto,
                sino con lo que realmente pasaría: ¿Seguirías el hilo? ¿Te
                bloquearías? ¿Entenderías lo suficiente para no perderte?
              </p>
              <p>
                No hay respuestas correctas ni incorrectas. Este test no te
                evalúa — te orienta. Al final vas a tener una idea clara de dónde
                estás parado/a y qué curso se adapta mejor a tu momento.
              </p>
              <p>
                Son 6 situaciones. Tardás menos de 5 minutos. Sé honesto/a — es
                el único truco.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-600/60 bg-zinc-800/40 px-3 py-1.5 text-xs font-medium text-zinc-200">
                <Sparkles className="h-3.5 w-3.5 text-[#ffed00]" aria-hidden />
                6 situaciones
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-600/60 bg-zinc-800/40 px-3 py-1.5 text-xs font-medium text-zinc-200">
                <Clock className="h-3.5 w-3.5 text-[#ffed00]" aria-hidden />
                &lt; 5 min
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-600/60 bg-zinc-800/40 px-3 py-1.5 text-xs font-medium text-zinc-200">
                Gratis
              </span>
            </div>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/test-de-ingles"
                className={cn(
                  "inline-flex items-center justify-center rounded-full bg-[#ffed00] px-7 py-3.5 text-sm font-semibold text-zinc-950 shadow-lg",
                  "transition hover:-translate-y-0.5 hover:shadow-xl",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffed00]"
                )}
              >
                Hacer el test (gratis)
              </Link>
              <p className="text-center text-xs text-zinc-500 sm:text-left">
                Sin registro. Sin email. Solo honestidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
