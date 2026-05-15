import React, { forwardRef } from 'react';
import { Toggle, type ToggleSize } from '../Toggle';

export interface NotificationGroupProps {
  /** Title text */
  title: string;
  /** Description text */
  description?: string;
  /** Size of the toggle */
  size?: ToggleSize;
  /** Controlled checked state */
  checked?: boolean;
  /** Default checked state (uncontrolled) */
  defaultChecked?: boolean;
  /** Callback when toggled */
  onChange?: (checked: boolean) => void;
  /** Disabled state */
  disabled?: boolean;
  /** Additional className */
  className?: string;
}

export const NotificationGroup = forwardRef<HTMLDivElement, NotificationGroupProps>(
  (
    {
      title,
      description,
      size = 'sm',
      checked,
      defaultChecked,
      onChange,
      disabled,
      className = '',
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={[
          'flex items-start gap-[8px]',
          className,
        ].join(' ')}
        style={{ width: 284 }}
      >
        <div style={{ paddingTop: 2, flexShrink: 0 }}>
          <Toggle
            size={size}
            checked={checked}
            defaultChecked={defaultChecked}
            onChange={onChange}
            disabled={disabled}
          />
        </div>

        <div className="flex flex-col" style={{ gap: 2, minWidth: 0, flex: 1 }}>
          <span
            className="font-body"
            style={{
              fontSize: 16,
              fontWeight: 500,
              lineHeight: '150%',
              letterSpacing: '0.16px',
              color: '#29344A',
            }}
          >
            {title}
          </span>

          {description && (
            <span
              className="font-body"
              style={{
                fontSize: 14,
                fontWeight: 400,
                lineHeight: '150%',
                color: '#5A626F',
              }}
            >
              {description}
            </span>
          )}
        </div>
      </div>
    );
  }
);

NotificationGroup.displayName = 'NotificationGroup';
