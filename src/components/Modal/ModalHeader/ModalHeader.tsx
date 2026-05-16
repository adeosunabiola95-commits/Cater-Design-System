import React from 'react';

import { ModalHeaderCloseButton } from './ModalHeaderCloseButton';
import { ModalHeaderTextGroup } from './ModalHeaderTextGroup';
import { modalHeaderContainerClass } from './modalHeader.tokens';

export type ModalHeaderVariant = 'title-only' | 'with-subtext';

export interface ModalHeaderProps {
  /** Header title — required. */
  title: React.ReactNode;
  /**
   * Optional subtext. When provided, matches Figma *Header container with subtext* (`4684:19918`).
   * Omit for *Header container* title-only (`4684:19909`).
   */
  subtext?: React.ReactNode;
  /** @deprecated Use `subtext` — same slot as Figma header subtext line. */
  description?: React.ReactNode;
  onClose: () => void;
  /** Override detected variant (default: `with-subtext` when subtext/description is set). */
  variant?: ModalHeaderVariant;
  /** `id` for `aria-labelledby`. Generated when omitted (standalone previews). */
  labelId?: string;
  /** `id` for `aria-describedby` when subtext is shown. */
  descriptionId?: string;
  closeLabel?: string;
  /** Bottom border under the header row. @default true */
  showBorder?: boolean;
  className?: string;
}

export function ModalHeader({
  title,
  subtext,
  description,
  onClose,
  variant,
  labelId: labelIdProp,
  descriptionId: descriptionIdProp,
  closeLabel = 'Close dialog',
  showBorder = true,
  className = '',
}: ModalHeaderProps) {
  const autoLabelId = React.useId();
  const autoDescriptionId = React.useId();
  const labelId = labelIdProp ?? autoLabelId;
  const descriptionId = descriptionIdProp ?? autoDescriptionId;
  const subtextContent = subtext ?? description;
  const resolvedVariant: ModalHeaderVariant =
    variant ?? (subtextContent != null && subtextContent !== false ? 'with-subtext' : 'title-only');

  return (
    <header
      data-variant={resolvedVariant}
      className={[
        modalHeaderContainerClass,
        !showBorder && 'border-b-0',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <ModalHeaderTextGroup
        title={title}
        subtext={subtextContent}
        titleId={labelId}
        subtextId={descriptionId}
      />
      <ModalHeaderCloseButton onClick={onClose} aria-label={closeLabel} />
    </header>
  );
}
