import React from 'react';

export type ButtonType =
  | 'primary'
  | 'destructive'
  | 'outline'
  | 'ghost'
  | 'secondary-color'
  | 'tertiary-grey';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonIconPosition = 'none' | 'left' | 'right' | 'alone';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style of the button */
  variant?: ButtonType;
  /** Size of the button */
  size?: ButtonSize;
  /** Icon position relative to label */
  icon?: ButtonIconPosition;
  /** Icon element to render */
  iconElement?: React.ReactNode;
  /** Button label text (not used when icon="alone") */
  children?: React.ReactNode;
  /** Stretch to 100% of the parent container width */
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonType, { base: string; hover: string; focused: string; disabled: string }> = {
  primary: {
    /** Figma: Brand/Sherwood Green fill + Brand/Gossip label (Desktop Bridge — variants 20:3395, 20:3655). */
    base: 'bg-brand-sherwood-green text-brand-gossip',
    hover: 'hover:bg-sherwood-chelsea-gem-900',
    focused:
      'focus:bg-brand-sherwood-green focus:shadow-[0_0_0_2px_#FFFFFF,0_0_0_4px_#8DE5D0]',
    disabled: 'disabled:bg-surface-disabled disabled:text-text-disabled',
  },
  destructive: {
    base: 'bg-bright-red-600 text-white',
    hover: 'hover:bg-bright-red-900',
    focused: 'focus:bg-bright-red-900 focus:shadow-[0_0_0_2px_#FFFFFF,0_0_0_4px_#E89A9A]',
    disabled: 'disabled:bg-surface-disabled disabled:text-text-disabled',
  },
  outline: {
    base: 'bg-white text-text-title border border-border-default',
    hover: 'hover:bg-mirage-100',
    focused: 'focus:bg-mirage-100 focus:border-transparent focus:shadow-[0_0_0_2px_#FFFFFF,0_0_0_4px_#CEECDA]',
    disabled: 'disabled:bg-surface-disabled disabled:text-text-disabled disabled:border-border-disabled',
  },
  ghost: {
    base: 'bg-white text-text-title border border-transparent',
    hover: 'hover:bg-mirage-100',
    focused: 'focus:bg-mirage-100 focus:shadow-[0_0_0_2px_#FFFFFF,0_0_0_4px_#CEECDA]',
    disabled: 'disabled:bg-surface-disabled disabled:text-text-disabled',
  },
  'secondary-color': {
    base: 'bg-salem-50 text-text-title',
    hover: 'hover:bg-salem-100',
    focused: 'focus:bg-salem-100 focus:shadow-[0_0_0_2px_#FFFFFF,0_0_0_4px_#CEECDA]',
    disabled: 'disabled:bg-surface-disabled disabled:text-text-disabled',
  },
  'tertiary-grey': {
    base: 'bg-surface-disabled text-text-title',
    hover: 'hover:bg-mirage-100',
    focused: 'focus:bg-mirage-100 focus:shadow-[0_0_0_2px_#FFFFFF,0_0_0_4px_#CEECDA]',
    disabled: 'disabled:bg-surface-disabled disabled:text-text-disabled',
  },
};

const sizeStyles: Record<ButtonSize, string> = {
  small: 'px-[8px] py-[8px] gap-[2px]',
  medium: 'px-[10px] py-[10px] gap-[2px]',
  large: 'px-[14px] py-[14px] gap-[4px]',
};

const iconAloneSizeStyles: Record<ButtonSize, string> = {
  small: 'h-[35px] w-[35px] min-w-[35px] p-0',
  medium: 'h-[42px] w-[42px] min-w-[42px] p-0',
  large: 'h-[52px] w-[52px] min-w-[52px] p-0',
};

const iconSizeMap: Record<ButtonSize, number> = {
  small: 14,
  medium: 16,
  large: 20,
};

const iconAloneSizeMap: Record<ButtonSize, number> = {
  small: 18,
  medium: 18,
  large: 20,
};

const fontSizeStyles: Record<ButtonSize, string> = {
  small: 'text-[14px] leading-[21px] tracking-[0.14px]',
  medium: 'text-[16px] leading-[24px] tracking-[0.16px]',
  large: 'text-[20px] leading-[24px] tracking-[0.2px]',
};

function DefaultIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3.33337 8H12.6667M12.6667 8L8.00004 3.33333M12.6667 8L8.00004 12.6667"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      icon = 'none',
      iconElement,
      children,
      fullWidth = false,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const v = variantStyles[variant];
    const isIconAlone = icon === 'alone';
    const layoutClass = fullWidth ? 'flex w-full' : 'inline-flex';
    const iconSize = isIconAlone ? iconAloneSizeMap[size] : iconSizeMap[size];
    const renderedIcon = iconElement ?? <DefaultIcon size={iconSize} />;

    /** Figma: cornerRadius 999 + corner variables (Radius/full) on root for all Button types. */
    const radiusClass = 'rounded-full';

    const classes = [
      layoutClass,
      'items-center justify-center',
      radiusClass,
      'font-body font-semibold',
      'cursor-pointer',
      'shadow-[0_1px_2px_rgba(16,24,40,0.05)]',
      'outline-none transition-colors',
      'disabled:cursor-not-allowed',
      isIconAlone ? iconAloneSizeStyles[size] : sizeStyles[size],
      !isIconAlone && fontSizeStyles[size],
      v.base,
      v.hover,
      v.focused,
      v.disabled,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    if (isIconAlone) {
      return (
        <button ref={ref} className={classes} disabled={disabled} {...props}>
          {renderedIcon}
        </button>
      );
    }

    return (
      <button ref={ref} className={classes} disabled={disabled} {...props}>
        <span
          className={[
            'inline-flex items-center justify-center px-[4px] gap-[8px]',
            fullWidth ? 'w-full' : '',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {icon === 'left' && renderedIcon}
          {children}
          {icon === 'right' && renderedIcon}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';
