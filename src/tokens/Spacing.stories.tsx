import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { spacing } from './spacing';

function SpacingScale() {
  const entries = Object.entries(spacing).filter(([key]) => key !== 'full');

  return (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif' }}>
      <h2 style={{ fontFamily: 'General Sans, sans-serif', fontSize: 24, fontWeight: 700, color: '#101828', marginBottom: 8 }}>Spacing Scale</h2>
      <p style={{ fontSize: 14, color: '#68707C', marginBottom: 32 }}>
        Figma <strong>Spacing/*</strong> (px). Tailwind uses aliases (e.g. <code>spacing-4</code> → 16px). For pill corners use{' '}
        <strong>Radius/full</strong> in Figma, not Spacing/999.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {entries.map(([key, value]) => {
          const px = parseInt(value, 10);
          return (
            <div
              key={key}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '8px 0',
                borderBottom: '1px solid #F1F2F5',
              }}
            >
              <div style={{ width: 80, flexShrink: 0, fontSize: 14, fontWeight: 600, color: '#101828' }}>
                {key}
              </div>
              <div style={{ width: 60, flexShrink: 0, fontSize: 13, color: '#68707C' }}>
                {value}
              </div>
              <div
                style={{
                  height: 24,
                  width: px,
                  backgroundColor: '#39B16C',
                  borderRadius: 4,
                  minWidth: 2,
                  transition: 'width 0.2s',
                }}
              />
              <div style={{ fontSize: 12, color: '#68707C', marginLeft: 'auto' }}>
                spacing-{key}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SpacingVisual() {
  const entries = Object.entries(spacing).filter(([key]) => key !== 'full');

  return (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif' }}>
      <h2 style={{ fontFamily: 'General Sans, sans-serif', fontSize: 24, fontWeight: 700, color: '#101828', marginBottom: 8 }}>Spacing Applied</h2>
      <p style={{ fontSize: 14, color: '#68707C', marginBottom: 32 }}>
        Visual demonstration of each spacing value applied as padding around a content box.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 16 }}>
        {entries.map(([key, value]) => {
          const px = parseInt(value, 10);
          return (
            <div key={key} style={{ textAlign: 'center' }}>
              <div
                style={{
                  display: 'inline-block',
                  padding: px,
                  backgroundColor: '#E6F5ED',
                  borderRadius: 8,
                  border: '1px dashed #39B16C',
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    backgroundColor: '#39B16C',
                    borderRadius: 4,
                  }}
                />
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#101828', marginTop: 8 }}>{key}</div>
              <div style={{ fontSize: 12, color: '#68707C' }}>{value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const meta: Meta = {
  title: 'Tokens/Spacing',
  parameters: {
    docs: {
      description: {
        component:
          'Spacing tokens from Cater Design Systems Figma (Spacing/*). 0–48px grid; use Tokens/Radius for corner radii (Spacing/999 is deprecated in Figma).',
      },
      source: { type: 'dynamic' },
    },
  },
};

export default meta;

export const Scale: StoryObj = {
  render: () => <SpacingScale />,
};

export const Applied: StoryObj = {
  render: () => <SpacingVisual />,
};
