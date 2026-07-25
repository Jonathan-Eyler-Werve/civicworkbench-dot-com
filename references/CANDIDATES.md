# Reference candidates

Verified live 2026-07-24 unless noted. See `BRIEF.md` for criteria.
Status column is for triage: keep / maybe / cut — fill in during review.

## U. User picks (from Jonathan — auto-keep)

| # | Site | Notes | Status |
|---|------|-------|--------|
| U1 | [nerdy.dev](https://nerdy.dev/) | Adam Argyle (Chrome CSS DevRel, Open Props author). Dark-first, hotpink/cyan accents, card grid. The site is a live testbed for bleeding-edge CSS: scroll-driven animations, anchor positioning, container queries, `clip-path: shape()`. Type is deliberately plain — `system-ui` + a deep monospace stack via Open Props tokens. Reference for *what's current and standard*, not for showcase energy — per brief, modern CSS should be quiet competence, not spectacle. Linked projects worth mining: [Open Props](https://github.com/argyleink/open-props), [gradient.style](https://gradient.style), prop-for-that.netlify.app. | keep |
| U2 | [erinkissane.com](https://erinkissane.com/) | Exemplary writing typography. Runs Matthew Butterick's commercial faces: **Heliotrope** (body) and **Valkyrie** (+ Charter fallback) — the Practical Typography lineage, applied to a real writing site. Bracketed text nav, linear flow, hr-separated sections, content-first. | keep |
| U3 | [jovo.design/writing/spooky-systems](https://www.jovo.design/writing/spooky-systems) | Good text hierarchy and page layout. Single centered column with a consistent modular rhythm (H2 → paragraph → captioned image). Fonts: **Neuething Sans** (body), **Antonio** / **Kurdis** (display), **Martian Mono** + Inter Tight (accents). Webflow-built. | keep |
| U4 | [henry.codes/writing/…](https://henry.codes/writing/it-doesnt-matter-if-it-works/) | Liked: the header/paragraph/body layout relationship; interesting typography. Faces: **Louize / Louize Display** (serif), **Manuka** (compressed display), **Neue Montreal** (sans) — big editorial `clamp()`-driven display sizes (up to 15rem+) over modest body text. Jonathan's note: body type should be a little larger than henry.codes runs it (their body sits around 1–1.25rem). | keep |

## A. Personal sites & solo consultancies

| # | Site | Why it's here | Status |
|---|------|---------------|--------|
| A1 | [szymonkaliski.com](https://szymonkaliski.com) | Closest match to "solo consultancy" — ex-Ink & Switch researcher. Restrained palette, numbered lists, quiet time-tracking dataviz razzle, indie-web ethos, actively maintained. | |
| A2 | [stephango.com](https://stephango.com) | Steph Ango (Obsidian CEO). Runs on his own Flexoki palette — warm paper-ink tones, one genuinely distinctive color idea. Single column, zero images. | |
| A3 | [paco.me](https://paco.me) | Paco Coursey (cmdk). Dark-first, extremely quiet, monospace accents (kbd tokens), obsessive micro-detail in focus states and dark mode. | |
| A4 | [leerob.com](https://leerob.com) | Lee Robinson (Cursor). Text-forward single column; bracketed nav links `[bio] [writing]` — a plain-text gesture without a terminal skin. | |
| A5 | [mitchellh.com](https://mitchellh.com) | Mitchell Hashimoto. The floor of minimalism — three-link nav, one-paragraph bio, near-zero chrome. CLI credibility from content, not costume. | |
| A6 | [emilkowal.ski](https://emilkowal.ski) | Emil Kowalski (Sonner, Vaul). Neutral black/white/gray, expert restrained animation — the site demos his own motion writing. | |
| A7 | [rauno.me](https://rauno.me) | Rauno Freiberg. The razzle pole: one-signature-idea interactions, cursor/keyboard craft, tiny sans type. Must be seen in a browser. | |
| A8 | [antfu.me](https://antfu.me) | Anthony Fu. Generative plum-branch line art behind the header — signature graphic idea done once, structurally. Widely imitated; reference, don't clone. | |
| A9 | [macwright.com](https://macwright.com) | Tom MacWright. Featherweight, loads instantly, auto light/dark. Structural/typographic reference; near-zero razzle. | |
| A10 | [fabiensanglard.net](https://fabiensanglard.net) | Information-density reference only — consciously retro, fails "contemporary." | |

## B. CLI / AI-tooling project sites

| # | Site | Why it's here | Status |
|---|------|---------------|--------|
| B1 | [usgraphics.com](https://usgraphics.com) | U.S. Graphics Co (ex-Berkeley Graphics, makers of Berkeley Mono). Engineering-drawing aesthetic: monospace everything, ruled tables, part-number formality. Arguably the purest expression of the brief. Blocks fetch tools — view in browser. | |
| B2 | [terminal.shop](https://www.terminal.shop) | Coffee sold over SSH; site is a terminal-formatted page. Markdown `#` headers and `[bracket]` nav as the only chrome. Maximal terminal idiom, one idea executed totally. | |
| B3 | [oxide.computer](https://oxide.computer) | Engineering-document aesthetic at company scale: dotted-leader dividers, terminal-voice labels, Berkeley Mono headings, muted palette. | |
| B4 | [ghostty.org](https://ghostty.org) | Project-site energy: dark monochrome, docs-first, download page leads with version numbers. Animated ASCII-ghost hero. Zero conversion machinery. | |
| B5 | [bun.sh](https://bun.sh) | Code-as-marketing: `$` install command as hero, real code blocks and benchmark charts as the graphic content. No gradients, no illustration. | |
| B6 | [webtui.ironclad.sh](https://webtui.ironclad.sh) | WebTUI — zero-JS CSS library for TUI aesthetics in the browser. ASCII box-drawing, mock status bars, file trees. Also a practical implementation resource. | |
| B7 | [monaspace.githubnext.com](https://monaspace.githubnext.com) | Type-specimen site for GitHub's monospace superfamily. Distinctive type as the signature idea; "texture healing" explainers. | |
| B8 | [charm.land](https://charm.land) | Charm (was charm.sh). "Making the command line glamorous" — kawaii mascots + shell idioms ("haters > /dev/null™"). The razzle-heavy pole. | |
| B9 | [atuin.sh](https://atuin.sh) | Dark with green terminal accents; realistic prompt/`[Enter]`/`[Tab]` demos as primary imagery. Caveat: conversion CTAs creeping in. | |
| B10 | [anthropic.com/engineering](https://www.anthropic.com/engineering) | The restraint pole: light editorial-technical, hierarchy from spacing not color, abstract SVG illustrations. | |

## C. Docs typography & code blocks

| # | Site | What to steal | Status |
|---|------|---------------|--------|
| C1 | [ghostty.org/docs/config](https://ghostty.org/docs/config) | Muted monospace-forward restraint — looking CLI-native without being retro. Mood reference. | |
| C2 | [expressive-code.com](https://expressive-code.com/key-features/syntax-highlighting/) | The frame taxonomy: editor-frame-with-tab vs terminal-frame as two code-block species. Diff markers, ANSI rendering. Usable library. | |
| C3 | [craftinginterpreters.com](https://craftinginterpreters.com/scanning.html) | Code blocks with file-path + insertion-context labels; margin asides that hold color without breaking the main column. | |
| C4 | [typst.app/docs](https://typst.app/docs/reference/model/figure/) | Code-input → rendered-output pairing; type-badge parameter lists for reference pages. | |
| C5 | [vitepress.dev/guide/markdown](https://vitepress.dev/guide/markdown) | Line-focus blur, `[!code ++/--]` annotation vocabulary, callout containers. Steal mechanics, not the (template) look. | |
| C6 | [bun.com/docs](https://bun.com/docs/api/http) | Prose/code rhythm; dual-theme blocks with file-name titles; collapsed type-reference expandables. (Now Mintlify-hosted.) | |
| C7 | [gwern.net/design](https://gwern.net/design) | Margin sidenotes; dotted-underline annotated links with hover popups. Cherry-pick — deliberately maximal. | |
| C8 | [inkandswitch.com](https://www.inkandswitch.com/essay/local-first/) | Measure/line-height/heading rhythm for long prose; academic metadata header. No code blocks — pair with C2. | |
| C9 | [docs.astro.build](https://docs.astro.build/en/guides/markdown-content/) | Package-manager tab switcher; aside/recipe-card system; Expressive Code at production scale. | |
| C10 | [opencode.ai/docs](https://opencode.ai/docs/) | How a 2025-26 AI-CLI product themes Starlight to feel product-specific; terminal-window command framing. | |

## D. Gallery sweep finds

| # | Site | Why it's here | Status |
|---|------|---------------|--------|
| D1 | [jinsupark.com](https://jinsupark.com) | NYC designer-developer. Dark, dense project grid; signature razzle: live clocks plus a git commit hash + diff stats in the site chrome — the site presents itself as a versioned artifact. Closest single gallery match to the brief. (via dark.design) | |
| D2 | [makingsoftware.com](https://makingsoftware.com) | Solo side project: illustrated manual on how software works. Retro technical-manual aesthetic — grid paper, figure-numbered diagrams, monospace. "High-skill person builds thing on weekends," exactly. Bot-blocks fetch tools — view in browser. (via httpster) | |
| D3 | [rfeasley.io](https://rfeasley.io) | Principal content designer. Monochrome editorial type; projects numbered `{01}`, `{02}` — brace notation as the single typographic motif. Footer credits Claude/Codex. (via siteinspire) | |
| D4 | [ped.ro](https://ped.ro) | Pedro Duarte (Radix). Austere text hub with one cryptic "R0/0" easter-egg mark. Possibly too austere. (via dark.design) | |
| D5 | [verse.sh](https://verse.sh) | Creative developer; dark monospace-influenced, shader/motion demos supply the razzle. Leans showpiece. (via dark.design) | |
| D6 | [daniel.pizza](https://daniel.pizza) | Serif/sans pairing, generous whitespace; the domain itself is the personality. No mono influence — the soft-editorial pole. (via personalsit.es) | |
| D7 | [cassidoo.co](https://cassidoo.co) | Unpretentious open-source personal site with real ongoing content. Weakest on razzle. (via personalsit.es) | |
| D8 | [kaisermann.me](https://kaisermann.me) | Berlin "open-sourcerer." Sparse mark, two-item nav, personality in prose. (via dark.design) | |

Galleries that block fetch tools (browse manually if desired): godly.website (now recent.design), land-book.com, deadsimplesites.com, curated.design.

## Discarded (checked, off-brief)

- **warp.dev, cursor.com, ampcode.com, val.town** — drifted fully SaaS (testimonials, demo CTAs, logo carousels).
- **zed.dev** — borderline; testimonial blocks and video-first storytelling push it marketing-ward.
- **fly.io** — homepage now fronts Sprites; illustration-led brand, off-brief.
- **srcbook.com** — dead (301s to a different product). **code.claude.com** — redirects to standard product-marketing page.
- **sive.rs, matklad.github.io** — live but no design ideas to borrow. **simonsarris.com** — literary-essay direction, weak fit. **cristicretu.ro** — TLS expired.
- **stripe docs** — two-column API pattern worth knowing, but too corporate per brief.

## Cross-cutting observations

- The 2025–26 pattern across the strongest personal-site fits: single narrow column; prose with inline links instead of nav bars; monospace as an *accent* (kbd tokens, bracketed nav, dates), never a full skin; neutral/dark palette with one warm or signature accent; exactly one piece of motion or generative razzle.
- Terminal-aesthetic consensus rules: hierarchy via color/brightness rather than size; purposeful minimal animation (cursor blink, scrolling log).
- Current docs-typography defaults: Geist/Geist Mono and JetBrains Mono everywhere; Departure Mono is the 2025-26 indie monospace pick; Berkeley Mono is the premium engineering choice; Monaspace the adventurous one.
- JS-heavy sites that must be eyeballed in a real browser: rauno.me, paco.me, antfu.me, emilkowal.ski, monaspace.githubnext.com, usgraphics.com (bot-blocked).
