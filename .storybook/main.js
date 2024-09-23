module.exports = {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-mdx-gfm',
    '@storybook/addon-docs',
    '@storybook/addon-viewport',
    'storybook-dark-mode'
  ],

  stories: [
    './*.stories.@(js|jsx|mdx|ts|tsx)',
    '../src/primitives/**/*.stories.@(js|jsx|mdx|ts|tsx)',
    '../src/components/**/*.stories.@(js|jsx|mdx|ts|tsx)'
  ],

  staticDirs: ['../src/assets'],

  framework: {
    name: '@storybook/html-webpack5',
    options: {}
  },

  docs: {
    autodocs: 'tag'
  }
};
