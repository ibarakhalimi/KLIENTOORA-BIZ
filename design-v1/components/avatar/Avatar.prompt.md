**Avatar** — represents a member. Initials sit on a tint derived from the name, so the same person looks consistent everywhere. Use `AvatarStack` for "who redeemed / who joined" rows.

```jsx
import { Avatar, AvatarStack } from './Avatar';

<Avatar name="דנה כהן" size={40} />
<Avatar name="מאיה אברהם" size={40} ring="var(--amber-500)" />   {/* #1 / highlighted */}
<AvatarStack names={["דנה כהן","יוסי לוי","מאיה אברהם","נועה פרץ","טל מזרחי"]} max={4} />
```

- Pass `src` for a real photo (falls back to initials when absent).
- Common sizes: 34 (rows/stacks), 40 (lists), 54+ (profile headers).
- `ring` adds a coloured halo cut from the surface — use sparingly for status/rank.
