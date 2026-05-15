import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from './Modal';
import { Button } from '../Button';

const meta: Meta<typeof Drawer> = {
  /** Sibling of `Components/Modal` so Modal stays a single component (not a sidebar folder). */
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'desktop' },
    docs: {
      description: {
        component:
          'Slide-in panel from the left or right for secondary flows. Reuses the same `Drawer` implementation as before (Figma node 486:2140). Width presets: sm 381px, md 420px.',
      },
      story: { iframeHeight: 720 },
      source: { type: 'dynamic' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const AddHeaderText: Story = {
  name: 'Add header text',
  render: function AddHeaderTextRender() {
    const [open, setOpen] = React.useState(true);

    return (
      <div className="flex min-h-screen w-full items-center justify-center">
        <Button size="small" variant="secondary-color" onClick={() => setOpen(true)}>
          Open drawer
        </Button>

        <Drawer open={open} onClose={() => setOpen(false)} title="Add Title" width="sm">
          <div className="flex flex-col items-center gap-5">
            <h3 className="font-body font-bold text-[20px] leading-[120%] text-center text-text-title">
              Add header text here
            </h3>
            <p className="font-body text-[14px] leading-[150%] text-center text-text-subtitle max-w-[333px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
            </p>
            <Button variant="secondary-color" size="medium" onClick={() => setOpen(false)}>
              Save
            </Button>
          </div>
        </Drawer>
      </div>
    );
  },
};
