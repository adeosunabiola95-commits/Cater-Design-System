import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from 'storybook/test';

import {
  ModalHeader,
  ModalHeaderCloseButton,
  ModalHeaderSubtext,
  ModalHeaderTextGroup,
  ModalHeaderTitle,
  MODAL_HEADER_FIGMA,
} from './index';
import { modalHeaderTitleOnlyStory, modalHeaderWithSubtextStory } from './modalHeaderStoryArgs';

function ModalHeaderFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[720px] overflow-hidden rounded-t-[var(--radius-modal)] border border-dialogue-outline bg-white shadow-lg">
      {children}
    </div>
  );
}

const meta: Meta<typeof ModalHeader> = {
  title: 'Molecules/Modal Header',
  component: ModalHeader,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Modal header molecule — Figma *Header container* (\`${MODAL_HEADER_FIGMA.titleOnly}\`) and *Header container with subtext* (\`${MODAL_HEADER_FIGMA.withSubtext}\`). Composed from title, subtext, close button, and text group atoms.`,
      },
      source: { type: 'dynamic' },
    },
  },
  args: {
    onClose: fn(),
    closeLabel: 'Close dialog',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['title-only', 'with-subtext'],
    },
    title: { control: 'text' },
    subtext: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof ModalHeader>;

/** Figma `4684:19909` — padding 24, title only, 32px to close. */
export const TitleOnly: Story = {
  name: 'Header container',
  args: modalHeaderTitleOnlyStory,
  render: (args) => (
    <ModalHeaderFrame>
      <ModalHeader {...args} />
    </ModalHeaderFrame>
  ),
};

/** Figma `4684:19918` — title + 12px gap + subtext. */
export const WithSubtext: Story = {
  name: 'Header container with subtext',
  args: modalHeaderWithSubtextStory,
  render: (args) => (
    <ModalHeaderFrame>
      <ModalHeader {...args} />
    </ModalHeaderFrame>
  ),
};

/** Atoms composed without the full header shell (documentation / testing). */
export const MoleculeBreakdown: Story = {
  name: 'Molecule breakdown',
  render: () => (
    <ModalHeaderFrame>
      <div className="flex flex-col gap-8 p-6">
        <div>
          <p className="mb-2 font-body text-[12px] font-semibold uppercase tracking-wide text-text-subtle">
            ModalHeaderTitle
          </p>
          <ModalHeaderTitle>Complete payment</ModalHeaderTitle>
        </div>
        <div>
          <p className="mb-2 font-body text-[12px] font-semibold uppercase tracking-wide text-text-subtle">
            ModalHeaderSubtext
          </p>
          <ModalHeaderSubtext>What would you like to update for this order?</ModalHeaderSubtext>
        </div>
        <div>
          <p className="mb-2 font-body text-[12px] font-semibold uppercase tracking-wide text-text-subtle">
            ModalHeaderTextGroup
          </p>
          <ModalHeaderTextGroup
            title="Change request"
            subtext="What would you like to update for this order?"
            titleId="modal-header-title-demo"
            subtextId="modal-header-subtext-demo"
          />
        </div>
        <div>
          <p className="mb-2 font-body text-[12px] font-semibold uppercase tracking-wide text-text-subtle">
            ModalHeaderCloseButton
          </p>
          <ModalHeaderCloseButton aria-label="Close dialog" onClick={() => {}} />
        </div>
      </div>
    </ModalHeaderFrame>
  ),
};

export const CloseInteraction: Story = {
  name: 'Close interaction',
  args: {
    title: 'Edit venue details',
    subtext: 'Update the basics buyers see on your profile.',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const close = canvas.getByRole('button', { name: 'Close dialog' });
    await userEvent.click(close);
    await expect(args.onClose).toHaveBeenCalled();
  },
  render: (args) => (
    <ModalHeaderFrame>
      <ModalHeader {...args} />
    </ModalHeaderFrame>
  ),
};
