import React from 'react';

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Toast message */
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

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ children, onClose, className = '', ...props }, ref) => {
    const classes = [
      'flex items-center gap-4',
      'py-4 px-5',
      'font-body text-[16px] font-medium leading-[150%] text-white',
      'bg-mirage-900 rounded-[4px]',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} role="status" className={classes} {...props}>
        <span className="flex-1 min-w-0">{children}</span>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 flex items-center justify-center w-5 h-5 text-mirage-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 rounded"
          >
            <CloseIcon />
          </button>
        )}
      </div>
    );
  }
);

Toast.displayName = 'Toast';
