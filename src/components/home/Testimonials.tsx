"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const TESTIMONIALS = [
  {
    name: "Mari L.",
    text: "The classes are entertaining and I enjoy them a lot.",
  },
  {
    name: "Mati",
    text: "Tus clases son geniales, divertidas y didácticas.",
  },
  {
    name: "Andrea C.",
    text: "La profe Anabella es una genia guiando y haciendo amena la clase.",
  },
  {
    name: "Carla P.",
    text: "Las clases super claras y llevaderas.",
  },
  {
    name: "Anónimo",
    text: "Anita es muy detallada y clara en cada explicación. Se asegura que los conceptos queden claros y entendidos por todos.",
  },
  {
    name: "Santi G.",
    text: "Me ayudó a animarme a participar más en reuniones con el equipo global.",
  },
  {
    name: "Lucía R.",
    text: "Siento que por fin el inglés que estudio se conecta con mi trabajo en IT.",
  },
  {
    name: "Pablo M.",
    text: "Las clases son dinámicas y el material está muy bien pensado para el día a día en IT.",
  },
  {
    name: "Valentina F.",
    text: "Anita tiene una forma de explicar que hace que todo cierre. Recomiendo 100%.",
  },
];

export function Testimonials() {
  return (
    <motion.section
      id="testimonios"
      className="bg-white py-16 sm:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3 text-center sm:text-left">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
            Lo que dicen mis alumnos
          </h2>
          <p className="text-sm text-zinc-600 sm:text-base">
            Más allá de la gramática, lo importante es cómo te sentís usando el
            idioma en tu día a día.
          </p>
        </div>

        <motion.div
          className="mt-8 grid gap-6 md:grid-cols-3"
          variants={listVariants}
        >
          {TESTIMONIALS.map((testimonio) => (
            <motion.article
              key={testimonio.name + testimonio.text.slice(0, 12)}
              className="flex h-full flex-col rounded-3xl border border-zinc-100 bg-zinc-50 p-5 text-sm shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              variants={cardVariants}
            >
              <div className="mb-3 flex gap-1 text-[#ffd900]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={16} fill="#ffd900" stroke="none" />
                ))}
              </div>
              <p className="flex-1 text-zinc-800">&ldquo;{testimonio.text}&rdquo;</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                {testimonio.name}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

