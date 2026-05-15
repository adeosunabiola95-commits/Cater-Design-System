import React, { forwardRef, useId, useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export type InputFieldSize = 'sm' | 'md';

const focusSpring = { type: 'spring' as const, visualDuration: 0.25, bounce: 0.2 };
const clearIconTransition = { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] as const };
export type InputFieldAction = 'default' | 'error';
export type InputFieldSuffixVariant = 'disabled' | 'subtle';

export interface InputFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  hint?: string;
  size?: InputFieldSize;
  action?: InputFieldAction;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  /** Icon shown only when the input has a value. Clicking it clears the input. */
  clearIcon?: React.ReactNode;
  /** Called when the clear icon is clicked */
  onClear?: () => void;
  /** Suffix panel rendered on the right of the input box (e.g. currency selector, copy button) */
  suffix?: React.ReactNode;
  /** Background variant for the suffix panel. "disabled" = Surface/Disabled (Amount), "subtle" = Surface/Subtle (Copy) */
  suffixVariant?: InputFieldSuffixVariant;
}

const inputPadding: Record<InputFieldSize, string> = {
  sm: 'py-[10px] px-[12px]',
  md: 'py-[12px] px-[12px]',
};

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      label,
      hint,
      size = 'md',
      action = 'default',
      leadingIcon,
      trailingIcon,
      clearIcon,
      onClear,
      suffix,
      suffixVariant = 'disabled',
      className = '',
      disabled,
      id: idProp,
      value: controlledValue,
      defaultValue,
      onChange,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const autoId = useId();
    const inputId = idProp ?? autoId;
    const hintId = hint ? `${inputId}-hint` : undefined;
    const isError = action === 'error';

    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = useState<string>(
      (defaultValue as string) ?? ''
    );
    const currentValue = isControlled ? String(controlledValue) : internalValue;
    const hasValue = currentValue.length > 0;

    useEffect(() => {
      if (isControlled) {
        setInternalValue(String(controlledValue));
      }
    }, [controlledValue, isControlled]);

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isControlled) {
          setInternalValue(e.target.value);
        }
        onChange?.(e);
      },
      [isControlled, onChange]
    );

    const handleClear = useCallback(() => {
      if (!isControlled) {
        setInternalValue('');
      }
      onClear?.();
    }, [isControlled, onClear]);

    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        onFocus?.(e);
      },
      [onFocus]
    );
    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);
        onBlur?.(e);
      },
      [onBlur]
    );

    const wrapperBorder = isError
      ? 'border-error-border'
      : 'border-border-default focus-within:border-salem-600';

    const focusRingShadow = isError
      ? '0 0 0 2px #FFDCDC'
      : '0 0 0 2px #CEECDA';

    const hintColor = isError ? 'text-[#6B0100]' : 'text-text-subtitle';
    const hasSuffix = !!suffix;

    return (
      <div className={`flex flex-col gap-[8px] ${className}`}>
        {label && (
          <label
            htmlFor={inputId}
            className="font-body font-medium text-[14px] leading-[150%] tracking-[0.14px] text-text-subtitle"
          >
            {label}
          </label>
        )}

        {hasSuffix ? (
          <div
            className={[
              'flex items-stretch',
              'shadow-[0_1px_2px_rgba(16,24,40,0.05)]',
              disabled ? 'opacity-50 cursor-not-allowed' : '',
            ].join(' ')}
          >
            <motion.div
              className={[
                'relative z-10 flex flex-1 items-center gap-[8px] min-w-0 bg-white border rounded-l-[4px] rounded-r-none',
                inputPadding[size],
                wrapperBorder,
              ].join(' ')}
              style={{ marginRight: -1 }}
              animate={{
                boxShadow: isFocused ? focusRingShadow : '0 0 0 0 transparent',
              }}
              transition={focusSpring}
            >
              {leadingIcon && (
                <span className="shrink-0 flex items-center justify-center text-text-subtitle w-[20px] h-[20px]">
                  {leadingIcon}
                </span>
              )}
              <input
                ref={ref}
                id={inputId}
                disabled={disabled}
                aria-describedby={hintId}
                aria-invalid={isError || undefined}
                {...(isControlled ? { value: controlledValue } : { defaultValue })}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={[
                  'flex-1 min-w-0 bg-transparent outline-none font-body font-medium',
                  'text-[16px] leading-[150%] tracking-[0.16px]',
                  'text-text-subtitle placeholder:text-text-caption',
                  'disabled:cursor-not-allowed',
                ].join(' ')}
                {...props}
              />
              {trailingIcon && (
                <span className="shrink-0 flex items-center justify-center text-text-body w-[20px] h-[20px]">
                  {trailingIcon}
                </span>
              )}
              {clearIcon && (
                <AnimatePresence>
                  {hasValue && (
                    <motion.button
                      key="clear"
                      type="button"
                      aria-label="Clear input"
                      onClick={handleClear}
                      className="shrink-0 flex items-center justify-center text-text-body w-[20px] h-[20px] cursor-pointer"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.85 }}
                      transition={clearIconTransition}
                    >
                      {clearIcon}
                    </motion.button>
                  )}
                </AnimatePresence>
              )}
            </motion.div>

            <div
              className={[
                'shrink-0 flex items-center gap-[8px]',
                'py-[10px] px-[12px]',
                'border border-border-default rounded-r-[4px]',
                suffixVariant === 'subtle' ? 'bg-surface-subtle' : 'bg-surface-disabled',
              ].join(' ')}
            >
              {suffix}
            </div>
          </div>
        ) : (
          <motion.div
            className={[
              'flex items-center gap-[8px] bg-white border rounded-[4px]',
              'shadow-[0_1px_2px_rgba(16,24,40,0.05)]',
              inputPadding[size],
              wrapperBorder,
              disabled ? 'opacity-50 cursor-not-allowed' : '',
            ].join(' ')}
            animate={{
              boxShadow: isFocused
                ? `${focusRingShadow}, 0 1px 2px rgba(16,24,40,0.05)`
                : '0 1px 2px rgba(16,24,40,0.05)',
            }}
            transition={focusSpring}
          >
            {leadingIcon && (
              <span className="shrink-0 flex items-center justify-center text-text-subtitle w-[20px] h-[20px]">
                {leadingIcon}
              </span>
            )}
            <input
              ref={ref}
              id={inputId}
              disabled={disabled}
              aria-describedby={hintId}
              aria-invalid={isError || undefined}
              {...(isControlled ? { value: controlledValue } : { defaultValue })}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={[
                'flex-1 min-w-0 bg-transparent outline-none font-body font-medium',
                'text-[16px] leading-[150%] tracking-[0.16px]',
                'text-text-subtitle placeholder:text-text-caption',
                'disabled:cursor-not-allowed',
              ].join(' ')}
              {...props}
            />
            {trailingIcon && (
              <span className="shrink-0 flex items-center justify-center text-text-body w-[20px] h-[20px]">
                {trailingIcon}
              </span>
            )}
            {clearIcon && (
              <AnimatePresence>
                {hasValue && (
                  <motion.button
                    key="clear"
                    type="button"
                    aria-label="Clear input"
                    onClick={handleClear}
                    className="shrink-0 flex items-center justify-center text-text-body w-[20px] h-[20px] cursor-pointer"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={clearIconTransition}
                  >
                    {clearIcon}
                  </motion.button>
                )}
              </AnimatePresence>
            )}
          </motion.div>
        )}

        {hint && (
          <p
            id={hintId}
            className={`font-body text-[14px] leading-[150%] ${hintColor}`}
          >
            {hint}
          </p>
        )}
      </div>
    );
  }
);

InputField.displayName = 'InputField';
