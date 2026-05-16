import React from 'react';

export interface ModalActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/** Modal action row — primary/secondary buttons below the body (Figma Footer Container). */
export function ModalActions({ className = '', children, ...props }: ModalActionsProps) {
  return (
    <div
      className={[
        'flex shrink-0 justify-end gap-3 border-t border-border-subtle bg-white px-6 py-6',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </div>
  );
}
