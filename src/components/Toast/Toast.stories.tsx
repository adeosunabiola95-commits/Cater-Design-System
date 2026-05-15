import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { motion, AnimatePresence } from 'motion/react';
import { Toast } from './Toast';
import { Button } from '../Button';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    docs: {
      description: {
        component:
          'Toast displays a compact dark notification. Extracted from Figma Notification Type=Toast. Supports stacking (newest on top) with motion.dev enter/exit animations.',
      },
      source: { type: 'dynamic' },
    },
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    children: 'Payment added',
    onClose: () => {},
  },
};

const STACK_MESSAGES = ['Payment added', 'Item saved', 'Settings updated', 'Link copied', 'Changes saved'] as const;

const TOAST_DURATION_MS = 5000;

const toastStackAnimation = {
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

export const Stacking: Story = {
  name: 'Example: Stacking',
  parameters: {
    docs: {
      description: {
        story: 'Click the button multiple times to add toasts. New toasts stack on top; each auto-dismisses after 5s and can be dismissed manually. Uses motion.dev spring animations for enter/exit.',
      },
    },
  },
  render: function StackingRender() {
    const [toasts, setToasts] = React.useState<{ id: number; message: string }[]>([]);
    const idRef = React.useRef(0);
    const msgIndexRef = React.useRef(0);

    const addToast = React.useCallback(() => {
      const message = STACK_MESSAGES[msgIndexRef.current % STACK_MESSAGES.length];
      msgIndexRef.current += 1;
      const id = ++idRef.current;
      setToasts((prev) => [{ id, message }, ...prev]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, TOAST_DURATION_MS);
    }, []);

    const removeToast = React.useCallback((id: number) => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    return (
      <div className="flex min-h-[400px] justify-center items-center">
        <div className="flex flex-col gap-6 items-center">
          <Button size="small" onClick={addToast}>
            Add toast
          </Button>
          <AnimatePresence mode="popLayout">
            <div className="fixed bottom-8 right-8 flex flex-col gap-2 items-end z-50 pointer-events-none">
              {toasts.map((toast) => (
                <motion.div key={toast.id} layout {...toastStackAnimation} className="pointer-events-auto">
                  <Toast onClose={() => removeToast(toast.id)}>{toast.message}</Toast>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>
      </div>
    );
  },
};

export const AnimatedExample: Story = {
  name: 'Example: Click to show',
  parameters: {
    docs: {
      description: {
        story: 'Click the button to show a single animated Toast. Uses motion for enter/exit.',
      },
    },
  },
  render: function AnimatedExampleRender() {
    const [visible, setVisible] = React.useState(false);
    return (
      <div className="flex min-h-[400px] justify-center items-center">
        <div className="flex flex-col gap-4 items-center">
          <Button size="small" onClick={() => setVisible((v) => !v)}>Click me</Button>
          <AnimatePresence>
            {visible && (
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.96, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: 8, scale: 0.96, filter: 'blur(6px)' }}
                transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <Toast onClose={() => setVisible(false)}>Payment added</Toast>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  },
};
