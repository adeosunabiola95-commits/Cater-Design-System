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
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <style>
      /*
       * Hide Storybook's static docs placeholder shells (propertyName table + "No Preview").
       * Real docs render in #storybook-docs; these shells can stick when sb-show-main is delayed.
       */
      .sb-preparing-docs,
      .sb-nopreview,
      .sb-errordisplay {
        display: none !important;
      }
      /* Storybook hides #storybook-docs while preparing — override so MDX can show */
      body.sb-show-preparing-docs:not(.sb-show-main) > #storybook-docs,
      body.sb-show-nopreview > #storybook-docs {
        display: block !important;
      }
      #storybook-docs:not([hidden]) {
        display: block !important;
      }
    </style>
    <script>
      /* One-shot fix: set sb-show-main when MDX mounts (no MutationObserver — avoids hang) */
      (function () {
        var done = false;
        function fixDocsShell() {
          if (done) return;
          var docs = document.getElementById('storybook-docs');
          if (!docs || !docs.querySelector('.sbdocs')) return;
          done = true;
          document.body.classList.add('sb-show-main');
          document.body.classList.remove(
            'sb-show-preparing-story',
            'sb-show-preparing-docs',
            'sb-show-nopreview'
          );
          docs.removeAttribute('hidden');
          var root = document.getElementById('storybook-root');
          if (root) root.setAttribute('hidden', 'true');
        }
        var ticks = 0;
        var timer = setInterval(function () {
          fixDocsShell();
          if (done || ++ticks > 150) clearInterval(timer);
        }, 40);
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', fixDocsShell);
        } else {
          fixDocsShell();
        }
      })();
    </script>
  `,
  /** Manager UI fonts to match Docs body */
  managerHead: `
    <title>Cater Design Systems</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
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