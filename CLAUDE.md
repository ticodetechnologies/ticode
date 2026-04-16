# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server on port 8080
npm run build        # Production build
npm run build:dev    # Development build
npm run lint         # ESLint
npm test             # Run tests once (Vitest)
npm run test:watch   # Run tests in watch mode
npm run preview      # Preview production build locally
```

## Architecture

**Stack:** Vite + React 18 + TypeScript SPA (not Next.js). Deployed on Netlify.

**Routing:** React Router v6 with lazy-loaded pages (`lazy()` + `Suspense`). All routes are defined in [src/App.tsx](src/App.tsx). Dynamic routes use `/:slug` params; GCC/Kuwait-specific SEO pages have dedicated routes (e.g., `/kuwait/it-consulting`).

**Path alias:** `@/` maps to `src/` — use this for all imports.

**i18n:** i18next + react-i18next with English (`src/i18n/en.json`) and Arabic (`src/i18n/ar.json`). Language detection uses path → localStorage → browser. The `useLanguage()` hook (`src/hooks/useLanguage.ts`) provides `currentLang`, `isRTL`, and `toggleLanguage()`. RTL direction is toggled on `document.documentElement` — all layout components must handle RTL.

**UI Components:** shadcn/ui (Radix UI primitives) in `src/components/ui/`. Use `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge) for className composition. Component variants use `class-variance-authority`.

**Styling:** Tailwind CSS with a custom design system defined in `tailwind.config.ts` — navy deep theme, cyan/blue/emerald accents, custom fonts (Plus Jakarta Sans, JetBrains Mono), extended border radii. Dark mode is class-based.

**Animations:** Framer Motion for component-level animations; GSAP via `useGsapReveal` hook for scroll-based reveals. Both are in active use — don't mix approaches within the same component.

**Static content:** Service and industry data lives in `src/data/services.ts` and `src/data/industries.ts`. Page content is driven by these data objects, not a CMS.

**Forms:** React Hook Form + Zod validation. `@hookform/resolvers` bridges the two.

**SEO:** `react-helmet-async` via the `SEOHead` component. Each page manages its own meta tags. The `src/pages/insights/` directory contains Kuwait-specific topic cluster pages for GCC SEO targeting.

**Testing:** Vitest with jsdom environment. Test files match `src/**/*.{test,spec}.{ts,tsx}`. Setup in `src/test/setup.ts` includes a `matchMedia` polyfill.

**TypeScript config:** `noImplicitAny: false` and `strictNullChecks: false` — type checking is intentionally relaxed. Don't tighten these without coordinating broader changes.
