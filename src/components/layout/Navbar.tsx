"use client";

import { useState, type MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#cursos", label: "Cursos" },
  { href: "/test-de-ingles", label: "Test de inglés" },
  { href: "/#sobre-mi", label: "Sobre mí" },
  { href: "/#testimonios", label: "Testimonios" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  const handleSectionScroll = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const hashIndex = href.indexOf("#");
    if (hashIndex === -1 || pathname !== "/") {
      return;
    }

    event.preventDefault();
    const sectionId = href.slice(hashIndex + 1);
    const target = document.getElementById(sectionId);
    if (!target) {
      return;
    }

    const header = document.querySelector("header");
    const headerHeight = header instanceof HTMLElement ? header.offsetHeight : 0;
    const topGap = 12;
    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - headerHeight - topGap;

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: "smooth",
    });
    window.history.pushState(null, "", `/#${sectionId}`);
    setIsOpen(false);
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });

  return (
    <motion.header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent",
        "transition-colors",
        isScrolled && "border-zinc-200 bg-white/70 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/#inicio" className="flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-lg bg-zinc-100">
            <Image
              src="/logo.png"
              alt="Hello Techies"
              fill
              sizes="36px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[22px] font-semibold leading-6 tracking-tight text-zinc-900">
              Hello Techies
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-700 md:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(event) => handleSectionScroll(event, item.href)}
              className="navbar-marker-link"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "hidden rounded-full px-4 py-2 text-sm font-semibold shadow-sm md:inline-flex",
              "bg-[#ffed00] text-zinc-950 transition hover:-translate-y-0.5 hover:shadow-md"
            )}
          >
            Quiero arrancar 🚀
          </a>
          <button
            type="button"
            aria-label="Abrir menú"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-full border border-zinc-200 p-2 text-zinc-700 md:hidden"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-zinc-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(event) => handleSectionScroll(event, item.href)}
                className="rounded-full px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#ffed00] px-4 py-2 text-sm font-semibold text-zinc-950 shadow-sm"
            >
              Quiero arrancar 🚀
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}

