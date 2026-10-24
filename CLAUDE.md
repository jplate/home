# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal academic homepage for analytic philosopher Jan Plate. Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4, exported as a static site and deployed to GitHub Pages.

## Commands

```bash
npm run dev      # dev server (Turbopack) on :3000
npm run build    # static export to out/  (also runs TS type-checking)
npm run lint     # eslint over .js/.jsx/.ts/.tsx
npm run format   # prettier --write .
```

There is no test framework. Treat `npm run build` (which type-checks) plus `npm run lint` as the verification gate.

**Deployment is automatic via GitHub Actions** (`.github/workflows/nextjs.yml`) on every push to `main` — it builds and publishes to GitHub Pages. There is no `gh-pages` branch and no manual deploy script; pushing `main` is the deploy.

## Static export & basePath (important)

`next.config.mjs` sets `output: 'export'` and **`basePath: '/home'`** (the site lives at `jplate.github.io/home`). Consequences:

- The build emits a fully static `out/` — no server, no Next.js image optimization (`images.unoptimized: true`).
- All asset/route URLs are prefixed with `/home`. To preview the export locally you must serve it under that prefix (e.g. stage `out/` as `<root>/home` and serve the parent). Serving `out/` directly loads **no CSS**, because the stylesheet links point at `/home/_next/...`.

## Architecture

**Routing.** Directory-per-route under `src/app/` with capitalized segment names: `Research/`, `Publications/`, `Teaching/`, `WebDev/`, plus the root `page.tsx` (home). The navbar links to these paths in `components/Navbar.tsx`.

**Page shell.** Every page renders `<Content>` (`components/Content.tsx`) → fixed `Navbar` + centered `<main>` + `Footer`. Content is grouped into `<Section id header>` (`components/Section.tsx`), which wraps children in a `.prose` block (Tailwind Typography) and renders the optional `header` as an `<h2>`.

**Publications data.** `Publications/pubs.tsx` exports typed `papers`/`reviews` arrays of `BibItem`. `Publications/page.tsx` maps over them. A `BibItem` may carry an `abstract` — see below.

**AbstractDrawer** (`components/AbstractDrawer.tsx`). Client component that toggles a paper's abstract with a CSS-grid `grid-template-rows: 0fr↔1fr` drawer animation. Like `title`/`description`/`details`, `abstract` is a `React.ReactNode` written directly as JSX in `pubs.tsx` — emphasis as `<em>`/`<i>`, or `<Italic>` where the italic needs a correction (see Styling), typographic dashes and quotes as HTML entities (`&mdash;`, `&lsquo;`, `&rsquo;`, `&ldquo;`, `&rdquo;`). The drawer just renders the node; there is no TeX/markup conversion step and no math renderer. If an abstract ever needs real math, prefer hand-written MathML or a small inline SVG over pulling in a formula library.

## Styling & theming

- **Tailwind v4** is configured entirely in `src/app/globals.css` via `@import 'tailwindcss'`, `@plugin`, and an `@theme` block (no `tailwind.config.js`). The `@theme` block maps design tokens: `--font-sans` → Geist, `--font-mono` → IBM Plex Mono, and `--color-btn*` → the button palette.
- **Dark mode is automatic** via `@media (prefers-color-scheme: dark)` — there is no manual theme toggle. Colors are CSS variables (`--background`, `--foreground`, `--links`, `--btn*`, `--prose-*`) redefined in that media query. Style new themed surfaces with these vars or with `dark:` utilities, not hardcoded colors.
- **Fonts** are loaded with `next/font/local` in `layout.tsx` and exposed as CSS variables (`--font-geist-sans`, `--font-plex-mono`) **on `<html>`** — they must be on the root element so Tailwind's `:root`-level `@theme` tokens can resolve them. Body uses Geist; `font-mono` / "technical" UI (e.g. the show-abstract toggle) uses Plex Mono. `h1`/`h2` are uppercased with letter-spacing in globals.css.
- **Italic correction.** Geist has no italic (the slant is synthesized), so an italic word can crowd the following text. Use `<Italic>` (`components/Italic.tsx`; `em` prop for `<em>`, `ic` for a non-default amount): it adds the correction as letter-spacing on the last character (and lifts the rest of the word with `relative`, so the last character's selection highlight doesn't paint over overhanging glyph parts like the dot of an "i"). Don't use padding (it leaves an unhighlighted gap in text selections) or thin/hair spaces (Geist lacks those glyphs, so their width varies with the fallback font, and they end up in copied text).
- **Link styling is global, not per-component.** `globals.css` styles anchors through `a:not(.nav-item):not(.menu-item):not(.logo):not(.card-link)...` selectors, including an animated underline-on-hover that is enabled only at `min-width: 1024px` (it forces `white-space: nowrap`, undesirable on small screens). To opt an anchor out of the default treatment, give it one of those marker classes (`card-link`, `nav-item`, etc.). This also means links inside `not-prose` regions still get styled.

## Conventions

- **Components are `const` + arrow functions**, not `function` declarations (e.g. `const Foo = () => ...`). Match this when adding components.
- Prettier: 4-space tabs, single quotes (incl. JSX), `printWidth` 110, `trailingComma: es5`.
- Path alias `@/*` → `src/*`.
