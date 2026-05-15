import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: [],
  parameters: {
    docs: {
      description: {
        component:
          'A radio button component for single-select choices within a group. Available in 2 sizes (sm, md) with Default, Hover, Focused, and Disabled states. Extracted from the Cater Design Systems Figma.',
      },
      source: { type: 'dynamic' },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['mp', 'saas'],
      description: 'Visual variant. mp = Checboxes mp (outlined), saas = Checboxes saas (filled when selected).',
      table: { defaultValue: { summary: 'mp' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Size of the radio button. Maps to Figma "Size" property.',
      table: { defaultValue: { summary: 'md' } },
    },
    label: {
      control: 'text',
      description: 'Label text displayed beside the radio button.',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio is disabled. Maps to Figma "State=Disabled".',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: { label: 'Orange Juice', size: 'md', name: 'demo' },
};

export const Selected: Story = {
  args: { label: 'Apple Juice', size: 'md', selected: true, name: 'demo' },
};

export const SmallDefault: Story = {
  args: { label: 'Orange Juice', size: 'sm', name: 'demo-sm' },
  name: 'Small – Default',
};

export const SmallSelected: Story = {
  args: { label: 'Apple Juice', size: 'sm', selected: true, name: 'demo-sm' },
  name: 'Small – Selected',
};

export const DisabledUnselected: Story = {
  args: { label: 'Unavailable', size: 'md', disabled: true, name: 'demo-dis' },
  name: 'Disabled – Unselected',
};

export const DisabledSelected: Story = {
  args: { label: 'Unavailable', size: 'md', disabled: true, selected: true, name: 'demo-dis' },
  name: 'Disabled – Selected',
};

export const SaasDefault: Story = {
  args: { label: 'Orange Juice', variant: 'saas', size: 'md', name: 'demo-saas' },
  name: 'Saas – Default',
};

export const SaasSelected: Story = {
  args: { label: 'Apple Juice', variant: 'saas', size: 'md', selected: true, name: 'demo-saas' },
  name: 'Saas – Selected',
};

const RadioGroupDemo = () => {
  const [selected, setSelected] = useState('apple');
  const options = [
    { value: 'orange', label: 'Orange Juice' },
    { value: 'apple', label: 'Apple Juice' },
    { value: 'grape', label: 'Grape Juice' },
  ];

  return (
    <div className="flex flex-col gap-3" role="radiogroup" aria-label="Juice selection">
      {options.map(opt => (
        <Radio
          key={opt.value}
          name="juice"
          value={opt.value}
          label={opt.label}
          selected={selected === opt.value}
          onChange={() => setSelected(opt.value)}
        />
      ))}
    </div>
  );
};

export const RadioGroup: Story = {
  render: () => <RadioGroupDemo />,
  name: 'Radio Group',
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="font-body font-semibold text-text-title mb-3">Checboxes mp (outlined)</p>
        <div className="flex flex-col gap-3">
          <Radio variant="mp" label="Unselected" size="md" name="md-demo" />
          <Radio variant="mp" label="Selected" size="md" selected name="md-demo-2" />
          <Radio variant="mp" label="Disabled Unselected" size="md" disabled name="md-demo-3" />
          <Radio variant="mp" label="Disabled Selected" size="md" disabled selected name="md-demo-4" />
        </div>
      </div>

      <div>
        <p className="font-body font-semibold text-text-title mb-3">Checboxes saas (filled when selected)</p>
        <div className="flex flex-col gap-3">
          <Radio variant="saas" label="Unselected" size="md" name="md-saas" />
          <Radio variant="saas" label="Selected" size="md" selected name="md-saas-2" />
          <Radio variant="saas" label="Disabled Unselected" size="md" disabled name="md-saas-3" />
          <Radio variant="saas" label="Disabled Selected" size="md" disabled selected name="md-saas-4" />
        </div>
      </div>

      <div>
        <p className="font-body font-semibold text-text-title mb-3">Small (mp & saas)</p>
        <div className="flex flex-col gap-3">
          <Radio variant="mp" label="mp Unselected" size="sm" name="sm-demo" />
          <Radio variant="mp" label="mp Selected" size="sm" selected name="sm-demo-2" />
          <Radio variant="saas" label="saas Unselected" size="sm" name="sm-saas" />
          <Radio variant="saas" label="saas Selected" size="sm" selected name="sm-saas-2" />
        </div>
      </div>
    </div>
  ),
  name: 'All Variants',
};
