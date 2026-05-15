import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MessageBox } from './MessageBox';
import { Cancel } from '../../icons/icons/Cancel';
import { Chat } from '../../icons/icons/Chat';

const meta: Meta<typeof MessageBox> = {
  title: 'Components/Message Box',
  component: MessageBox,
  parameters: {
    docs: {
      description: {
        component:
          'A multiline text input (textarea) with the same styling as Input Field. Supports label, hint, sizes, error state, leading icon, and clear button. Uses the same border, shadow, focus ring, and motion animations.',
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
    action: {
      control: 'select',
      options: ['default', 'error'],
      table: { defaultValue: { summary: 'default' } },
    },
    placeholder: { control: 'text' },
    rows: { control: 'number', table: { defaultValue: { summary: '4' } } },
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'horizontal', 'both'],
      table: { defaultValue: { summary: 'vertical' } },
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof MessageBox>;

export const Default: Story = {
  args: {
    label: 'Message *',
    hint: 'Enter your message here.',
    placeholder: 'Type your message...',
  },
};

export const WithValue: Story = {
  name: 'With Value',
  args: {
    label: 'Message *',
    hint: 'Enter your message here.',
    defaultValue: 'Hello, I would like to inquire about your services.',
    placeholder: 'Type your message...',
  },
};

export const Small: Story = {
  args: {
    label: 'Message *',
    hint: 'Enter your message here.',
    size: 'sm',
    placeholder: 'Type your message...',
  },
};

export const Error: Story = {
  args: {
    label: 'Message *',
    hint: 'This field is required.',
    action: 'error',
    defaultValue: 'Incomplete message',
    placeholder: 'Type your message...',
  },
};

export const WithClearIcon: Story = {
  name: 'With Clear Icon',
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div style={{ width: 400 }}>
        <MessageBox
          label="Message *"
          hint="The clear icon appears when you type."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          clearIcon={<Cancel width={20} height={20} />}
          onClear={() => setValue('')}
          placeholder="Type your message..."
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    label: 'Message *',
    hint: 'This field is disabled.',
    defaultValue: 'Disabled content',
    disabled: true,
    placeholder: 'Type your message...',
  },
};

export const WithLeadingIcon: Story = {
  name: 'With Leading Icon',
  render: () => (
    <div style={{ width: 400 }}>
      <MessageBox
        label="Feedback *"
        hint="Share your thoughts with us."
        placeholder="Type your feedback..."
        leadingIcon={<Chat width={20} height={20} />}
      />
    </div>
  ),
};

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div className="flex flex-col gap-8" style={{ width: 400 }}>
      <MessageBox
        label="Default"
        placeholder="Default message box..."
      />
      <MessageBox
        label="With value"
        defaultValue="Some pre-filled content."
        placeholder="Type here..."
      />
      <MessageBox
        label="Error state"
        action="error"
        defaultValue="Invalid input"
        hint="Please correct this field."
        placeholder="Type here..."
      />
      <MessageBox
        label="Disabled"
        disabled
        defaultValue="Disabled content"
        placeholder="Type here..."
      />
    </div>
  ),
};
