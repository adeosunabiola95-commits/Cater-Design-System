import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft01, ArrowRight01 } from '../../icons';
import { Tick02 } from '../../icons/icons/Tick02';
import { Button } from '../Button/Button';

const calendarMonthTransition = { duration: 0.15, ease: [0.32, 0.72, 0, 1] as const };
const dateCellTap = { scale: 0.96 };
const selectorItemTap = { scale: 0.94 };

/**
 * Date picker. Desktop Bridge / Figma **Date Picker** COMPONENT_SET `278:1649` (file `tK5SjqGRgeVr5w5tmxuLDa`).
 * Calendar cell colors match **primary** button tokens: Sherwood Green surface + Gossip label on selection;
 * range wash uses Salem 50; strokes use **Dialogue/outline**.
 */
export type DatePickerVariant = 'single' | 'dual' | 'preset-range';

export interface DatePickerProps {
  /** Variant. Maps to Figma "Date-picker" property. */
  variant?: DatePickerVariant;
  /** Controlled selected date(s). */
  value?: Date | [Date, Date] | null;
  /** Default date(s) when uncontrolled. */
  defaultValue?: Date | [Date, Date] | null;
  /** Called when date selection changes. */
  onChange?: (date: Date | [Date, Date] | null) => void;
  /** If provided, dates for which this returns true are disabled (Figma: Date-picker element=Disabled). */
  isDateDisabled?: (date: Date) => boolean;
  /** Preset options for preset-range variant. */
  presets?: { label: string; getValue: () => [Date, Date] }[];
  /** Optional className. */
  className?: string;
}

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function getDaysInMonth(year: number, month: number) {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const startPad = first.getDay();
  const days = last.getDate();
  const cells: (number | null)[] = [];
  for (let i = 0; i < startPad; i++) cells.push(null);
  for (let d = 1; d <= days; d++) cells.push(d);
  return cells;
}

/** Same calendar day as today (ignore time). */
function isToday(d: Date) {
  const t = new Date();
  return d.getDate() === t.getDate() && d.getMonth() === t.getMonth() && d.getFullYear() === t.getFullYear();
}

const defaultPresets = [
  { label: 'Last 7 days', getValue: () => { const e = new Date(); const s = new Date(e); s.setDate(s.getDate() - 6); return [s, e]; } },
  { label: 'Last 30 days', getValue: () => { const e = new Date(); const s = new Date(e); s.setDate(s.getDate() - 29); return [s, e]; } },
  { label: 'This month', getValue: () => { const n = new Date(); const s = new Date(n.getFullYear(), n.getMonth(), 1); const e = new Date(n.getFullYear(), n.getMonth() + 1, 0); return [s, e]; } },
  { label: 'Last month', getValue: () => { const n = new Date(); const s = new Date(n.getFullYear(), n.getMonth() - 1, 1); const e = new Date(n.getFullYear(), n.getMonth(), 0); return [s, e]; } },
];

function rangesEqual(a: [Date, Date], b: [Date, Date]) {
  return a[0].toDateString() === b[0].toDateString() && a[1].toDateString() === b[1].toDateString();
}

/** Shell: radius 12, Dialogue/outline stroke, elevation lg — aligned to Figma calendar frame. */
const pickerBase =
  'rounded-[12px] border border-dialogue-outline bg-white shadow-lg';

/** Selected / endpoints: same as primary Button — Sherwood + Gossip (Figma Brands). */
function getDateCellClasses({
  selected,
  disabled,
}: {
  selected: boolean;
  disabled: boolean;
}) {
  if (disabled) {
    return 'bg-white text-mirage-400 cursor-not-allowed';
  }
  if (selected) {
    return 'bg-brand-sherwood-green text-brand-gossip';
  }
  return 'bg-white text-text-title hover:bg-salem-50';
}

/**
 * Single date calendar — layout from legacy node 549:2607; **colors** from Date Picker `278:1649` / primary tokens.
 * Spec from Figma: root 377×331, padding 24, itemSpacing 20. Nav 329×24 gap 30. Days 329×13, 7×38 gap 4. Grid 329×206, rows 38px, padding 4, cells 38×38 gap 4 radius 2.
 * Supports single selection (selected) or range selection (range).
 */
