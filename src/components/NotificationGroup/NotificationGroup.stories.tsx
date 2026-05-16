import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NotificationGroup } from './NotificationGroup';

const meta: Meta<typeof NotificationGroup> = {
  title: 'Components/Notification Group',
  component: NotificationGroup,
  parameters: {
    docs: {
      description: {
        component:
          'A notification settings row that pairs a Toggle/Switch with a title and description. Used for settings pages where users toggle individual notification preferences. Extracted from the Cater Design Systems Figma.',
      },
      source: { type: 'dynamic' },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Title text for the notification setting.',
    },
    description: {
      control: 'text',
      description: 'Optional description text below the title.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Size of the toggle switch. Maps to Figma "Notification group" variants.',
      table: { defaultValue: { summary: 'sm' } },
    },
    checked: {
      control: 'boolean',
      description: 'Controlled checked state of the toggle.',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle is disabled.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof NotificationGroup>;

export const SmallOff: Story = {
  args: {
    title: 'Notification settings',
    description: 'Allow text and email notification',
    size: 'sm',
  },
  name: 'Small – Off',
};

export const MediumOff: Story = {
  args: {
    title: 'Notification settings',
    description: 'Allow text and email notification',
    size: 'md',
  },
  name: 'Medium – Off',
};

export const SmallOn: Story = {
  args: {
    title: 'Notification settings',
    description: 'Allow text and email notification',
    size: 'sm',
    defaultChecked: true,
  },
  name: 'Small – On',
};

export const MediumOn: Story = {
  args: {
    title: 'Notification settings',
    description: 'Allow text and email notification',
    size: 'md',
    defaultChecked: true,
  },
  name: 'Medium – On',
};

const NotificationSettingsDemo = () => {
  const [settings, setSettings] = useState({
    push: true,
    email: false,
    sms: true,
    marketing: false,
  });

  return (
    <div className="flex flex-col" style={{ gap: 24 }}>
      <NotificationGroup
        title="Push notifications"
        description="Receive push notifications on your device"
        checked={settings.push}
        onChange={(v) => setSettings((s) => ({ ...s, push: v }))}
      />
      <NotificationGroup
        title="Email notifications"
        description="Receive email updates about your account"
        checked={settings.email}
        onChange={(v) => setSettings((s) => ({ ...s, email: v }))}
      />
      <NotificationGroup
        title="SMS notifications"
        description="Receive text messages for urgent alerts"
        checked={settings.sms}
        onChange={(v) => setSettings((s) => ({ ...s, sms: v }))}
      />
      <NotificationGroup
        title="Marketing emails"
        description="Receive promotional offers and news"
        checked={settings.marketing}
        onChange={(v) => setSettings((s) => ({ ...s, marketing: v }))}
      />
    </div>
  );
};

export const SettingsPage: Story = {
  render: () => <NotificationSettingsDemo />,
  name: 'Settings Page Example',
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col" style={{ gap: 24 }}>
      <p className="font-body font-semibold" style={{ color: '#29344A', margin: 0 }}>Small</p>
      <NotificationGroup
        title="Notification settings"
        description="Allow text and email notification"
        size="sm"
      />
      <NotificationGroup
        title="Notification settings"
        description="Allow text and email notification"
        size="sm"
        defaultChecked
      />

      <p className="font-body font-semibold" style={{ color: '#29344A', margin: 0, marginTop: 8 }}>Medium</p>
      <NotificationGroup
        title="Notification settings"
        description="Allow text and email notification"
        size="md"
      />
      <NotificationGroup
        title="Notification settings"
        description="Allow text and email notification"
        size="md"
        defaultChecked
      />
    </div>
  ),
  name: 'All Variants',
};
