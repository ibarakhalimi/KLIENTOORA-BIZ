import * as React from 'react';

/**
 * Circular progress indicator for goals / completion.
 *
 * @startingPoint section="Dashboard" subtitle="טבעת התקדמות ליעדים" viewport="300x120"
 */
export interface ProgressRingProps {
  /** 0–100. */
  value?: number;
  /** Diameter px. @default 66 */
  size?: number;
  /** Stroke width px. @default 7 */
  thickness?: number;
  /** Progress colour. @default "var(--brand)" */
  color?: string;
  /** Track colour. @default "var(--brand-subtle-2)" */
  track?: string;
  /** Centred label (e.g. "74%"). */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function ProgressRing(props: ProgressRingProps): JSX.Element;
