import type { Preview } from '@storybook/react-vite';
import '../src/index.css';
/** Docs-only Storybook chrome (scoped `.sbdocs`); does not replace design-system tokens in stories */
import './docs-spec.css';

const preview: Preview = {
  /** Component docs live in `*.docs.mdx`; do not auto-generate parallel autodocs pages. */
  tags: ['!autodocs'],
  parameters: {
    options: {
      /** Top-level nav: project pages, all tokens, components, examples (not strict A–Z). */
      storySort: {
        order: [
          'Introduction',
          'Changelog',
          'Tokens',
          'Molecules',
          'Components',
          ['Logo', 'Modal', '*'],
          'Examples',
          ['Modal', '*'],
        ],
        locales: 'en-US',
      },
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: { width: '375px', height: '667px' },
          type: 'mobile',
        },
        tablet: {
          name: 'Tablet',
          styles: { width: '768px', height: '1024px' },
          type: 'tablet',
        },
        desktop: {
          name: 'Desktop',
          styles: { width: '1280px', height: '800px' },
          type: 'desktop',
        },
      },
      defaultViewport: 'desktop',
    },
    backgrounds: {
      grid: { disable: true },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      source: {
        state: 'open',
        type: 'dynamic',
      },
    },
    a11y: {
      test: 'error',
    },
  },
};

export default preview;