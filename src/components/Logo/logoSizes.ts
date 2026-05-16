/** Wordmark aspect ratio from Figma / SVG viewBox (173×36). */
export const LOGO_WORDMARK_ASPECT = 173 / 36;

export type LogoSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type LogoBreakpoint = 'mobile' | 'tablet' | 'desktop';

export type LogoSizeSpec = {
  /** Token name */
  size: LogoSize;
  /** Rendered height in px (Figma frame height). */
  height: number;
  /** Rendered width in px (Figma frame width). */
  width: number;
  /** Matching instances in Cater Design System file. */
  figmaFrame: string;
  /** Typical UI placement */
  useCase: string;
  /** Recommended viewport bucket */
  breakpoint: LogoBreakpoint;
};

/**
 * wecater wordmark scale — dimensions measured from Logo groups in
 * Figma file `tK5SjqGRgeVr5w5tmxuLDa` (Cater Design System).
 */
export const logoSizeSpecs: Record<LogoSize, LogoSizeSpec> = {
  xs: {
    size: 'xs',
    height: 20,
    width: 97,
    figmaFrame: '97×20',
    useCase: 'Compact chrome — mobile footers, nested panels, co-brand rows',
    breakpoint: 'mobile',
  },
  sm: {
    size: 'sm',
    height: 32,
    width: 140,
    figmaFrame: '140×32 (nav)',
    useCase: 'Mobile app header / top bar (WeCater Explore Top Bar)',
    breakpoint: 'mobile',
  },
  md: {
    size: 'md',
    height: 33,
    width: 160,
    figmaFrame: '160×33',
    useCase: 'Tablet navigation, condensed marketing headers',
    breakpoint: 'tablet',
  },
  lg: {
    size: 'lg',
    height: 36,
    width: 172,
    figmaFrame: '172×36',
    useCase: 'Desktop navigation — canonical Top Bar logo (Figma `4664:14355`)',
    breakpoint: 'desktop',
  },
  xl: {
    size: 'xl',
    height: 45,
    width: 215,
    figmaFrame: 'scaled 1.25×',
    useCase: 'Hero / onboarding / large marketing surfaces (keep clear space)',
    breakpoint: 'desktop',
  },
};

export const logoBreakpointGuidance: Record<
  LogoBreakpoint,
  { viewport: string; recommendedSize: LogoSize; notes: string }
> = {
  mobile: {
    viewport: '≤ 767px (Storybook Mobile 375px)',
    recommendedSize: 'sm',
    notes: 'Use `sm` in top bars. Drop to `xs` only when horizontal space is severely constrained.',
  },
  tablet: {
    viewport: '768px – 1023px (Storybook Tablet 768px)',
    recommendedSize: 'md',
    notes: 'Prefer `md` in nav; use `lg` when the header matches desktop layout.',
  },
  desktop: {
    viewport: '≥ 1024px (Storybook Desktop 1280px)',
    recommendedSize: 'lg',
    notes: 'Default product chrome. Use `xl` only on dedicated brand moments, not dense UI.',
  },
};
