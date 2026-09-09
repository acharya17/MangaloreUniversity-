# Global Design System & Style Guide

## 1. Objective & Design Philosophy
Establish a unified, prestigious, government/university-grade design system for the Mangalore University portal. The design communicates institutional authority, coastal academic heritage, and modern editorial clarity (inspired by `jgu.edu.in` and `mangaloreuniversity.ac.in`).

---

## 2. Color Palette & Semantic Tokens

| Token Name | Hex / Value | Semantic Role & Usage Guidelines |
|---|---|---|
| `--teal` (Navy) | `#0B2A4A` | Primary brand color: Main header, CTA banner, dark footer, primary typography, buttons text |
| `--teal-deep` (Navy Deep) | `#071D33` | Utility bar, footer base background, full-bleed overlay base |
| `--blue` (University Blue) | `#1E4E79` | Secondary accent: Eyebrow labels, kicker text, links, stats labels on light surfaces |
| `--laterite` / `--gold` (Gold) | `#E8A317` | Accent / Highlight: CTA buttons, active pagination dots, pull-quote left borders |
| `--laterite-deep` (Gold Deep) | `#C1860A` | Button hover and active states |
| `--paper` (Background) | `#F7F8FA` | Main canvas background |
| `--mist` / `--paper-warm` (Light Blue) | `#EAF2F8` | Alternate section background (Stats, Faculties, News) |
| `--ink` (Primary Text) | `#1F2937` | High-contrast body text on light backgrounds |
| `--ink-soft` (Muted Text) | `#5B6472` | Secondary labels, descriptions, and metadata |
| `--line` | `rgba(31,41,55,0.14)` | Hairline dividers between columns and cards |
| `--line-soft` | `rgba(31,41,55,0.08)` | Faint dividers in editorial lists |

### Strict Contrast Rules
- **Gold CTA Buttons**: Must always use **Navy text** (`#0B2A4A`), never white.
- **Light Surfaces**: Accent labels use University Blue (`#1E4E79`), never gold.
- **Dark Navy Surfaces**: Gold accents (`#E8A317`) and white text (`#FFFFFF`) are used for maximum legibility.

---

## 3. Typography Hierarchy

### Font Families
- **Display & Headlines**: `Fraunces, serif` (Optical sizing, weights: 300, 400, 500, 600, 700; italic 400, 500)
- **Body & Interface**: `Libre Franklin, sans-serif` (Weights: 300, 400, 500, 600, 700)

### Type Scale
- **Hero Headline**: `clamp(36px, 5vw, 58px)` | Fraunces 500 | Line height: `1.15`
- **Section Heading (`.mu-heading`)**: `clamp(28px, 3.4vw, 40px)` | Fraunces 500 | Line height: `1.22`
- **Card / Faculty Titles**: `20px` | Fraunces 500
- **Stat Numbers**: `clamp(34px, 4vw, 50px)` | Fraunces 500
- **Quote Text**: `clamp(20px, 2.6vw, 27px)` | Fraunces 400 Italic
- **Body Text**: `16px` | Libre Franklin 400 | Line height: `1.55` | Max width: `520px`
- **Eyebrows / Kickers**: `13px` | Libre Franklin 600 | Uppercase | Letter spacing: `0.08em`
- **Buttons / Actions**: `14.5px` | Libre Franklin 600

---

## 4. Spacing, Grid & Layout Rules

### Container & Rhythm
- **Max Width**: `1220px`
- **Horizontal Padding**: `32px` desktop, `20px` mobile (`≤720px`)
- **Standard Section Padding**: `88px 0` (`.mu-section`)
- **Tight Section Padding**: `64px 0` (`.mu-section-tight`)
- **Border Radius**: `3px` across buttons, cards, and badges (strictly minimal/institutional, avoid SaaS pill buttons)
- **Shadows**: No drop-shadows anywhere; structure is defined by 1px hairline borders (`var(--line)`).

### Breakpoint Matrix
- **`≤920px` (Tablet)**: Main nav collapses to hamburger drawer; Hero & Faculty grids restack.
- **`≤860px` (Small Tablet)**: About, Pillars, Careers, and Footer restack into 1 or 2 columns.
- **`≤720px` (Mobile)**: Container padding reduces to 20px; utility bar secondary links hide.
- **`≤560px` (Small Mobile)**: Faculty grid to 1 col; stats band wraps to 2 items per line.

---

## 5. Motion & Interaction Standards
- **Hero Stagger**: Eyebrow (0ms) → Headline (0–400ms) → Subtext (+150ms) → CTAs (+300ms).
- **Stat Count-Up**: Eased numerical counter triggered via `IntersectionObserver` (1.4s duration).
- **Sticky Nav**: Transparent at top → Solid Navy (`#0B2A4A`) with subtle backdrop blur past 24px scroll.
- **Focus Indicators**: `2px solid var(--gold)` with `outline-offset: 3px` on all interactive elements.
- **Reduced Motion**: All animations disabled when `@media (prefers-reduced-motion: reduce)` is active.
