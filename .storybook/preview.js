import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { themes } from '@storybook/theming';

// Styles just for Storybook
import 'primitives/_index.scss';

// Import local styles
import 'main.scss';

import 'index.js';

export const parameters = {
  options: {
    showPanel: true,
    panelPosition: 'bottom'
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS
  },
  backgrounds: {
    values: [
      {
        name: 'white',
        value: '#ffffff'
      },
      {
        name: 'glass',
        value: '#f2f8fa'
      }
    ]
  },
  darkMode: {
    dark: {
      ...themes.dark,
      base: 'dark',
      appBg: '#181c1f',
      appContentBg: '#181c1f',
      barBg: '#010D15',
      textColor: '#ffffff',
      textMutedColor: '#ffffff',
      textInverseColor: '#ffffff',
      brandImage: '/img/think-logo-white.svg',
      fontBase: '"Inter", sans-serif'
    },
    darkClass: 'tco-lights-out',
    lightClass: 'tco-lights-on',
    stylePreview: true,
    brandImage: '/img/think-company-logo-stacked.svg'
  },
  docs: {
    source: {
      state: 'close'
    }
  }
  // html: {
  //   prettier: {
  //     printWidth: 120,
  //   },
  // },
};

export const tags = ['autodocs'];
