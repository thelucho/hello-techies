"use client";

import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function FinalCta() {
  return (
    <motion.section
      className="bg-zinc-950 py-16 sm:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeInUp}
      transition={{ duration: 0.6, ease: "easeOut" as const }}
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          ¿Listo/a para que el inglés deje de ser un obstáculo?
        </h2>
        <p className="mt-4 text-balance text-sm text-zinc-300 sm:text-base">
          Sumate a Hello Techies y empezá a usar el inglés como la herramienta
          que siempre debería haber sido.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#ffd900] px-7 py-3 text-sm font-semibold text-zinc-950 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Quiero arrancar 🚀
          </a>
        </div>
      </div>
    </motion.section>
  );
}

