import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import thinkTheme from './thinkTheme';

window.STORYBOOK_GA_ID = "UA-5790823-8"
window.STORYBOOK_REACT_GA_OPTIONS = {}

addons.setConfig({
  theme: {
    ...themes.light,
    ...thinkTheme
  }
});
