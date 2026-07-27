---
name: Byline Extraction
status: active
blurb: Extracts author bylines from news articles so aggregators can credit
  the people who did the reporting.
github: https://github.com/Jonathan-Eyler-Werve/byline-extraction
lead: Jonathan Eyler-Werve
---

News aggregators routinely cite articles without crediting the people who
wrote them. Byline Extraction is a small pipeline that fixes that: it
watches configured pages for outbound article links, visits each linked
article once, extracts the author's byline — and their email or social
handles when the publication makes them public — and appends the result to
a shared spreadsheet.

The scraping is deliberately polite: one request per published citation,
limited retries, no user-agent spoofing. The output is a working dataset
an aggregator can use to attribute the original reporting.

It runs as a TypeScript CLI feeding a Google Sheet through an
authenticated Apps Script webhook, which keeps the collaboration surface
as simple as a spreadsheet.

<!-- NEEDS REVIEW: description drafted from the repo README; confirm the
framing ("fixes that", "deliberately polite") matches how you'd pitch it. -->
