# Mangalore University — Homepage Design Project Plan

## 1. Project Overview

1.1. Objective
- Design a premium, luxury, formal-academic homepage for Mangalore University as a React-based UI/UX presentation.
- Scope is homepage only — design and layout, no backend logic, forms, or routing.

1.2. Deliverable
- Single-file React component (`mangalore_university_homepage.jsx`)
- Self-contained styling (inline `<style>` block), no external CSS files
- Icons via `lucide-react`

1.3. Reference sources
- Content parity target: `mangaloreuniversity.ac.in`
- Layout/structure inspiration: `jgu.edu.in` (O.P. Jindal Global University) — confident editorial layout, numbered highlight blocks, "at a glance" stats, tabbed corner sections

1.4. Design intent
- Formal, institutional, government/university-grade visual identity
- Navy + white + light blue + gold, not a modern SaaS-card aesthetic
- Editorial spacing and typography over boxed-card templates

---

## 2. Theme & Color System

2.1. Palette

| Token | Hex | Usage |
|---|---|---|
| `--teal` (Navy) | `#0B2A4A` | Primary brand color — header mark, footer, dark sections, CTA banner, button text |
| `--teal-deep` (Navy Deep) | `#071D33` | Utility bar, footer background |
| `--blue` (University Blue) | `#1E4E79` | Secondary accent — eyebrows, kicker text, links, stat labels on light backgrounds |
| `--laterite` / `--gold` (Gold) | `#E8A317` | Accent/highlight — buttons, hover underlines, borders, active dots |
| `--laterite-deep` (Gold Deep) | `#C1860A` | Button hover state |
| `--paper` (Background) | `#F7F8FA` | Main page background |
| `--mist` / `--paper-warm` (Light Blue) | `#EAF2F8` | Alternate section background |
| `--ink` (Text) | `#1F2937` | Body text |
| `--ink-soft` (Muted Text) | `#5B6472` | Supporting/secondary text |
| `--line` | `rgba(31,41,55,0.14)` | Hairline dividers |
| `--line-soft` | `rgba(31,41,55,0.08)` | Faint dividers (faculty list rows) |

2.2. Color usage rule
- Gold buttons always pair with **navy text**, never white (gold is too light for white-on-gold contrast).
- Text-only accents on **light** backgrounds use University Blue (`--blue`), not gold — gold text fails contrast on white/light-blue.
- Gold is reserved for buttons, borders, dots, and text **on dark navy backgrounds**, where it contrasts well.
- Dark sections (utility bar, footer, testimonials, CTA banner) use Navy or Navy Deep as background with white/translucent-white text.

---

## 3. Typography

3.1. Typefaces
- Display/Headline: **Fraunces** (serif, optical sizing) — weights 300–700, italic 400/500
- Body/UI: **Libre Franklin** (sans-serif) — weights 300–700
- Loaded via Google Fonts `@import` inside the component's own stylesheet

3.2. Type scale

| Element | Font | Size | Weight |
|---|---|---|---|
| Hero headline | Fraunces | `clamp(36px, 5vw, 58px)` | 500 |
| Section heading (`.mu-heading`) | Fraunces | `clamp(28px, 3.4vw, 40px)` | 500 |
| Pillar/faculty titles | Fraunces | 19–21px | 500 |
| Stat numbers | Fraunces | `clamp(34px, 4vw, 50px)` | 500 |
| Testimonial quote | Fraunces, italic | `clamp(20px, 2.6vw, 27px)` | 400 |
| Body text | Libre Franklin | 15–17px | 400 |
| Nav links | Libre Franklin | 14.5px | 400 |
| Eyebrow labels | Libre Franklin | 13px | 600 |
| Buttons | Libre Franklin | 14–15px | 600 |

3.3. Line length & spacing
- Body copy max-width: 460–560px per block (keeps line length readable)
- Line height: 1.55 base body, 1.16–1.45 for headings/quotes depending on size

