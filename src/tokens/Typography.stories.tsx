import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
} from './typography';

const sampleText = 'Grow catering sales with cateringrewards';

/** Figma-aligned pairs: Size token → display name (role) */
const figmaSizeStories: { token: keyof typeof fontSize; figmaName: string; font: 'display' | 'body' }[] = [
  { token: 'xs', figmaName: 'Size/xs — Footnote', font: 'body' },
  { token: 'sm', figmaName: 'Size/sm — Caption', font: 'body' },
  { token: 'base', figmaName: 'Size/base — Subtitle 2', font: 'body' },
  { token: 'md', figmaName: 'Size/md — Subtitle', font: 'body' },
  { token: 'lg', figmaName: 'Size/lg — Body', font: 'body' },
  { token: 'xl', figmaName: 'Size/xl — Headline', font: 'display' },
  { token: '2xl', figmaName: 'Size/2xl — H4', font: 'display' },
  { token: '3xl', figmaName: 'Size/3xl — H3', font: 'display' },
  { token: '4xl', figmaName: 'Size/4xl — H2', font: 'display' },
  { token: '5xl', figmaName: 'Size/5xl — H1', font: 'display' },
];

function FontFamilyDisplay() {
  return (
    <div style={{ padding: 32 }}>
      <h2 style={{ fontFamily: fontFamily.display, fontSize: 24, fontWeight: 700, color: '#101828', marginBottom: 8 }}>
        Font families
      </h2>
      <p style={{ fontFamily: fontFamily.body, fontSize: 14, color: '#68707C', marginBottom: 32 }}>
        From Figma Typography: <strong>Family/Display</strong> (headings) and <strong>Family/Body</strong> (UI copy).
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        <div style={{ padding: 24, borderRadius: 12, border: '1px solid #D0D5DD' }}>
          <div style={{ fontFamily: fontFamily.body, fontSize: 12, fontWeight: 600, color: '#68707C', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>
            Family/Display
          </div>
          <div style={{ fontFamily: fontFamily.display, fontSize: 36, fontWeight: 700, color: '#101828', marginBottom: 8 }}>
            {fontFamily.display}
          </div>
          <div style={{ fontFamily: fontFamily.display, fontSize: 18, color: '#29344A' }}>{sampleText}</div>
          <div style={{ fontFamily: fontFamily.body, fontSize: 13, color: '#68707C', marginTop: 12 }}>
            Tailwind: <code>font-title</code> · CSS: <code>--font-title</code>
          </div>
        </div>

        <div style={{ padding: 24, borderRadius: 12, border: '1px solid #D0D5DD' }}>
          <div style={{ fontFamily: fontFamily.body, fontSize: 12, fontWeight: 600, color: '#68707C', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>
            Family/Body
          </div>
          <div style={{ fontFamily: fontFamily.body, fontSize: 36, fontWeight: 700, color: '#101828', marginBottom: 8 }}>
            {fontFamily.body}
          </div>
          <div style={{ fontFamily: fontFamily.body, fontSize: 18, color: '#29344A' }}>{sampleText}</div>
          <div style={{ fontFamily: fontFamily.body, fontSize: 13, color: '#68707C', marginTop: 12 }}>
            Tailwind: <code>font-body</code> · CSS: <code>--font-body</code>
          </div>
        </div>
      </div>
    </div>
  );
}

function TypeScale() {
  return (
    <div style={{ padding: 32 }}>
      <h2 style={{ fontFamily: fontFamily.display, fontSize: 24, fontWeight: 700, color: '#101828', marginBottom: 8 }}>
        Type scale (Figma Size/*)
      </h2>
      <p style={{ fontFamily: fontFamily.body, fontSize: 14, color: '#68707C', marginBottom: 24 }}>
        Values match Figma variables. Headings use General Sans; body roles use Inter.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {figmaSizeStories.map(({ token, figmaName, font }) => {
          const ff = font === 'display' ? fontFamily.display : fontFamily.body;
          const px = fontSize[token];
          return (
            <div
              key={token}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 24,
                padding: '16px 0',
                borderBottom: '1px solid #F1F2F5',
              }}
            >
              <div style={{ width: 220, flexShrink: 0, fontFamily: fontFamily.body, fontSize: 13, color: '#68707C' }}>
                {figmaName}
              </div>
              <div style={{ width: 56, flexShrink: 0, fontFamily: fontFamily.body, fontSize: 13, color: '#68707C' }}>
                {px}px
              </div>
              <div
                style={{
                  fontFamily: ff,
                  fontSize: px,
                  fontWeight: font === 'display' ? fontWeight.semibold : fontWeight.regular,
                  color: '#101828',
                  lineHeight: lineHeight.tight,
                }}
              >
                {sampleText}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function WeightLineLetter() {
  return (
    <div style={{ padding: 32 }}>
      <h2 style={{ fontFamily: fontFamily.display, fontSize: 24, fontWeight: 700, color: '#101828', marginBottom: 16 }}>
        Weight, line-height, letter-spacing
      </h2>
      <div style={{ fontFamily: fontFamily.body, fontSize: 14, color: '#29344A', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <p>
          <strong>Weight:</strong> Regular {fontWeight.regular}, Medium {fontWeight.medium}, Semibold {fontWeight.semibold}, Bold {fontWeight.bold}
        </p>
        <p>
          <strong>Line-height:</strong> Tight {lineHeight.tight} (120%), Normal {lineHeight.normal} (140%), Loose {lineHeight.loose} (150%)
        </p>
        <p style={{ letterSpacing: letterSpacing.tight }}>
          Letter-spacing / Tight ({letterSpacing.tight})
        </p>
        <p style={{ letterSpacing: letterSpacing.normal }}>Letter-spacing / Normal ({letterSpacing.normal})</p>
        <p style={{ letterSpacing: letterSpacing.wide }}>Letter-spacing / Wide ({letterSpacing.wide})</p>
      </div>
    </div>
  );
}

const meta: Meta = {
  title: 'Tokens/Typography',
  parameters: {
    docs: {
      description: {
        component:
          'Typography tokens from Cater Design Systems Figma (Typography collection). Names mirror variables: Family/Display, Family/Body, Size/*, Weight/*, Line-height/*, Letter-spacing/*.',
      },
      source: { type: 'dynamic' },
    },
  },
};

export default meta;

export const FontFamilies: StoryObj = {
  render: () => <FontFamilyDisplay />,
};

export const Scale: StoryObj = {
  render: () => <TypeScale />,
};

export const WeightAndRhythm: StoryObj = {
  render: () => <WeightLineLetter />,
};
