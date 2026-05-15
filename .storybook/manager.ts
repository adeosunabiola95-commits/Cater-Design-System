import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';
/** "Design System" label + wecater mark — see `.storybook/brand/sidebar-brand.svg` */
import brandImage from './brand/sidebar-brand.svg';

/**
 * Storybook *manager* chrome (sidebar, toolbar): theme + brand.
 * Preview canvas (your components) still uses `preview.ts` + `src/index.css`.
 *
 * Brand art is **imported** so it is inlined into the manager bundle (data URL).
 *
 * Swap `base: 'dark'` and tune grays for a dark shell, or import `themes` from
 * `storybook/theming` and extend `themes.dark` / `themes.light`.
 */
const caterTheme = create({
  base: 'light',

  /* Spec-style shell: cool gray chrome, blue selection (Coral-like; distinct from DS token green) */
  colorPrimary: '#2563EB',
  colorSecondary: '#101828',

  fontBase: '"Inter", system-ui, -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontCode: 'ui-monospace, "SF Mono", Menlo, monospace',

  appBg: '#F2F4F7',
  appContentBg: '#FFFFFF',
  appHoverBg: '#E4E7EC',
  appBorderColor: '#E4E7EC',

  barBg: '#F2F4F7',
  barTextColor: '#101828',
  barHoverColor: '#2563EB',
  barSelectedColor: '#FFFFFF',

  textColor: '#101828',
  textMutedColor: '#667085',
  textInverseColor: '#FFFFFF',

  inputBg: '#FFFFFF',
  inputBorder: '#D0D5DD',
  inputTextColor: '#101828',

  /** Label is inside `sidebar-brand.svg` (before the mark) */
  brandTitle: '',
  brandUrl: undefined,
  brandImage,
  brandTarget: '_self',
});

addons.setConfig({ theme: caterTheme });
