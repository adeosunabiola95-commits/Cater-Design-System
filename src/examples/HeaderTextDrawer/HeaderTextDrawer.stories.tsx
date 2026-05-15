import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from '../../components/Modal/Modal';
import { Button } from '../../components/Button';

const meta: Meta<typeof Drawer> = {
  title: 'Examples/Header Text Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Add Header Text Drawer pattern from Figma (node 486:2140). Slide-in panel with title, centered content, and Save action.',
      },
      source: { type: 'dynamic' },
    },
  },
};

export default meta;

export const AddHeaderTextDrawer: StoryObj<typeof Drawer> = {
  render: function AddHeaderTextDrawerRender() {
    const [open, setOpen] = React.useState(false);

    return (
      <div className="flex min-h-screen w-full items-center justify-center">
        <Button size="small" variant="secondary-color" onClick={() => setOpen(true)}>
          Open Add Header Text Drawer
        </Button>

        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          title="Add Title"
          width="sm"
        >
          <div className="flex flex-col items-center gap-5">
            <h3 className="font-body font-bold text-[20px] leading-[120%] text-center text-text-title">
              Add header text here
            </h3>
            <p className="font-body text-[14px] leading-[150%] text-center text-text-subtitle max-w-[333px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
            </p>
            <Button
              variant="secondary-color"
              size="medium"
              onClick={() => setOpen(false)}
            >
              Save
            </Button>
          </div>
        </Drawer>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Drawer pattern with centered content: title, description text, and Save button. Maps to Figma node 486:2140. Width sm (381px).',
      },
    },
  },
};