---

## 4. Layout & Grid

4.1. Container
- Max content width: `1220px`
- Horizontal padding: `32px` desktop, `20px` on screens ≤720px

4.2. Section vertical rhythm
- Standard section padding: `88px` top/bottom (`.mu-section`)
- Tight section padding: `64px` top/bottom (`.mu-section-tight`, used for stats band)
- CTA banner padding: `84px 32px`

4.3. Grid patterns by section

| Section | Grid | Gap | Collapse breakpoint |
|---|---|---|---|
| Hero | 2 columns (1.05fr / 0.95fr) | 56px | ≤920px → 1 column |
| About | 2 columns (0.85fr / 1.15fr) | 64px | ≤860px → 1 column |
| Pillars | 3 columns | 44px | ≤860px → 1 column |
| Faculty grid | 4 columns (hairline-divided) | 1px (border-based) | ≤920px → 2 col, ≤560px → 1 col |
| Careers | 2 columns | 56px | ≤860px → 1 column |
| Footer | 1.3fr + 3×1fr | 40px | ≤860px → 2 col, ≤540px → 1 col |

4.4. Breakpoints
- Desktop: default
- Tablet: `≤920px` (nav collapses to mobile drawer, hero/faculty grids restack)
- Small tablet: `≤860px` (about/pillars/careers/footer restack)
- Mobile: `≤720px` (container padding reduces, utility bar links hide)
- Small mobile: `≤560px–640px` (faculty grid to 1 col, hero caption hidden, stat items wrap to 40% width)

---

## 5. Spacing & Component Tokens

5.1. Buttons
- Padding: `14px 26px` (primary), `14px 22px` (secondary), `10px 20px` (nav CTA)
- Border radius: `3px` across all buttons and cards (consistent, minimal rounding — institutional, not SaaS-rounded)
- Icon gap inside button: `8px`

5.2. Cards / bordered blocks
- Faculty cards: `32px 28px` padding, 1px hairline borders forming a grid (no drop shadows)
- No box-shadows anywhere in the design — flat, formal surfaces only

5.3. Dividers
- Stats row: vertical hairline dividers between items (`border-right: 1px solid var(--line)`), converting to horizontal dividers on mobile
- News rows: horizontal hairline dividers top and bottom of list

5.4. Icon sizing
- Nav/menu icons: 20–24px
- Pillar icons: 22px inside a 46px circular badge
- Button icons: 14–16px

---

## 6. Motion & Interaction

6.1. Principle
- One orchestrated moment, not decoration on every section (per restraint principle — avoid fade-slide-up on every block)

6.2. Implemented motion
- Hero: staggered entrance — kicker instant, headline fades/slides up first, subtext +150ms, CTAs +300ms
- Stats: count-up animation on scroll-into-view via `IntersectionObserver`, eased over 1.4s
- Header: background fades in on scroll past 24px
- Mobile menu: max-height transition (0.35s)
- Nav links: underline grows on hover (0.25s)
- Buttons: background shift + slight lift (`translateY(-1px)`) on hover
- Testimonial carousel: manual click-through (prev/next arrows + dots), no autoplay
- All motion respects `prefers-reduced-motion: reduce` (transitions/animations disabled)

6.3. Focus states
- Visible focus ring: `2px solid var(--gold)`, `outline-offset: 3px` on all interactive elements

---

## 7. Section-by-Section Brief

7.1. Top Utility Bar
- Content: Apply | Student portal | Alumni | Email server (left); social icons (right)
- Style: Navy Deep background, small translucent-white text, links hidden on mobile

7.2. Header / Navigation
- Content: Logo mark + "Mangalore University" wordmark + location subtitle; nav links (About, Academics, Research, Campus, Careers, Contact); gold "Apply now" CTA button
- Behavior: transparent over hero, solid + blurred background on scroll; collapses to hamburger + slide-down drawer below 920px

