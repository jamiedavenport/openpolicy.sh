# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun run dev       # Start dev server
bun run build     # Build for production
bun run preview   # Preview production build
```

## Architecture

This is the **openpolicy.sh landing page** — a single-page marketing site for a policy-as-code framework concept. It is built with:

- **Astro 5** with the Vercel adapter (`@astrojs/vercel`), deployed to Vercel
- **Tailwind CSS v4** via the `@tailwindcss/vite` plugin (not the Astro integration — configured in `vite.plugins`)
- **Geist Mono** font loaded via Astro's experimental `fonts` API (`fontProviders.fontsource()`), exposed as CSS variable `--font-geist-mono` and set as `--font-mono` in `global.css`
- **astro-icon** with the `@iconify-json/simple-icons` icon set for social icons

### Key structure

- `src/pages/index.astro` — the entire landing page (README, Features grid, Getting Started code samples, LLMs section, footer). All content is inline; there are no shared components or layouts.
- `src/pages/404.astro` — minimal 404 page
- `src/styles/global.css` — imports Tailwind and maps the Geist Mono CSS variable to `--font-mono`
- `astro.config.mjs` — site URL, adapter, integrations, experimental font config, and Vite plugins
- `public/` — static assets (favicon, OG image, etc.)

### Styling conventions

Tailwind v4 is used with utility classes directly in markup. There are no component-level CSS files beyond `global.css`. The site uses a minimal gray palette (`bg-gray-50`, `bg-white`, `border-gray-200`) with `font-mono` as the primary typeface.
