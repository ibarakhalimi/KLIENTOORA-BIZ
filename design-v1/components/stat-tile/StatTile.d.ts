import * as React from 'react';

/**
 * Signature KPI tile — tinted icon chip + label + big number + delta.
 *
 * @startingPoint section="Dashboard" subtitle="אריח KPI עם צ׳יפ אייקון ודלתא" viewport="400x110"
 */
export interface StatTileProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Icon node (22–26px) shown in the tinted chip. */
  icon?: React.ReactNode;
  /** Chip colour. @default "brand" */
  tone?: 'brand' | 'amber' | 'pink' | 'teal';
  /** Caption above the number. */
  label: React.ReactNode;
  /** The metric — string already formatted (e.g. "1,236"). */
  value: React.ReactNode;
  /** Optional change label (e.g. "+8%"). */
  delta?: React.ReactNode;
  /** Arrow + colour direction. @default "up" */
  deltaDirection?: 'up' | 'down';
  /** Chip beside text ("row") or stacked above ("stack"). @default "row" */
  layout?: 'row' | 'stack';
}
export function StatTile(props: StatTileProps): JSX.Element;
