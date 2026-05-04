import type { Metadata } from "next";
import { EnglishLevelTest } from "@/components/test/EnglishLevelTest";

export const metadata: Metadata = {
  title: "Test de inglés IT | Hello Techies",
  description:
    "Un check rápido en inglés para reuniones de trabajo: 6 situaciones, sin trampas. Al final te orientamos hacia el curso que encaja con tu momento.",
  openGraph: {
    title: "Test de inglés IT | Hello Techies",
    description:
      "Can you survive the IT meeting in English? 6 situaciones, menos de 5 minutos.",
  },
};

export default function TestDeInglesPage() {
  return <EnglishLevelTest />;
}
