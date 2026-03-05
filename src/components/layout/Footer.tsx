"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-lg bg-zinc-100">
            <Image
              src="/logo.png"
              alt="Hello Techies"
              fill
              sizes="36px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[22px] font-semibold leading-6 text-zinc-900">
              Hello Techies
            </span>
          </div>
        </div>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-600">
          <Link
            href="/#inicio"
            className="transition-colors hover:text-zinc-900"
          >
            Inicio
          </Link>
          <Link
            href="/#cursos"
            className="transition-colors hover:text-zinc-900"
          >
            Cursos
          </Link>
          <Link
            href="/#sobre-mi"
            className="transition-colors hover:text-zinc-900"
          >
            Sobre mí
          </Link>
          <Link
            href="/#testimonios"
            className="transition-colors hover:text-zinc-900"
          >
            Testimonios
          </Link>
        </nav>

        <div className="flex flex-col gap-3 text-sm text-zinc-600 md:items-end">
          <a
            href="https://instagram.com/hello.techies.ingles"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-zinc-700 transition-colors hover:text-zinc-900"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100">
              <Instagram size={18} />
            </span>
            <span>@hello.techies.ingles</span>
          </a>
          <p className="text-xs text-zinc-500">
            © 2025 Hello Techies. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

