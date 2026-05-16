import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../components/Button';
import { CustomizeOrderModal } from './CustomizeOrderModal';

const meta: Meta<typeof CustomizeOrderModal> = {
  title: 'Examples/Modal',
  component: CustomizeOrderModal,
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'desktop' },
    docs: {
      description: {
        component:
          'Customize order modal from Figma [`4696:20074`](https://www.figma.com/design/tK5SjqGRgeVr5w5tmxuLDa/Cater-Design-System?node-id=4696-20074). Composed from `Modal`, `InputField`, `MessageBox`, `Badge`, and option pills.',
      },
      source: { type: 'dynamic' },
      story: { iframeHeight: 900, inline: false },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CustomizeOrderModal>;

export const CustomizeOrder: Story = {
  name: 'Customize order',
  render: function CustomizeOrderRender() {
    const [open, setOpen] = React.useState(true);

    return (
      <div className="flex min-h-screen w-full items-center justify-center">
        <Button size="small" onClick={() => setOpen(true)}>
          Open customize order
        </Button>
        <CustomizeOrderModal open={open} onClose={() => setOpen(false)} />
      </div>
    );
  },
};
