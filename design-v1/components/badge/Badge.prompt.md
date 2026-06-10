**Badge** — a small pill for status, tier, or category labels. Use soft (default) inside dense lists/tables; `solid` when it must pop on a busy surface. Pair `dot` with statuses (active/new), `icon` with tiers (star/crown).

```jsx
import { Badge } from './Badge';

<Badge tone="success" dot>פעיל</Badge>
<Badge tone="amber" icon={<StarIcon />}>זהב</Badge>
<Badge tone="brand" solid>חדש</Badge>
```

- **tone**: `brand` · `success` · `warning` · `danger` · `info` · `amber` · `pink` · `teal` · `neutral`.
- **solid** flips tint → filled. **size** `sm`/`md`.
- For loyalty tiers map: ברונזה/כסף → tinted purple, זהב → `amber`, פלטינה → `brand` solid.
