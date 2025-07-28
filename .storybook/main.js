module.exports = {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-mdx-gfm',
    '@storybook/addon-docs',
    '@storybook/addon-viewport',
    '@storybook/addon-designs',
    'storybook-dark-mode',
    '@storybook/addon-webpack5-compiler-babel',
    '@chromatic-com/storybook'
  ],

  stories: [
    './*.@(mdx|stories.@(js|jsx|ts|tsx))',
    '../src/primitives/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
    '../src/components/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'
  ],

  staticDirs: ['../src/assets'],

  framework: {
    name: '@storybook/html-webpack5',
    options: {}
  },

  docs: {}
};
