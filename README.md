# Shagato Chowdhury — Backend Developer Portfolio

A professional, animated portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

## Scripts
- `npm run dev` — Run local development server
- `npm run build` — Build for production
- `npm start` — Start production server
- `npm run lint` — Lint codebase
- `npm run format` — Format with Prettier
- `npm run type-check` — TypeScript type checking

## Structure
- `app/` — App Router entrypoints (`layout.tsx`, `page.tsx`)
- `components/` — UI components and sections (Hero, About, Experience, Projects, Skills, Contact)
- `lib/` — Animation helpers and sample data
- `public/` — Static assets (favicons, images)

## Customize
- Update metadata in `app/layout.tsx` (title, description, OpenGraph)
- Replace placeholder content in `lib/data.ts`
- Update contact email in `components/Contact.tsx`
- Replace `public/favicon.svg` with your own assets (optional)

## Notes
- Dark mode is default and can be toggled in the header.
- Animations use Framer Motion with shared variants in `lib/animations.ts`.