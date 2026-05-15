/**
 * Cater Design Systems — typography tokens.
 * Figma: Typography collection (Family/Display, Family/Body, Size/*, Weight/*, Line-height/*, Letter-spacing/*).
 * File: https://www.figma.com/design/tK5SjqGRgeVr5w5tmxuLDa/Cater-Design-System
 */

/** Figma: Family/Display — headings (alias `title` for Tailwind font-title) */
export const fontFamily = {
  display: 'General Sans',
  title: 'General Sans',
  /** Figma: Family/Body */
  body: 'Inter',
} as const;

/** Figma: Size/xs … Size/5xl (px) */
export const fontSize = {
  xs: 10,
  sm: 13,
  base: 14,
  md: 16,
  lg: 20,
  xl: 25,
  '2xl': 31,
  '3xl': 39,
  '4xl': 49,
  '5xl': 61,
} as const;

/** Figma: Weight/* */
export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

/**
 * Figma: Line-height/* — stored as unitless ratio (120 → 1.2).
 * Use in CSS: line-height: var(--leading-tight) or class.
 */
export const lineHeight = {
  tight: 1.2,
  normal: 1.4,
  loose: 1.5,
} as const;

/**
 * Figma: Letter-spacing/* — em approximations (-2% → -0.02em, 3% → 0.03em).
 */
export const letterSpacing = {
  tight: '-0.02em',
  normal: '0em',
  wide: '0.03em',
} as const;

export type FontSizeToken = keyof typeof fontSize;
export type FontWeightToken = keyof typeof fontWeight;
export type LineHeightToken = keyof typeof lineHeight;
export type LetterSpacingToken = keyof typeof letterSpacing;
