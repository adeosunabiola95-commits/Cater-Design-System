/**
 * Cater Design Systems — radius tokens (Figma collection: Radius).
 * File: https://www.figma.com/design/tK5SjqGRgeVr5w5tmxuLDa/Cater-Design-System
 */

export const radius = {
  none: '0px',
  sm: '2px',
  md: '4px',
  lg: '8px',
  xl: '12px',
  '2xl': '16px',
  /** Figma Modals shell (Desktop Bridge, Modals variant) */
  modal: '20px',
  full: '9999px',
} as const;

export type RadiusToken = keyof typeof radius;
