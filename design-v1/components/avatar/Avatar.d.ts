import * as React from 'react';

/**
 * Member avatar — deterministic tinted initials, or an image.
 *
 * @startingPoint section="Core" subtitle="אווטאר חבר + מחסנית" viewport="400x100"
 */
export interface AvatarProps extends React.HTMLAttributes<HTMLElement> {
  /** Full name — drives initials and the deterministic tint. */
  name?: string;
  /** Optional image URL; overrides initials. */
  src?: string | null;
  /** Diameter in px. @default 40 */
  size?: number;
  /** Ring colour (e.g. for #1 / online). @default null */
  ring?: string | null;
}
export function Avatar(props: AvatarProps): JSX.Element;

export interface AvatarStackProps {
  /** Names, in display order. */
  names: string[];
  /** Diameter in px. @default 34 */
  size?: number;
  /** Max avatars before "+N". @default 4 */
  max?: number;
  /** Ring/cutout colour matching the surface behind. @default "var(--surface)" */
  ringColor?: string;
}
export function AvatarStack(props: AvatarStackProps): JSX.Element;
