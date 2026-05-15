import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { CheckboxGroupItem } from './CheckboxGroupItem';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: [],
  parameters: {
    docs: {
      description: {
        component:
          'A checkbox component for multi-select options. Available in 2 sizes (sm, md) with Default, Hover, Focused, and Disabled states. Supports checked and indeterminate states. Extracted from the Cater Design Systems Figma.',
      },
      source: { type: 'dynamic' },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['mp', 'saas'],
      description: 'Visual variant. mp = Checboxes mp (outlined), saas = Checboxes saas (filled when checked).',
      table: { defaultValue: { summary: 'mp' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Size of the checkbox. Maps to Figma "Size" property.',
      table: { defaultValue: { summary: 'md' } },
    },
    checked: {
      control: 'boolean',
      description: 'Controlled checked state. Maps to Figma "Checked" property.',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Indeterminate state (partial selection). Maps to Figma "indeterminate" property.',
    },
    label: {
      control: 'text',
      description: 'Label text displayed beside the checkbox.',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled. Maps to Figma "State=Disabled".',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: { label: 'Orange Juice', size: 'md' },
};

export const Checked: Story = {
  args: { label: 'Apple Juice', size: 'md', defaultChecked: true },
};

export const Indeterminate: Story = {
  args: { label: 'Select All', size: 'md', indeterminate: true },
};

export const SmallDefault: Story = {
  args: { label: 'Orange Juice', size: 'sm' },
  name: 'Small – Default',
};

export const SmallChecked: Story = {
  args: { label: 'Apple Juice', size: 'sm', defaultChecked: true },
  name: 'Small – Checked',
};

export const DisabledUnchecked: Story = {
  args: { label: 'Unavailable', size: 'md', disabled: true },
  name: 'Disabled – Unchecked',
};

export const DisabledChecked: Story = {
  args: { label: 'Unavailable', size: 'md', disabled: true, defaultChecked: true },
  name: 'Disabled – Checked',
};

export const SaasDefault: Story = {
  args: { label: 'Orange Juice', variant: 'saas', size: 'md' },
  name: 'Saas – Default',
};

export const SaasChecked: Story = {
  args: { label: 'Apple Juice', variant: 'saas', size: 'md', defaultChecked: true },
  name: 'Saas – Checked',
};

export const SaasIndeterminate: Story = {
  args: { label: 'Select All', variant: 'saas', size: 'md', indeterminate: true },
  name: 'Saas – Indeterminate',
};

const CheckboxGroupDemo = () => {
  const [items, setItems] = useState([
    { label: 'Orange Juice', checked: false },
    { label: 'Apple Juice', checked: true },
    { label: 'Grape Juice', checked: false },
  ]);

  const toggle = (index: number) => {
    setItems(prev =>
      prev.map((item, i) => (i === index ? { ...item, checked: !item.checked } : item))
    );
  };

  const allChecked = items.every(i => i.checked);
  const someChecked = items.some(i => i.checked) && !allChecked;

  return (
    <div className="flex flex-col gap-3">
      <Checkbox
        label="Select All"
        checked={allChecked}
        indeterminate={someChecked}
        onChange={() => {
          const next = !allChecked;
          setItems(prev => prev.map(item => ({ ...item, checked: next })));
        }}
      />
      <div className="flex flex-col gap-3 pl-6">
        {items.map((item, i) => (
          <Checkbox
            key={item.label}
            label={item.label}
            checked={item.checked}
            onChange={() => toggle(i)}
          />
        ))}
      </div>
    </div>
  );
};

export const CheckboxGroup: Story = {
  render: () => <CheckboxGroupDemo />,
  name: 'Checkbox Group',
};

import { Speaker2 } from '@/icons';

const groupItems = [
  {
    id: '1',
    icon: true,
    label: 'Pizza Fest Campaign',
    description: 'Boost sales with festive rewards, ready in minutes!',
    checked: false,
  },
  {
    id: '2',
    icon: true,
    label: 'Summer Promo',
    description: 'Seasonal offers and discounts for the summer.',
    checked: true,
  },
  {
    id: '3',
    icon: true,
    label: 'Third option',
    checked: false,
  },
];

export const CheckboxGroupItems: Story = {
  render: function CheckboxGroupItemsRender() {
    const [items, setItems] = useState(groupItems);
    return (
      <div className="flex max-w-md flex-col [&>*:not(:first-child)]:-mt-px">
        {items.map((item) => (
          <CheckboxGroupItem
            key={item.id}
            icon={item.icon ? <Speaker2 width={24} height={24} className="text-text-body" /> : undefined}
            label={item.label}
            description={'description' in item ? item.description : undefined}
            checked={item.checked}
            onChange={(checked) =>
              setItems((prev) =>
                prev.map((i) => (i.id === item.id ? { ...i, checked } : i))
              )
            }
          />
        ))}
      </div>
    );
  },
  name: 'Checkbox group items',
};

export const CheckboxGroupItemsWithIcon: Story = {
  render: function CheckboxGroupItemsWithIconRender() {
    const [checked, setChecked] = useState(false);
    return (
      <div className="max-w-md">
        <CheckboxGroupItem
          icon={<Speaker2 width={24} height={24} className="text-text-body" />}
          label="Pizza Fest Campaign"
          description="Boost sales with festive rewards, ready in minutes!"
          checked={checked}
          onChange={setChecked}
        />
      </div>
    );
  },
  name: 'Checkbox group item with icon',
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="font-body font-semibold text-text-title mb-3">Checboxes mp (outlined)</p>
        <div className="flex flex-col gap-3">
          <Checkbox variant="mp" label="Unchecked" size="md" />
          <Checkbox variant="mp" label="Checked" size="md" defaultChecked />
          <Checkbox variant="mp" label="Indeterminate" size="md" indeterminate />
          <Checkbox variant="mp" label="Disabled Unchecked" size="md" disabled />
          <Checkbox variant="mp" label="Disabled Checked" size="md" disabled defaultChecked />
        </div>
      </div>

      <div>
        <p className="font-body font-semibold text-text-title mb-3">Checboxes saas (filled when checked)</p>
        <div className="flex flex-col gap-3">
          <Checkbox variant="saas" label="Unchecked" size="md" />
          <Checkbox variant="saas" label="Checked" size="md" defaultChecked />
          <Checkbox variant="saas" label="Indeterminate" size="md" indeterminate />
          <Checkbox variant="saas" label="Disabled Unchecked" size="md" disabled />
          <Checkbox variant="saas" label="Disabled Checked" size="md" disabled defaultChecked />
        </div>
      </div>

      <div>
        <p className="font-body font-semibold text-text-title mb-3">Small (mp & saas)</p>
        <div className="flex flex-col gap-3">
          <Checkbox variant="mp" label="mp Unchecked" size="sm" />
          <Checkbox variant="mp" label="mp Checked" size="sm" defaultChecked />
          <Checkbox variant="saas" label="saas Unchecked" size="sm" />
          <Checkbox variant="saas" label="saas Checked" size="sm" defaultChecked />
        </div>
      </div>
    </div>
  ),
  name: 'All Variants',
};
