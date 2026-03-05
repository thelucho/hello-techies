"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function PainPoints() {
  const items = [
    "Entendés cuando leés, pero te bloqueás al hablar en reuniones",
    "Evitás postularte a trabajos internacionales por el idioma",
    "Estudiaste inglés años y sentís que no avanzás",
    "Tu inglés no refleja tu nivel profesional real",
  ];

  return (
    <motion.section
      id="para-quien"
      className="bg-white py-16 sm:py-20"
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
          <p className="text-sm text-zinc-600 sm:text-base">
            Muchos alumnos llegan a Hello Techies después de años de estudiar
            inglés sin lograr usarlo en situaciones reales.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-red-100 bg-red-50/50 px-4 py-3"
            >
              <span className="mt-0.5 text-red-500">
                <AlertCircle size={18} />
              </span>
              <p className="text-sm text-zinc-800">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-4 text-center">
          <p className="text-sm font-medium text-zinc-800 sm:text-base">
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

