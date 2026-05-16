import React from 'react';

export interface ModalHeaderSubtextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

/** Figma header subtext — Inter Regular 14px / 150% (`4684:19918`). */
export function ModalHeaderSubtext({ className = '', children, ...props }: ModalHeaderSubtextProps) {
  return (
    <p
      className={[
        'm-0 block font-body text-[14px] font-normal leading-[21px] text-text-subtitle',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </p>
  );
}
