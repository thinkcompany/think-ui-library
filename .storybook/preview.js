import { addParameters } from '@storybook/html';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withMarkup } from '@stormid/storybook-html-addon-markup';

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
});

export const decorators = [withMarkup];