import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { radius } from './radius';

function RadiusScale() {
  return (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif' }}>
      <h2 style={{ fontFamily: 'General Sans, sans-serif', fontSize: 24, fontWeight: 700, color: '#101828', marginBottom: 8 }}>
        Radius scale
      </h2>
      <p style={{ fontSize: 14, color: '#68707C', marginBottom: 32 }}>
        Figma collection <strong>Radius</strong>. Use for corner radii; <code>full</code> (9999px) replaces deprecated Spacing/999 for pills.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {Object.entries(radius).map(([key, value]) => (
          <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <div style={{ width: 100, fontWeight: 600, color: '#101828' }}>{key}</div>
            <div style={{ width: 64, fontSize: 13, color: '#68707C' }}>{value}</div>
            <div
              style={{
                width: 72,
                height: 72,
                backgroundColor: '#E6F5ED',
                border: '1px solid #39B16C',
                borderRadius: value,
              }}
            />
            <code style={{ fontSize: 12, color: '#68707C' }}>
              {key === 'full'
                ? 'rounded-full'
                : key === 'none'
                  ? 'rounded-none'
                  : key === 'modal'
                    ? 'rounded-[var(--radius-modal)]'
                    : `rounded-${key}`}
            </code>
          </div>
        ))}
      </div>
    </div>
  );
}

const meta: Meta = {
  title: 'Tokens/Radius',
  parameters: {
    docs: {
      description: {
        component:
          'Radius tokens from Cater Design Systems Figma (Radius collection). Mapped to Tailwind v4 @theme and src/tokens/radius.ts.',
      },
      source: { type: 'dynamic' },
    },
  },
};

export default meta;

export const Scale: StoryObj = {
  render: () => <RadiusScale />,
};
