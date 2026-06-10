import * as React from 'react';

/**
 * Pill segmented control — period / view switcher inside cards.
 *
 * @startingPoint section="Dashboard" subtitle="מתג מקטעים (שבוע/חודש/רבעון)" viewport="320x70"
 */
export interface SegmentOption { label: React.ReactNode; value: string; }

export interface SegmentedTabsProps {
  /** Options as strings or {label, value}. */
  options: Array<string | SegmentOption>;
  /** Controlled value. */
  value?: string;
  /** Uncontrolled initial value. */
  defaultValue?: string;
  /** Change handler. */
  onChange?: (value: string) => void;
  /** @default "md" */
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}
export function SegmentedTabs(props: SegmentedTabsProps): JSX.Element;
