"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgZmlsbD0iI2Y1ZjVmNSIvPjwvc3ZnPg==";

const BADGES = [
  "Profesora UNRC",
  "Maestría en Lingüística Aplicada",
  "+10 años de experiencia",
  "ESP Specialist",
];

export function AboutAnita() {
  return (
    <motion.section
      id="sobre-mi"
      className="bg-[#f5f5f5] py-16 sm:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeInUp}
      transition={{ duration: 0.6, ease: "easeOut" as const }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 sm:px-6 lg:flex-row lg:px-8">
        <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md">
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#ffed00]/30 blur-3xl" />
          <div className="pointer-events-none absolute -right-6 bottom-0 h-32 w-32 rounded-full bg-[#ffed00]/25 blur-3xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] bg-white shadow-sm">
            <Image
              src="/anita2.jpg"
              alt="Anita Dichiara profesora de inglés para el mundo IT"
              fill
              sizes="(min-width: 1024px) 320px, 260px"
              placeholder="blur"
              blurDataURL={BLUR_PLACEHOLDER}
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex-1 space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
            Hola, soy Anita 👋
          </h2>
          <p className="text-sm text-zinc-700 sm:text-base">
            Soy Profesora de Inglés egresada de la UNRC con Maestría en
            Lingüística Aplicada. Hace más de 10 años que enseño inglés en
            distintos contextos, y hoy me especializo en la enseñanza online
            para adultos del mundo IT.
          </p>
          <p className="text-sm text-zinc-700 sm:text-base">
            También soy docente universitaria en asignaturas de English for
            Specific Purposes, lo que significa que no solo enseño el idioma: 
            <strong> diseño propuestas con un objetivo concreto y real</strong>.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {BADGES.map((badge) => (
              <span
                key={badge}
                className="rounded-md bg-zinc-200/70 px-2.5 py-1 text-[11px] font-medium tracking-wide text-zinc-700"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href="/sobre-mi"
              className="inline-flex items-center gap-2 rounded-full bg-[#ffed00] px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Más sobre mí
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

