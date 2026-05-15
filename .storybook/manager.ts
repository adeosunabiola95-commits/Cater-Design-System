import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';
/** wecater wordmark — `.storybook/brand/logo.png` */
import brandImage from './brand/logo.png';

/**
 * Storybook *manager* chrome (sidebar, toolbar): theme + brand.
 * Preview canvas (your components) still uses `preview.ts` + `src/index.css`.
 *
 * Brand art is **imported** so it is inlined into the manager bundle (data URL).
 *
 * Swap `base: 'dark'` and tune grays for a dark shell, or import `themes` from
 * `storybook/theming` and extend `themes.dark` / `themes.light`.
 */
/** Cater brand — Sherwood Green + Gossip (matches Button primary in Figma) */
const BRAND_SHERWOOD = '#073D30';
const BRAND_GOSSIP = '#CCF8B9';
const BRAND_SHERWOOD_HOVER = '#1E6151';

const caterTheme = create({
  base: 'light',

  /* colorSecondary drives selected sidebar row background; barSelected falls back to it */
  colorPrimary: BRAND_SHERWOOD,
  colorSecondary: BRAND_SHERWOOD,

  fontBase: '"Inter", system-ui, -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontCode: 'ui-monospace, "SF Mono", Menlo, monospace',

  appBg: '#F2F4F7',
  appContentBg: '#FFFFFF',
  appHoverBg: '#E6F5ED',
  appBorderColor: '#E4E7EC',

  barBg: '#F2F4F7',
  barTextColor: '#101828',
  barHoverColor: BRAND_SHERWOOD_HOVER,
  barSelectedColor: BRAND_SHERWOOD,

  textColor: '#101828',
  textMutedColor: '#667085',
  textInverseColor: BRAND_GOSSIP,

  inputBg: '#FFFFFF',
  inputBorder: '#D0D5DD',
  inputTextColor: '#101828',

  brandTitle: 'Design System',
  brandUrl: undefined,
  brandImage,
  brandTarget: '_self',
});

addons.setConfig({ theme: caterTheme });
