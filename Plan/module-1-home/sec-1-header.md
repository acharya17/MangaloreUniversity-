# Phase 01 — Top Utility Bar & Navigation Header

## Objective
Provide an authoritative institutional header experience with a secondary quick-access utility bar, transparent-to-solid sticky scroll behavior, and a fully accessible mobile drawer menu.

---

### 1. Top Utility Bar
**Includes**
- Campus utility links (Apply, Student Portal, Alumni, Webmail Server)
- Official University Social Media Channels (Facebook, X/Twitter, LinkedIn, YouTube, Instagram)
- Responsive auto-hide of secondary links on small viewports (`≤720px`)
- Deep Navy background (`--teal-deep`, `#071D33`) with muted light text

**Flow**
```
User Loads Page
↓
Top Utility Bar Visible
↓
Click Quick Link (Portal / Apply / Socials)
↓
Navigates to Selected Destination
```

---

### 2. Main Institutional Header
**Includes**
- Official Mangalore University Crest & Typography Wordmark ("Mangalagangothri, Karnataka")
- Primary Navigation Items: About, Academics, Research, Campus, Careers, Contact
- Gold CTA Action Button ("Apply now") with Navy text
- Animated line-grow hover state on desktop nav links

**Flow**
```
Page Scroll
↓
Scroll > 24px
↓
Header Transitions from Transparent to Solid Navy (#0B2A4A) with Backdrop Blur
↓
Hover Nav Link → Underline Animation Expands
```

---

### 3. Responsive Navigation Drawer
**Includes**
- Hamburger toggle button (`≤920px`)
- Smooth vertical slide-down drawer menu
- Full list of primary and utility links in mobile layout
- Direct "Apply now" button anchor inside drawer

**Flow**
```
Viewport <= 920px
↓
Desktop Nav Collapses → Hamburger Icon Displayed
↓
User Clicks Hamburger
↓
Drawer Slides Open (0.35s ease)
↓
User Selects Section / Closes Menu
```

---

## Phase 01 User & Interaction Flow
```
Visitor Lands on Portal
↓
Views Institutional Crest & Navigation
↓
Scrolls Page → Header Sticks with Solid Navy Background
↓
Clicks "Apply Now" or Navigates to Target Section
```

---

## Phase 01 Output
At the end of this phase:
- Utility bar renders at the very top with working quick links and social channels.
- Main header renders with logo crest, serif wordmark, and primary navigation items.
- Smooth sticky scroll state change (transparent to solid Navy) is fully functional.
- Responsive mobile drawer opens/closes seamlessly below 920px.
- Focus states and keyboard tab navigation comply with accessibility standards (`2px solid var(--gold)`).

---

## Out of Scope
- Hero banner copy and visuals (handled in Phase 02).
- Dropdown sub-menus for deep academic departments (kept flat for homepage scope).
- Backend user authentication for Student Portal / Webmail.

---

## Phase 01 Completion
Phase 01 is complete when a visitor can:
```
View University Brand & Navigation
↓
Interact with Nav Links (Hover Animations)
↓
Scroll Page with Sticky Header Transition
↓
Open/Close Mobile Drawer on Handheld Devices
```
Ready for Phase 02 (Hero Section).
