import { addParameters } from '@storybook/html';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// Styles just for Storybook
import 'fonts/_fonts.scss';
import 'primitives/_index.scss';

// Import local styles
import 'main.scss';

import 'index.js';

addParameters({
  chromatic: { disable: true },
  options: {
    showPanel: true,
    panelPosition: 'bottom'
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
});
