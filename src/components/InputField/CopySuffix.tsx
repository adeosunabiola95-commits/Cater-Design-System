import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Copy } from '../../icons/icons/Copy';
import { Tick02 } from '../../icons/icons/Tick02';

export interface CopySuffixProps {
  textToCopy?: string;
  iconStiffness?: number;
  iconDamping?: number;
  iconBounce?: number;
  iconRotation?: number;
  iconExitScale?: number;
  textStiffness?: number;
  textDamping?: number;
  textBounce?: number;
  textSlideDistance?: number;
  textBlur?: number;
  resetDelay?: number;
}

export function CopySuffix({
  textToCopy = 'www.cateringrewards.io',
  iconStiffness = 500,
  iconDamping = 25,
  iconBounce = 0.25,
  iconRotation = 45,
  iconExitScale = 0.5,
  textStiffness = 400,
  textDamping = 22,
  textBounce = 0.2,
  textSlideDistance = 12,
  textBlur = 4,
  resetDelay = 2000,
}: CopySuffixProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), resetDelay);
  };

  const iconTransition = {
    type: 'spring' as const,
    stiffness: iconStiffness,
    damping: iconDamping,
    bounce: iconBounce,
  };
  const textTransition = {
    type: 'spring' as const,
    stiffness: textStiffness,
    damping: textDamping,
    bounce: textBounce,
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="flex items-center gap-[8px] cursor-pointer overflow-hidden"
    >
      <div style={{ position: 'relative', width: 20, height: 20 }}>
        <AnimatePresence mode="popLayout">
          {copied ? (
            <motion.span
              key="tick"
              initial={{ opacity: 0, scale: iconExitScale, rotate: -iconRotation }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: iconExitScale, rotate: iconRotation }}
              transition={iconTransition}
              style={{ display: 'inline-flex', position: 'absolute', inset: 0 }}
            >
              <Tick02 width={20} height={20} className="text-salem-600" />
            </motion.span>
          ) : (
            <motion.span
              key="copy"
              initial={{ opacity: 0, scale: iconExitScale }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: iconExitScale }}
              transition={iconTransition}
              style={{ display: 'inline-flex', position: 'absolute', inset: 0 }}
            >
              <Copy width={20} height={20} className="text-text-body" />
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <AnimatePresence mode="popLayout">
          {copied ? (
            <motion.span
              key="copied-text"
              initial={{ opacity: 0, y: textSlideDistance, filter: `blur(${textBlur}px)` }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -textSlideDistance, filter: `blur(${textBlur}px)` }}
              transition={textTransition}
              className="font-body font-semibold text-[16px] leading-[150%] tracking-[0.16px] text-salem-600"
            >
              Copied
            </motion.span>
          ) : (
            <motion.span
              key="copy-text"
              initial={{ opacity: 0, y: textSlideDistance, filter: `blur(${textBlur}px)` }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -textSlideDistance, filter: `blur(${textBlur}px)` }}
              transition={textTransition}
              className="font-body font-semibold text-[16px] leading-[150%] tracking-[0.16px] text-text-body"
            >
              Copy
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </button>
  );
}
