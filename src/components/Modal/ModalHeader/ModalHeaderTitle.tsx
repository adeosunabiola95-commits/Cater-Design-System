import React from 'react';

export interface ModalHeaderTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

/** Figma "Header text" — General Sans Semibold 25px / 120% / −2% (`4684:19909`). */
export function ModalHeaderTitle({ className = '', children, ...props }: ModalHeaderTitleProps) {
  return (
    <h2
      className={[
        'm-0 block font-title text-[25px] font-semibold leading-[30px] tracking-[-0.02em] text-text-title',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </h2>
  );
}