7.3. Hero
- Content: Location/est. kicker, headline ("Four decades of learning where the river meets the sea."), one-paragraph subtext (campus facts: 353 acres, confluence, 26 departments, 200+ colleges), two CTAs (Apply for admission / View programmes)
- Layout: asymmetric two-column — text left, framed image right with a floating caption card
- Image: campus/aerial placeholder with gold-outlined offset frame

7.4. About
- Content: founding story (grew from a University of Mysore PG centre to independent university in 1980; 3 → 26 departments), vision-mission quote, "Read our full history" link
- Layout: two-column — image left, text block right with gold-bordered pull-quote

7.5. At a Glance (Stats)
- Content: 45+ years, 26 PG departments, 204 affiliated colleges, 353 acres, 5 autonomous colleges
- Layout: single hairline-divided row, large serif numbers with count-up animation, light-blue section background

7.6. Why Choose (Pillars)
- Content: three qualities — Academic Depth, Research & Heritage, A Campus Built for Belonging — each with icon, title, 2-line description
- Layout: 3-column grid, no numbering (content is not a sequence), icon badges in light-blue circles

7.7. Academic Programmes (Faculties)
- Content: four faculty cards — Arts (8 depts), Science & Technology (17 depts), Commerce (2 depts), Education (2 depts) — each showing department count and a partial department list
- Layout: 4-column hairline-bordered grid on light-blue section background

7.8. Campus (full-bleed break)
- Content: single bold statement on the campus's coastal setting (353 acres, Nethravathi–Arabian Sea confluence, Western Ghats backdrop, green campus recognition)
- Layout: full-bleed image with navy gradient overlay, text anchored bottom-left — the single "boldest" visual moment on the page

7.9. Careers / Placement
- Content: Employment Bureau framing copy + service list (campus placement guidance, competitive exam coaching, higher studies counselling, scholarship assistance)
- Layout: two-column — text left, hairline-divided list right with gold dot markers

7.10. Latest News
- Content: four live-style notices (Ph.D entrance test, CET schedule, RV date extension, Prospectus 2026–27) with dates
- Layout: editorial list rows (date + title + arrow), not card grid; light-blue section background

7.11. Testimonials
- Content: three student/alumni quotes (Marine Geology, Journalism, Economics alumna) — fictional personas representative of the student experience
- Layout: centered single-quote carousel on navy background, gold prev/next arrows and pagination dots

7.12. CTA (Apply Now)
- Content: closing statement ("Begin your journey at Mangalagangothri"), admissions note (UUCMS portal), Apply Now (gold) + Download prospectus (outlined) buttons
- Layout: full-width navy banner, centered content

7.13. Footer
- Content: brand + mailing address; four link columns (Academics, Examinations, Administration — implicit via prior sections — plus address); bottom bar with copyright and social links
- Layout: Navy Deep background, 4-column grid collapsing to 2 then 1 column

---

## 8. Content Fidelity Notes

8.1. All factual content (department names, department counts, campus size, founding year, affiliated/autonomous college counts, VC name) is sourced from `mangaloreuniversity.ac.in` and its linked history page.

8.2. Testimonial quotes are original illustrative copy written for this design mockup — not real, named individuals — and should be replaced with real student/alumni quotes before production use.

8.3. All images are placeholder stock photography (Unsplash) standing in for real campus photography. Replace before production.

8.4. All links (`href="#"`) are placeholders. No routing, forms, or backend logic is implemented — this is a UI/UX design deliverable only.

---

## 9. Open Items for Production Handoff

9.1. Replace placeholder imagery with licensed/owned campus photography
9.2. Replace testimonial copy with verified real quotes (with consent)
9.3. Wire navigation links to actual routes/pages
9.4. Connect "Latest News" section to a live notifications feed/CMS
9.5. Confirm accessibility audit (contrast, keyboard nav, screen reader labels) before launch
9.6. Confirm final brand palette with university stakeholders (current palette is a design proposal, not an official brand guideline)