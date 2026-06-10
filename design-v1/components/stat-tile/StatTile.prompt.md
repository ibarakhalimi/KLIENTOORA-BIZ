**StatTile** — the dashboard's headline KPI block. Lay 3–4 in a `repeat(N,1fr)` grid as the top row. Rotate `tone` across tiles for the friendly multi-colour rhythm (brand → amber → pink → teal).

```jsx
import { StatTile } from './StatTile';

<StatTile tone="brand" icon={<UsersIcon/>} label="חברים פעילים" value="1,236" delta="+8%" />
<StatTile tone="amber" icon={<CoinIcon/>}  label="נקודות החודש" value="24,800" delta="+5.6%" />
<StatTile tone="pink"  icon={<GiftIcon/>}  label="הטבות מומשו" value="312" delta="−2%" deltaDirection="down" />
```

- **tone** colours the chip only — keep numbers in `--text-primary`.
- Use `layout="stack"` for narrow columns (icon + sparkline on top, number below).
- Values are pre-formatted strings; tabular figures are applied automatically.
