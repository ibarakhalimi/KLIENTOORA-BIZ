**Input** — single-line field for search, text, and numbers. Add a leading `icon` for search/contextual fields; `label`+`hint` for forms.

```jsx
import { Input } from './Input';

<Input icon={<SearchIcon/>} placeholder="חיפוש חבר, הטבה…" />
<Input label="שם המבצע" placeholder="לדוגמה: קפה שני חינם" hint="יוצג לחברים באפליקציה" />
```

- Focus shows brand border + `--ring`. `disabled` dims and blocks pointer.
- Min height 44px (tap target). Use `size="lg"` for prominent search bars.
- For multi-select / many options use a Select; this is single-line only.
