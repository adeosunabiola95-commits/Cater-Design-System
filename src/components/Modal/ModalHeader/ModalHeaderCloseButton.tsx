import React from 'react';

import { Cancel } from '../../../icons';

export interface ModalHeaderCloseButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Accessible name for the dismiss control. */
  'aria-label': string;
}

/** Figma close control — 35×35 circle, 8px padding, 18×18 Cancel icon. */
export function ModalHeaderCloseButton({
  className = '',
  type = 'button',
  ...props
}: ModalHeaderCloseButtonProps) {
  return (
    <button
      type={type}
      className={[
        'box-border flex size-[35px] shrink-0 items-center justify-center rounded-full',
        'border border-border-subtle p-2 text-text-subtitle',
        'hover:bg-mirage-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-mirage-900/15',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      <Cancel width={18} height={18} aria-hidden />
    </button>
  );
}
