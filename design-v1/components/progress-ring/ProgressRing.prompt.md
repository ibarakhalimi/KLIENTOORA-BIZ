**ProgressRing** — circular completion for goal cards and tier progress. Put a `%` or fraction in the centre; pair `tone`-matched `color`/`track` to the metric.

```jsx
import { ProgressRing } from './ProgressRing';

<ProgressRing value={74} color="var(--brand)" track="var(--brand-subtle-2)">
  <span style={{ fontSize: 15 }}>74%</span>
</ProgressRing>

<ProgressRing value={78} color="var(--accent-amber)" track="var(--accent-amber-bg)">78%</ProgressRing>
```

- Animates on value change (respects reduced-motion).
- For a goal row: ring on the start, label + `current / target` text beside it.
