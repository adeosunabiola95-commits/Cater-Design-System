import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal, ModalPrimaryActions } from './Modal';
import { Button } from '../Button';
import { InputField } from '../InputField';
import { TabGroup } from '../TabGroup';
import { CheckboxGroupItem } from '../Checkbox';
import { Speaker2 } from '@/icons';

/**
 * Current modal patterns aligned to Figma **Modals** component set (`4651:9943`, page *Marketplace (Sally)*).
 * Four use-case patterns; rename stories to match exact Figma variant labels after `figma_get_component` sync.
 */
const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'desktop' },
    docs: {
      description: {
        component:
          'Centered dialogs for Cater Design Systems. Four patterns (inform, confirm, task, list picker). See **Examples → Modal** for composed flows and **Components → Drawer** for the slide-in panel.',
      },
      story: {
        iframeHeight: 800,
      },
      source: { type: 'dynamic' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

/** Pattern 1 — Acknowledgement or lightweight message; primary acknowledgement + optional dismiss. */
export const Inform: Story = {
  name: '01 · Inform',
  render: function InformRender() {
    const [open, setOpen] = React.useState(true);
    return (
      <div className="flex min-h-screen w-full items-center justify-center">
        <Button size="small" onClick={() => setOpen(true)}>
          Open inform modal
        </Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          size="sm"
          title="Updates published"
          description="Customers can now see these updates on your storefront."
          footer={
            <div className="flex justify-end gap-3">
              <Button variant="ghost" size="small" type="button" onClick={() => setOpen(false)}>
                Close
              </Button>
              <Button variant="primary" size="small" type="button" onClick={() => setOpen(false)}>
                Got it
              </Button>
            </div>
          }
        >
          <p className="font-body text-[14px] leading-[150%] text-text-subtitle">
            You can unpublish or edit these details anytime from Settings.
          </p>
        </Modal>
      </div>
    );
  },
};

/** Pattern 2 — Decision with explicit cancel; use for destructive or irreversible actions. */
export const Confirm: Story = {
  name: '02 · Confirm',
  render: function ConfirmRender() {
    const [open, setOpen] = React.useState(true);
    return (
      <div className="flex min-h-screen w-full items-center justify-center">
        <Button size="small" variant="outline" onClick={() => setOpen(true)}>
          Open confirm modal
        </Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          size="sm"
          title="Remove this item?"
          description="This removes the item from the order. You can add it again later."
          footer={
            <ModalPrimaryActions
              primaryLabel="Remove"
              onPrimary={() => setOpen(false)}
              onSecondary={() => setOpen(false)}
              secondaryLabel="Keep item"
              secondaryVariant="outline"
            />
          }
        />
      </div>
    );
  },
};

/** Pattern 3 — Forms or longer content; scrollable body with standard footer. */
export const Task: Story = {
  name: '03 · Task / Form',
  render: function TaskRender() {
    const [open, setOpen] = React.useState(true);
    return (
      <div className="flex min-h-screen w-full items-center justify-center">
        <Button size="small" onClick={() => setOpen(true)}>
          Open task modal
        </Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          size="md"
          title="Edit venue details"
          description="Update the basics buyers see on your profile."
          footer={
            <ModalPrimaryActions
              primaryLabel="Save"
              onPrimary={() => setOpen(false)}
              onSecondary={() => setOpen(false)}
              secondaryVariant="outline"
            />
          }
        >
          <div className="flex flex-col gap-4">
            <InputField label="Display name *" placeholder="Northside Kitchen" />
            <InputField label="Contact email *" placeholder="hello@example.com" />
            <InputField label="Phone" placeholder="+1 …" />
          </div>
        </Modal>
      </div>
    );
  },
};

const pickerItems = [
  { id: 'a', label: 'Spring tasting', description: 'March 12 · 24 guests' },
  { id: 'b', label: 'Corporate lunch', description: 'April 3 · 60 guests' },
  { id: 'c', label: 'Wedding reception', description: 'May 20 · 120 guests' },
];

/** Pattern 4 — Optional filters + scrollable selectable list; footer confirms selection. */
export const Picker: Story = {
  name: '04 · List picker',
  render: function PickerRender() {
    const [open, setOpen] = React.useState(true);
    const [picked, setPicked] = React.useState<Set<string>>(new Set(['b']));
    const [tab, setTab] = React.useState('all');

    const toggle = (id: string) => {
      setPicked((prev) => {
        const next = new Set(prev);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        return next;
      });
    };

    return (
      <div className="flex min-h-screen w-full items-center justify-center">
        <Button size="small" onClick={() => setOpen(true)}>
          Open picker modal
        </Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          size="select-campaign"
          titleSize="large"
          title="Choose events"
          footer={
            <ModalPrimaryActions
              primaryLabel="Apply"
              onPrimary={() => setOpen(false)}
              onSecondary={() => setOpen(false)}
              secondaryLabel="Cancel"
              secondaryVariant="outline"
            />
          }
        >
          <div className="flex flex-1 flex-col overflow-hidden">
            <div className="shrink-0 border-b border-mirage-100 bg-white">
              <TabGroup
                variant="outline"
                size="sm"
                compact
                showContent={false}
                tabs={[
                  { id: 'all', label: 'All' },
                  { id: 'upcoming', label: 'Upcoming' },
                  { id: 'past', label: 'Past' },
                ]}
                activeTabId={tab}
                onTabChange={setTab}
              />
            </div>
            <div className="-mt-px min-h-0 flex-1 flex flex-col overflow-auto bg-white [&>*:not(:first-child)]:-mt-px">
              {pickerItems.map((item) => (
                <CheckboxGroupItem
                  key={item.id}
                  icon={<Speaker2 width={24} height={24} className="text-text-body" />}
                  label={item.label}
                  description={item.description}
                  checked={picked.has(item.id)}
                  onChange={() => toggle(item.id)}
                />
              ))}
            </div>
          </div>
        </Modal>
      </div>
    );
  },
};
