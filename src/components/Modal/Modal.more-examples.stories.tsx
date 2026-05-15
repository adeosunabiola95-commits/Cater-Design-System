import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal, ModalPrimaryActions } from './Modal';
import { Button } from '../Button';
import { InputField } from '../InputField';
import { Banner } from '../Banner';
import { TabGroup } from '../TabGroup';
import { CheckboxGroupItem } from '../Checkbox';
import { Speaker2 } from '@/icons';
import { ArrowDown02 } from '../../icons/icons/ArrowDown02';
import { Date as DateIcon } from '../../icons/icons/Date';
import { CopySuffix } from '../InputField/CopySuffix';

/**
 * Extra Modal compositions: full flows (Add Business, Add Link, Select Campaign)
 * alongside the four pattern stories on the parent **Modal** page.
 */
const meta: Meta<typeof Modal> = {
  /** Under Examples so `Components/Modal` has no child paths (avoids folder icon). */
  title: 'Examples/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'desktop' },
    docs: {
      description: {
        component:
          'Longer composed examples (forms, link entry, list picker). Same `Modal` implementation as the pattern stories; use these when you need a reference implementation to copy.',
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

export const AddBusiness: Story = {
  name: 'Add Business Modal',
  render: function AddBusinessRender() {
    const [open, setOpen] = React.useState(false);

    return (
      <div className="flex min-h-screen w-full items-center justify-center">
        <Button size="small" onClick={() => setOpen(true)}>
          Open Add business
        </Button>

        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Add Business Info"
          description="Connect a new restaurant or catering brand. You can update these details later."
          footer={
            <ModalPrimaryActions
              primaryLabel="Save changes"
              onPrimary={() => setOpen(false)}
              onSecondary={() => setOpen(false)}
              secondaryVariant="outline"
            />
          }
        >
          <div className="flex flex-col gap-6">
            <Banner
              state="info"
              title="Before you add a business"
              description="We’ll send a verification link to confirm ownership of this business. Make sure the details below match your catering brand."
            />

            <div className="flex flex-col gap-3">
              <InputField
                label="Business name *"
                hint="This is a hint text to help user."
                placeholder="Acme Catering"
                trailingIcon={<ArrowDown02 width={20} height={20} />}
              />

              <InputField
                label="Customer name *"
                hint="This is a hint text to help user."
                placeholder="Select customer"
                trailingIcon={<ArrowDown02 width={20} height={20} />}
              />

              <InputField
                label="Due date *"
                hint="This is a hint text to help user."
                defaultValue="Dec 19, 2025"
                trailingIcon={<DateIcon width={20} height={20} />}
              />

              <InputField
                label="Amount *"
                hint="This is a hint text to help user."
                defaultValue="$5.00"
                suffix={
                  <div className="flex items-center gap-[4px]">
                    <span className="font-body font-semibold text-[16px] leading-[150%] tracking-[0.16px] text-text-subtitle">
                      USD
                    </span>
                    <ArrowDown02 width={20} height={20} className="text-text-subtitle" />
                  </div>
                }
              />
            </div>
          </div>
        </Modal>
      </div>
    );
  },
};

export const AddLink: Story = {
  name: 'Add Link Modal',
  render: function AddLinkRender() {
    const [open, setOpen] = React.useState(true);
    const [url, setUrl] = React.useState('https://www.cateringrewards.io');

    return (
      <div className="flex min-h-screen w-full items-center justify-center">
        <Button size="small" variant="outline" onClick={() => setOpen(true)}>
          Open Add link
        </Button>

        <Modal
          open={open}
          onClose={() => setOpen(false)}
          size="md"
          title="Add Link"
          footer={
            <ModalPrimaryActions
              primaryLabel="Add link"
              onPrimary={() => setOpen(false)}
              onSecondary={() => setOpen(false)}
              secondaryVariant="outline"
            />
          }
        >
          <div className="flex flex-col gap-4">
            <InputField
              label="URL"
              placeholder="https://…"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              suffixVariant="subtle"
              suffix={<CopySuffix textToCopy={url} />}
            />
          </div>
        </Modal>
      </div>
    );
  },
};

const campaignListItems = [
  {
    id: 'pizza-fest',
    label: 'Pizza Fest Campaign',
    description: 'Boost sales with festive rewards, ready in minutes!',
  },
  {
    id: 'summer-promo',
    label: 'Summer Promo',
    description: 'Seasonal offers and discounts for the summer.',
  },
  {
    id: 'holiday-sale',
    label: 'Holiday Sale',
    description: 'End-of-year promotions and bundles.',
  },
];

export const SelectCampaign: Story = {
  name: 'Select Campaign Modal',
  render: function SelectCampaignRender() {
    const [open, setOpen] = React.useState(false);
    const [selectedIds, setSelectedIds] = React.useState<Set<string>>(new Set(['summer-promo']));
    const [activeTab, setActiveTab] = React.useState('all');

    const toggleCampaign = (id: string) => {
      setSelectedIds((prev) => {
        const next = new Set(prev);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        return next;
      });
    };

    return (
      <div className="flex min-h-screen w-full items-center justify-center">
        <Button size="small" onClick={() => setOpen(true)}>
          Open Select campaign
        </Button>

        <Modal
          open={open}
          onClose={() => setOpen(false)}
          size="select-campaign"
          titleSize="large"
          title="Select campaign "
          footer={
            <ModalPrimaryActions
              primaryLabel="Select"
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
                  { id: 'active', label: 'Active' },
                  { id: 'archived', label: 'Archived' },
                ]}
                activeTabId={activeTab}
                onTabChange={setActiveTab}
              />
            </div>
            <div className="-mt-px min-h-0 flex-1 flex flex-col overflow-auto bg-white [&>*:not(:first-child)]:-mt-px">
              {campaignListItems.map((item) => (
                <CheckboxGroupItem
                  key={item.id}
                  icon={<Speaker2 width={24} height={24} className="text-text-body" />}
                  label={item.label}
                  description={item.description}
                  checked={selectedIds.has(item.id)}
                  onChange={() => toggleCampaign(item.id)}
                />
              ))}
            </div>
          </div>
        </Modal>
      </div>
    );
  },
};
