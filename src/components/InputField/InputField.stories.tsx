import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from './InputField';
import { DateInput } from '../DateInput';
import { ArrowDown02 } from '../../icons/icons/ArrowDown02';
import { Search } from '../../icons/icons/Search';
import { Cancel } from '../../icons/icons/Cancel';
import { Date as DateIcon } from '../../icons/icons/Date';
import { CopySuffix } from './CopySuffix';

const meta: Meta<typeof InputField> = {
  title: 'Components/Input Field',
  component: InputField,
  parameters: {
    docs: {
      description: {
        component:
          'Input fields — Figma `99:960`. Use **`inputKind`** for practical, accessible contexts (`email`, `phone`, `url`, `amount`, etc.) — correct keyboard, autocomplete, and character filtering. States: default, ghost, filled.',
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
    inputKind: {
      control: 'select',
      options: ['text', 'name', 'email', 'phone', 'url', 'search', 'amount', 'number'],
      description: 'Semantic context — type, keyboard, autocomplete, and input filtering.',
    },
    state: {
      control: 'select',
      options: ['default', 'ghost', 'filled'],
      description: 'Figma State. Omit to use filled when a value is present.',
    },
    action: {
      control: 'select',
      options: ['default', 'error'],
      table: { defaultValue: { summary: 'default' } },
    },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

// ===== BASIC =====

export const Default: Story = {
  args: {
    label: 'Business name *',
    hint: 'This is a hint text to help user.',
    placeholder: 'Acme Shop',
    trailingIcon: <ArrowDown02 width={20} height={20} />,
  },
};

/** Figma State=Filled — typed value uses `text-text-body` (`#29344A`). */
export const Filled: Story = {
  name: 'State · Filled',
  args: {
    label: 'Business name *',
    hint: 'This is a hint text to help user.',
    defaultValue: 'Acme Shop',
    state: 'filled',
    trailingIcon: <ArrowDown02 width={20} height={20} />,
  },
};

/** Auto-filled when `defaultValue` / `value` is set (no explicit state). */
export const FilledAuto: Story = {
  name: 'State · Filled (auto)',
  args: {
    label: 'Business name *',
    hint: 'This is a hint text to help user.',
    defaultValue: 'Acme Shop',
    trailingIcon: <ArrowDown02 width={20} height={20} />,
  },
};

/** Figma State=ghost — copy type; lighter `#B2B8C1` text. */
export const Ghost: Story = {
  name: 'State · Ghost',
  render: () => (
    <div style={{ width: 331 }}>
      <InputField
        label="Website *"
        hint="Copy type — text-caption (#B2B8C1)"
        defaultValue="www.cateringrewards.io"
        state="ghost"
        suffixVariant="subtle"
        suffix={<CopySuffix state="ghost" />}
      />
    </div>
  ),
};

export const Error: Story = {
  args: {
    label: 'Business name *',
    hint: 'This is a hint text to help user.',
    action: 'error',
    defaultValue: 'Acme Shop',
    trailingIcon: <ArrowDown02 width={20} height={20} />,
  },
};

// ===== SIZES =====

export const Small: Story = {
  args: {
    label: 'Business name *',
    hint: 'This is a hint text to help user.',
    size: 'sm',
    placeholder: 'Acme Shop',
    trailingIcon: <ArrowDown02 width={20} height={20} />,
  },
};

export const Medium: Story = {
  args: {
    label: 'Business name *',
    hint: 'This is a hint text to help user.',
    size: 'md',
    placeholder: 'Acme Shop',
    trailingIcon: <ArrowDown02 width={20} height={20} />,
  },
};

// ===== TYPES =====

export const NameType: Story = {
  name: 'Type: Name',
  args: {
    label: 'Business name *',
    hint: 'This is a hint text to help user.',
    inputKind: 'name',
    defaultValue: 'Acme Shop',
    trailingIcon: <ArrowDown02 width={20} height={20} />,
  },
};

export const EmailType: Story = {
  name: 'Type: Email',
  args: {
    label: 'Contact email *',
    hint: 'We will send order updates to this address.',
    inputKind: 'email',
    placeholder: 'hello@example.com',
  },
};

export const PhoneType: Story = {
  name: 'Type: Phone',
  args: {
    label: 'Phone number *',
    hint: 'Digits and + only — mobile shows telephone keypad.',
    inputKind: 'phone',
  },
};

export const CompanyType: Story = {
  name: 'Type: Company',
  render: () => {
    const [value, setValue] = React.useState('Mubarak Alumn');
    return (
      <div style={{ width: 331 }}>
        <InputField
          label="Customer name *"
          hint="This is a hint text to help user."
          inputKind="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          leadingIcon={<Search width={20} height={20} />}
          clearIcon={<Cancel width={20} height={20} />}
          onClear={() => setValue('')}
        />
      </div>
    );
  },
};

export const AmountType: Story = {
  name: 'Type: Amount',
  render: () => (
    <div style={{ width: 331 }}>
      <InputField
        label="Amount *"
        hint="This is a hint text to help user."
        inputKind="amount"
        defaultValue="$5.00"
        suffix={
          <div className="flex items-center gap-[4px]">
            <span className="font-body font-semibold text-[16px] leading-[150%] tracking-[0.16px] text-text-body">
              USD
            </span>
            <ArrowDown02 width={20} height={20} className="text-text-subtitle" />
          </div>
        }
      />
    </div>
  ),
};

export const DateType: Story = {
  name: 'Type: Date',
  render: () => (
    <div style={{ width: 331 }}>
      <DateInput
        label="Due Date *"
        hint="Click the field to open the calendar."
        defaultValue={new Date(2025, 11, 19)}
      />
    </div>
  ),
};

export const CopyType: Story = {
  name: 'Type: Copy',
  render: () => (
    <div style={{ width: 331 }}>
      <InputField
        label="Website *"
        hint="This is a hint text to help user."
        inputKind="url"
        defaultValue="www.cateringrewards.io"
        state="ghost"
        suffixVariant="subtle"
        suffix={<CopySuffix state="ghost" />}
      />
    </div>
  ),
};

export const PracticalKinds: Story = {
  name: 'Practical input kinds',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 331 }}>
      <InputField label="Email *" hint="Email keyboard and validation." inputKind="email" />
      <InputField label="Phone number *" hint="Telephone keypad; digits and + only." inputKind="phone" />
      <InputField label="Website *" hint="URL keyboard on mobile." inputKind="url" />
      <InputField label="Amount *" hint="Decimal keypad; currency characters only." inputKind="amount" />
    </div>
  ),
};

export const CopyAnimationPlayground: Story = {
  name: 'Copy Animation Playground',
  argTypes: {
    iconStiffness: { control: { type: 'range', min: 50, max: 1000, step: 10 }, description: 'Spring stiffness for the icon swap', table: { defaultValue: { summary: '500' } } },
    iconDamping: { control: { type: 'range', min: 5, max: 60, step: 1 }, description: 'Spring damping for the icon swap', table: { defaultValue: { summary: '25' } } },
    iconBounce: { control: { type: 'range', min: 0, max: 1, step: 0.05 }, description: 'Bounce for icon (0 = no overshoot, 1 = very bouncy)', table: { defaultValue: { summary: '0.25' } } },
    iconRotation: { control: { type: 'range', min: 0, max: 180, step: 5 }, description: 'Rotation angle (degrees) on icon enter/exit', table: { defaultValue: { summary: '45' } } },
    iconExitScale: { control: { type: 'range', min: 0, max: 1, step: 0.05 }, description: 'Scale the icon shrinks to on exit', table: { defaultValue: { summary: '0.5' } } },
    textStiffness: { control: { type: 'range', min: 50, max: 1000, step: 10 }, description: 'Spring stiffness for the text slide', table: { defaultValue: { summary: '400' } } },
    textDamping: { control: { type: 'range', min: 5, max: 60, step: 1 }, description: 'Spring damping for the text slide', table: { defaultValue: { summary: '22' } } },
    textBounce: { control: { type: 'range', min: 0, max: 1, step: 0.05 }, description: 'Bounce for text (0 = no overshoot, 1 = very bouncy)', table: { defaultValue: { summary: '0.2' } } },
    textSlideDistance: { control: { type: 'range', min: 0, max: 40, step: 1 }, description: 'Vertical slide distance (px) for text', table: { defaultValue: { summary: '12' } } },
    textBlur: { control: { type: 'range', min: 0, max: 12, step: 0.5 }, description: 'Blur amount (px) during text transition', table: { defaultValue: { summary: '4' } } },
    resetDelay: { control: { type: 'range', min: 500, max: 5000, step: 100 }, description: 'How long "Copied" stays before reverting (ms)', table: { defaultValue: { summary: '2000' } } },
  },
  args: {
    iconStiffness: 80,
    iconDamping: 8,
    iconBounce: 0.05,
    iconRotation: 15,
    iconExitScale: 0.1,
    textStiffness: 140,
    textDamping: 9,
    textBounce: 0.2,
    textSlideDistance: 12,
    textBlur: 1.5,
    resetDelay: 600,
  },
  render: (args) => (
    <div style={{ width: 331 }}>
      <InputField
        label="Website *"
        hint="Adjust the controls in the panel below, then click Copy to preview."
        defaultValue="www.cateringrewards.io"
        state="ghost"
        suffixVariant="subtle"
        suffix={
          <CopySuffix
            state="ghost"
            iconStiffness={args.iconStiffness as number}
            iconDamping={args.iconDamping as number}
            iconBounce={args.iconBounce as number}
            iconRotation={args.iconRotation as number}
            iconExitScale={args.iconExitScale as number}
            textStiffness={args.textStiffness as number}
            textDamping={args.textDamping as number}
            textBounce={args.textBounce as number}
            textSlideDistance={args.textSlideDistance as number}
            textBlur={args.textBlur as number}
            resetDelay={args.resetDelay as number}
          />
        }
      />
    </div>
  ),
};

// ===== HELPERS =====

function CompanyInput({ hint = 'This is a hint text to help user.' }: { hint?: string }) {
  const [value, setValue] = React.useState('Mubarak Alumn');
  return (
    <InputField
      label="Customer name *"
      hint={hint}
      inputKind="search"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      leadingIcon={<Search width={20} height={20} />}
      clearIcon={<Cancel width={20} height={20} />}
      onClear={() => setValue('')}
    />
  );
}

// ===== ALL VARIANTS =====

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
      <div style={{ width: 331 }}>
        <InputField
          label="Small"
          hint="This is a hint text to help user."
          size="sm"
          placeholder="Acme Shop"
          trailingIcon={<ArrowDown02 width={20} height={20} />}
        />
      </div>
      <div style={{ width: 331 }}>
        <InputField
          label="Medium"
          hint="This is a hint text to help user."
          size="md"
          placeholder="Acme Shop"
          trailingIcon={<ArrowDown02 width={20} height={20} />}
        />
      </div>
    </div>
  ),
};

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <div style={{ width: 331 }}>
        <InputField
          label="Default"
          hint="Empty — text-subtitle (#68707C)"
          placeholder="Acme Shop"
          trailingIcon={<ArrowDown02 width={20} height={20} />}
        />
      </div>
      <div style={{ width: 331 }}>
        <InputField
          label="Filled"
          hint="Typed — text-body (#29344A)"
          defaultValue="Acme Shop"
          state="filled"
          trailingIcon={<ArrowDown02 width={20} height={20} />}
        />
      </div>
      <div style={{ width: 331 }}>
        <InputField
          label="Ghost"
          hint="Copy — text-caption (#B2B8C1)"
          defaultValue="www.cateringrewards.io"
          state="ghost"
          suffixVariant="subtle"
          suffix={<CopySuffix state="ghost" />}
        />
      </div>
    </div>
  ),
};

