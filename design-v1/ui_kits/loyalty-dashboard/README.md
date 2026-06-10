# Loyalty Dashboard · UI kit

The flagship screen of **נקודה** — the loyalty-club management dashboard, built in the
"friendly cards" direction (Direction B) the user selected.

## Files
- `index.html` — mounts the full dashboard screen (also registered as a Starting Point).
- `DashboardScreen.jsx` — the screen composition: top nav, greeting hero, KPI tiles, points
  bar chart, monthly-goal rings, activity feed, popular-reward promo card.
- `atoms.jsx` — local helpers used by the screen (Icon set, Avatar, AreaChart/BarChart/Donut/
  Sparkline/Ring). These mirror the published components; in production prefer the real
  `components/*` primitives (Button, StatTile, Badge, Avatar, ProgressRing, SegmentedTabs).

## Notes
This is a high-fidelity recreation, not production code — charts use sample data and there's no
routing. It demonstrates the visual language and how the primitives compose into a real view.
Design size is 1360×940; everything fits without scroll.
