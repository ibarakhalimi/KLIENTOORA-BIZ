import * as React from 'react';

/**
 * Compact status / category pill. Soft tinted by default; solid for emphasis.
 *
 * @startingPoint section="Core" subtitle="תווית סטטוס / קטגוריה" viewport="400x80"
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Colour role. @default "brand" */
  tone?: 'brand' | 'success' | 'warning' | 'danger' | 'info' | 'amber' | 'pink' | 'teal' | 'neutral';
  /** Filled instead of tinted. @default false */
  solid?: boolean;
  /** Show a leading status dot. @default false */
  dot?: boolean;
  /** Optional leading icon (12–14px). */
  icon?: React.ReactNode;
  /** @default "md" */
  size?: 'sm' | 'md';
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
