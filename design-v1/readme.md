# נקודה · Design System

A design system for **נקודה (Nekuda)** — a customer-loyalty-club product for businesses.
Clean and organised, but light, friendly and modern. Hebrew-first (RTL), purple-led.

> **Origin.** This system was distilled from a chosen dashboard direction ("friendly cards")
> explored in `מועדון לקוחות.html` (see `explorations` / root). It is intentionally **versatile**:
> build against the *semantic* token layer and you can re-skin, theme, or extend without
> rewriting markup. Nothing here locks you in.

---

## What this is
- **Tokens** — full colour/type/space/radius/shadow/motion scales as CSS custom properties.
- **Components** — React primitives (Button, Badge, Avatar, Card, StatTile, ProgressRing,
  SegmentedTabs, Input) with prop contracts.
- **UI kit** — `ui_kits/loyalty-dashboard/`, the flagship management screen.
- **Specimen cards** — the small HTML files under `guidelines/` and each component folder
  populate the Design System tab.

To consume: link the single entry stylesheet **`styles.css`** (it `@import`s every token file
and declares the Rubik webfont). Build UIs against the **semantic** names in
`tokens/semantic.css` (`--brand`, `--surface`, `--text-primary`…), not the raw scales.

---

## CONTENT FUNDAMENTALS
- **Language**: Hebrew, RTL. Warm, direct, encouraging — speaks *to* the business owner as a
  partner ("הקהילה שלך גדלה ב-184 חברים החודש 🎉", "אתם 74% מהיעד — עוד 66 חברים!").
- **Person/voice**: second person plural/singular ("שלך", "אתם"), celebratory but never salesy.
- **Casing & punctuation**: sentence case (Hebrew has none anyway); numbers use Western digits
  with thousands separators (`4,820`, `₪142.5K`). Geresh for shekel-suffix where natural (`נק׳`).
- **Emoji**: yes — sparingly, as friendly punctuation on greetings, milestones and reward names
  (👋 🎉 ☕ 🏆 🎂 🎯 📈 ✨). Never more than one per line; never in dense data/tables.
- **Microcopy patterns**: short labels ("חברים פעילים", "נקודות החודש"), encouraging progress
  lines, action-first buttons ("שגר מבצע חדש", "הוסף הטבה", "הצג הכל").
- **Tone in numbers**: always contextualise a metric with a delta or comparison ("+8%",
  "לעומת 4,290 ברבעון הקודם").

## VISUAL FOUNDATIONS
- **Colour**: a single purple brand led by `--purple-800 #5b21b6`, on a near-white tinted page
  (`--neutral-50 #f7f5fc`). Warm accents — amber (points/rewards), pink (celebration), teal
  (new/fresh) — appear as small chips and categorical data, never large fills. Neutrals carry a
  faint purple tint, never pure gray.
- **Type**: one family — **Rubik** — round, friendly, modern, full Hebrew. Big extrabold/black
  numbers (KPIs, hero figures) with tight tracking; medium body; tabular figures for any compared
  number. No second family.
- **Shape & radius**: generously rounded. Cards `radius-xl 22`, hero panels `2xl 28`, icon chips
  `md 14`, buttons/inputs `sm 10`, pills/avatars full. Roundness is the core of "friendly".
- **Surfaces / cards**: white cards on the tinted page; soft, **purple-tinted** shadows
  (`rgba(28,21,48,…)`), never neutral gray. Four surface roles: `flat` (bordered, quiet),
  `elevated` (default), `brand` (greeting hero gradient), `deep` (dark feature/promo).
- **Backgrounds**: solid tinted page + signature gradients on hero/feature cards
  (`--gradient-brand`, `--gradient-deep`) with large, low-opacity decorative circles and a soft
  radial `--gradient-glow`. No photography in chrome; no noise/grain.
