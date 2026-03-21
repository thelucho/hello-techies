"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const floating = {
  animate: {
    y: [-6, 6, -6],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "easeInOut" as const,
    },
  },
};

const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI3MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNzAwIiBmaWxsPSIjZjVmNWY1Ii8+PC9zdmc+";

export function Hero() {
  return (
    <section
      id="inicio"
      className="bg-white"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 pb-16 pt-10 sm:px-6 sm:pt-12 lg:px-8 lg:flex-row lg:items-center lg:py-20">
        <motion.div
          className="flex-1 space-y-6 text-center lg:text-left"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
        >
          <p className="inline-flex rounded-full bg-[#fff3a3] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-900">
            Inglés para el mundo IT
          </p>
          <h1
            id="hero-heading"
            className="font-semibold leading-[2.5rem] tracking-tight text-zinc-900"
          >
            <span className="block whitespace-nowrap text-[2.77rem]">
              Tu carrera en IT es global.
            </span>
            <span className="mt-1 block text-balance text-4xl sm:text-5xl lg:text-6xl">
              Tu inglés, también.
            </span>
          </h1>
          <p className="max-w-xl text-balance text-base text-zinc-600 sm:text-lg">
            Aprendé inglés pensado para IT: meetings, entrevistas y equipos
            internacionales. Sin libros aburridos. Con propósito real.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
            <a
              href="/#cursos"
              className={cn(
                "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-sm",
                "bg-[#ffed00] text-zinc-950 transition hover:-translate-y-0.5 hover:shadow-md"
              )}
            >
              Ver cursos
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold",
                "border border-zinc-900 text-zinc-900 transition hover:-translate-y-0.5 hover:bg-zinc-900 hover:text-white hover:shadow-md"
              )}
            >
              Hablar con Anita
            </a>
          </div>

          <p className="text-xs text-zinc-500">
            Clases 100% online, grupos reducidos y foco en lo que realmente
            hacés en el día a día.
          </p>
        </motion.div>

        <motion.div
          className="relative flex-1"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.1 }}
        >
          <div className="relative mx-auto aspect-[4/5] max-w-xs overflow-hidden rounded-[2.5rem] bg-[#fff9c2] sm:max-w-sm">
            <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#ffed00]/40 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-[#ffed00]/30 blur-3xl" />

            <Image
              src="/anita.jpg"
              alt="Anita Dichiara, profesora de inglés para el mundo IT"
              fill
              sizes="(min-width: 1024px) 320px, 260px"
              priority
              placeholder="blur"
              blurDataURL={BLUR_PLACEHOLDER}
              className="object-cover"
            />
          </div>

          <motion.div
            className="pointer-events-none absolute -left-6 top-6 hidden rounded-2xl bg-white px-4 py-2.5 text-xs font-medium shadow-lg sm:flex"
            variants={floating}
            animate="animate"
          >
            💬 Daily stand-up
          </motion.div>

          <motion.div
            className="pointer-events-none absolute -right-2 top-24 hidden rounded-2xl bg-white px-4 py-2.5 text-xs font-medium shadow-lg sm:flex"
            variants={floating}
            animate="animate"
          >
            🌍 Remote team
          </motion.div>

          <motion.div
            className="pointer-events-none absolute -bottom-3 left-10 hidden rounded-2xl bg-white px-4 py-2.5 text-xs font-medium shadow-lg sm:flex"
            variants={floating}
            animate="animate"
          >
            ✅ Job interview
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

