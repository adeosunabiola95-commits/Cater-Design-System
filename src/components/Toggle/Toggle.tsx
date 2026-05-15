import React, { forwardRef, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export type ToggleSize = 'sm' | 'md';

export interface ToggleProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /** Size of the toggle */
  size?: ToggleSize;
  /** Controlled checked state */
  checked?: boolean;
  /** Default checked state (uncontrolled) */
  defaultChecked?: boolean;
  /** Callback when toggled */
  onChange?: (checked: boolean) => void;
  /** Accessible label */
  'aria-label'?: string;
}

const trackDimensions: Record<ToggleSize, { width: number; height: number; padding: number }> = {
  sm: { width: 32, height: 20, padding: 2 },
  md: { width: 38.4, height: 24, padding: 2.4 },
};

const knobDimensions: Record<ToggleSize, number> = {
  sm: 16,
  md: 19.2,
};

const iconSize: Record<ToggleSize, { size: number; strokeWidth: number }> = {
  sm: { size: 12, strokeWidth: 1.5 },
  md: { size: 14.4, strokeWidth: 1.8 },
};

const spring = { type: 'spring' as const, visualDuration: 0.2, bounce: 0.2 };

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      size = 'md',
      checked: controlledChecked,
      defaultChecked = false,
      onChange,
      disabled,
      className = '',
      ...props
    },
    ref
  ) => {
    const isControlled = controlledChecked !== undefined;
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    const isChecked = isControlled ? controlledChecked : internalChecked;

    const handleClick = useCallback(() => {
      if (disabled) return;
      const next = !isChecked;
      if (!isControlled) setInternalChecked(next);
      onChange?.(next);
    }, [disabled, isChecked, isControlled, onChange]);

    const trackColor = disabled
      ? '#F1F2F5'
      : isChecked
        ? '#39B16C'
        : '#D9DDE4';

    const focusRing =
      'focus-visible:shadow-[0_0_0_2px_#CEECDA] focus-visible:outline-none';

    const { size: icoSize, strokeWidth } = iconSize[size];
    const dims = trackDimensions[size];
    const knobSize = knobDimensions[size];

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={isChecked}
        disabled={disabled}
        onClick={handleClick}
        className={[
          'inline-flex cursor-pointer',
          focusRing,
          disabled ? 'cursor-not-allowed' : '',
          className,
        ].join(' ')}
        style={{
          width: dims.width,
          height: dims.height,
          padding: dims.padding,
          borderRadius: 999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: isChecked ? 'flex-end' : 'flex-start',
          backgroundColor: trackColor,
          transition: 'background-color 0.2s ease',
        }}
        {...props}
      >
        <motion.span
          layout
          transition={spring}
          style={{
            width: knobSize,
            height: knobSize,
            borderRadius: '50%',
            backgroundColor: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <AnimatePresence mode="wait">
            {isChecked && (
              <motion.svg
                key="check"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.15 }}
                width={icoSize}
                height={icoSize}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.1665 11.6665L7.08317 14.5832L15.8332 5.4165"
                  stroke={disabled ? '#D9DDE4' : '#39B16C'}
                  strokeWidth={strokeWidth}
                  strokeLinecap="square"
                />
              </motion.svg>
            )}
          </AnimatePresence>
        </motion.span>
      </button>
    );
  }
);

Toggle.displayName = 'Toggle';
