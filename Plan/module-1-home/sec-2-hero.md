# Phase 02 — Hero Section

## Objective
Deliver a majestic, authoritative first impression celebrating Mangalore University's four decades of academic heritage at the confluence of the Nethravathi river and the Arabian Sea, with clear primary conversion pathways.

---

### 1. Left Content Column (Editorial Narrative & CTAs)
**Includes**
- Institutional Eyebrow Kicker ("ESTD. 1980 • MANGALAGANGOTHRI")
- Primary Serif Headline: *"Four decades of learning where the river meets the sea."*
- Descriptive Narrative Subtext (353 acres, 26 PG departments, 200+ affiliated colleges)
- Primary Conversion Action: Gold Button ("Apply for admission") with right-arrow icon
- Secondary Action: Ghost Button ("View programmes")

**Flow**
```
Visitor Enters Homepage
↓
Staggered CSS Load Motion (Kicker → Headline → Subtext → CTAs)
↓
Reads Institutional Prestige & Heritage Statement
↓
Clicks "Apply for admission" or "View programmes"
```

---

### 2. Right Column (Framed Campus Media & Accreditation Badge)
**Includes**
- High-resolution framed landscape photo of the Mangalagangothri campus
- Distinctive Gold-outlined offset border frame
- Floating Glassmorphic Institutional Badge ("A++ NAAC Accredited • 353-Acre Green Campus")

**Flow**
```
Page Loads
↓
Campus Image Renders with Gold Offset Frame
↓
Accreditation Badge Floats with Visual Depth
```

---

### 3. Orchestrated Motion & Responsive Collapse
**Includes**
- Staggered entrance timing (Headline 0–400ms, Subtext +150ms, CTAs +300ms)
- Responsive restack to single column on viewports `≤920px`
- Media caption auto-adjusts layout for mobile screens

**Flow**
```
Screen Resizes <= 920px
↓
Hero Grid Restacks into Single Column Layout
↓
Content Column Precedes Framed Campus Media
```

---

## Phase 02 Business Flow
```
Visitor Lands on Portal
↓
Absorbs Heritage Headline & Visual Identity
↓
Reads University Scale (353 Acres, 26 Departments)
↓
Selects "Apply for admission" → Directs to Admissions Flow
```

---

## Phase 02 Output
At the end of this phase:
- The Hero section renders as a 2-column asymmetric grid (`1.05fr` / `0.95fr`).
- Staggered entrance animation executes smoothly without layout shifts.
- Gold offset framed visual asset with accreditation badge renders crisply.
- Primary and secondary buttons are interactive with hover states (`translateY(-1px)`).
- Collapses smoothly into a single-column layout on tablet and mobile viewports.

---

## Out of Scope
- Direct admissions form submission handling (points to application anchor/portal).
- Video background streaming (using high-performance framed photography).

---

## Phase 02 Completion
Phase 02 is complete when a visitor can:
```
View Staggered Hero Entrance Animation
↓
Read Accreditation Badge & Heritage Narrative
↓
Interact with Primary & Secondary CTAs
↓
Experience Responsive Restacking on Handheld Viewports
```
Ready for Phase 03 (About Section).
