export type OptionId = "a" | "b" | "c";

export type Option = {
  id: OptionId;
  emoji: string;
  label: string;
  points: 0 | 1 | 2;
};

export type Question = {
  id: number;
  prompt: string;
  englishQuote?: string;
  /** Cuando subas el archivo a /public/audio/… el reproductor lo usará */
  audioSrc?: string;
  audioTranscript?: string;
  options: [Option, Option, Option];
};

export const QUESTIONS: Question[] = [
  {
    id: 1,
    prompt:
      'Tu manager empieza la reunión y dice: "Let\'s go around the room and introduce ourselves." ¿Qué hacés?',
    englishQuote: "Let's go around the room and introduce ourselves.",
    options: [
      {
        id: "a",
        emoji: "💬",
        label:
          "Me presento sin problema, puedo improvisar y dar detalles.",
        points: 2,
      },
      {
        id: "b",
        emoji: "✏️",
        label:
          'Puedo decir algo básico ("My name is… I work in…") pero me cuesta desarrollar.',
        points: 1,
      },
      {
        id: "c",
        emoji: "❌",
        label:
          "Me bloqueo. Entiendo qué me piden pero no sé cómo responder en inglés.",
        points: 0,
      },
    ],
  },
  {
    id: 2,
    prompt:
      "Son las 10 AM. Tu manager continúa diciendo lo siguiente (audio):",
    audioSrc: "/audio/test-q2.mp3",
    audioTranscript:
      "Hi everyone, thanks for joining. Let's kick this off — can you give me a quick update on where we are with the migration? And if anything's blocking you, flag it now so we can sort it out today.",
    options: [
      {
        id: "a",
        emoji: "🙋",
        label: "Entendí todo. Sé exactamente qué está pidiendo.",
        points: 2,
      },
      {
        id: "b",
        emoji: "🤔",
        label:
          "Entendí que la reunión empieza, pero no capté bien qué pidió específicamente.",
        points: 1,
      },
      {
        id: "c",
        emoji: "😶",
        label:
          "Reconocí algunas palabras pero no pude armar el significado.",
        points: 0,
      },
    ],
  },
  {
    id: 3,
    prompt:
      'Un colega da su update y dice rápido: "We pushed the fix to staging last night, but QA flagged two bugs, so we\'re holding off on the release until we sort it out."',
    englishQuote:
      "We pushed the fix to staging last night, but QA flagged two bugs, so we're holding off on the release until we sort it out.",
    options: [
      {
        id: "a",
        emoji: "✅",
        label:
          "Entendí todo: subieron una corrección, apareció un problema en las pruebas, y frenaron el lanzamiento.",
        points: 2,
      },
      {
        id: "b",
        emoji: "🤔",
        label:
          "Capté que algo salió mal y que hay una demora, pero perdí los detalles técnicos.",
        points: 1,
      },
      {
        id: "c",
        emoji: "❓",
        label:
          "Entendí palabras sueltas pero no pude seguir el hilo.",
        points: 0,
      },
    ],
  },
  {
    id: 4,
    prompt:
      'Otra colega habla rápido y dice: "I\'ve been thinking — if we don\'t align with the stakeholders by Thursday, we\'re gonna miss the window and that\'s gonna be a problem going into Q3".',
    englishQuote:
      "I've been thinking — if we don't align with the stakeholders by Thursday, we're gonna miss the window and that's gonna be a problem going into Q3.",
    options: [
      {
        id: "a",
        emoji: "🎯",
        label:
          "Lo seguí completo: hay una fecha límite para coordinar o se pierde una oportunidad antes del tercer trimestre.",
        points: 2,
      },
      {
        id: "b",
        emoji: "📌",
        label:
          "Entendí que hay urgencia y una fecha, pero no el contexto completo.",
        points: 1,
      },
      {
        id: "c",
        emoji: "😵",
        label: "Fue demasiado rápido. Perdí casi todo.",
        points: 0,
      },
    ],
  },
  {
    id: 5,
    prompt:
      'De repente te preguntan tu opinión: "What do you think — should we prioritize the new feature or focus on fixing the current issues first?"',
    englishQuote:
      "What do you think — should we prioritize the new feature or focus on fixing the current issues first?",
    options: [
      {
        id: "a",
        emoji: "💡",
        label:
          "Doy mi opinión con argumentos, puedo debatir o al menos sostener una postura.",
        points: 2,
      },
      {
        id: "b",
        emoji: "😅",
        label:
          "Puedo decir qué pienso con frases simples, pero no me siento cómodo/a desarrollando la idea.",
        points: 1,
      },
      {
        id: "c",
        emoji: "🤐",
        label:
          "Entendí la pregunta pero preferí no responder para no cometer errores.",
        points: 0,
      },
    ],
  },
  {
    id: 6,
    prompt: "La reunión termina y tu manager dice lo siguiente (audio):",
    audioSrc: "/audio/test-q6.mp3",
    audioTranscript:
      "Alright team, let's wrap up. We'll have a follow-up on Friday at eleven. If you have any blockers before then, drop them in the Slack channel and I'll pick them up. Thanks everyone.",
    options: [
      {
        id: "a",
        emoji: "👍",
        label:
          "Entendí todo: sé qué tengo que agendar para el viernes y dónde puedo hacer preguntas.",
        points: 2,
      },
      {
        id: "b",
        emoji: "🤷",
        label:
          "Entendí que hay algo el viernes, pero no estoy seguro/a de lo demás.",
        points: 1,
      },
      {
        id: "c",
        emoji: "😬",
        label:
          "Sé que la reunión terminó, pero no capté los próximos pasos.",
        points: 0,
      },
    ],
  },
];

export type CourseSlug = "from-scratch" | "speaking-hub";

export type ResultBracket = {
  min: number;
  max: number;
  headline: string;
  comment: string;
  courseSlug: CourseSlug;
};

export const RESULTS: ResultBracket[] = [
  {
    min: 0,
    max: 4,
    headline: "Todavía no es tu reunión — pero puede serlo.",
    comment:
      "Tenés que construir la base primero. El curso From Scratch: Desde Cero arranca desde las bases y te lleva a poder comunicarte con confianza.",
    courseSlug: "from-scratch",
  },
  {
    min: 5,
    max: 8,
    headline: "Entendés lo que pasa en la reunión. El problema es cuando te toca hablar.",
    comment:
      "Tenés la base. Lo que necesitás ahora es práctica real. El curso The Speaking Hub: Hablá con confianza es para eso.",
    courseSlug: "speaking-hub",
  },
  {
    min: 9,
    max: 12,
    headline: "Sobreviviste la reunión sin despeinarte.",
    comment:
      "Tu inglés ya funciona. En The Speaking Hub: Hablá con confianza vas a llevar esa fluidez al siguiente nivel.",
    courseSlug: "speaking-hub",
  },
];

export const MAX_SCORE = 12;

export function getResult(score: number): ResultBracket {
  const bracket = RESULTS.find((r) => score >= r.min && score <= r.max);
  if (!bracket) {
    return RESULTS[RESULTS.length - 1]!;
  }
  return bracket;
}
