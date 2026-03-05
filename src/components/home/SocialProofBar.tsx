"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function SocialProofBar() {
  return (
    <motion.section
      className="bg-[#ffd900] py-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      variants={fadeInUp}
      transition={{ duration: 0.5, ease: "easeOut" as const }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm font-semibold uppercase tracking-tight text-zinc-950 sm:flex-row sm:text-base">
        <p>+10 años de experiencia</p>
        <p>+100 alumnos formados</p>
        <p>Profesora universitaria UNRC</p>
      </div>
    </motion.section>
  );
}

