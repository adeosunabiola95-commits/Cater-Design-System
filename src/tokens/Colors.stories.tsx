import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { primitives, brands, semantic } from './colors';

function Swatch({ color, name }: { color: string; name: string }) {
  const isLight = [
    '#FFFFFF',
    '#FAFBFC',
    '#F1F2F5',
    '#FFF1FD',
    '#FFF2E5',
    '#FFE9E9',
    '#FFE4BE',
    '#E6F5ED',
    '#BAF1D6',
    '#CCF8B9',
    '#F9F3E7',
    '#D4F5ED',
    '#C6F2E7',
    '#A9EBDC',
    '#8DE5D0',
  ].includes(color);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 8,
          backgroundColor: color,
          border: isLight ? '1px solid #D0D5DD' : 'none',
          flexShrink: 0,
        }}
      />
      <div>
        <div style={{ fontFamily: 'General Sans, sans-serif', fontWeight: 600, fontSize: 14, color: '#101828' }}>{name}</div>
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#68707C' }}>{color}</div>
      </div>
    </div>
  );
}

function ColorGroup({ title, colors }: { title: string; colors: Record<string, string> }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h3 style={{ fontFamily: 'General Sans, sans-serif', fontSize: 18, fontWeight: 600, color: '#101828', marginBottom: 16 }}>{title}</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
        {Object.entries(colors).map(([name, color]) => (
          <Swatch key={name} name={name} color={color} />
        ))}
      </div>
    </div>
  );
}

function ScaleGroup({ title, scale }: { title: string; scale: Record<string | number, string> }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h3 style={{ fontFamily: 'General Sans, sans-serif', fontSize: 18, fontWeight: 600, color: '#101828', marginBottom: 16 }}>{title}</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {Object.entries(scale).map(([shade, color]) => (
          <div key={shade} style={{ textAlign: 'center' }}>
            <div
              style={{
                width: 64,
                height: 48,
                borderRadius: 8,
                backgroundColor: color,
                border: ['50', '25'].includes(shade) ? '1px solid #D0D5DD' : 'none',
              }}
            />
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#68707C', marginTop: 4 }}>{shade}</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: '#68707C' }}>{color}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BrandColors() {
  return (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif' }}>
      <h2 style={{ fontFamily: 'General Sans, sans-serif', fontSize: 24, fontWeight: 700, color: '#101828', marginBottom: 8 }}>Brand Colors</h2>
      <p style={{ fontSize: 14, color: '#68707C', marginBottom: 24 }}>
        Cater Design Systems — Figma <strong>Brands</strong> collection (Sherwood Green, Ocean Green, Mirage, Chelsea Gem, etc.).
      </p>
      <ColorGroup title="Brand Palette" colors={brands} />
    </div>
  );
}

function PrimitiveColors() {
  return (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif' }}>
      <h2 style={{ fontFamily: 'General Sans, sans-serif', fontSize: 24, fontWeight: 700, color: '#101828', marginBottom: 8 }}>Primitive Color Scales</h2>
      <p style={{ fontSize: 14, color: '#68707C', marginBottom: 24 }}>Full 50-900 shade scales for each brand color. Darker shades (900) to lighter shades (50).</p>
      {Object.entries(primitives).map(([name, scale]) => (
        <ScaleGroup key={name} title={name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' ')} scale={scale} />
      ))}
    </div>
  );
}

function SemanticColors() {
  return (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif' }}>
      <h2 style={{ fontFamily: 'General Sans, sans-serif', fontSize: 24, fontWeight: 700, color: '#101828', marginBottom: 8 }}>Semantic Tokens</h2>
      <p style={{ fontSize: 14, color: '#68707C', marginBottom: 24 }}>Purpose-driven color tokens that reference primitive scales. Use these in components.</p>
      {Object.entries(semantic).map(([group, colors]) => (
        <ColorGroup key={group} title={group.charAt(0).toUpperCase() + group.slice(1)} colors={colors} />
      ))}
    </div>
  );
}

const meta: Meta = {
  title: 'Tokens/Colors',
  parameters: {
    docs: {
      description: {
        component:
          'Color tokens synced to Cater Design Systems Figma (file key tK5SjqGRgeVr5w5tmxuLDa): Brands, Primitives, and Semantic (Tokens collection).',
      },
      source: { type: 'dynamic' },
    },
  },
};

export default meta;

export const Brand: StoryObj = {
  render: () => <BrandColors />,
};

export const Primitives: StoryObj = {
  render: () => <PrimitiveColors />,
};

export const Semantic: StoryObj = {
  render: () => <SemanticColors />,
};
