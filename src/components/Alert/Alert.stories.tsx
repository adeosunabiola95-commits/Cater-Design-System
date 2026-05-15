import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { motion, AnimatePresence } from 'motion/react';
import { Alert } from './Alert';
import { Button } from '../Button';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component:
          'Alerts display inline messages with semantic states. Extracted from Figma Notification Type=Alerts. States: Success, Info, Error, Warning, Grey.',
      },
      source: { type: 'dynamic' },
    },
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['success', 'info', 'error', 'warning', 'grey'],
      table: { defaultValue: { summary: 'success' } },
    },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Success: Story = {
  args: {
    state: 'success',
    children: "We've just sent a password reset link to your email. Please check your inbox",
    onClose: () => {},
  },
};

export const Info: Story = {
  args: {
    state: 'info',
    children: "We've just sent a password reset link to your email. Please check your inbox",
    onClose: () => {},
  },
};

export const Error: Story = {
  args: {
    state: 'error',
    children: "We've just sent a password reset link to your email. Please check your inbox",
    onClose: () => {},
  },
};

export const Warning: Story = {
  args: {
    state: 'warning',
    children: "We've just sent a password reset link to your email. Please check your inbox",
    onClose: () => {},
  },
};

export const Grey: Story = {
  args: {
    state: 'grey',
    children: "We've just sent a password reset link to your email. Please check your inbox",
    onClose: () => {},
  },
};

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div className="flex flex-col gap-4 max-w-2xl">
      {(['success', 'info', 'error', 'warning', 'grey'] as const).map((state) => (
        <Alert key={state} state={state} onClose={() => {}}>
          {state.charAt(0).toUpperCase() + state.slice(1)} alert message
        </Alert>
      ))}
    </div>
  ),
};

export const AnimatedExample: Story = {
  name: 'Example: Click to show',
  parameters: {
    docs: {
      description: {
        story: 'Click the button to show an animated Alert. Uses motion for enter/exit.',
      },
    },
  },
  render: function AnimatedExampleRender() {
    const [visible, setVisible] = React.useState(false);
    return (
      <div className="flex min-h-[400px] justify-center items-center">
        <div className="flex flex-col gap-4 max-w-2xl w-full items-center">
          <Button size="small" onClick={() => setVisible((v) => !v)}>Click me</Button>
        <AnimatePresence>
          {visible && (
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Alert state="success" onClose={() => setVisible(false)}>
                We've just sent a password reset link to your email. Please check your inbox
              </Alert>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </div>
    );
  },
};
