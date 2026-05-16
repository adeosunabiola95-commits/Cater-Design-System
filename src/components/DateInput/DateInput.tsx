import React, { useState, useCallback } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { InputField } from '../InputField/InputField';
import { DatePicker } from '../DatePicker/DatePicker';
import { Date as DateIcon } from '../../icons/icons/Date';
import type { InputFieldSize } from '../InputField/InputField';

const MONTHS_ABBREV = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

function formatDate(date: Date): string {
  return `${MONTHS_ABBREV[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

export interface DateInputProps {
  /** Field label. */
  label?: string;
  /** Hint text below the input. */
  hint?: string;
  /** Input size. */
  size?: InputFieldSize;
  /** Controlled selected date. */
  value?: Date | null;
  /** Default date when uncontrolled. */
  defaultValue?: Date | null;
  /** Called when date selection changes. */
  onChange?: (date: Date | null) => void;
  /** If provided, dates for which this returns true are disabled. */
  isDateDisabled?: (date: Date) => boolean;
  /** Placeholder when no date is selected. */
  placeholder?: string;
  /** Disabled state. */
  disabled?: boolean;
  /** Optional className. */
  className?: string;
}

export const DateInput: React.FC<DateInputProps> = ({
  label,
  hint,
  size = 'md',
  value: controlledValue,
  defaultValue,
  onChange,
  isDateDisabled,
  placeholder = 'Select date',
  disabled = false,
  className = '',
}) => {
  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = useState<Date | null>(() => {
    const v = controlledValue ?? defaultValue;
    return v ?? null;
  });
  const [open, setOpen] = useState(false);

  const currentValue = isControlled ? controlledValue : internalValue;
  const displayValue = currentValue ? formatDate(currentValue) : '';

  const handleSelect = useCallback(
    (date: Date | [Date, Date] | null) => {
      const d = Array.isArray(date) ? date[0] : date;
      if (!isControlled) {
        setInternalValue(d);
      }
      onChange?.(d ?? null);
      setOpen(false);
    },
    [isControlled, onChange]
  );

  const openCalendar = useCallback(() => {
    if (!disabled) setOpen(true);
  }, [disabled]);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Anchor asChild>
        <div className={`w-full ${disabled ? '' : 'cursor-pointer'}`}>
          <InputField
            label={label}
            hint={hint}
            size={size}
            value={displayValue}
            placeholder={placeholder}
            disabled={disabled}
            readOnly
            role="combobox"
            aria-expanded={open}
            aria-haspopup="dialog"
            aria-controls="date-input-picker"
            onClick={openCalendar}
            onKeyDown={(e) => {
              if (disabled) return;
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openCalendar();
              }
            }}
            trailingIcon={<DateIcon width={20} height={20} />}
            className={className}
          />
        </div>
      </Popover.Anchor>
      <Popover.Portal>
        <Popover.Content
          id="date-input-picker"
          sideOffset={8}
          align="start"
          className="z-50 outline-none"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <DatePicker
            variant="single"
            value={currentValue ?? undefined}
            defaultValue={currentValue ?? undefined}
            onChange={handleSelect}
            isDateDisabled={isDateDisabled}
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

DateInput.displayName = 'DateInput';
