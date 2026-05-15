import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { shadows } from './shadows';

const meta: Meta = {
  title: 'Tokens/Shadows',
  parameters: {
    docs: {
      description: {
        component:
          'Shadow elevation tokens from the Cater Design Systems Figma. Five elevation levels (xs–xl) for depth.',
      },
      source: { type: 'dynamic' },
    },
  },
};

export default meta;
type Story = StoryObj;

function ElevationScale() {
  const entries = Object.entries(shadows);

  return (
    <div style={{ padding: 40, backgroundColor: '#F8F9FB', borderRadius: 12 }}>
      <h3 className="font-title font-semibold text-text-title text-lg" style={{ marginBottom: 8 }}>
        Elevation Scale
      </h3>
      <p className="font-body text-text-subtitle text-sm" style={{ marginBottom: 40 }}>
        Each level adds progressively more depth. Use higher elevations for elements that float above the page.
      </p>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 32 }}>
        {entries.map(([name, value]) => (
          <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
            <div
              style={{
                width: 160,
                height: 160,
                backgroundColor: '#FFFFFF',
                borderRadius: 10,
                boxShadow: value,
              }}
            />
            <p className="font-body font-semibold text-text-title" style={{ fontSize: 14 }}>
              {name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export const Elevation: Story = {
  name: 'Elevation Scale',
  render: () => <ElevationScale />,
};
