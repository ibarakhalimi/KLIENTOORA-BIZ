import * as React from 'react';

/**
 * Base surface container. The whole product is cards on a tinted background.
 *
 * @startingPoint section="Core" subtitle="משטח בסיס — flat / elevated / brand / deep" viewport="400x200"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Surface style. @default "elevated" */
  variant?: 'flat' | 'elevated' | 'brand' | 'deep';
  /** Corner radius token or raw value. @default "xl" */
  radius?: 'md' | 'lg' | 'xl' | '2xl' | string;
  /** Inner padding (px or CSS value). @default 22 */
  padding?: number | string;
  /** Hover lift + pointer cursor. @default false */
  interactive?: boolean;
  children?: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;

export interface CardHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Right-aligned actions (button, menu, tabs). */
  action?: React.ReactNode;
  style?: React.CSSProperties;
}
export function CardHeader(props: CardHeaderProps): JSX.Element;
