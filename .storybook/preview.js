import { addDecorator, addParameters, configure } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// Import local styles
import 'main.scss';
import 'primitives/_index.scss';

// Add global decorators
addDecorator(withA11y);
addDecorator(withKnobs);

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
    sidebarAnimations: true,
    /**
     * Display top-level grouping as a "root" in the sidebar
     */
    showRoots: null
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
});

// Configure story load order
configure(
  [
    require.context('../src/primitives', true, /\.stories\.js$/),
    require.context('../src/components', true, /\.stories\.js$/)
  ],
  module
);
