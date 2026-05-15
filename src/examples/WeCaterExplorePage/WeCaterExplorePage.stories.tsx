import React, { useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CaterAIExplorePanel } from './CaterAIExplorePanel';
import { ExploreSidebar, type SidebarSection } from './ExploreSidebar';
import { ExploreTopBar } from './ExploreTopBar';
import { WeCaterExplorePage } from './WeCaterExplorePage';
import { useCaterAIPanelResize } from './hooks/useCaterAIPanelResize';

/** Fills the Storybook canvas; internal regions scroll. */
function ExplorePageFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-[100dvh] w-full flex-col overflow-hidden bg-white">
      {children}
    </div>
  );
}

const meta: Meta<typeof WeCaterExplorePage> = {
  title: 'Examples/WeCater Explore page',
  component: WeCaterExplorePage,
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'desktop' },
    docs: {
      description: {
        component:
          'Consumer marketplace Explore page mapped to Figma (4664:14354). Layout: top bar and sidebar (206px).',
      },
      source: { type: 'dynamic' },
    },
  },
  decorators: [
    (Story) => (
      <ExplorePageFrame>
        <Story />
      </ExplorePageFrame>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof WeCaterExplorePage>;

export const ExplorePage: Story = {
  name: 'Explore page',
  render: () => <WeCaterExplorePage />,
};

export const TopBarOnly: Story = {
  name: 'Top bar',
  decorators: [
    (Story) => (
      <ExplorePageFrame>
        <Story />
      </ExplorePageFrame>
    ),
  ],
  render: () => <ExploreTopBar />,
};

const SIDEBAR_SECTIONS: SidebarSection[] = [
  'Explore',
  'Restaurant',
  'Favorite',
  'Cart',
  'Orders',
  'Messages',
  'See more',
  'Rewards',
  'Account',
];

type SidebarOnlyStory = StoryObj<{ section: SidebarSection }>;

export const SidebarOnly: SidebarOnlyStory = {
  name: 'Sidebar',
  decorators: [
    (Story) => (
      <div className="fixed inset-0 flex h-[100dvh] bg-[#FAFBFC]">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    section: {
      control: 'select',
      options: SIDEBAR_SECTIONS,
      description: 'Figma Sidebar variant property: Section',
    },
  },
  args: { section: 'Explore' },
  render: ({ section }) => (
    <ExploreSidebar section={section} className="!grid !h-full !max-h-full" />
  ),
};

function CaterAIPanelStory() {
  const shellRef = useRef<HTMLDivElement>(null);
  const { width, handleResizeStart } = useCaterAIPanelResize({ shellRef });

  return (
    <ExplorePageFrame>
      <div ref={shellRef} className="flex min-h-0 flex-1 justify-end">
        <div
          className="h-full w-full min-w-0 max-w-full shrink-0 overflow-hidden"
          style={{ width }}
        >
          <CaterAIExplorePanel layout="docked" width={width} onResizeStart={handleResizeStart} />
        </div>
      </div>
    </ExplorePageFrame>
  );
}

export const CaterAIPanelOnly: Story = {
  name: 'CaterAI panel',
  render: () => <CaterAIPanelStory />,
};
