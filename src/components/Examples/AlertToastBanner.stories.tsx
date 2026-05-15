import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { motion, AnimatePresence } from 'motion/react';
import { Alert } from '../Alert';
import { Toast } from '../Toast';
import { Banner } from '../Banner';
import { Button } from '../Button';

const meta: Meta = {
  title: 'Examples/Alert, Toast & Banner',
  parameters: {
    docs: {
      description: {
        component:
          'Click each button to show an animated Alert, Toast, or Banner. Toasts stack (newest on top), auto-dismiss after 5s, and can be dismissed manually. Uses motion.dev spring animations for enter/exit.',
      },
      source: { type: 'dynamic' },
    },
  },
};

export default meta;
type Story = StoryObj;

const slideUp = {
  initial: { opacity: 0, y: -12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] as const },
};

const toastMessages = [
  'Payment added',
  'Item saved',
  'Settings updated',
  'Link copied',
  'Changes saved',
] as const;

const TOAST_DURATION_MS = 5000;

const toastEnterExit = {
  initial: { opacity: 0, y: 16, scale: 0.96, filter: 'blur(6px)' },
  animate: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
  exit: { opacity: 0, y: 8, scale: 0.96, filter: 'blur(6px)' },
  transition: {
    type: 'spring',
    stiffness: 400,
    damping: 28,
    mass: 0.8,
    filter: { duration: 0.3, ease: [0.22, 0.61, 0.36, 1] },
  } as const,
};

export const AnimatedExamples: Story = {
  name: 'Alert, Toast, Banner',
  render: function AnimatedExamplesRender() {
    const [alertVisible, setAlertVisible] = React.useState(false);
    const [toasts, setToasts] = React.useState<{ id: number; message: string }[]>([]);
    const [bannerVisible, setBannerVisible] = React.useState(false);
    const toastIdRef = React.useRef(0);
    const toastMessageIndexRef = React.useRef(0);

    const addToast = React.useCallback(() => {
      const message = toastMessages[toastMessageIndexRef.current % toastMessages.length];
      toastMessageIndexRef.current += 1;
      const id = ++toastIdRef.current;
      setToasts((prev) => [{ id, message }, ...prev]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
      }, TOAST_DURATION_MS);
    }, []);

    const removeToast = React.useCallback((id: number) => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    return (
      <div className="flex min-h-[400px] justify-center items-center">
        <div className="flex flex-col gap-8 max-w-2xl w-full p-4 items-center">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="small" onClick={() => setAlertVisible((v) => !v)}>Alert</Button>
            <Button size="small" onClick={addToast}>Toast</Button>
            <Button size="small" onClick={() => setBannerVisible((v) => !v)}>Banner</Button>
          </div>

          <div className="flex flex-col gap-6 w-full items-center">
            <AnimatePresence>
              {alertVisible && (
                <motion.div key="alert" {...slideUp}>
                  <Alert state="success" onClose={() => setAlertVisible(false)}>
                    We've just sent a password reset link to your email. Please check your inbox
                  </Alert>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence mode="popLayout">
              <div className="fixed bottom-8 right-8 flex flex-col gap-2 items-end z-50 pointer-events-none">
                {toasts.map((toast) => (
                  <motion.div
                    key={toast.id}
                    layout
                    {...toastEnterExit}
                    className="pointer-events-auto"
                  >
                    <Toast onClose={() => removeToast(toast.id)}>{toast.message}</Toast>
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>

            <AnimatePresence>
              {bannerVisible && (
                <motion.div key="banner" {...slideUp}>
                  <Banner
                    state="success"
                    title="You added a new reward"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
                    onClose={() => setBannerVisible(false)}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    );
  },
};
