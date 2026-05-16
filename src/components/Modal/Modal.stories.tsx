import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { InputField } from '../InputField';
import {
  modalHeaderTitleOnlyStory,
  modalHeaderWithSubtextStory,
  MODAL_HEADER_PREVIEW_SIZE,
} from './ModalHeader/modalHeaderStoryArgs';
import { Modal, ModalPrimaryActions } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'desktop' },
    docs: {
      description: {
        component:
          'Centered dialog — **header** (`ModalHeader`), **body** (`ModalBody`), **actions** (`ModalActions`). Header variants match Figma `4684:19909` (title only) and `4684:19918` (with subtext).',
      },
      story: { iframeHeight: 800 },
      source: { type: 'dynamic' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

function ModalDemo({
  children,
  ...modalProps
}: React.ComponentProps<typeof Modal> & { children?: React.ReactNode }) {
  const [open, setOpen] = React.useState(true);

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <Button size="small" onClick={() => setOpen(true)}>
        Open modal
      </Button>
      <Modal {...modalProps} open={open} onClose={() => setOpen(false)}>
        {children}
      </Modal>
    </div>
  );
}

/** Title-only header (Figma `4684:19909`). */
export const TitleOnlyHeader: Story = {
  name: 'Header · Title only',
  render: () => (
    <ModalDemo
      size={MODAL_HEADER_PREVIEW_SIZE}
      title={modalHeaderTitleOnlyStory.title}
    />
  ),
};

/** Header with subtext (Figma `4684:19918`). */
export const HeaderWithSubtext: Story = {
  name: 'Header · With subtext',
  render: () => (
    <ModalDemo
      size={MODAL_HEADER_PREVIEW_SIZE}
      title={modalHeaderWithSubtextStory.title}
      description={modalHeaderWithSubtextStory.subtext}
    />
  ),
};

/** Acknowledgement — subtext in header, optional body copy. */
export const Inform: Story = {
  name: '01 · Inform',
  render: () => (
    <ModalDemo
      size="sm"
      title="Updates published"
      description="Customers can now see these updates on your storefront."
      actions={
        <div className="flex justify-end gap-3">
          <Button variant="ghost" size="small" type="button">
            Close
          </Button>
          <Button variant="primary" size="small" type="button">
            Got it
          </Button>
        </div>
      }
    >
      <p className="font-body text-[14px] leading-[150%] text-text-subtitle">
        You can unpublish or edit these details anytime from Settings.
      </p>
    </ModalDemo>
  ),
};

/** Decision — header subtext only, no body. */
export const Confirm: Story = {
  name: '02 · Confirm',
  render: () => (
    <ModalDemo
      size="sm"
      title="Remove this item?"
      description="This removes the item from the order. You can add it again later."
      actions={
        <ModalPrimaryActions
          primaryLabel="Remove"
          onPrimary={() => {}}
          onSecondary={() => {}}
          secondaryLabel="Keep item"
          secondaryVariant="outline"
        />
      }
    />
  ),
};

/** Form — scrollable body between header and actions. */
export const Task: Story = {
  name: '03 · Task / Form',
  render: () => (
    <ModalDemo
      size="md"
      title="Edit venue details"
      description="Update the basics buyers see on your profile."
      actions={
        <ModalPrimaryActions
          primaryLabel="Save"
          onPrimary={() => {}}
          onSecondary={() => {}}
          secondaryVariant="outline"
        />
      }
    >
      <div className="flex flex-col gap-4">
        <InputField label="Display name *" inputKind="name" placeholder="Northside Kitchen" />
        <InputField label="Contact email *" inputKind="email" />
        <InputField label="Phone number *" inputKind="phone" />
      </div>
    </ModalDemo>
  ),
};
