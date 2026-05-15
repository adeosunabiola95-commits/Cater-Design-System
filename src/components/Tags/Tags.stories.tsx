import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tags } from './Tags';

const meta: Meta<typeof Tags> = {
  title: 'Components/Tags',
  component: Tags,
  tags: [],
  parameters: {
    docs: {
      description: {
        component:
          'Tags are pill-shaped labels for categorization or filtering. Available in Base, with checkbox, and with flags types; default, with cancel, hover, and with tag states; and sm/md sizes. Extracted from the Cater Design Systems Figma.',
      },
      source: { type: 'dynamic' },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['base', 'withcheckbox', 'withflags'],
      description: 'Tag type. Maps to Figma "Type" property.',
      table: { defaultValue: { summary: 'base' } },
    },
    state: {
      control: 'select',
      options: ['default', 'withcancel', 'hover', 'withtag'],
      description: 'Tag state. Maps to Figma "State" property.',
      table: { defaultValue: { summary: 'default' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Tag size. Maps to Figma "Size" property.',
      table: { defaultValue: { summary: 'md' } },
    },
    children: {
      control: 'text',
      description: 'Tag label text.',
    },
    onRemove: {
      action: 'removed',
      description: 'Called when cancel/remove is clicked.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tags>;

// ===== TYPE VARIANTS =====

export const Base: Story = {
  args: { type: 'base', children: 'New arrivals' },
};

export const WithCheckbox: Story = {
  name: 'With Checkbox',
  args: { type: 'withcheckbox', children: 'New arrivals' },
};

export const WithFlags: Story = {
  name: 'With Flags',
  args: { type: 'withflags', children: 'New arrivals' },
};

// ===== STATE VARIANTS =====

export const Default: Story = {
  args: { state: 'default', children: 'New arrivals' },
};

export const WithCancel: Story = {
  name: 'With Cancel',
  args: { state: 'withcancel', onRemove: () => {}, children: 'New arrivals' },
};

export const Hover: Story = {
  args: { state: 'hover', children: 'New arrivals' },
};

export const WithTag: Story = {
  name: 'With Tag (count)',
  args: { state: 'withtag', count: '5', children: 'New arrivals' },
};

// ===== SIZE VARIANTS =====

export const Small: Story = {
  args: { size: 'sm', children: 'New arrivals' },
};

export const Medium: Story = {
  args: { size: 'md', children: 'New arrivals' },
};

// ===== ALL TYPES =====

export const AllTypes: Story = {
  name: 'All Types',
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Tags type="base">Base</Tags>
      <Tags type="withcheckbox">With Checkbox</Tags>
      <Tags type="withflags">With Flags</Tags>
    </div>
  ),
};

// ===== ALL SIZES =====

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Tags size="sm">Small</Tags>
      <Tags size="md">Medium</Tags>
    </div>
  ),
};

// ===== WITH CANCEL =====

export const InteractiveWithCancel: Story = {
  name: 'Interactive With Cancel',
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Tags onRemove={() => window.alert('Tag removed')}>Click X to remove</Tags>
    </div>
  ),
};

// ===== CHECKBOX INTERACTIVE =====

export const InteractiveCheckbox: Story = {
  name: 'Interactive Checkbox',
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return (
      <Tags type="withcheckbox" checked={checked} onCheckedChange={setChecked}>
        Toggle me
      </Tags>
    );
  },
};
