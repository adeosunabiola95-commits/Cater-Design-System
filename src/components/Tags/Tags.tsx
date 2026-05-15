import React from 'react';
import { Checkbox } from '../Checkbox';

export type TagsSize = 'sm' | 'md';
export type TagsType = 'base' | 'withcheckbox' | 'withflags';
export type TagsState = 'default' | 'withcancel' | 'hover' | 'withtag';

export interface TagsProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Tag type. Maps to Figma "Type" property. */
  type?: TagsType;
  /** Tag state. Maps to Figma "State" property. */
  state?: TagsState;
  /** Tag size. Maps to Figma "Size" property. */
  size?: TagsSize;
  /** Tag label text */
  children?: React.ReactNode;
  /** Count or secondary label (for withtag state) */
  count?: React.ReactNode;
  /** Called when cancel/remove is clicked. Enables cancel button when provided. */
  onRemove?: () => void;
  /** Checkbox checked state (for withcheckbox type). Omit for uncontrolled. */
  checked?: boolean;
  /** Default checkbox state when uncontrolled (for withcheckbox type) */
  defaultChecked?: boolean;
  /** Called when checkbox changes (for withcheckbox type) */
  onCheckedChange?: (checked: boolean) => void;
  /** Icon element for withflags type */
  iconElement?: React.ReactNode;
}

function DefaultCancelIcon({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      <path
        d="M16.7071 7.29308C16.5196 7.10561 16.2652 7.00029 16.0001 7.00029C15.7349 7.00029 15.4806 7.10561 15.2931 7.29308L12.0001 10.5861L8.70708 7.29308C8.61483 7.19757 8.50449 7.12139 8.38249 7.06898C8.26048 7.01657 8.12926 6.98898 7.99648 6.98783C7.8637 6.98668 7.73202 7.01198 7.60913 7.06226C7.48623 7.11254 7.37458 7.18679 7.28069 7.28069C7.18679 7.37458 7.11254 7.48623 7.06226 7.60913C7.01198 7.73202 6.98668 7.8637 6.98783 7.99648C6.98898 8.12926 7.01657 8.26048 7.06898 8.38249C7.12139 8.50449 7.19757 8.61483 7.29308 8.70708L10.5861 12.0001L7.29308 15.2931C7.19757 15.3853 7.12139 15.4957 7.06898 15.6177C7.01657 15.7397 6.98898 15.8709 6.98783 16.0037C6.98668 16.1365 7.01198 16.2681 7.06226 16.391C7.11254 16.5139 7.18679 16.6256 7.28069 16.7195C7.37458 16.8134 7.48623 16.8876 7.60913 16.9379C7.73202 16.9882 7.8637 17.0135 7.99648 17.0123C8.12926 17.0112 8.26048 16.9836 8.38249 16.9312C8.50449 16.8788 8.61483 16.8026 8.70708 16.7071L12.0001 13.4141L15.2931 16.7071C15.4817 16.8892 15.7343 16.99 15.9965 16.9878C16.2587 16.9855 16.5095 16.8803 16.6949 16.6949C16.8803 16.5095 16.9855 16.2587 16.9878 15.9965C16.99 15.7343 16.8892 15.4817 16.7071 15.2931L13.4141 12.0001L16.7071 8.70708C16.8946 8.51955 16.9999 8.26525 16.9999 8.00008C16.9999 7.73492 16.8946 7.48061 16.7071 7.29308Z"
        fill="currentColor"
      />
    </svg>
  );
}

function DefaultFlagIcon({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      <path
        d="M4 1C3.73478 1 3.48043 1.10536 3.29289 1.29289C3.10536 1.48043 3 1.73478 3 2V22C3 22.2652 3.10536 22.5196 3.29289 22.7071C3.48043 22.8946 3.73478 23 4 23C4.26522 23 4.51957 22.8946 4.70711 22.7071C4.89464 22.5196 5 22.2652 5 22V15H20C20.1884 15.0001 20.373 14.9469 20.5326 14.8466C20.6921 14.7463 20.8201 14.603 20.9017 14.4332C20.9833 14.2633 21.0153 14.0739 20.9939 13.8867C20.9726 13.6995 20.8988 13.5221 20.781 13.375L17.281 9L20.781 4.625C20.8988 4.47791 20.9726 4.30053 20.9939 4.11331C21.0153 3.92609 20.9833 3.73665 20.9017 3.56682C20.8201 3.39698 20.6921 3.25367 20.5326 3.15338C20.373 3.0531 20.1884 2.99993 20 3H5V2C5 1.73478 4.89464 1.48043 4.70711 1.29289C4.51957 1.10536 4.26522 1 4 1ZM17.919 5L15.219 8.375C15.077 8.55236 14.9996 8.77279 14.9996 9C14.9996 9.22721 15.077 9.44764 15.219 9.625L17.919 13H5V5H17.919Z"
        fill="currentColor"
      />
    </svg>
  );
}

const sizeStyles: Record<TagsSize, string> = {
  sm: 'py-0_5 px-1_5 gap-0_5 text-[13px] leading-[150%]',
  md: 'py-1 px-1_5 gap-1 text-[14px] leading-[150%]',
};

const iconSizeMap: Record<TagsSize, number> = {
  sm: 14,
  md: 16,
};

export const Tags = React.forwardRef<HTMLSpanElement, TagsProps>(
  (
    {
      type = 'base',
      state = 'default',
      size = 'md',
      children,
      count,
      onRemove,
      checked,
      defaultChecked = false,
      onCheckedChange,
      iconElement,
      className = '',
      ...props
    },
    ref
  ) => {
    const iconSize = iconSizeMap[size];
    const showCancel = state === 'withcancel' || (onRemove != null);
    const showCheckbox = type === 'withcheckbox';
    const showFlag = type === 'withflags';
    const showCount = state === 'withtag' && count != null;

    const isHover = state === 'hover';

    const classes = [
      'inline-flex items-center',
      'rounded-full',
      'font-body font-normal',
      'bg-white text-text-title',
      'border border-solid border-mirage-100',
      sizeStyles[size],
      isHover && 'bg-mirage-50',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <span ref={ref} className={classes} {...props}>
        {showCheckbox && (
          <Checkbox
            variant="saas"
            size="sm"
            checked={checked}
            defaultChecked={defaultChecked}
            onChange={onCheckedChange}
            className="shrink-0 m-0 p-0"
          />
        )}
        {showFlag && (iconElement ?? <DefaultFlagIcon size={iconSize} className="text-text-title shrink-0" />)}
        <span>{children}</span>
        {showCount && <span className="text-text-caption">{count}</span>}
        {showCancel && (
          <button
            type="button"
            onClick={onRemove}
            aria-label="Remove tag"
            className="shrink-0 flex items-center justify-center w-4 h-4 rounded text-mirage-400 hover:text-mirage-600 focus:outline-none focus:ring-2 focus:ring-mirage-100"
          >
            <DefaultCancelIcon size={iconSize} className="text-current" />
          </button>
        )}
      </span>
    );
  }
);

Tags.displayName = 'Tags';
