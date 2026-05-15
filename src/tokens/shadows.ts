export const shadows = {
  xs: '0 1px 2px rgba(16, 24, 40, 0.05)',
  sm: '0 1px 2px rgba(16, 24, 40, 0.06), 0 1px 3px rgba(16, 24, 40, 0.10)',
  md: '0 2px 4px -2px rgba(16, 24, 40, 0.06), 0 4px 8px -2px rgba(16, 24, 40, 0.10)',
  lg: '0 4px 6px -2px rgba(16, 24, 40, 0.03), 0 12px 16px -4px rgba(16, 24, 40, 0.08)',
  xl: '0 8px 8px -4px rgba(16, 24, 40, 0.03), 0 20px 24px -4px rgba(16, 24, 40, 0.08)',
} as const;

export const focusRings = {
  'input-highlight': '0 0 0 2px #CEECDA',
  'input-error': '0 0 0 2px #FFDCDC',
  'button-pressed': '0 0 0 2px #FFFFFF, 0 0 0 4px #CEECDA',
} as const;

export type ShadowToken = keyof typeof shadows;
export type FocusRingToken = keyof typeof focusRings;
