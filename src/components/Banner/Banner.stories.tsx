import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { motion, AnimatePresence } from 'motion/react';
import { Banner } from './Banner';
import { Button } from '../Button';

const meta: Meta<typeof Banner> = {
  title: 'Components/Banner',
  component: Banner,
  parameters: {
    docs: {
      description: {
        component:
          'Banners display title + description with icon and semantic states. Extracted from Figma Notification Type=Banner. States: Success, Info, Error, Warning, Grey.',
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
    title: { control: 'text' },
    description: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Banner>;

const defaultDescription = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.';

export const Success: Story = {
  args: {
    state: 'success',
    title: 'You added a new reward',
    description: defaultDescription,
    onClose: () => {},
  },
};

export const Info: Story = {
  args: {
    state: 'info',
    title: "We've just released a new feature",
    description: defaultDescription,
    onClose: () => {},
  },
};

export const Error: Story = {
  args: {
    state: 'error',
    title: 'There was a problem with that action',
    description: defaultDescription,
    onClose: () => {},
  },
};

export const Warning: Story = {
  args: {
    state: 'warning',
    title: 'Just to let you know this might be a problem',
    description: defaultDescription,
    onClose: () => {},
  },
};

export const Grey: Story = {
  args: {
    state: 'grey',
    title: "We've just released a new feature",
    description: defaultDescription,
    onClose: () => {},
  },
};

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div className="flex flex-col gap-4 max-w-2xl">
      <Banner state="success" title="You added a new reward" description={defaultDescription} onClose={() => {}} />
      <Banner state="info" title="We've just released a new feature" description={defaultDescription} onClose={() => {}} />
      <Banner state="error" title="There was a problem with that action" description={defaultDescription} onClose={() => {}} />
      <Banner state="warning" title="Just to let you know this might be a problem" description={defaultDescription} onClose={() => {}} />
      <Banner state="grey" title="We've just released a new feature" description={defaultDescription} onClose={() => {}} />
    </div>
  ),
};

export const AnimatedExample: Story = {
  name: 'Example: Click to show',
  parameters: {
    docs: {
      description: {
        story: 'Click the button to show an animated Banner. Uses motion for enter/exit.',
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
              <Banner
                state="success"
                title="You added a new reward"
                description={defaultDescription}
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
