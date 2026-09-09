# Mangalore University Homepage — Implementation & Execution Phases

This document structures the execution of the design plan ([full.md](file:///c:/Users/Aravind/OneDrive/Desktop/MangaloreUniversity/Plan/full.md)) into clear, sequential implementation phases.

---

## Phase 1: Foundation, Tokens & Typography Setup
**Goal:** Establish the CSS design tokens, custom font imports, resets, and layout system.

- **Tasks:**
  1. Set up Google Fonts `@import` for **Fraunces** (Serif display/headline) and **Libre Franklin** (Sans UI/body).
  2. Implement CSS custom properties / design tokens:
     - Color system: Navy (`#0B2A4A`, `#071D33`), University Blue (`#1E4E79`), Gold accents (`#E8A317`, `#C1860A`), Backgrounds (`#F7F8FA`, `#EAF2F8`), Ink text (`#1F2937`, `#5B6472`), Hairline borders.
     - Spacing, container max-width (`1220px`), padding rules.
     - Shared typography scales (`.mu-heading`, `.mu-eyebrow`, `.mu-body`, etc.).
  3. Base button and card tokens (3px border radius, flat styling, focus ring indicators).
  4. Accessibility baseline & reset (`prefers-reduced-motion`, outline offsets).

---

## Phase 2: Navigation & Shell (Header & Utility Bar)
**Goal:** Build the institutional header with responsive drawer navigation.

- **Tasks:**
  1. **Top Utility Bar:**
     - Left links: Apply, Student Portal, Alumni, Email Server.
     - Right: Social media link icons.
     - Responsive behavior: collapses/hides secondary links on mobile (`≤720px`).
  2. **Main Header:**
     - Brand mark + "Mangalore University" typography + location subtitle ("Mangalagangothri, Karnataka").
     - Navigation links with animated underline hover effects (About, Academics, Research, Campus, Careers, Contact).
     - Gold "Apply now" primary CTA button.
     - Sticky scroll transition (transparent over hero → solid blurred navy background past 24px scroll).
     - Hamburger icon & mobile slide-down drawer menu (`≤920px`).

---

## Phase 3: Above-the-Fold & Identity (Hero, About & Stats Band)
**Goal:** Deliver a high-impact, editorial first impression with institutional authority.

- **Tasks:**
  1. **Hero Section:**
     - Asymmetric 2-column layout (1.05fr / 0.95fr).
     - Staggered CSS entry animation (Kicker → Headline → Subtext → CTAs).
     - Gold-outlined offset framed campus imagery with floating caption badge.
     - Dual CTAs ("Apply for admission", "View programmes").
  2. **About Section:**
     - Story of expansion (1980 Mysore PG center origin to 26 PG departments).
     - Editorial 2-column layout with gold-accented pull-quote block and "Read full history" link.
  3. **"At a Glance" Stats Band:**
     - 5 metrics: 45+ Years, 26 PG Departments, 204 Affiliated Colleges, 353 Acres, 5 Autonomous Colleges.
     - Hairline-divided row with `IntersectionObserver`-based number count-up animation (1.4s ease).

---

## Phase 4: Core Academics & Campus Experience (Pillars, Faculties, Full-Bleed Campus)
**Goal:** Showcase academic breadth and the unique coastal campus environment.

- **Tasks:**
  1. **Pillars / "Why Choose MU":**
     - 3-column grid (Academic Depth, Research & Heritage, Campus Belonging).
     - Circular icon badges (`lucide-react`) in light-blue accents.
  2. **Academic Programmes (Faculties Grid):**
     - 4-column hairline-divided grid (Arts, Science & Technology, Commerce, Education).
     - Department counts and highlighted course listings per faculty.
     - Clean flat-bordered cards (no drop shadows).
  3. **Campus Break (Full-Bleed Visual Moment):**
     - High-impact full-bleed coastal campus banner (353 acres, Nethravathi & Arabian Sea confluence).
     - Navy gradient overlay with text anchored bottom-left.

---

## Phase 5: Student Life, News, Social Proof & Conversion
**Goal:** Present career services, dynamic updates, testimonials, and primary call-to-action.

- **Tasks:**
  1. **Careers & Employment Bureau:**
     - 2-column layout: Employment Bureau overview left, hairline-separated list right with gold bullet markers.
  2. **Latest News & Circulars:**
     - Editorial list rows (date, badge, notification title, arrow hover effect) for Ph.D tests, CET schedules, and prospectus notices.
  3. **Student Testimonials Carousel:**
     - Single-quote centered carousel on navy background with Fraunces italic typography.
     - Interactive controls: manual prev/next navigation arrows and active gold indicator dots.
  4. **Admissions CTA Banner:**
     - Full-width navy banner ("Begin your journey at Mangalagangothri").
     - UUCMS admissions advisory, Gold "Apply Now" button + outlined "Download Prospectus" button.

---

## Phase 6: Footer & Institutional Standards
**Goal:** Ground the page with a comprehensive institutional footer.

- **Tasks:**
  1. **Footer Layout:**
     - Navy Deep background (`#071D33`) with 4-column layout (Brand & Postal Address, Academics, Examinations, Quick Links / Administration).
     - Bottom bar with copyright, grievance cell links, and social links.
  2. Responsive restacking (`≤860px` to 2 cols, `≤540px` to 1 col).

---

## Phase 7: Polish, Responsive Testing & Quality Verification
**Goal:** Cross-device verification, accessibility compliance, and performance tuning.

- **Tasks:**
  1. Test all responsive breakpoints (`1220px`, `920px`, `860px`, `720px`, `560px`).
  2. Verify keyboard navigation and visible focus rings (`2px solid var(--gold)`).
  3. Verify color contrast ratios (Gold with Navy text, University Blue on light backgrounds).
  4. Test motion reduced mode (`prefers-reduced-motion`).
  5. Final verification of self-contained React single-file component deliverable.
