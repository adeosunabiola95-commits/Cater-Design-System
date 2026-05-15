import React from 'react';

export type AlertState = 'success' | 'info' | 'error' | 'warning' | 'grey';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual state. Maps to Figma "State" property. */
  state?: AlertState;
  /** Message text */
  children?: React.ReactNode;
  /** Called when close button is clicked */
  onClose?: () => void;
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className={className}>
      <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const stateStyles: Record<AlertState, string> = {
  success: 'bg-salem-300',
  info: 'bg-blush-pink-300',
  error: 'bg-bright-red-200',
  warning: 'bg-flush-orange-300',
  grey: 'bg-mirage-200',
};

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ state = 'success', children, onClose, className = '', ...props }, ref) => {
    const classes = [
      'flex items-center gap-2',
      'py-5 px-5',
      'font-body text-[16px] font-medium leading-[150%] text-text-title',
      stateStyles[state],
      'rounded-none',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} role="alert" className={classes} {...props}>
        <span className="flex-1 min-w-0">{children}</span>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 flex items-center justify-center w-5 h-5 text-mirage-900 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-mirage-900/30 rounded"
          >
            <CloseIcon />
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = 'Alert';