- **Borders**: hairline `--neutral-200` for structure; `1.5px` brand border on focus. On dark/
  brand surfaces use translucent white borders (`--border-on-brand`).
- **Elevation system**: `shadow-sm` (cards) → `md` → `lg`; `shadow-brand` glow under primary
  buttons and the greeting hero. Keep elevation low and soft.
- **Iconography**: line icons, ~1.7–1.9 stroke on a 24 grid, rounded caps/joins (see ICONOGRAPHY).
- **Motion**: friendly but restrained. `120–280ms`, `--ease-out` for most, a gentle
  `--ease-spring` (slight overshoot) for playful moments (rings filling, tiles popping). Hover =
  darken/tint; press = nudge down 1px + 0.99 scale. Always honour `prefers-reduced-motion`.
- **Hover/press**: buttons darken on hover and depress on press; cards (when interactive) lift
  with a larger shadow; nav/segment items tint with `--brand-subtle`.
- **Data-viz**: smooth area lines with a gradient fill, rounded bars (active bar in brand, rest in
  `--purple-300`), donuts/rings with rounded caps. Sequence colours from `--viz-1..5`.
- **Layout**: 4px grid. Dashboard design width `1360`, outer padding `26`. Two nav patterns —
  full labelled sidebar (`244`) or icon rail (`78`). RTL throughout; mirror all directional icons.

## ICONOGRAPHY
- **Style**: outline / line icons, 24×24 grid, **1.7–1.9px** stroke, rounded line caps and joins,
  no fills (occasional solid star/coin for emphasis). This matches the **Lucide / Feather** family.
- **Recommendation (substitution flagged)**: this system does **not** ship a bespoke icon font.
  Use **[Lucide](https://lucide.dev)** (MIT) — it matches the stroke style 1:1 and is CDN/React
  ready. The dashboard recreation uses an inline hand-built set in `ui_kits/.../atoms.jsx` with the
  same parameters; swap for Lucide in production. *Flag: confirm you're happy adopting Lucide, or
  send a bespoke set and we'll vendor it into `assets/`.*
- **Sizing**: 18px inside buttons/inputs/badges, 20px in nav, 22–26px in stat-tile chips.
- **Colour**: icons inherit text colour or the chip's accent; never multi-colour.
- **Emoji** are used as expressive accents in copy (see CONTENT FUNDAMENTALS) — not as UI icons.

---

## Index / manifest
```
styles.css                  ← consumer entry (import this)
tokens/
  colors.css                raw colour scales + gradients
  typography.css            Rubik @import, families, type scale, weights
  spacing.css               4px space scale, layout sizes, borders
  radii.css                 corner radius + elevation + focus ring
  motion.css                durations, easings, reduced-motion
  semantic.css              ROLE layer — build against these; dark scope included
  base.css                  resets + element defaults
guidelines/                 foundation specimen cards (Colors / Type / Spacing)
components/
  button/ badge/ avatar/ card/ stat-tile/ progress-ring/ tabs/ input/
                            each: <Name>.jsx + .d.ts + .prompt.md + *.card.html
ui_kits/loyalty-dashboard/  flagship screen (index.html + DashboardScreen.jsx + atoms.jsx)
explorations (root)         מועדון לקוחות.html — the 3 explored directions (A/B/C)
SKILL.md                    portable skill manifest (for Claude Code / download)
```

### Components
`Button` · `Badge` · `Avatar` + `AvatarStack` · `Card` + `CardHeader` · `StatTile` ·
`ProgressRing` · `SegmentedTabs` · `Input`. Each has a `.prompt.md` with usage and variants.

---

## Caveats
- Icon set is a **recommendation (Lucide)**, not vendored — flagged above.
- Rubik is loaded from **Google Fonts** via `@import` in `tokens/typography.css`. For fully offline
  builds, vendor the `woff2` files and replace with `@font-face`.
- Charts in the UI kit are bespoke SVG helpers with sample data, not a charting library.
