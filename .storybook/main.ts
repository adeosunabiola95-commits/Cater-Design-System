import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
    '@chromatic-com/storybook',
  ],
  framework: '@storybook/react-vite',
  /** Logos & static assets for the manager UI (e.g. `brand/logo.png` in manager.ts) */
  staticDirs: ['../.storybook/brand'],
  /** Design-spec fonts for Docs pages (preview iframe) */
  previewHead: `
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preconnect" href="https://api.fontshare.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <link href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap" rel="stylesheet" />
    <style>
      /* Hide static placeholder shells only — do not force #storybook-docs always visible (breaks nav). */
      .sb-preparing-docs,
      .sb-nopreview,
      .sb-errordisplay {
        display: none !important;
      }
    </style>
  `,
  /** Manager UI fonts to match Docs body */
  managerHead: `
    <title>Cater Design Systems</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preconnect" href="https://api.fontshare.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <link href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap" rel="stylesheet" />
  `,
  /**
   * GitHub Pages project sites live at https://<user>.github.io/<repo>/ — set
   * STORYBOOK_BASE_PATH=/<repo>/ in CI so asset URLs resolve. Omit for root hosts or local static preview.
   */
  viteFinal: async (viteConfig, { configType }) => {
    const base = process.env.STORYBOOK_BASE_PATH?.replace(/\/?$/, '/') ?? viteConfig.base;
    if (configType === 'PRODUCTION' && process.env.STORYBOOK_BASE_PATH) {
      return mergeConfig(viteConfig, { base });
    }
    return viteConfig;
  },
};
export default config;