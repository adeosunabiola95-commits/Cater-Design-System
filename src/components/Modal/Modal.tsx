import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button, type ButtonProps } from '../Button';
import { Cancel } from '../../icons';

export type ModalSize = 'sm' | 'md' | 'lg' | 'select-campaign';

export interface ModalProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Controls whether the modal is visible */
  open: boolean;
  /** Called when the overlay or close button is clicked */
  onClose: () => void;
  /** Title text for the dialog header */
  title?: React.ReactNode;
  /** Optional description under the title */
  description?: React.ReactNode;
  /** Optional footer content (e.g. buttons). If omitted, a default primary + ghost pair can be passed via children. */
  footer?: React.ReactNode;
  /** Width of the dialog */
  size?: ModalSize;
  /** Title typography. large = Semibold 25px / 120% (Figma Modals header). */
  titleSize?: 'default' | 'large';
}

const sizeClasses: Record<ModalSize, string> = {
  sm: 'w-[480px] max-w-[480px]',
  md: 'w-[625px] max-w-[625px]',
  lg: 'w-[720px] max-w-[720px]',
  'select-campaign': 'w-[565px] max-w-[565px]',
};

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  description,
  footer,
  size = 'md',
  titleSize = 'default',
  className = '',
  children,
  onDrag,
  onDragStart,
  onDragEnd,
  onAnimationStart,
  onAnimationEnd,
  ...props
}) => {
  const labelId = React.useId();
  const descriptionId = React.useId();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="modal-overlay"
          className="fixed inset-0 z-40 flex items-center justify-center bg-[rgba(15,23,42,0.45)]"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            key="modal-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? labelId : undefined}
            aria-describedby={description ? descriptionId : undefined}
            className={[
              'relative z-50 w-full max-h-[85vh] overflow-hidden',
              sizeClasses[size],
              'bg-white',
              'rounded-[var(--radius-modal)] shadow-lg',
              'border border-dialogue-outline',
              'flex flex-col',
              className,
            ].join(' ')}
            initial={{ opacity: 0, y: 24, scale: 0.97, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 12, scale: 0.97, filter: 'blur(6px)' }}
            transition={{
              type: 'spring',
              stiffness: 420,
              damping: 32,
              mass: 0.9,
              filter: { duration: 0.25, ease: [0.22, 0.61, 0.36, 1] },
            }}
            onClick={e => e.stopPropagation()}
            {...props}
          >
            {/* Header: Figma Modals — Header container (padding 24, gap 32, close 35×35) */}
            <div className="flex items-start justify-between gap-8 border-b border-border-subtle p-6">
              <div className="flex min-w-0 flex-1 flex-col gap-3">
                {title && (
                  <h2
                    id={labelId}
                    className={
                      titleSize === 'large'
                        ? 'font-body font-semibold text-[25px] leading-[120%] text-text-title'
                        : 'font-body font-semibold text-[16px] leading-[150%] tracking-[0.16px] text-text-title'
                    }
                  >
                    {title}
                  </h2>
                )}
                {description && (
                  <p
                    id={descriptionId}
                    className="font-body text-[14px] leading-[150%] text-text-subtitle"
                  >
                    {description}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="box-border shrink-0 flex size-[35px] items-center justify-center rounded-full border border-border-subtle p-2 text-text-subtitle hover:bg-mirage-100 focus:outline-none focus:ring-2 focus:ring-mirage-900/15"
              >
                <Cancel width={18} height={18} />
              </button>
            </div>

            <div
              className={
                size === 'select-campaign'
                  ? 'flex flex-1 flex-col overflow-hidden'
                  : 'flex-1 overflow-auto px-6 pb-6 pt-6'
              }
            >
              {children}
            </div>

            {footer && (
              <div className="shrink-0 flex justify-end gap-3 border-t border-border-subtle bg-white px-6 py-6">
                {footer}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export interface DrawerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  /** Side of the viewport the drawer slides from */
  side?: 'right' | 'left';
  width?: 'sm' | 'md';
}

// Figma 486:2140: sm = 381px, md = 420px
const drawerWidth: Record<NonNullable<DrawerProps['width']>, string> = {
  sm: 'w-[381px] max-w-full',
  md: 'w-[420px] max-w-full',
};

export const Drawer: React.FC<DrawerProps> = ({
  open,
  onClose,
  title,
  description,
  footer,
  side = 'right',
  width = 'md',
  className = '',
  children,
  onDrag,
  onDragStart,
  onDragEnd,
  onAnimationStart,
  onAnimationEnd,
  ...props
}) => {
  const labelId = React.useId();
  const descriptionId = React.useId();
  const isRight = side === 'right';

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="drawer-overlay"
          className="fixed inset-0 z-40 bg-[rgba(15,23,42,0.45)]"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.aside
            key="drawer-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? labelId : undefined}
            aria-describedby={description ? descriptionId : undefined}
            className={[
              'absolute top-0 bottom-0 flex flex-col overflow-hidden bg-white border-dialogue-outline shadow-lg',
              isRight
                ? 'right-0 border-l rounded-l-[var(--radius-modal)]'
                : 'left-0 border-r rounded-r-[var(--radius-modal)]',
              drawerWidth[width],
              className,
            ].join(' ')}
            initial={{
              x: isRight ? 48 : -48,
              opacity: 0,
              filter: 'blur(6px)',
            }}
            animate={{
              x: 0,
              opacity: 1,
              filter: 'blur(0px)',
            }}
            exit={{
              x: isRight ? 32 : -32,
              opacity: 0,
              filter: 'blur(6px)',
            }}
            transition={{
              duration: 0.5,
              ease: [0.32, 0.72, 0, 1],
            }}
            onClick={e => e.stopPropagation()}
            {...props}
          >
            <div className="flex items-start justify-between gap-8 border-b border-border-subtle p-6">
              <div className="flex min-w-0 flex-1 flex-col gap-3">
                {title && (
                  <h2
                    id={labelId}
                    className="font-body font-semibold text-[16px] leading-[150%] tracking-[0.16px] text-text-title"
                  >
                    {title}
                  </h2>
                )}
                {description && (
                  <p
                    id={descriptionId}
                    className="font-body text-[14px] leading-[150%] text-text-subtitle"
                  >
                    {description}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close drawer"
                className="box-border shrink-0 flex size-[35px] items-center justify-center rounded-full border border-border-subtle p-2 text-text-subtitle hover:bg-mirage-100 focus:outline-none focus:ring-2 focus:ring-mirage-900/15"
              >
                <Cancel width={18} height={18} />
              </button>
            </div>

            <div className="flex-1 overflow-auto px-6 py-8">{children}</div>

            {footer && (
              <div className="shrink-0 flex justify-end gap-3 border-t border-border-subtle bg-white px-6 py-6">
                {footer}
              </div>
            )}
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export interface ModalPrimaryActionsProps {
  primaryLabel: string;
  onPrimary: () => void;
  secondaryLabel?: string;
  onSecondary?: () => void;
  primaryDisabled?: boolean;
  /** Visual variant for the secondary button (e.g. 'outline', 'ghost'). Defaults to 'ghost'. */
  secondaryVariant?: ButtonProps['variant'];
}

export const ModalPrimaryActions: React.FC<ModalPrimaryActionsProps> = ({
  primaryLabel,
  onPrimary,
  secondaryLabel = 'Cancel',
  onSecondary,
  primaryDisabled,
  secondaryVariant = 'ghost',
}) => {
  return (
    <>
      {secondaryLabel && (
        <Button
          variant={secondaryVariant}
          size="small"
          type="button"
          onClick={onSecondary}
        >
          {secondaryLabel}
        </Button>
      )}
      <Button
        variant="primary"
        size="small"
        type="button"
        onClick={onPrimary}
        disabled={primaryDisabled}
      >
        {primaryLabel}
      </Button>
    </>
  );
};

