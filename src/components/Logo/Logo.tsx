import React from 'react';

import wordmarkUrl from './assets/wecater-wordmark.svg';
import { logoSizeSpecs, type LogoSize } from './logoSizes';

export type { LogoSize } from './logoSizes';
export { logoSizeSpecs, logoBreakpointGuidance, LOGO_WORDMARK_ASPECT } from './logoSizes';

export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Wordmark size token. Maps to Figma Logo frame dimensions in the Cater file.
   * @default 'lg'
   */
  size?: LogoSize;
}

const sizeClassName: Record<LogoSize, string> = {
  xs: 'h-5 w-[97px]',
  sm: 'h-8 w-[140px]',
  md: 'h-[33px] w-40',
  lg: 'h-9 w-[172px]',
  xl: 'h-11 w-[215px]',
};

/**
 * wecater wordmark — Sherwood Green (`#073D30`) vector from Cater Design System.
 * Figma reference: Logo group `4344:3496` (~172×36px in Top Bar `4664:14355`).
 */
export function Logo({ size = 'lg', className, alt = 'wecater', width, height, ...props }: LogoProps) {
  const spec = logoSizeSpecs[size];

  return (
    <img
      src={wordmarkUrl}
      alt={alt}
      width={width ?? spec.width}
      height={height ?? spec.height}
      className={['shrink-0 select-none', sizeClassName[size], className].filter(Boolean).join(' ')}
      {...props}
    />
  );
}
