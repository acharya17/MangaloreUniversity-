# Phase 06 — Academic Programmes (Faculties Grid)

## Objective
Display the full academic architecture of the university across its 4 primary faculties in a clean, hairline-divided directory grid.

---

### 1. Section Header
**Includes**
- Eyebrow: "ACADEMIC ARCHITECTURE"
- Primary Heading: "Faculties & Postgraduate Programmes"
- Context note on light-blue background (`--mist`, `#EAF2F8`)

---

### 2. 4-Column Hairline Faculty Directory Grid
**Includes**
- **Faculty of Arts**
  - Dept Count: *8 Postgraduate Departments*
  - Programs: English, Kannada, History, Economics, Political Science, Sociology, Mass Communication & Journalism.
  - Action: "Explore Faculty of Arts →"
- **Faculty of Science & Technology**
  - Dept Count: *17 Postgraduate Departments*
  - Programs: Physics, Chemistry, Marine Geology, Biosciences, Computer Science, Statistics, Mathematics, Electronics.
  - Action: "Explore Faculty of Science →"
- **Faculty of Commerce**
  - Dept Count: *2 Postgraduate Departments*
  - Programs: Master of Commerce (M.Com), Master of Business Administration (MBA).
  - Action: "Explore Faculty of Commerce →"
- **Faculty of Education**
  - Dept Count: *2 Postgraduate Departments*
  - Programs: Master of Education (M.Ed), Physical Education & Sports Sciences (M.P.Ed).
  - Action: "Explore Faculty of Education →"

**Flow**
```
Visitor Scrolls to Academic Grid
↓
Views Hairline-Divided 4-Column Faculty Cards
↓
Hovers Over Faculty Card (Subtle BG Color Accent & Arrow Slide)
↓
Clicks "Explore Faculty" Action
```

---

## Phase 06 Responsive Restacking
```
Desktop (>920px) : 4 Columns (Hairline grid)
Tablet (<=920px)  : 2x2 Grid
Mobile (<=560px)  : 1 Column Stacked Cards
```

---

## Phase 06 Output
At the end of this phase:
- Flat hairline-divided faculty directory renders on `--mist` background.
- Accurate department counts and representative programme listings for all 4 faculties.
- Responsive restacking with clean border handling on mobile viewports.

---

## Out of Scope
- Detailed syllabus PDF downloads (mocked via exploration links).

---

## Phase 06 Completion
Phase 06 is complete when a visitor can:
```
Browse All 4 Main Academic Faculties
↓
Review Representative Department Offerings
↓
Experience Responsive Card Grid Breakdown on Smaller Screens
```
Ready for Phase 07 (Campus Life Full-Bleed Feature).
