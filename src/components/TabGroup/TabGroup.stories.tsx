import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TabGroup } from './TabGroup';

const meta: Meta<typeof TabGroup> = {
  title: 'Components/TabGroup',
  component: TabGroup,
  parameters: {
    docs: {
      description: {
        component:
          'Interactive tab groups. Maps to Figma Tab group (node 495:1517). Variants: Outline tab (underline), Buttongroup (pill). Click tabs to switch content.',
      },
      source: { type: 'dynamic' },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'buttongroup'],
      table: { defaultValue: { summary: 'outline' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      table: { defaultValue: { summary: 'sm' } },
    },
    fullWidth: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TabGroup>;

const exampleTabs = [
  {
    id: 'overview',
    label: 'Overview',
    content: (
      <p className="font-body text-sm text-text-body">
        Overview content. This panel updates when you click a different tab.
      </p>
    ),
  },
  {
    id: 'analytics',
    label: 'Analytics',
    content: (
      <p className="font-body text-sm text-text-body">
        Analytics content. Charts, metrics, and reports would go here.
      </p>
    ),
  },
  {
    id: 'settings',
    label: 'Settings',
    content: (
      <p className="font-body text-sm text-text-body">
        Settings content. User preferences and configuration options.
      </p>
    ),
  },
];

const tabsWithBadge = [
  { id: 'all', label: 'All', content: <p className="font-body text-sm text-text-body">All items</p> },
  { id: 'active', label: 'Active', badge: 5, content: <p className="font-body text-sm text-text-body">Active items only</p> },
  { id: 'archived', label: 'Archived', content: <p className="font-body text-sm text-text-body">Archived items</p> },
];

const tabsWithBadgeCounters = [
  { id: 'inbox', label: 'Inbox', badge: 12, content: <p className="font-body text-sm text-text-body">Inbox content</p> },
  { id: 'unread', label: 'Unread', badge: 3, content: <p className="font-body text-sm text-text-body">Unread content</p> },
  { id: 'archive', label: 'Archive', badge: 99, content: <p className="font-body text-sm text-text-body">Archive content (badge shows 99+)</p> },
];

export const OutlineTab: Story = {
  args: {
    variant: 'outline',
    size: 'sm',
    tabs: exampleTabs,
    showContent: true,
  },
  name: 'Outline tab',
};

export const Buttongroup: Story = {
  args: {
    variant: 'buttongroup',
    size: 'sm',
    tabs: exampleTabs,
    showContent: true,
  },
  name: 'Buttongroup',
};

export const WithBadge: Story = {
  args: {
    variant: 'buttongroup',
    size: 'sm',
    tabs: tabsWithBadge,
    activeTabId: 'active',
    showContent: true,
  },
  name: 'With badge',
};

export const ButtongroupWithBadgeCounters: Story = {
  args: {
    variant: 'buttongroup',
    size: 'sm',
    tabs: tabsWithBadgeCounters,
    activeTabId: 'inbox',
    showContent: true,
  },
  name: 'Buttongroup with badge counters',
};

export const ButtongroupFullWidth: Story = {
  args: {
    variant: 'buttongroup',
    size: 'sm',
    fullWidth: true,
    tabs: exampleTabs,
    showContent: true,
  },
  name: 'Buttongroup full width',
};

export const MediumSize: Story = {
  args: {
    variant: 'outline',
    size: 'md',
    tabs: exampleTabs,
    showContent: true,
  },
  name: 'Medium size',
};

export const InteractiveExample: Story = {
  render: function InteractiveExampleRender() {
    const [active, setActive] = React.useState('overview');
    return (
      <div className="max-w-md">
        <TabGroup
          variant="outline"
          size="md"
          tabs={exampleTabs}
          activeTabId={active}
          onTabChange={setActive}
          showContent
        />
      </div>
    );
  },
  name: 'Interactive example',
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex max-w-md flex-col gap-8">
      <div>
        <p className="mb-2 font-body text-sm font-semibold text-text-title">Outline tab</p>
        <TabGroup variant="outline" size="sm" tabs={exampleTabs} activeTabId="analytics" showContent />
      </div>
      <div>
        <p className="mb-2 font-body text-sm font-semibold text-text-title">Buttongroup</p>
        <TabGroup variant="buttongroup" size="sm" tabs={exampleTabs} activeTabId="settings" showContent />
      </div>
      <div>
        <p className="mb-2 font-body text-sm font-semibold text-text-title">Buttongroup with badge</p>
        <TabGroup variant="buttongroup" size="sm" tabs={tabsWithBadge} activeTabId="active" showContent />
      </div>
      <div>
        <p className="mb-2 font-body text-sm font-semibold text-text-title">Buttongroup full width</p>
        <TabGroup variant="buttongroup" size="sm" fullWidth tabs={exampleTabs} activeTabId="analytics" showContent />
      </div>
    </div>
  ),
  name: 'All variants',
};
