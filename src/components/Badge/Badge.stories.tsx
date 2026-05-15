import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import { Checkbox } from '../Checkbox';
import { Radio } from '../Radio';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: [],
  parameters: {
    docs: {
      description: {
        component:
          'Badges display short labels or status. Available in 5 colors (Indigo, Green, Red, Orange, Grey), 2 sizes (sm, md), with optional outline and icon. Extracted from the Cater Design Systems Figma.',
      },
      source: { type: 'dynamic' },
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['indigo', 'green', 'red', 'orange', 'grey'],
      description: 'Badge color. Maps to Figma "Color" property.',
      table: { defaultValue: { summary: 'indigo' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Badge size. Maps to Figma "Size" property.',
      table: { defaultValue: { summary: 'sm' } },
    },
    outline: {
      control: 'boolean',
      description: 'Outline style. Maps to Figma "Outline" property.',
      table: { defaultValue: { summary: 'false' } },
    },
    showIcon: {
      control: 'boolean',
      description: 'Show icon before label. Maps to Figma "With icon" property.',
      table: { defaultValue: { summary: 'false' } },
    },
    state: {
      control: 'select',
      options: ['light', 'lighter'],
      description: 'Background intensity. Maps to Figma "State" property.',
      table: { defaultValue: { summary: 'light' } },
    },
    children: {
      control: 'text',
      description: 'Badge label text.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// ===== COLOR VARIANTS =====

export const Indigo: Story = {
  args: { color: 'indigo', children: 'Label' },
};

export const Green: Story = {
  args: { color: 'green', children: 'Label' },
};

export const Red: Story = {
  args: { color: 'red', children: 'Label' },
};

export const Orange: Story = {
  args: { color: 'orange', children: 'Label' },
};

export const Grey: Story = {
  args: { color: 'grey', children: 'Label' },
};

// ===== SIZE VARIANTS =====

export const Small: Story = {
  args: { size: 'sm', color: 'indigo', children: 'Label' },
};

export const Medium: Story = {
  args: { size: 'md', color: 'indigo', children: 'Label' },
};

// ===== OUTLINE =====

export const Outline: Story = {
  args: { outline: true, color: 'indigo', children: 'Label' },
};

// ===== WITH ICON =====

export const WithIcon: Story = {
  args: { showIcon: true, color: 'indigo', children: 'Label' },
};

// ===== STATE VARIANTS =====

export const Light: Story = {
  args: { state: 'light', color: 'indigo', children: 'Label' },
};

export const Lighter: Story = {
  args: { state: 'lighter', color: 'indigo', children: 'Label' },
};

// ===== ALL COLORS =====

export const AllColors: Story = {
  name: 'All Colors',
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge color="indigo">Indigo</Badge>
      <Badge color="green">Green</Badge>
      <Badge color="red">Red</Badge>
      <Badge color="orange">Orange</Badge>
      <Badge color="grey">Grey</Badge>
    </div>
  ),
};

// ===== ALL COLORS WITH ICON =====

export const AllColorsWithIcon: Story = {
  name: 'All Colors With Icon',
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge color="indigo" showIcon>Indigo</Badge>
      <Badge color="green" showIcon>Green</Badge>
      <Badge color="red" showIcon>Red</Badge>
      <Badge color="orange" showIcon>Orange</Badge>
      <Badge color="grey" showIcon>Grey</Badge>
    </div>
  ),
};

// ===== OUTLINE VARIANTS =====

export const AllOutline: Story = {
  name: 'All Colors Outline',
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge color="indigo" outline>Indigo</Badge>
      <Badge color="green" outline>Green</Badge>
      <Badge color="red" outline>Red</Badge>
      <Badge color="orange" outline>Orange</Badge>
      <Badge color="grey" outline>Grey</Badge>
    </div>
  ),
};

// ===== LIGHTER STATE =====

export const AllLighter: Story = {
  name: 'All Colors Lighter',
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge color="indigo" state="lighter">Indigo</Badge>
      <Badge color="green" state="lighter">Green</Badge>
      <Badge color="red" state="lighter">Red</Badge>
      <Badge color="orange" state="lighter">Orange</Badge>
      <Badge color="grey" state="lighter">Grey</Badge>
    </div>
  ),
};

// ===== SIZES =====

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Badge size="sm" color="indigo">Small</Badge>
      <Badge size="md" color="indigo">Medium</Badge>
    </div>
  ),
};

// ===== BADGE INFO (from Figma 438:2780) =====

export const BadgeInfo: Story = {
  name: 'Badge Info',
  parameters: {
    docs: {
      description: {
        story: 'Example from Figma "Badge info": badges in context with Checkbox and Radio. Badges sit 6–8px from the text. Uses Checkbox (mp), Radio (mp), and disabled Radio states.',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-6 max-w-[280px] font-body">
      {/* Example 1: Checkbox + Recommended badge */}
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-[6px] py-2">
          <Checkbox variant="mp" size="sm" label="Chicken Fajitas" />
          <Badge color="indigo" showIcon>Recommended</Badge>
        </div>
        <div className="flex items-center py-2">
          <Checkbox variant="mp" size="sm" label="Steak with Roasted Veggies" />
        </div>
      </div>
      {/* Example 2: Radio (selected) + Recommended outline badge */}
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-[6px] py-2">
          <Radio variant="mp" size="sm" name="badge-info-radio" label="Chicken Fajitas" defaultChecked />
          <Badge color="indigo" showIcon outline>Recommended</Badge>
        </div>
        <div className="flex items-center py-2">
          <Radio variant="mp" size="sm" name="badge-info-radio" label="Steak with Roasted Veggies" />
        </div>
      </div>
      {/* Example 3: Disabled Radio + Unavailable badge */}
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-[6px] py-2">
          <Radio variant="mp" size="sm" name="badge-info-disabled" label="Chicken Fajitas" disabled selected />
          <Badge color="grey" showIcon>Unavailable</Badge>
        </div>
        <div className="flex items-center py-2">
          <Radio variant="mp" size="sm" name="badge-info-disabled" label="Steak with Roasted Veggies" disabled />
        </div>
      </div>
    </div>
  ),
};