export const AllActions: Story = {
  name: 'All Actions',
  render: () => (
    <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
      <div style={{ width: 331 }}>
        <InputField
          label="Default action"
          hint="Filled value with default border"
          defaultValue="Acme Shop"
          trailingIcon={<ArrowDown02 width={20} height={20} />}
        />
      </div>
      <div style={{ width: 331 }}>
        <InputField
          label="Error"
          hint="This field is required."
          action="error"
          defaultValue="Acme Shop"
          trailingIcon={<ArrowDown02 width={20} height={20} />}
        />
      </div>
    </div>
  ),
};

export const AllTypes: Story = {
  name: 'All Types',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 331px)', gap: 32 }}>
      <InputField
        label="Business name *"
        hint="Type: Name"
        inputKind="name"
        defaultValue="Acme Shop"
        trailingIcon={<ArrowDown02 width={20} height={20} />}
      />
      <CompanyInput hint="Type: Company" />
      <InputField
        label="Amount *"
        hint="Type: Amount"
        inputKind="amount"
        defaultValue="$5.00"
        suffix={
          <div className="flex items-center gap-[4px]">
            <span className="font-body font-semibold text-[16px] leading-[150%] tracking-[0.16px] text-text-body">
              USD
            </span>
            <ArrowDown02 width={20} height={20} className="text-text-subtitle" />
          </div>
        }
      />
      <DateInput
        label="Due Date *"
        hint="Type: Date (click to open calendar)"
        defaultValue={new Date(2025, 11, 19)}
      />
      <InputField
        label="Website *"
        hint="Type: Copy"
        inputKind="url"
        defaultValue="www.cateringrewards.io"
        state="ghost"
        suffixVariant="subtle"
        suffix={<CopySuffix state="ghost" />}
      />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Business name *',
    hint: 'This is a hint text to help user.',
    placeholder: 'Acme Shop',
    disabled: true,
    trailingIcon: <ArrowDown02 width={20} height={20} />,
  },
};
