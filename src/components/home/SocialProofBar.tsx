"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Users } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stats = [
  {
    icon: Award,
    title: "+10 años de experiencia",
  },
  {
    icon: Users,
    title: "+100 alumnos formados",
  },
  {
    icon: GraduationCap,
    title: "Profe universitaria UNRC",
  },
] as const;

export function SocialProofBar() {
  return (
    <motion.section
      className="relative overflow-hidden border-y border-zinc-900/10 bg-[#ffed00] py-8 sm:py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      variants={fadeInUp}
      transition={{ duration: 0.5, ease: "easeOut" as const }}
      aria-label="Logros y credenciales"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.55) 0%, transparent 45%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.4) 0%, transparent 40%)",
        }}
      />
      <div className="pointer-events-none absolute -left-16 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-white/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-12 bottom-0 h-40 w-40 rounded-full bg-amber-200/40 blur-2xl" />

      <div className="relative mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-3 sm:gap-5 sm:px-6 lg:px-8">
        {stats.map(({ icon: Icon, title }, i) => (
          <motion.div
            key={title}
            className="group flex items-center gap-4 rounded-2xl border border-zinc-900/10 bg-white/35 px-4 py-4 shadow-sm backdrop-blur-sm transition hover:border-zinc-900/15 hover:bg-white/50 hover:shadow-md sm:flex-col sm:items-center sm:text-center lg:flex-row lg:items-center lg:text-left"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-[#ffed00] shadow-inner ring-1 ring-zinc-900/20 transition group-hover:scale-[1.03] sm:mx-auto lg:mx-0"
              aria-hidden
            >
              <Icon className="h-6 w-6" strokeWidth={1.75} />
            </div>
            <p className="min-w-0 flex-1 text-pretty text-sm font-bold uppercase leading-snug tracking-wide text-zinc-950 sm:text-base">
              {title}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
