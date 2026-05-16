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
          'Toast — Figma component `3989:7863` (Cater Design System). Dark mirage-900 surface, 10px radius, 12px padding, 21px gap. Message 14px white with optional semibold highlight, Gossip action link, 24px close icon.',
      },
      source: { type: 'dynamic' },
    },
  },
  argTypes: {
    messageBefore: { control: 'text' },
    messageHighlight: { control: 'text' },
    messageAfter: { control: 'text' },
    actionLabel: { control: 'text' },
    showAction: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

/** Figma default: cart confirmation with View action */
export const Default: Story = {
  args: {
    messageBefore: 'Your ',
    messageHighlight: 'Basic Breakfast Bar',
    messageAfter: ' has been added to cart',
    actionLabel: 'View',
    showAction: true,
    onAction: () => {},
    onClose: () => {},
  },
};

export const WithoutAction: Story = {
  name: 'Without action',
  args: {
    messageBefore: 'Your ',
    messageHighlight: 'Basic Breakfast Bar',
    messageAfter: ' has been added to cart',
    showAction: false,
    onClose: () => {},
  },
};

export const SimpleMessage: Story = {
  name: 'Simple message',
  args: {
    children: 'Payment added',
    showAction: false,
    onClose: () => {},
  },
};

const STACK_ITEMS = [
  {
    messageBefore: 'Your ',
    messageHighlight: 'Basic Breakfast Bar',
    messageAfter: ' has been added to cart',
  },
  { children: 'Item saved' },
  { children: 'Settings updated' },
  { children: 'Link copied' },
] as const;

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
        story:
          'Click the button multiple times to add toasts. New toasts stack on top; each auto-dismisses after 5s and can be dismissed manually.',
      },
      source: { type: 'dynamic' },
    },
  },
  render: function StackingRender() {
    const [toasts, setToasts] = React.useState<{ id: number; payload: (typeof STACK_ITEMS)[number] }[]>([]);
    const idRef = React.useRef(0);
    const msgIndexRef = React.useRef(0);

    const addToast = React.useCallback(() => {
      const payload = STACK_ITEMS[msgIndexRef.current % STACK_ITEMS.length];
      msgIndexRef.current += 1;
      const id = ++idRef.current;
      setToasts((prev) => [{ id, payload }, ...prev]);
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
                  <Toast
                    {...toast.payload}
                    actionLabel="View"
                    showAction={'children' in toast.payload ? false : true}
                    onAction={() => {}}
                    onClose={() => removeToast(toast.id)}
                  />
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
        story: 'Click the button to show a single animated Toast matching the Figma default.',
      },
      source: { type: 'dynamic' },
    },
  },
  render: function AnimatedExampleRender() {
    const [visible, setVisible] = React.useState(false);
    return (
      <div className="flex min-h-[400px] justify-center items-center">
        <div className="flex flex-col gap-4 items-center">
          <Button size="small" onClick={() => setVisible((v) => !v)}>
            Click me
          </Button>
          <AnimatePresence>
            {visible && (
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.96, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: 8, scale: 0.96, filter: 'blur(6px)' }}
                transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <Toast
                  messageBefore="Your "
                  messageHighlight="Basic Breakfast Bar"
                  messageAfter=" has been added to cart"
                  actionLabel="View"
                  onAction={() => {}}
                  onClose={() => setVisible(false)}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  },
};

