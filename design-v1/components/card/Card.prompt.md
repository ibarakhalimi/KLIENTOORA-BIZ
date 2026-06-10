**Card** — the base surface; compose everything else inside it. Default to `elevated` (white + soft shadow) for content panels, `flat` (bordered) for nested/quiet areas, `brand` for the greeting hero, `deep` for a dark feature/promo card.

```jsx
import { Card, CardHeader } from './Card';

<Card variant="elevated" radius="xl" padding={22}>
  <CardHeader title="פעילות אחרונה" subtitle="היום" action={<Button variant="ghost" size="sm">הצג הכל</Button>} />
  …
</Card>

<Card variant="brand" radius="2xl">…hero…</Card>
```

- **variant**: `flat` · `elevated` · `brand` (gradient) · `deep` (dark).
- `brand`/`deep` set `--text-on-brand` automatically; place decorative blurred circles inside (overflow is clipped).
- Use `interactive` for clickable cards (hover lift). Keep radius `xl`/`2xl` for the friendly feel.
