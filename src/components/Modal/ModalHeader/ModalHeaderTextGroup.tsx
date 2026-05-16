import React from 'react';

import { modalHeaderTextGroupClass } from './modalHeader.tokens';
import { ModalHeaderSubtext } from './ModalHeaderSubtext';
import { ModalHeaderTitle } from './ModalHeaderTitle';

export interface ModalHeaderTextGroupProps {
  title: React.ReactNode;
  /** When set, renders the *Header container with subtext* variant (`4684:19918`). */
  subtext?: React.ReactNode;
  titleId: string;
  subtextId?: string;
  className?: string;
}

/** Title column — 12px gap between title and subtext when subtext is present. */
export function ModalHeaderTextGroup({
  title,
  subtext,
  titleId,
  subtextId,
  className = '',
}: ModalHeaderTextGroupProps) {
  const hasSubtext = subtext != null && subtext !== false;

  return (
    <div className={[modalHeaderTextGroupClass, className].filter(Boolean).join(' ')}>
      <ModalHeaderTitle id={titleId}>{title}</ModalHeaderTitle>
      {hasSubtext && <ModalHeaderSubtext id={subtextId}>{subtext}</ModalHeaderSubtext>}
    </div>
  );
}
