# Phase 0: Design System, Tokens & Typography Setup

## 1. Overview
Establishes the global CSS variable tokens, Google Font typography imports, resets, button styles, card borders, and accessibility foundations.

## 2. Dependencies & Fonts
- Google Fonts `@import`: `Fraunces` (weights 300, 400, 500, 600, 700; italic 400, 500) and `Libre Franklin` (weights 300, 400, 500, 600, 700).
- Icon set: `lucide-react`.

## 3. CSS Tokens
- **Colors**:
  - `--teal`: `#0B2A4A` (Navy)
  - `--teal-deep`: `#071D33` (Navy Deep)
  - `--blue`: `#1E4E79` (University Blue)
  - `--laterite` / `--gold`: `#E8A317` (Gold)
  - `--laterite-deep`: `#C1860A` (Gold Deep)
  - `--paper`: `#F7F8FA` (Main Background)
  - `--mist`: `#EAF2F8` (Light Blue Background)
  - `--ink`: `#1F2937` (Body Text)
  - `--ink-soft`: `#5B6472` (Secondary Text)
  - `--line`: `rgba(31, 41, 55, 0.14)`
  - `--line-soft`: `rgba(31, 41, 55, 0.08)`
- **Layout & Metrics**:
  - Max Width: `1220px`
  - Horizontal Padding: `32px` (desktop), `20px` (mobile)
  - Border Radius: `3px`
- **Global Reset & A11y**:
  - Focus Ring: `2px solid var(--gold)` with `outline-offset: 3px`
  - Motion Media Query: `@media (prefers-reduced-motion: reduce)`
