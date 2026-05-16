import React from 'react';

export interface OptionPillProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  children: React.ReactNode;
}

/** Figma *Option container* — 12px radius, 16px padding, 56px height. */
export function OptionPill({
  selected = false,
  className = '',
  type = 'button',
  children,
  ...props
}: OptionPillProps) {
  return (
    <button
      type={type}
      className={[
        'inline-flex h-14 shrink-0 items-center justify-center rounded-[12px] bg-white px-4',
        'font-body text-[16px] font-medium leading-[150%] tracking-[0.16px] text-text-body',
        'transition-colors',
        selected
          ? 'border-2 border-brand-sherwood-green'
          : 'border border-border-default hover:bg-mirage-50',
        className,
      ].join(' ')}
      aria-pressed={selected}
      {...props}
    >
      {children}
    </button>
  );
}
