import React from 'react';
import { Checkbox } from './Checkbox';
import type { CheckboxProps } from './Checkbox';

/**
 * Single row for "Chekbox group items" (Figma 497:2376).
 * Layout: [Campaign icon 24×24] + [Campaign name + description, 4px gap] + Checkbox saas sm.
 * Spec: horizontal, padding 24px, item spacing 12px, corner radius 0, fill white, stroke mirage-100.
 * States: Default (bg white), Hover (bg #FAFBFC).
 */
export interface CheckboxGroupItemProps extends Omit<CheckboxProps, 'label'> {
  /** Leading campaign icon (24×24). Figma always includes this. */
  icon?: React.ReactNode;
  /** Campaign name. Figma: 14px SemiBold, line height 21px, letter spacing 0.14px, text-title. */
  label: React.ReactNode;
  /** Optional campaign description. Figma: 14px Medium, line height 21px, text-body, 4px below name. */
  description?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

export const CheckboxGroupItem = React.forwardRef<HTMLInputElement, CheckboxGroupItemProps>(
  (
    {
      icon,
      label,
      description,
      className = '',
      size = 'sm',
      variant = 'saas',
      ...checkboxProps
    },
    ref
  ) => {
    return (
      <label
        className={[
          'flex flex-row items-center gap-3 border border-mirage-100 bg-white px-6 py-6 cursor-pointer transition-colors hover:bg-[#FAFBFC]',
          checkboxProps.disabled ? 'cursor-not-allowed opacity-60' : '',
          className,
        ].join(' ')}
      >
        {icon != null && (
          <span className="flex h-6 w-6 shrink-0 items-center justify-center" aria-hidden>
            {icon}
          </span>
        )}
        <span className="min-w-0 flex-1 flex flex-col gap-1">
          <span className="font-body text-[14px] font-semibold leading-[21px] tracking-[0.14px] text-text-title">
            {label}
          </span>
          {description != null && (
            <span className="font-body text-[14px] font-medium leading-[21px] tracking-[0.14px] text-text-body">
              {description}
            </span>
          )}
        </span>
        <Checkbox
          ref={ref}
          size={size}
          variant={variant}
          wrapInLabel={false}
          {...checkboxProps}
          className="shrink-0"
          label={undefined}
        />
      </label>
    );
  }
);

CheckboxGroupItem.displayName = 'CheckboxGroupItem';
