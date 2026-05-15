import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DateInput } from './DateInput';

const meta: Meta<typeof DateInput> = {
  title: 'Components/DateInput',
  component: DateInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Date input field that opens the single-date calendar in a popover when clicked. Combines InputField with DatePicker for date selection.',
      },
      source: { type: 'dynamic' },
    },
  },
  argTypes: {
    label: { control: 'text' },
    hint: { control: 'text' },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      table: { defaultValue: { summary: 'md' } },
    },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof DateInput>;

export const Default: Story = {
  args: {
    label: 'Due Date *',
    hint: 'Click the field to open the calendar.',
    placeholder: 'Select date',
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: 'Due Date *',
    hint: 'Pre-selected date.',
    defaultValue: new Date(2025, 11, 19),
  },
};

export const WithDisabledDates: Story = {
  args: {
    label: 'Due Date *',
    hint: 'Weekends are disabled.',
    isDateDisabled: (date) => {
      const d = date.getDay();
      return d === 0 || d === 6;
    },
  },
};

export const Small: Story = {
  args: {
    label: 'Due Date *',
    size: 'sm',
    placeholder: 'Select date',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Due Date *',
    defaultValue: new Date(2025, 11, 19),
    disabled: true,
  },
};
