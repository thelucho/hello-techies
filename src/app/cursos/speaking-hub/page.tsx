"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Clock,
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

const PASOS = [
  {
    step: 1,
    title: "Recibís el material previo a la clase",
    description:
      "Llegás preparado/a con el tema y vocabulario para aprovechar al máximo el tiempo hablando.",
  },
  {
    step: 2,
    title: "Discutís en inglés sobre temáticas reales de IT",
    description:
      "Reuniones, trabajo remoto, UX, equipos internacionales: todo en contexto real.",
  },
  {
    step: 3,
    title: "Recibís feedback personalizado post-clase",
    description:
      "Sabés qué mejorar y qué reforzar para la próxima sin frenar el flujo de la clase.",
  },
];

const TEMATICAS = [
  "UX",
  "Gamificación",
  "Trabajo remoto",
  "Desarrollo profesional",
  "Comunicación en equipos internacionales",
  "Meetings",
  "Feedback",
  "Priorización",
];

const INCLUYE = [
  "Clases en vivo 100% online",
  "Grupos reducidos",
  "Material previo por clase",
  "100% de la clase en inglés",
  "Feedback escrito post-clase",
  "Temáticas adaptadas a IT",
];

export default function SpeakingHubPage() {
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
            Para quienes ya tienen base
          </span>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Speaking Hub 💬
          </h1>
          <p className="mt-3 text-base text-zinc-600 sm:text-lg">
            Destrabá el habla. Hablá de IT en inglés con fluidez y confianza.
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
              "Ya tenés una base de inglés pero te cuesta hablar en reuniones o con equipos internacionales.",
              "Entendés cuando leés o escuchás, pero te bloqueás al tener que responder en vivo.",
              "Querés ganar fluidez y confianza hablando de temas reales de tu trabajo.",
              "Buscás un espacio seguro para equivocarte y mejorar sin presión.",
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

        {/* ¿Cómo funcionan las clases? */}
        <motion.section
          className="py-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-zinc-900 sm:text-2xl">
            ¿Cómo funcionan las clases?
          </h2>
          <div className="mt-6 space-y-6">
            {PASOS.map((paso) => (
              <div
                key={paso.step}
                className={cn(
                  "flex gap-4 rounded-2xl border border-zinc-100 bg-zinc-50/50 p-5",
                  "transition hover:border-[#ffed00]/40 hover:shadow-sm"
                )}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ffed00] text-lg font-semibold text-zinc-900">
                  {paso.step}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900">
                    {paso.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600">{paso.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Temáticas que trabajamos */}
        <motion.section
          className="py-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-zinc-900 sm:text-2xl">
            Temáticas que trabajamos
          </h2>
          <p className="mt-2 text-sm text-zinc-600">
            Todo en contexto real de IT para que hables de lo que te importa.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {TEMATICAS.map((tema) => (
              <span
                key={tema}
                className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-800 shadow-sm"
              >
                {tema}
              </span>
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
              <span>1h semanal</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-800">
              <Globe size={18} />
              <span>Modalidad online</span>
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
              ¿No sabés si este es tu nivel?
              <br />
              Agendá una entrevista diagnóstica sin costo y te orientamos.
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
              Quiero que me orienten
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
