import React from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Button, type ButtonProps } from '../Button';
import { ModalActions } from './ModalActions';
import { ModalBody } from './ModalBody';
import { ModalHeader } from './ModalHeader/index';

export type ModalSize = 'sm' | 'md' | 'lg' | 'select-campaign';

export interface ModalProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  open: boolean;
  onClose: () => void;
  /** Header title — required for the standard header + body + actions layout. */
  title: React.ReactNode;
  /**
   * Optional header subtext (Figma *Header container with subtext* `4684:19918`).
   * Omit for title-only headers (`4684:19909`).
   */
  description?: React.ReactNode;
  /** Main content — scrollable body between header and actions. */
  children?: React.ReactNode;
  /** Action row (buttons) below the body. */
  actions?: React.ReactNode;
  /** @deprecated Use `actions` */
  footer?: React.ReactNode;
  size?: ModalSize;
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
  children,
  actions,
  footer,
  size = 'md',
  className = '',
  onDrag,
  onDragStart,
  onDragEnd,
  onAnimationStart,
  onAnimationEnd,
  ...props
}) => {
  const labelId = React.useId();
  const descriptionId = React.useId();
  const reduceMotion = useReducedMotion();
  const actionContent = actions ?? footer;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="modal-overlay"
          className="fixed inset-0 z-40 flex items-center justify-center bg-[rgba(15,23,42,0.45)]"
          onClick={onClose}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            key="modal-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelId}
            aria-describedby={description ? descriptionId : undefined}
            className={[
              'relative z-50 flex w-full max-h-[85vh] flex-col overflow-hidden',
              sizeClasses[size],
              'bg-white rounded-[var(--radius-modal)] shadow-lg border border-dialogue-outline',
              className,
            ].join(' ')}
            initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.97, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 12, scale: 0.97, filter: 'blur(6px)' }}
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
            <ModalHeader
              title={title}
              subtext={description}
              onClose={onClose}
              labelId={labelId}
              descriptionId={descriptionId}
              closeLabel="Close dialog"
            />

            <ModalBody flush={size === 'select-campaign'}>{children}</ModalBody>

            {actionContent != null && actionContent !== false && (
              <ModalActions>{actionContent}</ModalActions>
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
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  /** @deprecated Use `actions` */
  footer?: React.ReactNode;
  side?: 'right' | 'left';
  width?: 'sm' | 'md';
}

const drawerWidth: Record<NonNullable<DrawerProps['width']>, string> = {
  sm: 'w-[381px] max-w-full',
  md: 'w-[420px] max-w-full',
};

export const Drawer: React.FC<DrawerProps> = ({
  open,
  onClose,
  title,
  description,
  children,
  actions,
  footer,
  side = 'right',
  width = 'md',
  className = '',
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
  const reduceMotion = useReducedMotion();
  const actionContent = actions ?? footer;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="drawer-overlay"
          className="fixed inset-0 z-40 bg-[rgba(15,23,42,0.45)]"
          onClick={onClose}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            key="drawer-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelId}
            aria-describedby={description ? descriptionId : undefined}
            className={[
              'absolute top-0 bottom-0 flex flex-col overflow-hidden bg-white border-dialogue-outline shadow-lg',
              isRight
                ? 'right-0 border-l rounded-l-[var(--radius-modal)]'
                : 'left-0 border-r rounded-r-[var(--radius-modal)]',
              drawerWidth[width],
              className,
            ].join(' ')}
            initial={
              reduceMotion
                ? false
                : {
                    x: isRight ? 48 : -48,
                    opacity: 0,
                    filter: 'blur(6px)',
                  }
            }
            animate={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
            exit={
              reduceMotion
                ? undefined
                : {
                    x: isRight ? 32 : -32,
                    opacity: 0,
                    filter: 'blur(6px)',
                  }
            }
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            onClick={e => e.stopPropagation()}
            {...props}
          >
            <ModalHeader
              title={title}
              subtext={description}
              onClose={onClose}
              labelId={labelId}
              descriptionId={descriptionId}
              closeLabel="Close drawer"
            />

            <ModalBody>{children}</ModalBody>

            {actionContent != null && actionContent !== false && (
              <ModalActions>{actionContent}</ModalActions>
            )}
          </motion.div>
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
        <Button variant={secondaryVariant} size="small" type="button" onClick={onSecondary}>
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
