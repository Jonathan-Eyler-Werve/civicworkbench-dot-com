#!/usr/bin/env bash
# Runs pa11y-ci against every HTML page in the built site, served locally.
# Pages are enumerated from _site so new stream entries are picked up
# automatically; no sitemap needed.
set -euo pipefail

PORT="${1:-8083}"

URLS=$(find _site -name '*.html' | sed "s|^_site|http://localhost:${PORT}|" | sed 's|/index\.html$|/|')

# shellcheck disable=SC2086
pa11y-ci $URLS
