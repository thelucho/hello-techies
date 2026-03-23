"use client";

import { motion } from "framer-motion";
import { TriangleAlert } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function PainPoints() {
  const items = [
    {
      title: "Te trabás al hablar",
      text: "Entendés cuando leés, pero te bloqueás al hablar en reuniones",
    },
    {
      title: "Frenás oportunidades",
      text: "Evitás postularte a trabajos internacionales por el idioma",
    },
    {
      title: "Mucho esfuerzo, poco avance",
      text: "Estudiaste inglés años y sentís que no avanzás",
    },
    {
      title: "No mostrás tu verdadero nivel",
      text: "Tu inglés no refleja tu nivel profesional real",
    },
  ];

  return (
    <motion.section
      id="para-quien"
      className="bg-gradient-to-b from-white via-rose-50/40 to-white py-16 sm:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
      transition={{ duration: 0.6, ease: "easeOut" as const }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4 text-center mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
            ¿Te suena esto familiar?
          </h2>
          <p className="mx-auto max-w-xl text-sm text-zinc-600 sm:text-base">
            Muchos alumnos llegan a Hello Techies después de años de estudiar
            inglés sin lograr usarlo en situaciones reales.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-rose-200/80 bg-white/95 p-5 shadow-[0_12px_35px_-22px_rgba(15,23,42,0.4)] transition duration-300 hover:-translate-y-1 hover:border-rose-300 hover:shadow-[0_22px_55px_-26px_rgba(225,29,72,0.36)]"
            >
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-rose-300 via-rose-400 to-red-400 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute -right-14 -top-14 h-28 w-28 rounded-full bg-rose-100/70 blur-2xl transition duration-300 group-hover:bg-rose-200/80" />

              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-rose-200/70 bg-gradient-to-br from-rose-50 to-red-50 text-rose-600 shadow-sm transition duration-300 group-hover:scale-105 group-hover:text-rose-700">
                  <TriangleAlert size={18} />
                </span>
                <div className="space-y-2">
                  <p className="text-lg font-semibold tracking-tight text-zinc-900 sm:text-[1.2rem]">
                    {item.title}
                  </p>
                  <p className="text-sm leading-relaxed text-zinc-700">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-4 text-center sm:mt-12">
          <p className="text-base font-medium text-zinc-800 sm:text-lg">
            Si marcaste aunque sea uno... Hello Techies es para vos.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-black hover:shadow-md"
          >
            Quiero mejorar mi inglés
          </a>
        </div>
      </div>
    </motion.section>
  );
}

