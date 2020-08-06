import { addDecorator, addParameters, configure } from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { withMarkup } from '@stormid/storybook-html-addon-markup';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// Styles just for Storybook
import 'fonts/_fonts.scss';
import 'primitives/_index.scss';

// Import local styles
import 'main.scss';

import 'index.js';

// Add global decorators
addDecorator(withA11y);
addDecorator(withKnobs);
addDecorator(withMarkup);

addParameters({
  options: {
    /**
     * show story component as full screen
     * @type {Boolean}
     */
    isFullScreen: false,
    /**
     * id to select an addon panel
     * @type {String}
     */
    selectedAddonPanel: undefined,
    /**
     * enable/disable shortcuts
     * @type {Boolean}
     */
    enableShortcuts: false,
    /**
     * display panel that shows a list of stories
     * @type {Boolean}
     */
    showNav: true,
    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showPanel: true,
    /**
     * display top-level grouping as a "root" in the sidebar
     */
    showRoots: true,
    /**
     * show addon panel as a vertical panel on the right
     * @type {Boolean}
     */
    panelPosition: 'bottom',
    /**
     * display floating search box to search through stories
     * @type {Boolean}
     */
    showSearchBox: false,
    /**
     * sorts stories
     * @type {Boolean}
     */
    sortStoriesByKind: true,
    /**
     * sidebar tree animations
     * @type {Boolean}
     */
    sidebarAnimations: true
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
});

const loadStories = () => {
  return [
    require.context('../src/primitives', true, /\.stories\.([jt]sx?|mdx)$/),
    require.context('../src/components', true, /\.stories\.([jt]sx?|mdx)$/),
  ];
};

// Configure story load order
configure(loadStories(), module);