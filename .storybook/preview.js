import { addParameters } from '@storybook/html';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withMarkup } from '@stormid/storybook-html-addon-markup';
import { themes } from '@storybook/theming';

// Styles just for Storybook
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
      barBg: '#010D15',
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

export const decorators = [withMarkup];