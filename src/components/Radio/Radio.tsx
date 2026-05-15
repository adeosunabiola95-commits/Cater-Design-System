import React, { forwardRef, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export type RadioSize = 'sm' | 'md';

const spring = { type: 'spring' as const, visualDuration: 0.2, bounce: 0.2 };

/** mp = outlined style (green border, green inner dot). saas = filled style (grey border when unchecked, green bg + white inner dot when selected). */
export type RadioVariant = 'mp' | 'saas';

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'onChange'> {
  /** Visual variant. mp = Checboxes mp (outlined), saas = Checboxes saas (filled when selected). */
  variant?: RadioVariant;
  /** Size of the radio button */
  size?: RadioSize;
  /** Label text */
  label?: string;
  /** Controlled selected state */
  selected?: boolean;
  /** Callback when selected */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const outerSizes: Record<RadioSize, number> = {
  sm: 18,
  md: 20,
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      variant = 'mp',
      size = 'md',
      label,
      disabled,
      selected,
      className = '',
      id,
      checked,
      defaultChecked,
      onChange,
      ...props
    },
    ref
  ) => {
    const isControlled = selected !== undefined || checked !== undefined;
    const [internalChecked, setInternalChecked] = useState(defaultChecked ?? false);
    const isSelected = isControlled ? (selected ?? checked ?? false) : internalChecked;

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isControlled) setInternalChecked(e.target.checked);
        onChange?.(e);
      },
      [isControlled, onChange]
    );
    const isSaas = variant === 'saas';

    const borderColorHex = disabled
      ? '#D9DDE4'
      : isSaas
        ? isSelected
          ? '#39B16C'
          : '#D0D5DD'
        : '#033F1C';

    const bgColorHex = disabled
      ? '#fff'
      : isSaas && isSelected
        ? '#39B16C'
        : '#fff';

    const innerDotColor = disabled ? '#D9DDE4' : isSaas && isSelected ? '#fff' : '#033F1C';

    const hoverBg =
      disabled || (isSaas && isSelected) ? '' : 'group-hover:bg-salem-50';

    const focusRing =
      'group-focus-within:shadow-[0_0_0_2px_#CEECDA]';

    return (
      <label
        className={[
          'group inline-flex items-center gap-[8px] cursor-pointer select-none',
          disabled ? 'cursor-not-allowed' : '',
          className,
        ].join(' ')}
      >
        <input
          ref={ref}
          type="radio"
          disabled={disabled}
          checked={isControlled ? isSelected : undefined}
          defaultChecked={!isControlled ? defaultChecked : undefined}
          onChange={handleChange}
          className="peer"
          style={{
            position: 'absolute',
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: 'hidden',
            clip: 'rect(0,0,0,0)',
            whiteSpace: 'nowrap',
            borderWidth: 0,
          }}
          id={id}
          {...props}
        />

        <motion.span
          className={[
            'relative flex items-center justify-center shrink-0 cursor-pointer',
            hoverBg,
            focusRing,
          ].join(' ')}
          style={{
            width: outerSizes[size],
            height: outerSizes[size],
            border: `1.5px solid ${borderColorHex}`,
            borderRadius: '50%',
            backgroundColor: bgColorHex,
          }}
          whileTap={disabled ? undefined : { scale: 0.92 }}
          transition={spring}
        >
          <AnimatePresence>
            {isSelected && (
              <motion.span
                key="dot"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.15 }}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: innerDotColor,
                }}
              />
            )}
          </AnimatePresence>
        </motion.span>

        {label && (
          <span
            className={[
              'font-body font-semibold text-[16px] leading-[150%] tracking-[0.16px]',
              disabled ? 'text-text-disabled' : 'text-text-title',
            ].join(' ')}
          >
            {label}
          </span>
        )}
      </label>
    );
  }
);

Radio.displayName = 'Radio';
