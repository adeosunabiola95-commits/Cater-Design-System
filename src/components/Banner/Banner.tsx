import React from 'react';
import { Alert02, Cancel } from '../../icons';

export type BannerState = 'success' | 'info' | 'error' | 'warning' | 'grey';

export interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual state. Maps to Figma "State" property. */
  state?: BannerState;
  /** Banner title */
  title?: React.ReactNode;
  /** Banner description */
  description?: React.ReactNode;
  /** Icon element (overrides default per-state icon) */
  iconElement?: React.ReactNode;
  /** Called when close button is clicked */
  onClose?: () => void;
}

const iconGlyphSize = 16;
const closeIconSize = 20;

const stateStyles: Record<BannerState, { bg: string; border: string; iconBg: string }> = {
  success: { bg: 'bg-salem-50', border: 'border-salem-300', iconBg: 'bg-salem-600' },
  info: { bg: 'bg-blush-pink-50', border: 'border-blush-pink-300', iconBg: 'bg-blush-pink-700' },
  error: { bg: 'bg-bright-red-25', border: 'border-bright-red-200', iconBg: 'bg-bright-red-700' },
  warning: { bg: 'bg-flush-orange-50', border: 'border-flush-orange-300', iconBg: 'bg-flush-orange-700' },
  grey: { bg: 'bg-mirage-100', border: 'border-mirage-300', iconBg: 'bg-mirage-600' },
};

export const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  ({ state = 'success', title, description, iconElement, onClose, className = '', ...props }, ref) => {
    const styles = stateStyles[state];
    const icon =
      iconElement ??
      (
        <Alert02 width={iconGlyphSize} height={iconGlyphSize} className="text-white" />
      );

    const classes = [
      'flex items-start gap-2',
      'py-5 px-5',
      'rounded-[4px] border border-solid',
      styles.bg,
      styles.border,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} role="alert" className={classes} {...props}>
        <span
          className={`shrink-0 flex items-center justify-center w-6 h-6 rounded-[4px] ${styles.iconBg}`}
        >
          {icon}
        </span>
        <div className="flex-1 min-w-0 flex flex-col gap-2.5">
          {title && <span className="font-body text-[16px] font-medium leading-[150%] text-text-title">{title}</span>}
          {description && <span className="font-body text-[16px] font-normal leading-[150%] text-text-title">{description}</span>}
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 flex items-center justify-center w-5 h-5 text-text-title hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-mirage-900/20 rounded"
          >
            <Cancel width={closeIconSize} height={closeIconSize} />
          </button>
        )}
      </div>
    );
  }
);

Banner.displayName = 'Banner';
