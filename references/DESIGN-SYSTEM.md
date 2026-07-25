# Design system reference (step 2)

**Scope note (Jonathan, 2026-07-24):** these systems inform basic typography
and layout decisions — we are NOT creating a design system as a deliverable.
The site is the artifact. Stylistic variants remain welcome; art direction
stays open through the prototype phase.

Public, open systems only (no Figma). All verified live 2026-07-24.
Direction from BRIEF.md: longread simplicity and clarity with terminal
accents; standards, accessibility, speed; no build-step ceremony required.

## User-named systems (Jonathan)

- **[SEEDS — Sprout Social](https://seeds.sproutsocial.com/)** — a full
  brand system, not just CSS: four pillars — Patterns ("how it works"),
  Visual ("how it looks"), Writing ("how it sounds"), Brand Foundation.
  *What to take: the structure itself. A design system that treats writing
  voice as a first-class pillar alongside visual tokens is the right model
  for a longread-centric site — and a template for how we document our own
  system. Directly feeds step 3 (content strategy).*
- **[USWDS — U.S. Web Design System](https://designsystem.digital.gov/)** —
  accessibility-first federal system: real design tokens (color grades,
  type scale, spacing units), component library, and content/writing
  guidance. Section 508/WCAG rigor. Thematically apt for Civic Workbench.
  *What to take: token architecture (its numbered color-grade ramp is
  excellent), accessibility patterns as requirements not suggestions, and
  its plain-language content guidance. What to leave: the visual identity
  itself (federal-neutral, not our aesthetic).*

## Candidates by role

### Tokens / foundation

- **[Open Props](https://open-props.style/)** — 500+ CSS custom properties
  (color incl. oklch, type scale, spacing, easing, shadows, media queries).
  MIT, v1.7.x, active. Consumable via one CDN import or npm; tree-shakeable
  via PostCSS jit-props. *Fits: standards-based (plain custom properties, no
  framework), invisible to the reader, hand-written feel preserved.*
- **[Pico CSS](https://picocss.com/)** — semantic/class-light framework;
  styles bare HTML tags, <10 classes, ~130 variables, auto light/dark. MIT,
  v2.1.x, active. *Fits: semantic-HTML ethos. Risk: sites built on it look
  like Pico; less room for our own typographic voice.*
- **Hand-rolled tokens** — ~50 lines of custom properties of our own,
  informed by the systems above. *Fits: maximum "hand-written by a high-skill
  engineer" authenticity; nothing to depend on. Cost: we maintain it.*

### Fluid type & space scale (method, not library)

- **[Utopia](https://utopia.fyi/)** — calculator generating `clamp()`-based
  fluid type/space scales between a small and large viewport; no breakpoints.
  Free. *This is the mechanism behind the henry.codes display-type behavior
  Jonathan liked, applied soberly.*

### Color

- **[Flexoki](https://stephango.com/flexoki)** — Steph Ango's "inky" scheme
  for prose and code: warm paper/ink base ramp (#FFFCF0 paper → #100F0F
  black), 8 accent hues with 50–950 ramps, light/dark designed together in
  Oklab. MIT. *Fits: designed specifically for digital reading + code — the
  exact longread-with-terminal-accents territory. Distinctive without being
  loud. Already admired via stephango.com in step 1.*
- **Neutral custom ramp** — grays + one accent, oklch-defined. *Fits: quieter
  than Flexoki; more usgraphics/ghostty. Less signature.*

### Typography sourcing

- **[Modern Font Stacks](https://modernfontstacks.com/)** — system-font-only
  stacks by classification (e.g. Transitional serif: Charter/Cambria; mono
  code: ui-monospace/Cascadia/Menlo). Zero download, zero layout shift.
  *Fits: the speed/cross-platform criterion at its purest. Charter is also
  what erinkissane.com falls back to.*
- **Self-hosted webfonts (1–2 max)** — if we want a signature face (e.g. a
  distinctive mono for accents/code), self-hosted woff2 with
  `font-display: swap` and a system fallback. Candidates from step 1
  research: JetBrains Mono (free), Departure Mono (free, pixel-flavored),
  Berkeley Mono (commercial, the usgraphics look), Monaspace (free, GitHub).

### Layout primitives

- **[Every Layout](https://every-layout.dev/)** — Pickering & Bell's twelve
  algorithmic layout primitives (Stack, Center, Sidebar, Cluster…); no media
  queries, no magic numbers. Rudiments free, full book $69. *Fits: the
  intellectual backbone for "quiet competence" layout; we can implement the
  primitives ourselves from the free rudiments — they're tiny.*

### Accessibility benchmark

- **[USWDS](https://designsystem.digital.gov/)** / **[GOV.UK Design
  System](https://design-system.service.gov.uk/)** — not aesthetic
  references, but the standard for accessible components and content
  patterns (also thematically apt for a project called Civic Workbench).
  Use as a checklist when prototypes firm up, not as a source of CSS.

### Terminal-accent components (optional, later)

- **[WebTUI](https://webtui.ironclad.sh/)** — zero-JS CSS library for TUI
  idioms (box-drawing, status bars, file trees). *Only if a prototype wants
  a strong terminal moment; likely too costume-y for the final direction.*
- **[Expressive Code](https://expressive-code.com/)** — code-block engine
  (editor frames, terminal frames, diff/line annotations) if we ever want
  library-grade code blocks; for prototypes we'll hand-style.

## Recommended stack (proposal)

1. **Hand-rolled tokens** in one small CSS file, cribbing structure from
   Open Props but owning every value — with Open Props kept open in a tab
   as the reference for "what a complete token set covers."
2. **Utopia-generated** fluid type + space scales (body ≥ ~1.125–1.25rem
   per Jonathan's henry.codes note).
3. **Flexoki** as the palette starting point (possibly desaturated/subset).
4. **System font stacks first** (Charter-led serif or system sans for prose,
   ui-monospace-led for accents), with the *option* of one self-hosted
   signature mono if prototypes want more voice.
5. **Every Layout primitives** implemented by hand as needed.
6. **USWDS** as the accessibility checklist and token-architecture model —
   its numbered color-grade ramp and spacing-unit discipline shape how we
   structure our own tokens, without importing its visual identity.
7. **SEEDS's four-pillar structure** (Patterns / Visual / Writing /
   Foundation) as the outline for our own system documentation — Writing
   as a first-class pillar feeds directly into step 3.

Rationale: everything is plain CSS custom properties + semantic HTML —
no framework lock-in, nothing to reset when we rebuild on a production
stack later; the prototypes stay honest about what the real site would be.
