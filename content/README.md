# Content sources

Markdown sources for civicworkbench.com. This directory becomes Eleventy's
input directory at build time; until then it is plain, readable markdown.

## Conventions

- **Pages** (`index.md`, `about.md`, `team.md`): frontmatter carries
  `title` and `docno` (the title-block document number).
- **Stream entries** (`entries/YYYY-MM-DD-slug.md`): frontmatter carries
  `title`, `date`, `author`, `kind` (`report` or `note`), and `dek`
  (one-sentence summary, shown in indexes and RSS).
- **Projects** (`projects/slug.md`): frontmatter carries `name`, `status`
  (`active`, `pilot`, `archived`), and `blurb` (the one-liner for the
  landing index). Body is optional longer context.
- Prose style per `references/CONTENT-STRATEGY.md`: plain language,
  bylined individual voice in entries, collective voice only on
  index/about. Dates shown proudly; no "news" framing.
- Anything marked `<!-- NEEDS: ... -->` is a fact only a human can supply.
