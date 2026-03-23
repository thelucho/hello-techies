"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, GraduationCap, Laptop, Languages } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgZmlsbD0iI2Y1ZjVmNSIvPjwvc3ZnPg==";

const HITOS = [
  {
    title: "Formación académica sólida",
    description:
      "Soy Profesora de Inglés egresada de la UNRC y tengo una Maestría en Lingüística Aplicada.",
    icon: GraduationCap,
  },
  {
    title: "Especialización en English for Specific Purposes",
    description:
      "Trabajo hace años con objetivos concretos de comunicación profesional, especialmente en contextos universitarios y laborales.",
    icon: Languages,
  },
  {
    title: "Más de 10 años enseñando inglés",
    description:
      "Acompaño a personas y equipos en procesos reales de aprendizaje, con estrategias claras y aplicables.",
    icon: Award,
  },
  {
    title: "Foco actual: profesionales IT",
    description:
      "Diseño clases online orientadas a reuniones, entrevistas, feedback y comunicación cotidiana en entornos tech.",
    icon: Laptop,
  },
];

const ENFOQUE = [
  "Aprendizaje con situaciones reales del mundo laboral",
  "Clases prácticas para destrabar la comunicación oral",
  "Material adaptado a tu perfil y objetivos",
  "Feedback claro para que sepas exactamente en qué mejorar",
];

export default function SobreMiPage() {
  return (
    <div className="-mt-20 min-h-screen bg-white">
      <motion.section
        className="border-b border-zinc-100 bg-[#f5f5f5] pb-12 pt-[96px] sm:pb-16 sm:pt-[96px]"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 md:grid-cols-[1.1fr_1fr]">
            <div>
              <span className="inline-flex rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white">
                Sobre mí
              </span>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
                Mi experiencia enseñando inglés para el mundo IT
              </h1>
              <p className="mt-4 text-base text-zinc-700 sm:text-lg">
                Soy Anita Dichiara. Mi trabajo combina formación académica,
                experiencia docente y una mirada práctica para ayudarte a usar el
                inglés con seguridad en tu día a día profesional.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-xs sm:max-w-sm">
              <div className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[#ffed00]/35 blur-3xl" />
              <div className="pointer-events-none absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-[#ffed00]/30 blur-3xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-white shadow-sm">
                <Image
                  src="/anita2.jpg"
                  alt="Anita Dichiara, profesora de inglés para profesionales IT"
                  fill
                  sizes="(min-width: 768px) 380px, 280px"
                  placeholder="blur"
                  blurDataURL={BLUR_PLACEHOLDER}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.section
          className="py-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-zinc-900">
            Recorrido profesional
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {HITOS.map((hito) => {
              const Icon = hito.icon;
              return (
                <article
                  key={hito.title}
                  className="rounded-2xl border border-zinc-100 bg-zinc-50/70 p-5 transition hover:border-[#ffed00]/50 hover:shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffed00] text-zinc-900">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-zinc-900">
                    {hito.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-700">{hito.description}</p>
                </article>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          className="py-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-zinc-900">Mi enfoque</h2>
          <p className="mt-2 text-sm text-zinc-600 sm:text-base">
            Cada clase busca que puedas usar el inglés con sentido, no memorizar
            contenido aislado.
          </p>

          <ul className="mt-5 space-y-4">
            {ENFOQUE.map((item, index) => (
              <li
                key={item}
                data-step={`0${index + 1}`}
                className={cn(
                  "relative overflow-hidden rounded-xl border border-amber-100/70 bg-gradient-to-r from-white via-amber-50/35 to-white",
                  "px-5 py-4 text-base font-medium text-zinc-800 shadow-sm",
                  "shadow-[inset_4px_0_0_rgba(250,204,21,0.32),inset_0_1px_0_rgba(255,255,255,0.85)]",
                  "before:pointer-events-none before:absolute before:-bottom-6 before:right-3 before:content-[attr(data-step)]",
                  "before:text-[88px] before:font-bold before:leading-none before:text-amber-200/45",
                  "transition hover:-translate-y-0.5 hover:border-amber-200 hover:shadow-md"
                )}
              >
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-300" />
                  <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                    Enfoque {index + 1}
                  </span>
                </span>
                <p className="mt-2 leading-relaxed text-zinc-800">{item}</p>
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          className="border-t border-zinc-200 py-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-2xl bg-[#ffed00]/20 p-6 text-center sm:p-8">
            <p className="text-lg font-medium text-zinc-800">
              Si querés, coordinamos una charla para ver en qué punto estás y qué
              plan te conviene más.
            </p>
            <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "inline-flex items-center justify-center rounded-full bg-[#ffed00] px-6 py-3 text-sm font-semibold text-zinc-950 shadow-sm",
                  "transition hover:-translate-y-0.5 hover:shadow-md"
                )}
              >
                Escribime por WhatsApp
              </a>
              <Link
                href="/#cursos"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:-translate-y-0.5 hover:border-zinc-400 hover:shadow-md"
              >
                Ver cursos
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
