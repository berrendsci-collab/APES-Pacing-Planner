# APES Pacing Planner

A production-quality web application for AP Environmental Science teachers to build customized course pacing plans aligned with the College Board Course and Exam Description (CED).

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Sprint 1 — Application Shell

Sprint 1 delivers a polished wizard interface with reusable components. No pacing engine or calendar logic yet.

| Page | Route | Status |
|------|-------|--------|
| Home | `/` | Overview and step navigation |
| School Information | `/school-information` | Form UI (static) |
| Schedule | `/schedule` | Form UI (static) |
| Calendar | `/calendar` | Placeholder UI (static) |
| Preferences | `/preferences` | Form UI (static) |
| Results | `/results` | Placeholder |

### Wizard features

- Progress bar with percentage complete
- Step indicators with completed/current/upcoming states
- Back/continue navigation between steps
- Shared header, footer, and page layout

## Project Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout with wizard progress
│   ├── page.tsx                # Home
│   ├── school-information/
│   ├── schedule/
│   ├── calendar/
│   ├── preferences/
│   └── results/
├── components/
│   ├── layout/                 # Header, footer, wizard progress, actions
│   └── ui/                     # Reusable form and display components
├── lib/
│   ├── constants.ts            # App config, defaults, wizard steps
│   ├── wizard.ts               # Progress and navigation helpers
│   └── cn.ts                   # Tailwind class merge utility
└── types/
    └── index.ts                # V1 TypeScript data model
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## What's Next

Later sprints will add form persistence, interactive calendar logic, instructional day calculations, the pacing engine, and export features.
