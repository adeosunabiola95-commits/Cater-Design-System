import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from 'storybook/test';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: [],
  args: {
    onClick: fn(),
  },
  parameters: {
    docs: {
      description: {
        component:
          'Buttons trigger actions — Cater Design Systems / Figma (component set 20:3394). Six types, three sizes, four icon positions, optional fullWidth. Radius/full (pill) on root. Primary: Sherwood Green #073D30 + Gossip #CCF8B9 label.',
      },
      source: { type: 'dynamic' },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'destructive', 'outline', 'ghost', 'secondary-color', 'tertiary-grey'],
      description: 'Visual style of the button. Maps to Figma "Type" property.',
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the button. Maps to Figma "Size" property.',
      table: { defaultValue: { summary: 'medium' } },
    },
    icon: {
      control: 'select',
      options: ['none', 'left', 'right', 'alone'],
      description: 'Icon position. Maps to Figma "Icon" property.',
      table: { defaultValue: { summary: 'none' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled. Maps to Figma "State=disabled".',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Stretch the button to fill the width of its parent container.',
      table: { defaultValue: { summary: 'false' } },
    },
    children: {
      control: 'text',
      description: 'Button label text.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ===== TYPE VARIANTS =====

export const Primary: Story = {
  args: { variant: 'primary', children: 'Label' },
};

export const Destructive: Story = {
  args: { variant: 'destructive', children: 'Label' },
};

export const Outline: Story = {
  args: { variant: 'outline', children: 'Label' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Label' },
};

export const SecondaryColor: Story = {
  name: 'Secondary Color',
  args: { variant: 'secondary-color', children: 'Label' },
};

export const TertiaryGrey: Story = {
  name: 'Tertiary Grey',
  args: { variant: 'tertiary-grey', children: 'Label' },
};

// ===== SIZE VARIANTS =====

export const Small: Story = {
  args: { variant: 'primary', size: 'small', children: 'Label' },
};

export const Medium: Story = {
  args: { variant: 'primary', size: 'medium', children: 'Label' },
};

export const Large: Story = {
  args: { variant: 'primary', size: 'large', children: 'Label' },
};

// ===== ICON VARIANTS =====

export const IconLeft: Story = {
  name: 'Icon Left',
  args: { variant: 'primary', icon: 'left', children: 'Label' },
};

export const IconRight: Story = {
  name: 'Icon Right',
  args: { variant: 'primary', icon: 'right', children: 'Label' },
};

export const IconAlone: Story = {
  name: 'Icon Alone',
  args: { variant: 'primary', icon: 'alone' },
};

// ===== LAYOUT =====

export const FullWidth: Story = {
  name: 'Full Width',
  args: { variant: 'primary', fullWidth: true, children: 'Label' },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
};

export const FullWidthWithIcon: Story = {
  name: 'Full Width – Icon Right',
  args: { variant: 'primary', fullWidth: true, icon: 'right', children: 'Continue' },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
};

export const FullWidthTypes: Story = {
  name: 'Full Width – All Types',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 320 }}>
      <Button variant="primary" fullWidth>
        Primary
      </Button>
      <Button variant="destructive" fullWidth>
        Destructive
      </Button>
      <Button variant="outline" fullWidth>
        Outline
      </Button>
      <Button variant="ghost" fullWidth>
        Ghost
      </Button>
      <Button variant="secondary-color" fullWidth>
        Secondary
      </Button>
      <Button variant="tertiary-grey" fullWidth>
        Tertiary
      </Button>
    </div>
  ),
};

// ===== STATE VARIANTS =====

export const Disabled: Story = {
  args: { variant: 'primary', disabled: true, children: 'Label' },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /label/i });
    await userEvent.click(button);
    await expect(button).toBeDisabled();
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};

export const DestructiveDisabled: Story = {
  name: 'Destructive Disabled',
  args: { variant: 'destructive', disabled: true, children: 'Label' },
};

export const OutlineDisabled: Story = {
  name: 'Outline Disabled',
  args: { variant: 'outline', disabled: true, children: 'Label' },
};

// ===== ALL TYPES AT MEDIUM SIZE =====

export const AllTypes: Story = {
  name: 'All Types',
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="secondary-color">Secondary</Button>
      <Button variant="tertiary-grey">Tertiary</Button>
    </div>
  ),
};

// ===== ALL SIZES =====

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
};

// ===== ALL ICON POSITIONS =====

export const AllIconPositions: Story = {
  name: 'All Icon Positions',
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button icon="none">No Icon</Button>
      <Button icon="left">Icon Left</Button>
      <Button icon="right">Icon Right</Button>
      <Button icon="alone" />
    </div>
  ),
};

// ===== HOVER STATES =====

const hoverOverrides: Record<string, string> = {
  primary: 'bg-sherwood-chelsea-gem-900',
  destructive: 'bg-bright-red-900',
  outline: 'bg-mirage-100',
  ghost: 'bg-mirage-100',
  'secondary-color': 'bg-salem-100',
  'tertiary-grey': 'bg-mirage-100',
};

export const AllHovered: Story = {
  name: 'All Types Hovered',
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      {(['primary', 'destructive', 'outline', 'ghost', 'secondary-color', 'tertiary-grey'] as const).map((v) => (
        <Button key={v} variant={v} className={hoverOverrides[v]}>
          {v.charAt(0).toUpperCase() + v.slice(1)}
        </Button>
      ))}
    </div>
  ),
};

// ===== FOCUSED STATES =====

const focusedStyles: Record<string, React.CSSProperties> = {
  primary: {
    backgroundColor: '#073D30',
    color: '#CCF8B9',
    boxShadow: '0 0 0 2px #FFFFFF, 0 0 0 4px #8DE5D0',
  },
  destructive: { backgroundColor: '#6B0100', boxShadow: '0 0 0 2px #FFFFFF, 0 0 0 4px #E89A9A' },
  outline: { backgroundColor: '#F1F2F5', borderColor: 'transparent', boxShadow: '0 0 0 2px #FFFFFF, 0 0 0 4px #CEECDA' },
  ghost: { backgroundColor: '#F1F2F5', boxShadow: '0 0 0 2px #FFFFFF, 0 0 0 4px #CEECDA' },
  'secondary-color': { backgroundColor: '#CEECDA', boxShadow: '0 0 0 2px #FFFFFF, 0 0 0 4px #CEECDA' },
  'tertiary-grey': { backgroundColor: '#F1F2F5', boxShadow: '0 0 0 2px #FFFFFF, 0 0 0 4px #CEECDA' },
};

export const AllFocused: Story = {
  name: 'All Types Focused',
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
      {(['primary', 'destructive', 'outline', 'ghost', 'secondary-color', 'tertiary-grey'] as const).map((v) => (
        <Button key={v} variant={v} style={focusedStyles[v]}>
          {v.charAt(0).toUpperCase() + v.slice(1)}
        </Button>
      ))}
    </div>
  ),
};

// ===== ALL DISABLED STATES =====

export const AllDisabled: Story = {
  name: 'All Types Disabled',
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary" disabled>Primary</Button>
      <Button variant="destructive" disabled>Destructive</Button>
      <Button variant="outline" disabled>Outline</Button>
      <Button variant="ghost" disabled>Ghost</Button>
      <Button variant="secondary-color" disabled>Secondary</Button>
      <Button variant="tertiary-grey" disabled>Tertiary</Button>
    </div>
  ),
};
