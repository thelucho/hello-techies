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
    text: "I always say that you are an excellent teacher. The classes are entertaining and I enjoy them a lot.",
  },
  {
    name: "Mati",
    text: "Tus clases son geniales, divertidas y didácticas. Me sirven mucho 🤗",
  },
  {
    name: "Fede L.",
    text: "Me parece un curso excelente, dictado con mucha didáctica y con temas apropiados para el nivel.",
  },
  {
    name: "Carla B.",
    text: "Realmente me sirvieron mucho las dinámicas de práctica de speaking durante las clases y las correcciones de pronunciación. Recalco el trabajo de planificación de las clases, siendo un desafío la modalidad virtual.",
  },
  {
    name: "Andrea C.",
    text: "No les cambiaría nada, la profe Anabella es una genia guiando y haciendo amena la clase.",
  },
  {
    name: "Lara C.",
    text: "Anita es muy detallada y clara en cada explicación. Se asegura que los conceptos queden claros y entendidos por todos.",
  },
  {
    name: "Tayson",
    text: "Hi everyone! Soy Tay, actualmente viviendo en Nueva Zelanda. Estudié con Ani los últimos 6 meses antes de mi llegada aquí, y básicamente todo lo que aprendí con ella es literalmente lo que estoy utilizando como herramienta. Sus clases son súper dinámicas e interesantes!! Súper recomendable Anita!! No pierdan su oportunidad!! 🙌🏽",
  },
  {
    name: "Jonathan G.",
    text: "Tuve una muy buena experiencia durante las clases. Desde el principio me sentí cómodo, lo cual fue clave porque hacía tiempo que no tomaba clases de inglés y volver me generaba muchas dudas. Las clases eran dinámicas y llevaderas, combinando práctica oral con gramática y situaciones cotidianas, lo que ayudaba a aprender de forma más natural. También destaco el ambiente relajado, que hacía que uno se anime a participar sin miedo a equivocarse. Gracias a las clases, logré mejorar mi confianza al hablar y entender inglés en el día a día, y siento que avancé de manera constante. Sin dudas recomendaría las clases a cualquier persona que quiera aprender o mejorar su inglés en un entorno cómodo y bien guiado.",
  },
  {
    name: "Luciano D.",
    text: "Anita es una profesora increíble. Me sentí muy cómodo en las clases y aprendí mucho. Las clases fueron muy dinámicas y me ayudaron a mejorar mi nivel de inglés. Recomiendo 100%.",
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
              <div className="mb-3 flex gap-1 text-[#ffed00]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={16} fill="#ffed00" stroke="none" />
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

