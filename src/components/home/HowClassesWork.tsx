"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const gridVariants = {
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

const FEATURES = [
  {
    emoji: "🎯",
    title: "Material personalizado",
    description: "Adaptado a tu rol y nivel.",
  },
  {
    emoji: "🗣️",
    title: "Práctica oral constante",
    description: "El foco está en que puedas hablar.",
  },
  {
    emoji: "💬",
    title: "Feedback claro",
    description: "Sabés qué hiciste bien y qué mejorar.",
  },
  {
    emoji: "🔒",
    title: "Espacio seguro",
    description: "Equivocarse es parte del proceso.",
  },
];

export function HowClassesWork() {
  return (
    <motion.section
      className="bg-white py-16 sm:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
            Inglés para hacer cosas reales
          </h2>
          <p className="text-sm text-zinc-600 sm:text-base">
            No vas a completar ejercicios sueltos de gramática.
          </p>
        </div>

        <motion.div
          className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4"
          variants={gridVariants}
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              className="flex flex-col gap-3 rounded-3xl border border-zinc-100 bg-zinc-50 p-4 text-sm shadow-sm"
              variants={cardVariants}
            >
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white text-lg">
                {feature.emoji}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-900">
                  {feature.title}
                </h3>
                <p className="mt-1 text-xs text-zinc-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

