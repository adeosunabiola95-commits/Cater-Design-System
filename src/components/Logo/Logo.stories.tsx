import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from './Logo';
import { logoBreakpointGuidance, logoSizeSpecs, type LogoSize } from './logoSizes';

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    docs: {
      description: {
        component:
          'wecater wordmark — Cater Design System / Figma Logo group `4344:3496` (~172×36 in Top Bar `4664:14355`). Sherwood Green `#073D30`. Five height-based sizes aligned to instances in the Figma file.',
      },
      source: { type: 'dynamic' },
    },
    layout: 'padded',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'] satisfies LogoSize[],
      description: 'Wordmark size token.',
      table: { defaultValue: { summary: 'lg' } },
    },
    alt: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: { size: 'lg' },
};

export const ExtraSmall: Story = {
  args: { size: 'xs' },
};

export const Small: Story = {
  args: { size: 'sm' },
};

export const Medium: Story = {
  args: { size: 'md' },
};

export const Large: Story = {
  args: { size: 'lg' },
};

export const ExtraLarge: Story = {
  args: { size: 'xl' },
};

function SizeScalePanel() {
  const sizes = Object.values(logoSizeSpecs);

  return (
    <div className="font-body text-text-title">
      <div className="flex flex-col gap-6">
        {sizes.map((spec) => (
          <div
            key={spec.size}
            className="flex flex-col gap-3 border-b border-mirage-100 pb-6 last:border-0"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="text-[16px] font-semibold capitalize">{spec.size}</div>
              <div className="text-[13px] text-text-subtle">
                {spec.width}×{spec.height}px · Figma {spec.figmaFrame}
              </div>
            </div>
            <Logo size={spec.size} />
            <div className="text-[14px] leading-[150%] text-text-subtle">{spec.useCase}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** All five wordmark sizes with dimensions and use-case notes. */
export const SizeScale: Story = {
  render: () => <SizeScalePanel />,
};

function BreakpointGuidanceTable() {
  const rows = Object.values(logoBreakpointGuidance);

  return (
    <div className="overflow-x-auto font-body text-[14px] text-text-title">
      <table className="w-full min-w-[520px] border-collapse text-left">
        <thead>
          <tr className="border-b border-mirage-200">
            <th className="py-3 pr-4 font-semibold">Breakpoint</th>
            <th className="py-3 pr-4 font-semibold">Viewport</th>
            <th className="py-3 pr-4 font-semibold">Logo size</th>
            <th className="py-3 font-semibold">Guidance</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const spec = logoSizeSpecs[row.recommendedSize];
            return (
              <tr key={row.viewport} className="border-b border-mirage-100 align-top">
                <td className="py-3 pr-4 font-medium capitalize">{row.recommendedSize === 'sm' ? 'Mobile' : row.recommendedSize === 'md' ? 'Tablet' : 'Desktop'}</td>
                <td className="py-3 pr-4 text-text-subtle">{row.viewport}</td>
                <td className="py-3 pr-4">
                  <Logo size={row.recommendedSize} />
                  <div className="mt-2 text-[12px] text-text-subtle">
                    {spec.width}×{spec.height}px · <code className="text-[12px]">size=&quot;{row.recommendedSize}&quot;</code>
                  </div>
                </td>
                <td className="py-3 text-text-subtle">{row.notes}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/** Recommended logo token per viewport (mobile / tablet / desktop). */
export const BreakpointGuidance: Story = {
  render: () => <BreakpointGuidanceTable />,
};

function NavPreview({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[720px]">
      <div className="mb-2 text-[13px] font-medium text-text-subtle">{label}</div>
      <header className="flex h-[60px] items-center gap-4 border-b border-mirage-100 bg-white px-4">{children}</header>
    </div>
  );
}

/** Mobile top bar — `sm` wordmark (140×32). */
export const MobileNavigation: Story = {
  parameters: { viewport: { defaultViewport: 'mobile' } },
  render: () => (
    <NavPreview label="Mobile header (≤767px) — size=&quot;sm&quot;">
      <Logo size="sm" />
      <div className="h-9 flex-1 rounded-full border border-mirage-200 bg-mirage-50" aria-hidden />
    </NavPreview>
  ),
};

/** Desktop top bar — `lg` wordmark (172×36), matches Figma Top Bar. */
export const DesktopNavigation: Story = {
  parameters: { viewport: { defaultViewport: 'desktop' } },
  render: () => (
    <NavPreview label="Desktop header (≥1024px) — size=&quot;lg&quot;">
      <Logo size="lg" />
      <div className="h-9 max-w-[420px] flex-1 rounded-full border border-mirage-200 bg-mirage-50" aria-hidden />
    </NavPreview>
  ),
};

/** Responsive nav pattern: `sm` below `sm:` breakpoint, `lg` at `sm` and up (WeCater Explore). */
export const ResponsiveNavigation: Story = {
  render: () => (
    <NavPreview label="Responsive — sm default, lg from 640px (matches ExploreTopBar)">
      <Logo size="sm" className="sm:hidden" />
      <Logo size="lg" className="hidden sm:block" />
      <div className="h-9 flex-1 rounded-full border border-mirage-200 bg-mirage-50" aria-hidden />
    </NavPreview>
  ),
};
