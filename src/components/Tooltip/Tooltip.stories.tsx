import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from 'storybook/test';
import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';

/** Hover trigger so portal tooltip code runs under Vitest / coverage. */
async function hoverTooltipTrigger(canvasElement: HTMLElement, name: RegExp | string) {
  const canvas = within(canvasElement);
  const trigger = canvas.getByRole('button', { name });
  await userEvent.hover(trigger);
  await expect(document.querySelector('[role="tooltip"]')).toBeTruthy();
  await userEvent.unhover(trigger);
}

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Tooltips provide contextual information on hover. Maps to Figma Tooltips (276:1543). Variants: Color (Dark/Light), Type (6 placements), State (Single-line/Description).',
      },
      source: { type: 'dynamic' },
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-[200px] flex items-center justify-center p-8">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    content: {
      control: 'text',
      description: 'Tooltip content. Single line or multi-line (Description state).',
    },
    color: {
      control: 'select',
      options: ['dark', 'light'],
      description: 'Visual variant. Maps to Figma "Color" property.',
      table: { defaultValue: { summary: 'dark' } },
    },
    placement: {
      control: 'select',
      options: [
        'top-right',
        'top-left',
        'top-center',
        'bottom-right',
        'bottom-left',
        'bottom-center',
      ],
      description: 'Placement of tooltip relative to trigger. Maps to Figma "Type" property.',
      table: { defaultValue: { summary: 'top-center' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

const singleLine = 'This is a tooltip';
const description =
  'This a long descriptive tooltips, keep it at a minimum of 3 lines consistently across different usage';

// ===== COLOR VARIANTS =====

export const Dark: Story = {
  args: {
    content: singleLine,
    color: 'dark',
    placement: 'top-center',
    children: <Button variant="outline">Hover me</Button>,
  },
  play: async ({ canvasElement }) => {
    await hoverTooltipTrigger(canvasElement, /hover me/i);
  },
};

export const Light: Story = {
  args: {
    content: singleLine,
    color: 'light',
    placement: 'top-center',
    children: <Button variant="outline">Hover me</Button>,
  },
  play: async ({ canvasElement }) => {
    await hoverTooltipTrigger(canvasElement, /hover me/i);
  },
};

// ===== PLACEMENT VARIANTS =====

export const TopRight: Story = {
  args: {
    content: singleLine,
    color: 'dark',
    placement: 'top-right',
    children: <Button variant="outline">Top-right</Button>,
  },
};

export const TopLeft: Story = {
  args: {
    content: singleLine,
    color: 'dark',
    placement: 'top-left',
    children: <Button variant="outline">Top-left</Button>,
  },
};

export const TopCenter: Story = {
  args: {
    content: singleLine,
    color: 'dark',
    placement: 'top-center',
    children: <Button variant="outline">Top-center</Button>,
  },
};

export const BottomRight: Story = {
  args: {
    content: singleLine,
    color: 'dark',
    placement: 'bottom-right',
    children: <Button variant="outline">Bottom-right</Button>,
  },
};

export const BottomLeft: Story = {
  args: {
    content: singleLine,
    color: 'dark',
    placement: 'bottom-left',
    children: <Button variant="outline">Bottom-left</Button>,
  },
};

export const BottomCenter: Story = {
  args: {
    content: singleLine,
    color: 'dark',
    placement: 'bottom-center',
    children: <Button variant="outline">Bottom-center</Button>,
  },
};

// ===== STATE VARIANTS =====

export const SingleLine: Story = {
  args: {
    content: singleLine,
    color: 'dark',
    placement: 'top-center',
    children: <Button variant="outline">Single-line</Button>,
  },
};

export const Description: Story = {
  args: {
    content: description,
    color: "light",
    placement: "top-center",
    children: <Button variant="outline">Description</Button>,
  },
  play: async ({ canvasElement }) => {
    await hoverTooltipTrigger(canvasElement, /description/i);
  },
};

// ===== ALL 24 VARIANTS GRID =====

export const AllVariants: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getAllByRole('button')[0]!);
    await expect(document.querySelector('[role="tooltip"]')).toBeTruthy();
    await userEvent.unhover(canvas.getAllByRole('button')[0]!);
  },
  render: () => (
    <div className="flex flex-wrap gap-8 p-16">
      {(['dark', 'light'] as const).map((color) =>
        (
          [
            'top-right',
            'top-left',
            'top-center',
            'bottom-right',
            'bottom-left',
            'bottom-center',
          ] as const
        ).map((placement) => (
          <Tooltip
            key={`${color}-${placement}`}
            content={singleLine}
            color={color}
            placement={placement}
          >
            <button
              type="button"
              className="rounded border border-border-default bg-white px-3 py-2 font-body text-sm font-medium text-text-title hover:bg-mirage-100"
            >
              {color} / {placement}
            </button>
          </Tooltip>
        ))
      )}
    </div>
  ),
};
