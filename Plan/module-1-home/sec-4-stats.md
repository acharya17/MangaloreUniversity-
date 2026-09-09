# Phase 04 — At a Glance (Stats Band)

## Objective
Provide immediate quantitative validation of the university's academic footprint, research breadth, and campus scale through animated metrics.

---

### 1. Metrics Grid & Data Points
**Includes**
- **45+** — Years of Academic Excellence
- **26** — Postgraduate Departments
- **204** — Affiliated Colleges
- **353** — Acres of Verdant Coastal Campus
- **5** — Autonomous Colleges
- Clean vertical hairline borders (`1px solid var(--line)`) separating all 5 data items
- Light-blue section canvas (`--mist`, `#EAF2F8`)

**Flow**
```
Visitor Scrolls to Stats Section
↓
IntersectionObserver Detects Section in Viewport
↓
Animated Number Count-Up Triggers (0 → Target Metric over 1.4s)
↓
Numbers Lock into Crisp Display with Label Beneath
```

---

### 2. Responsive Adaptation
**Includes**
- Horizontal 5-column row on desktop (`>860px`)
- 2-to-3 column wrapped grid on tablet viewports (`≤860px`)
- Hairlines switch dynamically to prevent orphaned borders on mobile

**Flow**
```
Viewport Resizes to Mobile
↓
Metrics Wrap Neatly to 2 Columns
↓
Hairline Dividers Maintain Clean Visual Separation
```

---

## Phase 04 Business Flow
```
Visitor Scans Quantitative Scale
↓
Sees 45+ Years & 204 Affiliated Colleges
↓
Gains Trust in Institutional Stability & Reach
```

---

## Phase 04 Output
At the end of this phase:
- Tight padding stats band (`64px 0`) renders on `--mist` background.
- Numerical count-up runs once with easing and respects `prefers-reduced-motion`.
- All 5 official metric figures match university data.

---

## Out of Scope
- Detailed breakdown of each affiliated college (belonging to affiliated directory subpages).

---

## Phase 04 Completion
Phase 04 is complete when a visitor can:
```
Scroll into View
↓
Witness Smooth Count-Up Animation
↓
Review Key Metrics Across Desktop & Mobile
```
Ready for Phase 05 (Why Choose Mangalore University - Pillars).
