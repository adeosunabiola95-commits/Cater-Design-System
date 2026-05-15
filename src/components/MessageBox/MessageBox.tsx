import React, { forwardRef, useId, useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export type MessageBoxSize = 'sm' | 'md';

const focusSpring = { type: 'spring' as const, visualDuration: 0.25, bounce: 0.2 };
const clearIconTransition = { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] as const };
export type MessageBoxAction = 'default' | 'error';

export interface MessageBoxProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  label?: string;
  hint?: string;
  size?: MessageBoxSize;
  action?: MessageBoxAction;
  leadingIcon?: React.ReactNode;
  /** Icon shown only when the textarea has a value. Clicking it clears the content. */
  clearIcon?: React.ReactNode;
  /** Called when the clear icon is clicked */
  onClear?: () => void;
  /** Minimum number of visible rows */
  rows?: number;
  /** Whether the textarea can be resized by the user */
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

const textareaPadding: Record<MessageBoxSize, string> = {
  sm: 'py-[10px] px-[12px]',
  md: 'py-[12px] px-[12px]',
};

export const MessageBox = forwardRef<HTMLTextAreaElement, MessageBoxProps>(
  (
    {
      label,
      hint,
      size = 'md',
      action = 'default',
      leadingIcon,
      clearIcon,
      onClear,
      className = '',
      disabled,
      id: idProp,
      value: controlledValue,
      defaultValue,
      onChange,
      onFocus,
      onBlur,
      rows = 4,
      resize = 'vertical',
      ...props
    },
    ref
  ) => {
    const autoId = useId();
    const textareaId = idProp ?? autoId;
    const hintId = hint ? `${textareaId}-hint` : undefined;
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
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      (e: React.FocusEvent<HTMLTextAreaElement>) => {
        setIsFocused(true);
        onFocus?.(e);
      },
      [onFocus]
    );
    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLTextAreaElement>) => {
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

    const resizeClass =
      resize === 'none'
        ? 'resize-none'
        : resize === 'vertical'
          ? 'resize-y'
          : resize === 'horizontal'
            ? 'resize-x'
            : 'resize';

    return (
      <div className={`flex flex-col gap-[8px] ${className}`}>
        {label && (
          <label
            htmlFor={textareaId}
            className="font-body font-medium text-[14px] leading-[150%] tracking-[0.14px] text-text-subtitle"
          >
            {label}
          </label>
        )}

        <motion.div
          className={[
            'flex gap-[8px] bg-white border rounded-[4px]',
            'shadow-[0_1px_2px_rgba(16,24,40,0.05)]',
            textareaPadding[size],
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
            <span className="shrink-0 flex items-start justify-center text-text-subtitle w-[20px] h-[20px] pt-[2px]">
              {leadingIcon}
            </span>
          )}
          <div
            className={[
              'relative flex-1 min-w-0 flex flex-col',
              clearIcon && hasValue ? 'pr-7' : '',
            ].join(' ')}
          >
            <textarea
              ref={ref}
              id={textareaId}
              rows={rows}
              disabled={disabled}
              aria-describedby={hintId}
              aria-invalid={isError || undefined}
              {...(isControlled ? { value: controlledValue } : { defaultValue })}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={[
                'flex-1 min-w-0 min-h-0 bg-transparent outline-none font-body font-medium',
                'text-[16px] leading-[150%] tracking-[0.16px]',
                'text-text-subtitle placeholder:text-text-caption',
                'disabled:cursor-not-allowed',
                resizeClass,
              ].join(' ')}
              {...props}
            />
            {clearIcon && (
              <div className="absolute top-0 right-0">
                <AnimatePresence>
                  {hasValue && (
                    <motion.button
                      key="clear"
                      type="button"
                      aria-label="Clear"
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
              </div>
            )}
          </div>
        </motion.div>

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

MessageBox.displayName = 'MessageBox';
