# Phase 10 — Student & Alumni Testimonials

## Objective
Provide authentic social proof of academic depth and career outcomes through an elegant, user-controlled quote carousel.

---

### 1. Carousel Canvas & Atmosphere
**Includes**
- Background: Deep Navy (`--teal`, `#0B2A4A`)
- Section Padding: `88px 0`
- High-contrast white typography with gold accent highlights
- Editorial quotation mark glyph (`“`) anchoring the card

---

### 2. Testimonial Personas
1. **Pooja Hegde** — *M.Sc. Marine Geology (Batch of 2023)*
   - *"The proximity to the Arabian Sea and the university's dedicated marine research stations provided field exposure that few institutions in the country can match."*
2. **Karthik Rao** — *M.A. Journalism & Mass Communication (Batch of 2022)*
   - *"Mangalagangothri gave me both the critical perspective and the practical studio training necessary to transition directly into investigative broadcast media."*
3. **Ananya Shenoy** — *M.Com / Ph.D Scholar in Economics*
   - *"The interdisciplinary encouragement and mentorship from senior faculty shaped my research methodology and opened doors to national fellowships."*

---

### 3. Interactive Carousel Controls
**Includes**
- Previous & Next circular navigation buttons with gold borders (`2px solid var(--gold)`)
- Active pagination indicator dots at bottom center
- State-managed slide transition in React (`activeIndex` state)
- No auto-play distraction (deliberate restraint principle)

**Flow**
```
User Reaches Testimonials Section
↓
Reads Highlighted Alumni Quote
↓
Clicks "Next" Arrow or Dot Indicator
↓
Smooth Crossfade Transition to Next Testimonial
```

---

## Phase 10 Output
At the end of this phase:
- Navy-themed quote carousel renders centered.
- Previous/Next buttons and dot indicators are fully interactive.
- Keyboard accessible navigation controls.

---

## Out of Scope
- Video testimonial interviews with modal video player.

---

## Phase 10 Completion
Phase 10 is complete when a visitor can:
```
Read Student Quotes
↓
Click Prev/Next Buttons to Cycle Testimonials
↓
Click Dot Indicators to Jump to Specific Quote
```
Ready for Phase 11 (Admissions CTA Banner).
