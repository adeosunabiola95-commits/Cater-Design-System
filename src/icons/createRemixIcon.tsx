import type { RemixiconComponentType } from '@remixicon/react';
import type { AriaRole, CSSProperties, FC, MouseEventHandler } from 'react';

/** Props accepted by Cater icon wrappers (aligned with @remixicon/react). */
export type CaterIconProps = {
  size?: number | string;
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: CSSProperties;
  color?: string;
  'aria-hidden'?: boolean;
  'aria-label'?: string;
  role?: AriaRole;
  id?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

function resolveSize(
  width: CaterIconProps['width'],
  height: CaterIconProps['height'],
  size: CaterIconProps['size'],
): number | string {
  if (size != null) return size;
  if (typeof width === 'number') return width;
  if (typeof height === 'number') return height;
  if (typeof width === 'string') return width;
  if (typeof height === 'string') return height;
  return 24;
}

/** Wraps a Remix Icon component with Cater defaults (24px, currentColor via className). */
export function createRemixIcon(
  RemixIcon: RemixiconComponentType,
  displayName: string,
): FC<CaterIconProps> {
  const CaterIcon: FC<CaterIconProps> = ({
    width = 24,
    height = 24,
    size,
    className,
    style,
    color,
    role,
    id,
    onClick,
    'aria-hidden': ariaHidden = true,
    'aria-label': ariaLabel,
  }) => {
    const resolvedSize = resolveSize(width, height, size);
    return (
      <RemixIcon
        size={resolvedSize}
        className={className}
        style={style}
        color={color}
        role={role}
        id={id}
        onClick={onClick}
        aria-hidden={ariaHidden}
        aria-label={ariaLabel}
      />
    );
  };
  CaterIcon.displayName = displayName;
  return CaterIcon;
}
