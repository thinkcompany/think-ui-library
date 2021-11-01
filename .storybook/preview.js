import { addParameters } from '@storybook/html';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withMarkup } from '@stormid/storybook-html-addon-markup';
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
  darkMode: {
    dark: {
      ...themes.dark,
      appBg: '#262c30',
      appContentBg: '#262c30',
      barBg: '#262c30',
    },
    light: { ...themes.normal, appBg: '#ffffff' },
    current: 'light',
    darkClass: 'tco-lights-out',
    lightClass: 'tco-lights-on',
    stylePreview: true
  }
});

export const decorators = [withMarkup];