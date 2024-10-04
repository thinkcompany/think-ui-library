// config for storybook layout ui
// https://storybook.js.org/docs/configure/user-interface/features-and-behavior
import { addons } from '@storybook/manager-api';
import thinkTheme from './thinkTheme';

// window.STORYBOOK_GA_ID = "UA-5790823-8"
// window.STORYBOOK_REACT_GA_OPTIONS = {}

addons.setConfig({
  theme: thinkTheme,
  sidebar: {
    collapsedRoots: ['archive']
  }
});
