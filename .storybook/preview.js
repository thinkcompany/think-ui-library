import { addParameters } from '@storybook/html';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { themes } from '@storybook/theming';

// Styles just for Storybook
import 'fonts/_fonts.scss';
import 'primitives/_index.scss';

// Import local styles
import 'main.scss';

import 'index.js';

addParameters({
  options: {
    showPanel: true,
    panelPosition: 'bottom'
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS
  },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#ffffff',
      },
      {
        name: 'glass',
        value: '#f2f8fa',
      },
    ],
  },
  docs: {
    source: {
      state: 'close'
    }
  },
  darkMode: {
    dark: {
      ...themes.dark,
      base: 'dark',
      appBg: '#181c1f',
      appContentBg: '#181c1f',
      barBg: '#23272a',
      brandImage: '/img/think-logo-white.svg',
    },
    light: {
      ...themes.light,
      appBg: '#f2f8fa',
      brandImage: '/img/think-company-logo-stacked.svg'
    },
    darkClass: 'tco-lights-out',
    lightClass: 'tco-lights-on',
    stylePreview: true
  },
  html: {
    prettier: {
      printWidth: 120
    }
  }
});
