import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';

/**
 * Tooltip. Maps to Figma Tooltips (node 276:1543).
 * Variants: Color (Dark/Light), Type (placement), State (Single-line/Description).
 */
export type TooltipColor = 'dark' | 'light';
export type TooltipPlacement =
  | 'top-right'
  | 'top-left'
  | 'top-center'
  | 'bottom-right'
  | 'bottom-left'
  | 'bottom-center';

export interface TooltipProps {
  /** Tooltip content. Single line or multi-line (Description state). */
  content: React.ReactNode;
  /** Visual variant. Dark = mirage-900 bg, white text. Light = white bg, text-title. */
  color?: TooltipColor;
  /** Placement of tooltip and arrow relative to trigger. */
  placement?: TooltipPlacement;
  /** Trigger element. */
  children: React.ReactElement;
  /** Optional className for the trigger wrapper. */
  className?: string;
}

const placementStyles: Record<
  TooltipPlacement,
  { arrow: string; pointDown: boolean }
> = {
  'top-right': { arrow: 'bottom-[-5px] right-[10px]', pointDown: true },
  'top-left': { arrow: 'bottom-[-5px] left-[10px]', pointDown: true },
  'top-center': { arrow: 'bottom-[-5px] left-1/2 -translate-x-1/2', pointDown: true },
  'bottom-right': { arrow: 'top-[-5px] right-[10px]', pointDown: false },
  'bottom-left': { arrow: 'top-[-5px] left-[10px]', pointDown: false },
  'bottom-center': { arrow: 'top-[-5px] left-1/2 -translate-x-1/2', pointDown: false },
};

/** CSS border triangle – renders crisper than small SVGs. */
const ArrowCss = ({ fill, pointDown }: { fill: string; pointDown: boolean }) => (
  <span
    aria-hidden
    className="block"
    style={{
      width: 0,
      height: 0,
      borderLeft: '6px solid transparent',
      borderRight: '6px solid transparent',
      ...(pointDown
        ? { borderTop: `7px solid ${fill}` }
        : { borderBottom: `7px solid ${fill}` }),
    }}
  />
);


function getTooltipPosition(
  rect: DOMRect,
  placement: TooltipPlacement,
  tooltipHeight: number
): { top: number; left: number } {
  const gap = 4;
  switch (placement) {
    case 'top-right':
      return { top: rect.top - tooltipHeight - gap, left: rect.right };
    case 'top-left':
      return { top: rect.top - tooltipHeight - gap, left: rect.left };
    case 'top-center':
      return { top: rect.top - tooltipHeight - gap, left: rect.left + rect.width / 2 };
    case 'bottom-right':
      return { top: rect.bottom + gap, left: rect.right };
    case 'bottom-left':
      return { top: rect.bottom + gap, left: rect.left };
    case 'bottom-center':
      return { top: rect.bottom + gap, left: rect.left + rect.width / 2 };
    default:
      return { top: rect.top - tooltipHeight - gap, left: rect.right };
  }
}

function getTooltipTransform(placement: TooltipPlacement): string {
  switch (placement) {
    case 'top-right':
    case 'bottom-right':
      return 'translateX(-100%)';
    case 'top-left':
    case 'bottom-left':
      return 'translateX(0)';
    case 'top-center':
    case 'bottom-center':
      return 'translateX(-50%)';
    default:
      return 'translateX(-100%)';
  }
}

const HIDE_DELAY_MS = 120;

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  color = 'dark',
  placement = 'top-center',
  children,
  className = '',
}) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number; transform: string } | null>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const styles = placementStyles[placement];
  const isDark = color === 'dark';
  const bgClass = isDark ? 'bg-mirage-900' : 'bg-white';
  const textClass = isDark ? 'text-white' : 'text-text-title';
  const arrowFill = isDark ? '#101828' : '#FFFFFF';

  const showTooltip = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    setVisible(true);
  };

  const hideTooltip = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setVisible(false);
      setCoords(null);
      hideTimeoutRef.current = null;
    }, HIDE_DELAY_MS);
  };

  const cancelHide = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  };

  useEffect(() => {
    if (!visible || !triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const tooltipHeight = 44;
    const pos = getTooltipPosition(rect, placement, tooltipHeight);
    setCoords({
      top: pos.top,
      left: pos.left,
      transform: getTooltipTransform(placement),
    });
  }, [visible, placement]);

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  const tooltipAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.15, ease: [0.25, 0.1, 0.25, 1] as const },
  };

  const tooltipPortal =
    typeof document !== 'undefined' ? (
      createPortal(
        <AnimatePresence>
          {visible && coords ? (
            <motion.div
              key="tooltip"
              role="tooltip"
              className={`fixed z-[9999] flex max-w-[244px] px-2.5 py-2.5 rounded shadow-[0_1px_2px_rgba(15,23,42,0.06),0_1px_3px_rgba(15,23,42,0.1)] ${bgClass}`}
              style={{
                top: coords.top,
                left: coords.left,
                transform: coords.transform,
              }}
              initial={tooltipAnimation.initial}
              animate={tooltipAnimation.animate}
              exit={tooltipAnimation.exit}
              transition={tooltipAnimation.transition}
              onMouseEnter={cancelHide}
              onMouseLeave={hideTooltip}
            >
              <span className={`font-body text-[13px] font-semibold leading-[144%] ${textClass}`}>
                {content}
              </span>
              <span className={`absolute flex items-center justify-center ${styles.arrow}`}>
                <ArrowCss fill={arrowFill} pointDown={styles.pointDown} />
              </span>
            </motion.div>
          ) : null}
        </AnimatePresence>,
        document.body
      )
    ) : null;

  return (
    <>
      <div
        ref={triggerRef}
        className={`relative inline-flex ${className}`}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
      >
        {children}
      </div>
      {tooltipPortal}
    </>
  );
};

Tooltip.displayName = 'Tooltip';
