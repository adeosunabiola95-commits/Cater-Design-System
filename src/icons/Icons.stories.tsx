import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, type SVGProps, type FC } from 'react';
import { iconCategories, type IconCategory } from './categories';
import * as AllIcons from './index';

type IconComponent = FC<SVGProps<SVGSVGElement>>;

const allIconEntries: [string, IconComponent][] = Object.entries(AllIcons).filter(
  ([key, val]) => typeof val === 'function' && key !== 'Icon' && key[0] === key[0].toUpperCase()
) as [string, IconComponent][];

function IconCell({ name, IconComp, size = 24 }: { name: string; IconComp: IconComponent; size?: number }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(`import { ${name} } from '@/icons';`);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="flex flex-col items-center gap-2 p-3 rounded-lg border border-transparent hover:border-mirage-300 hover:bg-mirage-50 transition-all cursor-pointer group"
      title={`Click to copy import for ${name}`}
    >
      <IconComp width={size} height={size} className="text-mirage-900 group-hover:text-salem-600 transition-colors" />
      <span className="text-[10px] text-mirage-600 text-center leading-tight font-body break-all max-w-[80px]">
        {copied ? 'Copied!' : name}
      </span>
    </button>
  );
}

function GalleryView() {
  const [filter, setFilter] = useState('');
  const filtered = allIconEntries.filter(([name]) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <div className="mb-6 sticky top-0 bg-white z-10 pb-4">
        <input
          type="text"
          placeholder="Search icons..."
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-mirage-300 rounded-lg text-sm font-body focus:outline-none focus:border-salem-500 focus:ring-1 focus:ring-salem-500"
        />
        <p className="text-sm text-mirage-500 mt-2 font-body">
          {filtered.length} of {allIconEntries.length} icons{filter && ` matching "${filter}"`}
        </p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-1">
        {filtered.map(([name, Icon]) => (
          <IconCell key={name} name={name} IconComp={Icon} />
        ))}
      </div>
    </div>
  );
}

function ByCategoryView() {
  return (
    <div className="space-y-10">
      {(Object.entries(iconCategories) as [IconCategory, string[]][]).map(([category, names]) => {
        const categoryIcons = names
          .map(name => {
            const entry = allIconEntries.find(([n]) => n === name);
            return entry ? { name: entry[0], Icon: entry[1] } : null;
          })
          .filter(Boolean) as { name: string; Icon: IconComponent }[];

        return (
          <div key={category}>
            <h3 className="text-lg font-title font-semibold text-mirage-900 mb-1">{category}</h3>
            <p className="text-sm text-mirage-500 font-body mb-4">{categoryIcons.length} icons</p>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-1">
              {categoryIcons.map(({ name, Icon }) => (
                <IconCell key={name} name={name} IconComp={Icon} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function SizesView() {
  const sample = allIconEntries.slice(0, 1)[0];
  if (!sample) return null;
  const [, SampleIcon] = sample;
  const sizes = [16, 20, 24, 32, 40, 48];
  return (
    <div className="space-y-6">
      <p className="text-sm text-mirage-500 font-body">
        Icons accept a standard <code className="bg-mirage-50 px-1 rounded text-xs">width</code> and <code className="bg-mirage-50 px-1 rounded text-xs">height</code> prop. Default is 24x24.
      </p>
      <div className="flex items-end gap-8">
        {sizes.map(s => (
          <div key={s} className="flex flex-col items-center gap-2">
            <SampleIcon width={s} height={s} className="text-mirage-900" />
            <span className="text-xs text-mirage-500 font-body">{s}px</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ColorsView() {
  const sample = allIconEntries.find(([n]) => n === 'Home') || allIconEntries[0];
  if (!sample) return null;
  const [, SampleIcon] = sample;
  const colors = [
    { name: 'mirage-900', cls: 'text-mirage-900' },
    { name: 'salem-600', cls: 'text-salem-600' },
    { name: 'bright-red-600', cls: 'text-bright-red-600' },
    { name: 'chelsea-gem-600', cls: 'text-chelsea-gem-600' },
    { name: 'blush-pink-600', cls: 'text-blush-pink-600' },
    { name: 'flush-orange-600', cls: 'text-flush-orange-600' },
    { name: 'mirage-400', cls: 'text-mirage-400' },
  ];
  return (
    <div className="space-y-6">
      <p className="text-sm text-mirage-500 font-body">
        Icons use <code className="bg-mirage-50 px-1 rounded text-xs">currentColor</code> for fill, so they inherit the text color. Use Tailwind <code className="bg-mirage-50 px-1 rounded text-xs">text-*</code> utilities.
      </p>
      <div className="flex items-center gap-8">
        {colors.map(c => (
          <div key={c.name} className="flex flex-col items-center gap-2">
            <SampleIcon width={32} height={32} className={c.cls} />
            <span className="text-xs text-mirage-500 font-body">{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const meta: Meta = {
  title: 'Tokens/Icons',
  parameters: {
    layout: 'padded',
    docs: {
      source: { type: 'dynamic' },
    },
  },
};
export default meta;

export const Gallery: StoryObj = {
  render: () => <GalleryView />,
};

export const ByCategory: StoryObj = {
  render: () => <ByCategoryView />,
};

export const Sizes: StoryObj = {
  render: () => <SizesView />,
};

export const Colors: StoryObj = {
  render: () => <ColorsView />,
};
