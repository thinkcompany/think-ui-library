module.exports = {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss',
    '@whitespace/storybook-addon-html',
    'storybook-dark-mode',
    '@storybook/addon-google-analytics'
  ],
  core: {
    builder: 'webpack5'
  },
  stories: [
    './*.stories.@(js|jsx|mdx|ts|tsx)',
    '../src/primitives/**/*.stories.@(js|jsx|mdx|ts|tsx)',
    '../src/components/**/*.stories.@(js|jsx|mdx|ts|tsx)'
  ],
  staticDirs: ['../src/assets']
};