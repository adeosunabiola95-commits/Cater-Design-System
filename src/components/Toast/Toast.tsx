import React from 'react';
import { Cancel } from '../../icons/icons/Cancel';

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Message content when not using the before / highlight / after pattern */
  children?: React.ReactNode;
  /** Leading message segment (Figma: plain weight) */
  messageBefore?: string;
  /** Emphasized segment (Figma: semibold product name) */
  messageHighlight?: string;
  /** Trailing message segment (Figma: plain weight) */
  messageAfter?: string;
  /** Action label (Figma: View). Omitted when `showAction` is false. */
  actionLabel?: string;
  /** Figma `Show View` — when false, hides the action control */
  showAction?: boolean;
  /** Called when the action control is activated */
  onAction?: () => void;
  /** Called when the close control is activated */
  onClose?: () => void;
}

function ToastMessage({
  children,
  messageBefore,
  messageHighlight,
  messageAfter,
}: Pick<ToastProps, 'children' | 'messageBefore' | 'messageHighlight' | 'messageAfter'>) {
  const usesSegments =
    messageBefore !== undefined || messageHighlight !== undefined || messageAfter !== undefined;

  if (usesSegments) {
    return (
      <p className="flex-1 min-w-0 font-body text-[14px] font-normal leading-[150%] tracking-[0.14px] text-white">
        {messageBefore}
        {messageHighlight != null && messageHighlight !== '' && (
          <span className="font-semibold">{messageHighlight}</span>
        )}
        {messageAfter}
      </p>
    );
  }

  return (
    <p className="flex-1 min-w-0 font-body text-[14px] font-normal leading-[150%] tracking-[0.14px] text-white">
      {children}
    </p>
  );
}

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      children,
      messageBefore,
      messageHighlight,
      messageAfter,
      actionLabel = 'View',
      showAction = true,
      onAction,
      onClose,
      className = '',
      ...props
    },
    ref
  ) => {
    const showActionControl = showAction && Boolean(actionLabel) && Boolean(onAction);

    const classes = [
      'flex items-center',
      'w-full max-w-[359px]',
      'gap-[21px]',
      'p-3',
      'bg-mirage-900 text-white',
      'rounded-[10px]',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} role="status" className={classes} {...props}>
        <ToastMessage
          messageBefore={messageBefore}
          messageHighlight={messageHighlight}
          messageAfter={messageAfter}
        >
          {children}
        </ToastMessage>

        {showActionControl && (
          <button
            type="button"
            onClick={onAction}
            className="shrink-0 font-body text-[14px] font-medium leading-[150%] tracking-[0.14px] text-brand-gossip hover:text-brand-gossip/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-sm"
          >
            {actionLabel}
          </button>
        )}

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close notification"
            className="shrink-0 flex items-center justify-center w-6 h-6 text-white hover:text-mirage-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-sm"
          >
            <Cancel width={24} height={24} aria-hidden />
          </button>
        )}
      </div>
    );
  }
);

Toast.displayName = 'Toast';
