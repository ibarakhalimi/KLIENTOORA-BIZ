---
name: nekuda-design
description: Use this skill to generate well-branded interfaces and assets for נקודה (Nekuda) — a Hebrew-first, RTL customer-loyalty-club product for businesses — for production or throwaway prototypes/mocks. Contains design guidelines, colours, type, fonts, components and a dashboard UI kit.
user-invocable: true
---

Read `readme.md` in this skill first, then explore the other files.

- **Tokens**: link `styles.css` (it imports every token file + the Rubik webfont). Build against the
  semantic names in `tokens/semantic.css` (`--brand`, `--surface`, `--text-primary`, `--accent-*`,
  `--success`…), never the raw `--purple-*` / `--neutral-*` scales.
- **Components**: `components/<name>/` — each has `<Name>.jsx`, a `.d.ts` props contract, and a
  `.prompt.md` with usage + variants. Primitives: Button, Badge, Avatar, Card, StatTile,
  ProgressRing, SegmentedTabs, Input.
- **UI kit**: `ui_kits/loyalty-dashboard/` — the flagship management screen; fork it to start a new
  view.
- **Foundations**: `guidelines/` holds specimen cards; `readme.md` documents content voice, visual
  foundations and iconography (line icons — use Lucide).

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and produce
static HTML for the user to view. For production code, copy assets and follow the rules here.

Everything is RTL/Hebrew, purple-led (`#5b21b6`), Rubik, generously rounded, with soft
purple-tinted shadows. Friendly but clean — celebratory microcopy, sparing emoji, big tabular
numbers. If invoked without guidance, ask what to build, ask a few questions, and act as an expert
נקודה designer.
