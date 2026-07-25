# Design reference brief

## Direction (settled after step-1 review, 2026-07-24)

**Longread simplicity and clarity with terminal accents.** The reading
experience comes from the editorial references (erinkissane.com, henry.codes,
jovo.design — generous body type, clear hierarchy, single column); the visual
personality comes from the terminal/engineering references (usgraphics.com,
ghostty.org, jinsupark.com — monospace accents, muted palette, dense details).
Fast, cross-platform, accessible.

The site should read like it's owned by a highly skilled engineer who builds
things on weekends and doesn't want the website itself to be a job. Confident,
understated, current. "I know exactly what I'm doing and I'm not trying to sell
you anything."

## Criteria

- **Contemporary (2025–2026)** — current typography and layout sensibilities:
  fluid type, real use of modern CSS (container queries, grid, oklch,
  light/dark), not a 2022-era template or hero-gradient SaaS look.
- **Small-scale by design** — personal site / solo consultancy / project-site
  shaped. A handful of pages, maybe a writing feed. Not a marketing funnel.
- **Web-standards minimalism** — semantic HTML, fast, sparse dependencies,
  feels hand-written. Whitespace and restraint do most of the design work.
- **Modern CSS as quiet competence, not spectacle** — no ostentatiously
  tricky CSS. Current techniques (fluid type, container queries, logical
  properties, `prefers-reduced-motion`, light/dark) used in service of
  standards and accessibility, invisible to the reader. If a technique
  calls attention to itself, it's out.
- **Terminal / AI-tooling aesthetic as influence, not costume** — monospace or
  mono-adjacent type in the mix, dense information display, muted or dark
  palettes, command-line idioms (prompts, file trees, log lines) as graphic
  elements. Not a fake terminal emulator skin.
- **"Minimally maintained" as a signal, not a flaw** — intentional but
  low-ceremony. A well-kept README, not a stale placeholder. Craft shows in
  details, not volume.
- **Room for razzle** — one or two moments of genuine graphic-design flair
  (distinctive display face, generative/ASCII motif, sharp accent color,
  tasteful motion) over a quiet baseline. Razzle should be *structural* —
  baked into the design once — not content-dependent (no galleries or case
  studies that need feeding).
- **Code blocks and technical-documentation typography are first-class** —
  syntax highlighting done tastefully, prose/code rhythm, inline code styling,
  tables, callouts, light+dark handling.

## Anti-patterns

Glossy brochure sites, SaaS landing pages with floating product screenshots,
testimonial carousels, "book a demo" energy, agency-portfolio bombast.
