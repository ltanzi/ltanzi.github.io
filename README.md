# ltanzi.github.io

Personal site — a life plotted against **time** (x) and **seriousness** (y).

A single dark, full-viewport page: a cross of two arrows with ~13 projects
positioned as text nodes. Clicking a node opens a detail panel.

## Structure

- `index.html` — markup
- `style.css` — all styling
- `app.js` — the `PROJECTS` array (source of truth) + rendering
- `CLAUDE.md` — full design spec

## Editing

Everything lives in the `PROJECTS` array at the top of `app.js`:

- `s` — seriousness, `1`–`10` (vertical position)
- `x` — loose chronological position, `0.0`–`1.0` (horizontal position)
- `years` — the range shown in the panel; also drives the hover year read-out
- `label` — the visible text; `key` — internal id (for future deep-links)

No build step. Edit and refresh. Deployed via GitHub Pages.
