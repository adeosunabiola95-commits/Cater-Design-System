import React from 'react';

export interface ModalBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Remove padding for full-bleed lists (e.g. campaign picker). */
  flush?: boolean;
}

function hasBodyContent(children: React.ReactNode): boolean {
  return React.Children.count(children) > 0;
}

/** Scrollable modal content area between header and actions. Omits the section when empty. */
export function ModalBody({ flush = false, className = '', children, ...props }: ModalBodyProps) {
  if (!hasBodyContent(children)) {
    return null;
  }

  return (
    <div
      className={[
        'min-h-0 flex-1 overflow-auto',
        flush ? 'flex flex-col overflow-hidden' : 'px-6 py-6',
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