function SingleDateCalendar({
  year,
  month,
  selected,
  range,
  onSelect,
  onPrevMonth,
  onNextMonth,
  isDateDisabled,
}: {
  year: number;
  month: number;
  selected?: Date | null;
  range?: [Date, Date] | null;
  onSelect: (d: Date) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  isDateDisabled?: (date: Date) => boolean;
}) {
  const cells = useMemo(() => getDaysInMonth(year, month), [year, month]);
  const rows: (number | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) rows.push(cells.slice(i, i + 7));
  const isRangeMode = range !== undefined;
  const isSelected = (d: Date) =>
    isRangeMode && range
      ? d.toDateString() === range[0].toDateString() || d.toDateString() === range[1].toDateString()
      : selected != null && d.toDateString() === selected.toDateString();
  const isInRange = (d: Date) => {
    if (!isRangeMode || !range) return false;
    const t = d.getTime();
    return t >= range[0].getTime() && t <= range[1].getTime();
  };

  return (
    <div className="flex w-[329px] flex-col gap-5">
      {/* Navigation: Icon-only ghost buttons with arrow icons – Figma */}
      <div className="flex h-6 w-[329px] items-center justify-between gap-[30px]">
        <Button
          type="button"
          variant="ghost"
          size="small"
          icon="alone"
          iconElement={<ArrowLeft01 width={18} height={18} />}
          onClick={onPrevMonth}
          aria-label="Previous month"
          className="!h-6 !min-h-6 !w-6 !min-w-6 !p-0 shrink-0"
        />
        <span className="font-body text-[16px] font-semibold leading-6 text-text-title">
          {MONTHS[month]} {year}
        </span>
        <Button
          type="button"
          variant="ghost"
          size="small"
          icon="alone"
          iconElement={<ArrowRight01 width={18} height={18} />}
          onClick={onNextMonth}
          aria-label="Next month"
          className="!h-6 !min-h-6 !w-6 !min-w-6 !p-0 shrink-0"
        />
      </div>
      {/* Days: 329 wide, 7×38px with 4px gap, centered for equal side margins */}
      <div className="flex h-[13px] w-[329px] items-center justify-center">
        <div className="flex items-center gap-1">
          {DAYS.map((d) => (
            <span
              key={d}
              className="w-[38px] shrink-0 text-center font-body text-[11px] font-medium leading-[13px] text-text-body"
            >
              {d}
            </span>
          ))}
        </div>
      </div>
      {/* Calendar: 329 wide, rows 38px, 7×38px cells gap 4. Animated month transition + date cell tap. */}
      <div className="relative flex min-h-[234px] w-[329px] flex-col gap-1 overflow-hidden">
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={`${year}-${month}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={calendarMonthTransition}
            className="absolute inset-x-0 top-0 flex w-[329px] flex-col gap-1"
          >
            {rows.map((row, ri) => (
              <div
                key={ri}
                className="flex h-[38px] w-[329px] items-center justify-center"
              >
                <div className="flex items-center gap-1">
                {row.map((day, di) => {
                  if (day === null) {
                    return <div key={di} className="h-[38px] w-[38px] shrink-0 rounded-[2px]" />;
                  }
                  const d = new Date(year, month, day);
                  const sel = isSelected(d);
                  const inR = isInRange(d);
                  const today = isToday(d);
                  const disabled = isDateDisabled?.(d) ?? false;
                  const stateClasses = isRangeMode
                    ? getRangeCellClasses({ selected: sel, inRange: inR, disabled })
                    : getDateCellClasses({ selected: sel, disabled });
                  return (
                    <motion.button
                      key={di}
                      type="button"
                      onClick={() => !disabled && onSelect(d)}
                      disabled={disabled}
                      aria-pressed={sel}
                      aria-current={today && !disabled ? 'date' : undefined}
                      whileTap={disabled ? undefined : dateCellTap}
                      transition={{ duration: 0.12 }}
                      className={`flex h-[38px] w-[38px] shrink-0 flex-col items-center justify-center gap-0.5 rounded-[2px] font-body text-[14px] font-medium leading-[21px] tracking-[0.14px] transition-colors duration-150 ${stateClasses}`}
                    >
                      {day}
                      {today && !sel && !disabled && (
                        <span className="h-[9px] w-[9px] shrink-0 rounded-full bg-brand-sherwood-green" aria-hidden />
                      )}
                    </motion.button>
                  );
                })}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/** Range calendar cell states. In-range band and pointer hover both use Salem 50 (per Figma). */
function getRangeCellClasses({
  selected,
  inRange,
  disabled,
}: {
  selected: boolean;
  inRange: boolean;
  disabled: boolean;
}) {
  if (disabled) {
    return 'bg-white text-mirage-400 cursor-not-allowed';
  }
  if (selected) {
    return 'bg-brand-sherwood-green text-brand-gossip';
  }
  if (inRange) {
    return 'bg-salem-50 text-text-title';
  }
  return 'bg-white text-text-title hover:bg-salem-50';
}

/**
 * Dual date calendar panel – one month grid only (no nav; nav is shared in dual variant).
 * Figma "Dual dates": arrows on far left and far right only.
 */
function DualDateCalendar({
  year,
  month,
  range,
  onSelect,
  isDateDisabled,
}: {
  year: number;
  month: number;
  range: [Date, Date] | null;
  onSelect: (d: Date) => void;
  isDateDisabled?: (date: Date) => boolean;
}) {
  const cells = useMemo(() => getDaysInMonth(year, month), [year, month]);
  const rows: (number | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) rows.push(cells.slice(i, i + 7));
  const isInRange = (d: Date) => {
    if (!range) return false;
    const t = d.getTime();
    return t >= range[0].getTime() && t <= range[1].getTime();
  };
  const isSelected = (d: Date) =>
    range &&
    (d.toDateString() === range[0].toDateString() || d.toDateString() === range[1].toDateString());

  return (
    <div className="flex w-[296px] flex-col gap-5">
      <div className="flex h-[13px] w-[296px] items-center justify-center">
        <div className="flex items-center gap-1">
          {DAYS.map((d) => (
            <span
              key={d}
              className="w-[38px] shrink-0 text-center font-body text-[11px] font-medium leading-[13px] text-text-body"
            >
              {d}
            </span>
          ))}
        </div>
      </div>
      <div className="flex w-[296px] flex-col gap-1">
        {rows.map((row, ri) => (
          <div
            key={ri}
            className="flex h-[38px] w-[296px] items-center justify-center"
          >
            <div className="flex items-center gap-1">
              {row.map((day, di) => {
                if (day === null) {
                  return <div key={di} className="h-[38px] w-[38px] shrink-0 rounded-[2px]" />;
                }
                const d = new Date(year, month, day);
                const sel = isSelected(d);
                const inR = isInRange(d);
                const today = isToday(d);
                const disabled = isDateDisabled?.(d) ?? false;
                const stateClasses = getRangeCellClasses({
                  selected: sel,
                  inRange: inR,
                  disabled,
                });
                return (
                  <motion.button
                    key={di}
                    type="button"
                    onClick={() => !disabled && onSelect(d)}
                    disabled={disabled}
                    aria-pressed={sel}
                    aria-current={today && !disabled ? 'date' : undefined}
                    whileTap={disabled ? undefined : dateCellTap}
                    transition={{ duration: 0.12 }}
                    className={`flex h-[38px] w-[38px] shrink-0 flex-col items-center justify-center gap-0.5 rounded-[2px] font-body text-[14px] font-medium leading-[21px] tracking-[0.14px] transition-colors duration-150 ${stateClasses}`}
                  >
                    {day}
                    {today && !sel && !disabled && (
                      <span className="h-[9px] w-[9px] shrink-0 rounded-full bg-brand-sherwood-green" aria-hidden />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const DatePicker: React.FC<DatePickerProps> = ({
  variant = 'single',
  value,
  defaultValue,
  onChange,
  isDateDisabled,
  presets = defaultPresets,
  className = '',
}) => {
  const [internalSingle, setInternalSingle] = useState<Date | null>(() => {
    const v = value ?? defaultValue;
    return Array.isArray(v) ? v[0] : v ?? new Date();
  });
  const [internalRange, setInternalRange] = useState<[Date, Date] | null>(() => {
    const v = value ?? defaultValue;
    return Array.isArray(v) ? v : null;
  });
  const [viewMonth, setViewMonth] = useState(() => {
    const v = value ?? defaultValue;
    if (Array.isArray(v)) return new Date(v[0].getFullYear(), v[0].getMonth(), 1);
    return new Date();
  });
  const [viewMonth2, setViewMonth2] = useState(() => {
    const d = new Date();
    d.setMonth(d.getMonth() + 1);
    return d;
  });

  const selected = Array.isArray(value) ? null : (value ?? internalSingle);
  const range = Array.isArray(value) ? value : (variant !== 'single' ? internalRange : null);

  const handleSelect = (d: Date) => {
    if (variant === 'single') {
      setInternalSingle(d);
      onChange?.(d);
    } else if (variant === 'dual' || variant === 'preset-range') {
      if (!internalRange) {
        setInternalRange([d, d]);
        onChange?.([d, d]);
      } else {
        const [a, b] = internalRange;
        if (d < a) {
          setInternalRange([d, b]);
          onChange?.([d, b]);
        } else {
          setInternalRange([a, d]);
          onChange?.([a, d]);
        }
      }
    }
  };

  const formatRange = (r: [Date, Date]) =>
    `${MONTHS[r[0].getMonth()].slice(0, 3)} ${r[0].getDate()}, ${r[0].getFullYear()} - ${MONTHS[r[1].getMonth()].slice(0, 3)} ${r[1].getDate()}, ${r[1].getFullYear()}`;

  const prevMonth = () => setViewMonth((d) => new Date(d.getFullYear(), d.getMonth() - 1));
  const nextMonth = () => setViewMonth((d) => new Date(d.getFullYear(), d.getMonth() + 1));
  const prevMonth2 = () => setViewMonth2((d) => new Date(d.getFullYear(), d.getMonth() - 1));
  const nextMonth2 = () => setViewMonth2((d) => new Date(d.getFullYear(), d.getMonth() + 1));

  if (variant === 'single') {
    return (
      <div
        className={`w-[377px] ${pickerBase} flex flex-col items-center p-6 ${className}`}
      >
        <SingleDateCalendar
          year={viewMonth.getFullYear()}
          month={viewMonth.getMonth()}
          selected={selected}
          onSelect={handleSelect}
          onPrevMonth={prevMonth}
          onNextMonth={nextMonth}
          isDateDisabled={isDateDisabled}
        />
      </div>
    );
  }

  if (variant === 'dual') {
    const goPrev = () => {
      setViewMonth((d) => new Date(d.getFullYear(), d.getMonth() - 1));
      setViewMonth2((d) => new Date(d.getFullYear(), d.getMonth() - 1));
    };
    const goNext = () => {
      setViewMonth((d) => new Date(d.getFullYear(), d.getMonth() + 1));
      setViewMonth2((d) => new Date(d.getFullYear(), d.getMonth() + 1));
    };
    return (
      <div
        className={`flex flex-row flex-nowrap ${pickerBase} w-[660px] gap-5 p-6 ${className}`}
        role="application"
        aria-label="Dual date picker"
      >
        {/* Left panel: left arrow on far left, then month label (Figma) */}
        <div className="flex w-[296px] flex-shrink-0 flex-col gap-5">
          <div className="flex h-6 shrink-0 items-center justify-start gap-[30px]">
            <Button
              type="button"
              variant="ghost"
              size="small"
              icon="alone"
              iconElement={<ArrowLeft01 width={18} height={18} />}
              onClick={goPrev}
              aria-label="Previous months"
              className="!h-6 !min-h-6 !w-6 !min-w-6 !p-0 shrink-0"
            />
            <span className="font-body text-[16px] font-semibold leading-6 text-text-title">
              {MONTHS[viewMonth.getMonth()]} {viewMonth.getFullYear()}
            </span>
          </div>
          <DualDateCalendar
            year={viewMonth.getFullYear()}
            month={viewMonth.getMonth()}
            range={range}
            onSelect={handleSelect}
            isDateDisabled={isDateDisabled}
          />
        </div>
        {/* Right panel: month label, then right arrow on far right (Figma) */}
        <div className="flex w-[296px] flex-shrink-0 flex-col gap-5">
          <div className="flex h-6 shrink-0 items-center justify-end">
            <span className="font-body text-[16px] font-semibold leading-6 text-text-title">
              {MONTHS[viewMonth2.getMonth()]} {viewMonth2.getFullYear()}
            </span>
            <Button
              type="button"
              variant="ghost"
              size="small"
              icon="alone"
              iconElement={<ArrowRight01 width={18} height={18} />}
              onClick={goNext}
              aria-label="Next months"
              className="!h-6 !min-h-6 !w-6 !min-w-6 !p-0 shrink-0 ml-[30px]"
            />
          </div>
          <DualDateCalendar
            year={viewMonth2.getFullYear()}
            month={viewMonth2.getMonth()}
            range={range}
            onSelect={handleSelect}
            isDateDisabled={isDateDisabled}
          />
        </div>
      </div>
    );
  }

  // preset-range: Header + Selector + SingleDateCalendar (same building blocks as single)
  const displayRange = range ?? [new Date(), new Date()];
  return (
    <div className={`w-[545px] ${pickerBase} flex flex-col overflow-hidden ${className}`}>
      {/* Header: formatted range */}
      <div className="flex items-center justify-center bg-mirage-50 px-6 py-3">
        <span className="truncate text-center font-body text-[14px] font-medium leading-[150%] tracking-[0.14px] text-text-subtitle">
          {formatRange(displayRange)}
        </span>
      </div>
      {/* Selector: preset rows — selected state uses Sherwood stroke + gossip tick (primary alignment). */}
      <div className="flex flex-row">
        <div className="flex w-[168px] shrink-0 flex-col gap-2 border-r border-dialogue-outline bg-white p-3">
          {presets.map((p, i) => {
            const presetRange = p.getValue();
            const isSelected = range != null && rangesEqual(range, presetRange);
            return (
              <motion.button
                key={i}
                type="button"
                onClick={() => {
                  const v = p.getValue();
                  setInternalRange(v);
                  setViewMonth(new Date(v[0].getFullYear(), v[0].getMonth(), 1));
                  onChange?.(v);
                }}
                whileTap={selectorItemTap}
                transition={{ duration: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                className={`flex items-center gap-2 rounded-[8px] px-[10px] py-[10px] text-left font-body text-[14px] font-medium leading-[150%] tracking-[0.14px] text-mirage-800 transition-colors duration-150 ${
                  isSelected
                    ? 'border border-brand-sherwood-green bg-white'
                    : 'border border-transparent bg-transparent hover:bg-salem-50'
                }`}
              >
                <span className="min-w-0 flex-1 truncate">{p.label}</span>
                {isSelected && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className="shrink-0 text-brand-sherwood-green"
                  >
                    <Tick02 width={16} height={16} />
                  </motion.span>
                )}
              </motion.button>
            );
          })}
        </div>
        <div className="flex w-[377px] shrink-0 flex-col items-center justify-center px-6 pt-6 pb-[19px]">
          <SingleDateCalendar
            year={viewMonth.getFullYear()}
            month={viewMonth.getMonth()}
            range={range}
            onSelect={handleSelect}
            onPrevMonth={prevMonth}
            onNextMonth={nextMonth}
            isDateDisabled={isDateDisabled}
          />
        </div>
      </div>
    </div>
  );
};

DatePicker.displayName = 'DatePicker';
