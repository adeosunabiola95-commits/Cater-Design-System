import React from 'react';

export type BadgeColor = 'indigo' | 'green' | 'red' | 'orange' | 'grey';
export type BadgeSize = 'sm' | 'md';
export type BadgeState = 'light' | 'lighter';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Badge color. Maps to Figma "Color" property. */
  color?: BadgeColor;
  /** Badge size. Maps to Figma "Size" property. */
  size?: BadgeSize;
  /** Outline style. Maps to Figma "Outline" property. */
  outline?: boolean;
  /** Show icon before label. Maps to Figma "With icon" property. */
  showIcon?: boolean;
  /** Background intensity. Maps to Figma "State" property. */
  state?: BadgeState;
  /** Icon element to render (default: Flag icon). */
  iconElement?: React.ReactNode;
  /** Badge label text */
  children?: React.ReactNode;
}

function DefaultBadgeIcon({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      <path
        d="M2 1C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2V10C1 10.2652 1.10536 10.5196 1.29289 10.7071C1.48043 10.8946 1.73478 11 2 11H10C10.1884 11.0001 10.373 10.9469 10.5326 10.8466C10.6921 10.7463 10.8201 10.603 10.9017 10.4332C10.9833 10.2633 11.0153 10.0739 10.9939 9.88672C10.9726 9.69954 10.8988 9.52212 10.781 9.375L8.281 7L10.781 4.625C10.8988 4.47791 10.9726 4.30053 10.9939 4.11331C11.0153 3.92609 10.9833 3.73665 10.9017 3.56682C10.8201 3.39698 10.6921 3.25367 10.5326 3.15338C10.373 3.0531 10.1884 2.99993 10 3H2V2C2 1.73478 1.89464 1.48043 1.70711 1.29289C1.51957 1.10536 1.26522 1 2 1Z"
        fill="currentColor"
      />
    </svg>
  );
}

const colorStyles: Record<BadgeColor, Record<BadgeState, { bg: string; text: string; border: string }>> = {
  indigo: {
    light: { bg: 'bg-blush-pink-100', text: 'text-blush-pink-900', border: 'border-blush-pink-300' },
    lighter: { bg: 'bg-blush-pink-50', text: 'text-blush-pink-900', border: 'border-blush-pink-200' },
  },
  green: {
    light: { bg: 'bg-salem-100', text: 'text-salem-900', border: 'border-salem-300' },
    lighter: { bg: 'bg-salem-50', text: 'text-salem-900', border: 'border-salem-200' },
  },
  red: {
    light: { bg: 'bg-bright-red-50', text: 'text-bright-red-900', border: 'border-bright-red-300' },
    lighter: { bg: 'bg-bright-red-25', text: 'text-bright-red-900', border: 'border-bright-red-200' },
  },
  orange: {
    light: { bg: 'bg-flush-orange-100', text: 'text-flush-orange-900', border: 'border-flush-orange-300' },
    lighter: { bg: 'bg-flush-orange-50', text: 'text-flush-orange-900', border: 'border-flush-orange-200' },
  },
  grey: {
    light: { bg: 'bg-mirage-200', text: 'text-mirage-800', border: 'border-mirage-300' },
    lighter: { bg: 'bg-mirage-100', text: 'text-mirage-800', border: 'border-mirage-200' },
  },
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'h-5 px-1_5 gap-0_5 text-[13px] leading-[150%] tracking-[-0.01em]',
  md: 'h-6 px-2 gap-1 text-[14px] leading-[150%] tracking-[-0.01em]',
};

const iconSizeMap: Record<BadgeSize, number> = {
  sm: 12,
  md: 14,
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      color = 'indigo',
      size = 'sm',
      outline = false,
      showIcon = false,
      state = 'light',
      iconElement,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const styles = colorStyles[color][state];
    const iconSize = iconSizeMap[size];
    const renderedIcon = iconElement ?? <DefaultBadgeIcon size={iconSize} className={styles.text} />;

    const classes = [
      'inline-flex items-center justify-center',
      'rounded-[6px]',
      'font-body font-normal',
      sizeStyles[size],
      styles.bg,
      styles.text,
      outline && `border border-solid ${styles.border}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <span ref={ref} className={classes} {...props}>
        {showIcon && renderedIcon}
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
