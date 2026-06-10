**Button** — the primary action element; use for any user-triggered action (submit, create, navigate-as-CTA). Reach for `primary` once per view for the main action, `secondary`/`subtle` for supporting actions, `ghost` for low-emphasis, `danger` for destructive.

```jsx
import { Button } from './Button';

<Button variant="primary" icon={<PlusIcon />}>צור קמפיין</Button>
<Button variant="secondary">ביטול</Button>
<Button variant="subtle" size="sm">הצג הכל</Button>
```

- **variant**: `primary` (brand fill + glow), `secondary` (outlined), `subtle` (tinted brand), `ghost` (text), `danger`.
- **size**: `sm` 36px · `md` 44px · `lg` 52px.
- Pass `icon` + `iconPosition` for an inline glyph; `fullWidth` to stretch. Use `as="a"` with `href` for link-styled buttons.
- Hover darkens, press nudges down 1px. Focus shows the brand `--ring`.
