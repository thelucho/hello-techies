"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Clock,
  FileText,
  Globe,
  MessageCircle,
  Users,
} from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const MODULOS = [
  {
    title: "Presentaciones y rol profesional",
    description:
      "Aprendés a presentarte y hablar de tu trabajo en contextos formales e informales.",
  },
  {
    title: "Tareas, procesos y responsabilidades",
    description:
      "Describís tu día a día, procesos y qué hacés en tu rol con vocabulario IT.",
  },
  {
    title: "Problemas técnicos y soluciones",
    description:
      "Explicás incidentes, bugs y soluciones de forma clara para equipos internacionales.",
  },
];

const INCLUYE = [
  "Clases en vivo 100% online",
  "Grupos reducidos",
  "Material adaptado a IT",
  "Práctica oral en cada clase",
  "Feedback personalizado",
  "Práctica extra",
];

export default function FromScratchPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero interno */}
      <motion.section
        className="border-b border-zinc-100 bg-[#f5f5f5] px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white">
            Para principiantes
          </span>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            From Scratch: desde cero 🧩
          </h1>
          <p className="mt-3 text-base text-zinc-600 sm:text-lg">
            Construí tu base en inglés desde cero, con foco en el mundo IT.
          </p>
        </div>
      </motion.section>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        {/* ¿Este curso es para vos? */}
        <motion.section
          className="py-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-zinc-900 sm:text-2xl">
            ¿Este curso es para vos?
          </h2>
          <ul className="mt-4 space-y-3">
            {[
              "Tenés poca o ninguna base de inglés y querés arrancar con un propósito claro.",
              "Trabajás en IT (dev, PM, UX, soporte) y necesitás entender y comunicarte en inglés.",
              "Querés poder presentarte, hablar de tu rol y entender reuniones básicas.",
              "Preferís un grupo reducido y material pensado para tu contexto laboral.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                <span className="mt-0.5 shrink-0 text-[#ffed00]">
                  <Check size={18} strokeWidth={2.5} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* ¿Qué vas a aprender? */}
        <motion.section
          className="py-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-zinc-900 sm:text-2xl">
            ¿Qué vas a aprender?
          </h2>
          <p className="mt-2 text-sm text-zinc-600">
            Cuatro módulos progresivos para que tengas una base sólida y aplicable.
          </p>
          <div className="mt-6 space-y-4">
            {MODULOS.map((mod, i) => (
              <div
                key={mod.title}
                className={cn(
                  "flex gap-4 rounded-2xl border border-zinc-100 bg-zinc-50/50 p-4",
                  "transition hover:border-[#ffed00]/40 hover:shadow-sm"
                )}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ffed00] text-sm font-semibold text-zinc-900">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900">
                    {mod.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600">{mod.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ¿Qué incluye? */}
        <motion.section
          className="py-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-zinc-900 sm:text-2xl">
            ¿Qué incluye?
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {INCLUYE.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-zinc-100 bg-white px-4 py-3 text-sm text-zinc-800"
              >
                <Check size={18} className="shrink-0 text-[#ffed00]" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-4 rounded-xl border border-[#ffed00]/40 bg-[#ffed00]/10 px-4 py-3">
            <p className="text-sm font-semibold text-zinc-900">
              🎁 Incluye un PDF de regalo
            </p>
            <p className="mt-1 text-sm text-zinc-700">
              Antes de comenzar, podés descargar una clase de muestra en PDF
              para ver cómo trabajamos por dentro.
            </p>
          </div>
        </motion.section>

        {/* Detalles del curso */}
        <motion.section
          className="py-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-zinc-900 sm:text-2xl">
            Detalles del curso
          </h2>
          <div className="mt-4 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-800">
              <Clock size={18} />
              <span>4 meses</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-800">
              <Users size={18} />
              <span>1h30 semanal</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-800">
              <Globe size={18} />
              <span>Modalidad online</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-800">
              <FileText size={18} />
              <span>PDF de regalo incluido</span>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="pb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-center">
            <Clock
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-5 right-2 h-16 w-16 text-zinc-300/80"
              strokeWidth={1.5}
            />
            <p className="relative text-base font-semibold text-zinc-800">
              Apertura de cupos <span className="text-zinc-400">→</span>{" "}
              <span className="text-zinc-900">soon!</span>
            </p>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="border-t border-zinc-200 py-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="rounded-2xl bg-[#ffed00]/20 p-6 text-center">
            <p className="text-[18px] font-medium text-zinc-800">
              ¿Listo para arrancar desde cero con inglés pensado para IT?
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#ffed00] px-6 py-3 text-sm font-semibold text-zinc-950 shadow-sm",
                "transition hover:-translate-y-0.5 hover:shadow-md"
              )}
            >
              <MessageCircle size={18} />
              Escribime por WhatsApp
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
