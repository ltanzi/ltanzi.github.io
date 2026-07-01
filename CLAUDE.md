# Leonardo Tanzi — personal website

A single-page, dark, artsy personal site. The whole page is a **cross of two arrows** with ~13 life/work/personal projects plotted on it. Clicking a project opens a detail overlay.

## Concept

- **X axis = time** — loose chronological (left = older, right = newer). NOT proportional to real dates; hand-tuned for legibility.
- **Y axis = seriousness** — a manual 1–10 score set per project (higher = more "serious"). Axis labels are plain: **`seriousness ↑`** and **`time →`**.
- The joke / tone: artsy, self-deprecating. A signal that Leonardo is open to unconventional (non-academic / non-corporate) paths. The "unserious" projects (Canino FM, hotcollective) are the ones he clearly loves.

## Purpose

Personality-forward personal landing page — a job-hunting signal, not a corporate portfolio (three CV variants already exist for that). Audience: creative-tech peers, the Barcelona/Canino scene, curious collaborators.

## Tech & hosting

- **Vanilla HTML/CSS/JS. No build step, no framework.** (Same shape as the pose-suggester repo.)
- Data-driven: a single `projects` array at the top of `app.js` is the source of truth. Tuning a seriousness value or editing a description is a one-line change.
- Ships static to **GitHub Pages** at repo **`lt.github.io`** (serves at `https://lt.github.io`, no subpath).
- Files: `index.html`, `style.css`, `app.js`.

## Aesthetic

- Minimal **Swiss-typographic**, **dark** palette, a single accent color, expressive type, generous negative space.
- Axes rendered like a real plot: hairline lines, small ticks, arrowheads. Reference sensibility: rhizomerm.com (content-first), inverted to dark.
- **Subtle motion only** — node hover scales/brightens slightly; overlay slides in.

## Layout & chrome

- Map **fills the viewport**. Minimal chrome.
- **`Leonardo Tanzi`** + **email** in a corner. That's it — no tagline, no nav.
- Axis labels carry the concept.

## Nodes

- **Text-first**, **short names**, **name only** on the map (no year — the X axis encodes time).
- Each project object carries an optional `image` field for later (renders a thumbnail if present; text-only otherwise).
- Hover: subtle scale + brightness, pointer cursor.
- Positions hand-tuned so labels don't overlap; the high-seriousness academic/work cluster (PhD/Paris/Methinks/Stockholm) needs spacing.

## Detail overlay

- Slides in over a dimmed/blurred map. Fields per project:
  - **title**
  - **meta** — year range · category · seriousness score
  - **description** — 2–4 sentences
  - **links** — labelled reference links (site, GitHub, paper, Scholar, article…)
  - **images** — optional grid gallery *inside* the panel (rhizome product-page style), added later
- Close via **✕**, clicking the **backdrop**, or **ESC**.
- Later freebie: hash deep-links (`#canino-fm` opens that panel on load).

## Content — 13 nodes

`s` = seriousness (1–10). `*` = placeholder value, to be tuned by Leonardo.

| key | short label | years (X) | category | s |
|---|---|---|---|---|
| bsc | BSc | 2012–2016 | Academic | 6* |
| msc | MSc | 2017–2019 | Academic | 7* |
| stockholm | Stockholm | 2019 | Research | 7* |
| phd | PhD | 2019–2022 | Academic | 9* |
| paris | Paris | 2022 | Research | 8* |
| teaching | Teaching | 2020–2022 | Teaching | 5* |
| writing | Writing | 2020–2023 | Writing | 5 |
| methinks | Methinks | 2023–present | Work | 9 |
| xarxa | xarxa | 2024–2025 | Personal | 3* |
| canino | Canino FM | 2024–present | Personal | 2* |
| hotcollective | hotcollective | 2013–2020 | Personal | 1 |
| sgambetto | sgambetto | 2020–2022 | Personal | 2 |
| pose-suggester | pose-suggester | 2026 | Personal | 2 |

- **Writing** merges MarkTechPost + Medium.
- **Methinks** merges the two Methinks roles (DL Engineer → Senior); tell the progression in the description.
- **hotcollective** — party collective organized with friends. Description TODO (Leonardo will provide).
- **sgambetto** — chess tournament he organized. Description TODO (Leonardo will provide).

## Deferred (do NOT build yet)

- **Ball game** — a physics toy (à la rhizomerm) as a possible finale.
- **Mobile polish** — desktop-first. Because layout is a data array, we can later either polish the scaled map or swap to an ordered list below a breakpoint.
- Real images, per-node seriousness tuning, custom domain, hash deep-links.
