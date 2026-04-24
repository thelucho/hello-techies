# Hello Techies — Web

Sitio de **Hello Techies** (Anita / Anabella Dichiara): inglés para el mundo IT.

- **Next.js** (App Router) + **Tailwind CSS**
- **Framer Motion** para animaciones
- **Lucide React** para íconos
- Fuente: **Space Grotesk** (Google Fonts)

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Antes de publicar

1. **Imágenes**: Agregá en `/public`:
   - `logo.png` — logo de Hello Techies (navbar y footer)
   - `anita.jpg` — foto de Anita (hero y sección “Sobre Anita”)

2. **WhatsApp**: En `src/lib/constants.ts` reemplazá `WHATSAPP_NUMBER` por el número real (formato: código país + número sin espacios ni guiones, ej. `5493515551234`).

## Estructura

- `src/app` — rutas (home, cursos)
- `src/components` — Navbar, Footer, secciones de la home
- `src/lib` — constantes y utilidades (`cn`, `WHATSAPP_URL`)

## Rutas

- `/` — Home
- `/cursos/from-scratch` — Curso From Scratch: desde cero 🧩
- `/cursos/speaking-hub` — Curso Speaking Hub: hablá con confianza 💬

## Build

```bash
npm run build
npm start
```
