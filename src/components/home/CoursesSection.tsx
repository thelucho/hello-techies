"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles, Users } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function CoursesSection() {
  return (
    <motion.section
      id="cursos"
      className="bg-[#f5f5f5] py-16 sm:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={sectionVariants}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-3 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
            Elegí tu punto de partida
          </h2>
          <p className="text-sm text-zinc-600 sm:text-base">
            Dos propuestas pensadas para donde estás hoy.
          </p>
        </div>

        <motion.div
          className="mt-10 grid gap-6 md:grid-cols-2"
          variants={listVariants}
        >
          <motion.article
            className={cn(
              "flex h-full min-h-[260px] flex-col rounded-3xl bg-white p-7 shadow-sm",
              "border border-zinc-100 transition hover:-translate-y-1 hover:shadow-md"
            )}
            variants={cardVariants}
          >
            <div className="mb-4">
              <h3 className="whitespace-nowrap text-lg font-bold tracking-tight text-zinc-900 sm:text-xl">
                From Scratch: desde cero 🧩
              </h3>
              <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ffed00]" />
                Para principiantes
              </div>
            </div>

            <p className="text-xs font-medium uppercase tracking-tight text-zinc-500">
              Duración: 4 meses · 1h 30min semanal
            </p>

            <p className="mt-3 text-sm text-zinc-700">
              Empezá desde cero con una base sólida orientada al mundo IT.
              Aprendés a presentarte, hablar de tu rol y entender lo que
              escuchás.
            </p>

            <ul className="mt-5 space-y-3 text-sm text-zinc-800">
              <li className="flex items-center gap-3">
                <span className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#ffed00]/40 text-zinc-900">
                  <Sparkles size={18} />
                </span>
                <span>Aprendé las bases del inglés aplicadas a contextos reales.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#ffed00]/40 text-zinc-900">
                  <Users size={18} />
                </span>
                <span>Practicá como presentarte y hablar de tu rol en IT.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#ffed00]/40 text-zinc-900">
                  <MessageCircle size={18} />
                </span>
                <span>Hablá en inglés desde la primera clase.</span>
              </li>
            </ul>

            <div className="mt-6 flex items-center justify-between gap-3">
              <Link
                href="/cursos/from-scratch"
                className="inline-flex items-center gap-1 text-sm font-semibold text-zinc-900"
              >
                Ver detalles
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.article>

          <motion.article
            className={cn(
              "flex h-full min-h-[260px] flex-col rounded-3xl bg-white p-7 shadow-sm",
              "border border-zinc-100 transition hover:-translate-y-1 hover:shadow-md"
            )}
            variants={cardVariants}
          >
            <div className="mb-4">
              <h3 className="whitespace-nowrap text-lg font-bold tracking-tight text-zinc-900 sm:text-xl">
                Speaking Hub: hablá con confianza 💬
              </h3>
              <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ffed00]" />
                Para quienes ya tienen base
              </div>
            </div>

            <p className="text-xs font-medium uppercase tracking-tight text-zinc-500">
              Duración: 4 meses · 1h semanal
            </p>

            <p className="mt-3 text-sm text-zinc-700">
              Destrabá el habla. Discutís 100% en inglés sobre temas reales de
              IT: trabajo remoto, UX, comunicación en equipos internacionales.
            </p>

            <ul className="mt-5 space-y-3 text-sm text-zinc-800">
              <li className="flex items-center gap-3">
                <span className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#ffed00]/40 text-zinc-900">
                  <MessageCircle size={18} />
                </span>
                <span>Perdé el miedo a hablar con práctica constante.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#ffed00]/40 text-zinc-900">
                  <Users size={18} />
                </span>
                <span>Expresá tus ideas con claridad en inglés.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#ffed00]/40 text-zinc-900">
                  <Sparkles size={18} />
                </span>
                <span>Recibí feedback personalizado para mejorar rápido.</span>
              </li>
            </ul>

            <div className="mt-6 flex items-center justify-between gap-3">
              <Link
                href="/cursos/speaking-hub"
                className="inline-flex items-center gap-1 text-sm font-semibold text-zinc-900"
              >
                Ver detalles
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.article>
        </motion.div>

        <div className="mt-8 space-y-3 text-center">
          <p className="text-base text-zinc-600 sm:text-base">
            ¿No sabés cuál elegir? Agendá una entrevista diagnóstica <span className="font-bold">¡Gratis!</span> (15 min.)
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-zinc-900 px-5 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-900 hover:text-white"
          >
            Quiero que me orienten
          </a>
        </div>
      </div>
    </motion.section>
  );
}

