import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: [],
  parameters: {
    docs: {
      description: {
        component:
          'A toggle/switch component for binary on/off states. Available in 2 sizes (sm, md) with Default, Hover, Pressed, and Disabled states. Shows a checkmark icon when toggled on. Extracted from the Cater Design Systems Figma.',
      },
      source: { type: 'dynamic' },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Size of the toggle. Maps to Figma "Size" property.',
      table: { defaultValue: { summary: 'md' } },
    },
    checked: {
      control: 'boolean',
      description: 'Controlled checked state. Maps to Figma "Switch" property.',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle is disabled. Maps to Figma "State=Disabled".',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: { size: 'md' },
};

export const On: Story = {
  args: { size: 'md', defaultChecked: true },
};

export const SmallOff: Story = {
  args: { size: 'sm' },
  name: 'Small – Off',
};

export const SmallOn: Story = {
  args: { size: 'sm', defaultChecked: true },
  name: 'Small – On',
};

export const DisabledOff: Story = {
  args: { size: 'md', disabled: true },
  name: 'Disabled – Off',
};

export const DisabledOn: Story = {
  args: { size: 'md', disabled: true, defaultChecked: true },
  name: 'Disabled – On',
};

const ControlledToggle = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex items-center gap-3">
      <Toggle checked={checked} onChange={setChecked} />
      <span className="font-body text-text-subtitle text-sm">
        {checked ? 'On' : 'Off'}
      </span>
    </div>
  );
};

export const Controlled: Story = {
  render: () => <ControlledToggle />,
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="font-body font-semibold text-text-title mb-3">Medium</p>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-1">
            <Toggle size="md" />
            <span className="text-xs text-text-caption">Default Off</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Toggle size="md" defaultChecked />
            <span className="text-xs text-text-caption">Default On</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Toggle size="md" disabled />
            <span className="text-xs text-text-caption">Disabled Off</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Toggle size="md" disabled defaultChecked />
            <span className="text-xs text-text-caption">Disabled On</span>
          </div>
        </div>
      </div>

      <div>
        <p className="font-body font-semibold text-text-title mb-3">Small</p>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-1">
            <Toggle size="sm" />
            <span className="text-xs text-text-caption">Default Off</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Toggle size="sm" defaultChecked />
            <span className="text-xs text-text-caption">Default On</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Toggle size="sm" disabled />
            <span className="text-xs text-text-caption">Disabled Off</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Toggle size="sm" disabled defaultChecked />
            <span className="text-xs text-text-caption">Disabled On</span>
          </div>
        </div>
      </div>
    </div>
  ),
  name: 'All Variants',
};
