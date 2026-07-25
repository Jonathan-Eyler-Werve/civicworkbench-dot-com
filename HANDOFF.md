# Civic Workbench — design phase handoff

Decision date: 2026-07-25. Chosen direction: **V4 — editorial-titleblock**
(`prototypes/4-editorial-titleblock/`). This document is the entry point for
the build phase; everything it references is in this repo.

## The chosen direction, in one paragraph

Warm editorial longread typography — Charter serif on Flexoki paper/ink,
generous body size — under an engineering-formal title-block header
(boxed, ruled, monospace, with per-page document numbers). Monospace
appears only as a metadata layer: nav, dates, section labels, bylines,
status chips. One accent pair (Flexoki blue for links, red for emphasis
moments). Automatic light/dark via `light-dark()` with Flexoki's dark
counterparts. Quiet flourishes: drop cap on article openers, asterism (⁂)
section dividers, dark inky code blocks.

## Spec (authoritative source: the prototype itself)

- `prototypes/4-editorial-titleblock/style.css` — the `:root` block IS the
  design-token spec: colors (Flexoki values), font stacks (system-only:
  Charter serif, ui-monospace), fluid body size
  `clamp(1.1875rem, …, 1.3125rem)`, 64ch measure.
- `prototypes/4-editorial-titleblock/index.html` — landing: title block
  (doc no. `CW-INDEX`), statement, stream, project index, footer.
- `prototypes/4-editorial-titleblock/report.html` — the longread specimen:
  article header, prose, data table, code block, callout, credits.
- Screenshots: `prototypes/screenshots/v4-*.png`.

## What the build phase must add (not designed yet)

1. **About page** — org history since 2016; interest areas (data science,
   language models, social media, open web, open standards, tech harm
   reduction). Gets its own doc number.
2. **Team page** — name + a couple of sentences + outbound links per
   person. No headshot grid.
3. **Note-type entry template** — the report template exists; short
   project notes need their (simpler) form.
4. **RSS feed** — load-bearing per content strategy; it is the
   subscription model.
5. **Real content** — ALL prototype content is placeholder fiction
   (projects, authors, the report, dates). Nothing survives into
   production. See `prototypes/CONTENT.md` for what is fictional (answer:
   everything).
6. **Production stack / CMS** — deliberately unchosen. Constraint from the
   design phase: output must remain semantic HTML + small hand-rolled CSS;
   no framework look. Static site generator strongly implied.
7. **Accessibility pass** — use USWDS/GOV.UK checklists
   (see `references/DESIGN-SYSTEM.md`) as review gates: focus states,
   contrast in both schemes, table/code semantics, reduced motion.

## Explored and set aside (with salvageable parts)

| Variant | Verdict | Worth stealing later |
|---------|---------|----------------------|
| 1-editorial | Superseded by V4 (same body, plain header) | — |
| 2-terminal | Full-mono pole; too costume for the whole site | Dotted-leader lists; `[STATUS]` brackets; numbered sections for spec-like docs |
| 3-hybrid | Middle path; V4 chosen over it | Git-hash colophon (`rev 4c21f9a`); bracketed nav |
| 5-blueprint | makingsoftware palette study on V4's structure | Grid-paper code/figure panels; ░▒▓ shade-strip texture; sampled palette in its `:root` |

## Decision history & references

- `references/BRIEF.md` — criteria + settled direction ("longread
  simplicity and clarity with terminal accents").
- `references/CANDIDATES.md` — 40+ verified reference sites, annotated.
- `references/DESIGN-SYSTEM.md` — systems consulted (Flexoki, Utopia,
  Open Props, Every Layout, USWDS, SEEDS). Note scope: these inform, we
  are NOT building a design system. The site is the artifact.
- `references/CONTENT-STRATEGY.md` — audience, page inventory, voice,
  "slow burn" editorial model. The build must not add apparatus this
  forbids (no tag taxonomies, no "latest news" framing).
- `prototypes/CONTENT.md` — canonical placeholder content used across all
  variants.

## Running the prototypes

Static files, no build: `python3 -m http.server 8741` from `prototypes/`,
then `/4-editorial-titleblock/index.html`. Light/dark follows the OS
setting.
