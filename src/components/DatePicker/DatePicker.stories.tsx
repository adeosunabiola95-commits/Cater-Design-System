import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Date picker with single, dual (range), and pre-set range variants. Single: Figma "Date picker" 377×331. Dual: Figma "Dual dates" (551:2791) 660×331. Pre-set range: preset buttons + calendar, max-w 538px.',
      },
      source: { type: 'dynamic' },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['single', 'dual', 'preset-range'],
      description: 'Calendar variant.',
      table: { defaultValue: { summary: 'single' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const SingleDate: Story = {
  args: {
    variant: 'single',
  },
};

export const WithDisabledDates: Story = {
  args: {
    variant: 'single',
    isDateDisabled: (date) => {
      const d = date.getDay();
      return d === 0 || d === 6;
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Uses `isDateDisabled` to disable weekends. Disabled cells use Figma state: Date-picker element=Disabled (text-mirage-400).',
      },
    },
  },
};

export const DualDate: Story = {
  args: {
    variant: 'dual',
  },
  parameters: {
    layout: 'centered',
    viewport: { defaultViewport: 'desktop' },
    docs: {
      description: {
        story:
          'Dual date picker for range selection. Matches Figma "Dual dates" (551:2791): 660×331, two calendar panels, 24px padding, 20px gap. Left panel: [←] Month Year + calendar. Right panel: Month Year [→] + calendar.',
      },
    },
  },
};

export const DualDateWithDisabledDates: Story = {
  args: {
    variant: 'dual',
    isDateDisabled: (date) => {
      const d = date.getDay();
      return d === 0 || d === 6;
    },
  },
  parameters: {
    layout: 'centered',
    viewport: { defaultViewport: 'desktop' },
    docs: {
      description: {
        story:
          'Dual date picker with weekends disabled. Disabled dates use Figma state: Date-picker element=Disabled (white bg, text-mirage-400, cursor-not-allowed). Today dot is hidden on disabled dates.',
      },
    },
  },
};

export const PresetRange: Story = {
  args: {
    variant: 'preset-range',
  },
  parameters: {
    layout: 'centered',
    viewport: { defaultViewport: 'desktop' },
    docs: {
      description: {
        story:
          'Pre-set range date picker. Matches Figma "Date picker" Pre-set range variant: preset buttons (Last 7 days, Last 30 days, This month, Last month) on the left, calendar on the right. Header shows the selected range. Pass custom `presets` to match your Figma spec.',
      },
    },
  },
};

export const PresetRangeWithCustomPresets: Story = {
  args: {
    variant: 'preset-range',
    presets: [
      { label: 'Today', getValue: () => { const d = new Date(); return [d, d]; } },
      { label: 'Yesterday', getValue: () => { const d = new Date(); d.setDate(d.getDate() - 1); return [d, d]; } },
      { label: 'Last 7 days', getValue: () => { const e = new Date(); const s = new Date(e); s.setDate(s.getDate() - 6); return [s, e]; } },
      { label: 'Last 30 days', getValue: () => { const e = new Date(); const s = new Date(e); s.setDate(s.getDate() - 29); return [s, e]; } },
      { label: 'This quarter', getValue: () => { const n = new Date(); const q = Math.floor(n.getMonth() / 3) + 1; const s = new Date(n.getFullYear(), (q - 1) * 3, 1); const e = new Date(n.getFullYear(), q * 3, 0); return [s, e]; } },
    ],
  },
  parameters: {
    layout: 'centered',
    viewport: { defaultViewport: 'desktop' },
    docs: {
      description: {
        story: 'Pre-set range with custom presets. Use the `presets` prop to define labels and date ranges that match your Figma design.',
      },
    },
  },
};
