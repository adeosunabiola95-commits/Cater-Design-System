import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export type CheckboxSize = 'sm' | 'md';

const spring = { type: 'spring' as const, visualDuration: 0.2, bounce: 0.2 };

/** mp = outlined style (green border, green checkmark on white). saas = filled style (grey border when unchecked, green bg + white checkmark when checked). */
export type CheckboxVariant = 'mp' | 'saas';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  /** Visual variant. mp = Checboxes mp (outlined), saas = Checboxes saas (filled when checked). */
  variant?: CheckboxVariant;
  /** Size of the checkbox */
  size?: CheckboxSize;
  /** Controlled checked state */
  checked?: boolean;
  /** Default checked state (uncontrolled) */
  defaultChecked?: boolean;
  /** Indeterminate state */
  indeterminate?: boolean;
  /** Label text */
  label?: string;
  /** When false, render a div instead of label (e.g. when used inside CheckboxGroupItem). Default true. */
  wrapInLabel?: boolean;
  /** Callback when toggled */
  onChange?: (checked: boolean) => void;
}

const boxSizes: Record<CheckboxSize, number> = {
  sm: 18,
  md: 20,
};

const iconDimensions: Record<CheckboxSize, number> = {
  sm: 14,
  md: 16,
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      variant = 'mp',
      size = 'md',
      checked: controlledChecked,
      defaultChecked = false,
      indeterminate = false,
      label,
      wrapInLabel = true,
      onChange,
      disabled,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const isControlled = controlledChecked !== undefined;
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    const isChecked = isControlled ? controlledChecked : internalChecked;

    useEffect(() => {
      if (inputRef.current) inputRef.current.indeterminate = indeterminate;
    }, [indeterminate]);

    const setInputRef = useCallback(
      (el: HTMLInputElement | null) => {
        (inputRef as React.MutableRefObject<HTMLInputElement | null>).current = el;
        if (typeof ref === 'function') ref(el);
        else if (ref) (ref as React.MutableRefObject<HTMLInputElement | null>).current = el;
      },
      [ref]
    );

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (disabled) return;
        const next = e.target.checked;
        if (!isControlled) setInternalChecked(next);
        onChange?.(next);
      },
      [disabled, isControlled, onChange]
    );

    const icoSize = iconDimensions[size];

    const isSaas = variant === 'saas';

    const borderColorHex = disabled
      ? '#D9DDE4'
      : isSaas
        ? isChecked
          ? '#39B16C'
          : '#D0D5DD'
        : '#033F1C';

    const bgColorHex = disabled
      ? '#fff'
      : isSaas && isChecked
        ? '#39B16C'
        : '#fff';

    const hoverBg =
      disabled || (isSaas && isChecked) ? '' : 'group-hover:bg-salem-50';

    const focusRing =
      'group-focus-within:shadow-[0_0_0_2px_#CEECDA]';

    const checkmarkStroke = disabled
      ? '#D9DDE4'
      : isSaas && isChecked
        ? '#fff'
        : '#033F1C';

    const indeterminateFill = disabled
      ? '#D9DDE4'
      : isSaas
        ? '#B2B8C1'
        : '#033F1C';

    const wrapperClassName = [
      'group inline-flex items-center gap-[8px] cursor-pointer select-none',
      disabled ? 'cursor-not-allowed' : '',
      className,
    ].join(' ');

    const content = (
      <>
        <input
          ref={setInputRef}
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          disabled={disabled}
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
            'relative flex items-center justify-center shrink-0 rounded-[2px] cursor-pointer',
            hoverBg,
            focusRing,
          ].join(' ')}
          style={{
            width: boxSizes[size],
            height: boxSizes[size],
            border: `1.5px solid ${borderColorHex}`,
            backgroundColor: bgColorHex,
          }}
          whileTap={disabled ? undefined : { scale: 0.92 }}
          transition={spring}
        >
          <AnimatePresence mode="wait">
            {isChecked && !indeterminate && (
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
                  stroke={checkmarkStroke}
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
              </motion.svg>
            )}

            {indeterminate && !isChecked && (
              <motion.svg
                key="indeterminate"
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
                <rect
                  x="6.5"
                  y="9.5"
                  width="7"
                  height="1.17"
                  rx="0.58"
                  fill={indeterminateFill}
                />
              </motion.svg>
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
      </>
    );

    return wrapInLabel ? (
      <label className={wrapperClassName}>{content}</label>
    ) : (
      <div className={wrapperClassName}>{content}</div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
