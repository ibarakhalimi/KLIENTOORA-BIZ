**SegmentedTabs** — in-card switcher for time range or view. Sits in the card header, end-aligned. Works controlled or uncontrolled.

```jsx
import { SegmentedTabs } from './SegmentedTabs';

<SegmentedTabs options={["שבוע","חודש","רבעון"]} defaultValue="שבוע" onChange={setRange} />
```

- Active segment lifts onto a white chip in brand colour; rest stay muted.
- Keep 2–4 short options. For more/longer options use a Select instead.
- `size="sm"` for tight card headers.
