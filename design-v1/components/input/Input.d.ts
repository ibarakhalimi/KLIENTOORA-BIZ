import * as React from 'react';

/**
 * Text field with optional leading icon + label. Search / text / number.
 *
 * @startingPoint section="Forms" subtitle="שדה קלט עם אייקון ותווית" viewport="360x120"
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Leading icon (18px). */
  icon?: React.ReactNode;
  /** Field label above the control. */
  label?: React.ReactNode;
  /** Helper text below the control. */
  hint?: React.ReactNode;
  /** @default "md" (44px) */
  size?: 'sm' | 'md' | 'lg';
  /** Wrapper style (the <input> gets the rest via ...props). */
  style?: React.CSSProperties;
}
export function Input(props: InputProps): JSX.Element;
