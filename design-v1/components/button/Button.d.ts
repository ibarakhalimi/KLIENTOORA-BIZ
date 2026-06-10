import * as React from 'react';

/**
 * Primary action element for נקודה. Rounded, token-driven, RTL-ready.
 *
 * @startingPoint section="Core" subtitle="כפתור פעולה — 5 וריאנטים × 3 גדלים" viewport="400x120"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'secondary' | 'subtle' | 'ghost' | 'danger';
  /** Control height. @default "md" (44px) */
  size?: 'sm' | 'md' | 'lg';
  /** Optional leading/trailing icon node (use a 16–20px SVG). */
  icon?: React.ReactNode;
  /** Which side the icon sits on. @default "start" */
  iconPosition?: 'start' | 'end';
  /** Stretch to container width. @default false */
  fullWidth?: boolean;
  /** Render as another element/component (e.g. "a"). @default "button" */
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
