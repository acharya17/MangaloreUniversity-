# Mangalore University Homepage — Self-Contained Prompt

```
Build a single-page React component for the Mangalore University homepage. 
This is a UI/UX design deliverable only — no backend logic, no forms, no 
routing, no state management beyond simple UI interactions (menu toggle, 
carousel, scroll effects). Keep the codebase simple, clean, and readable — 
one component, minimal dependencies (lucide-react for icons only).

DESIGN THEME
Formal, institutional, premium academic look — navy, white, light blue, 
and gold. Not a modern SaaS/startup look. Flat surfaces, no drop shadows, 
minimal border-radius (3px on buttons/cards).

COLOR TOKENS
- Navy (primary): #0B2A4A
- Navy Deep (dark sections/footer): #071D33
- University Blue (secondary text accent): #1E4E79
- Gold (buttons, highlights, borders): #E8A317
- Gold Deep (hover state): #C1860A
- Background: #F7F8FA
- Light Blue (alternate section bg): #EAF2F8
- Text: #1F2937
- Muted text: #5B6472
Rule: gold buttons always use navy text (never white — poor contrast). 
Text accents on light backgrounds use University Blue, not gold. Gold is 
for buttons/borders/dots and works on dark navy backgrounds.

TYPOGRAPHY
- Headlines: Fraunces (serif), weight 500
- Body/UI: Libre Franklin (sans-serif)
- Load both via Google Fonts import
- Clear type scale: hero headline clamp(36px,5vw,58px), section headings 
  clamp(28px,3.4vw,40px), body 15-17px

LAYOUT
- Max content width 1220px, 32px side padding (20px on mobile)
- Standard section padding: 88px top/bottom
- Responsive breakpoints at 920px, 860px, 720px, 560px
- No box-shadows anywhere; hairline borders (1px, low-opacity) for dividers

SECTIONS (in order)
1. Top utility bar — Apply/Student portal/Alumni/Email links, social icons
2. Header/Nav — logo, nav links, gold "Apply now" button, sticky with 
   scroll-based background, mobile hamburger drawer
3. Hero — asymmetric two-column: headline + subtext + two CTAs on left, 
   framed image with caption on right
4. About — founding story, two-column with image and gold-bordered pull-quote
5. At a Glance stats — hairline-divided row of big numbers with count-up 
   animation on scroll
6. Why Choose (pillars) — three qualities, icon + title + description, 
   no numbering
7. Academic Programmes — four faculty cards in a hairline-bordered grid, 
   each listing departments
8. Campus — full-bleed image break with navy gradient overlay and bold 
   statement text
9. Careers — two-column: text + hairline-divided service list
10. Latest News — editorial list rows (date + title), not cards
11. Testimonials — centered quote carousel on navy background with gold 
    arrows/dots
12. CTA — navy banner, gold primary button + outlined secondary button
13. Footer — navy deep, multi-column links + address + social

MOTION
Keep it restrained: one staggered entrance animation on the hero, a 
count-up on the stats when scrolled into view, ordinary hover transitions 
on buttons/links, a manual (non-autoplay) testimonial carousel. Respect 
prefers-reduced-motion. No fade-slide-up on every section.

CONTENT
Use real, accurate content about Mangalore University: founded 1980 
(grew from a University of Mysore postgraduate centre), 353-acre campus 
at Mangalagangothri overlooking the Nethravathi–Arabian Sea confluence 
and Western Ghats, 26 postgraduate departments across 4 faculties (Arts, 
Science & Technology, Commerce, Education), 204 affiliated colleges, 
2 constituent colleges, 5 autonomous colleges. Use placeholder stock 
imagery and clearly fictional/illustrative testimonial quotes since no 
real photos or quotes are provided.

Output one clean, well-commented React component file. Prioritize 
readability and simplicity over cleverness — this is a design mockup, 
not a production app.
```
