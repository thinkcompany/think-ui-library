module.exports = {
  stories: [
    './*.stories.@(js|mdx)',
    '../src/primitives/**/*.stories.@(js|mdx)',
    '../src/components/**/*.stories.@(js|mdx)'
  ],
  addons: [
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false
      }
    },
    'storybook-addon-designs',
    '@storybook/addon-postcss',
    '@whitespace/storybook-addon-html',
    'storybook-dark-mode',
    '@storybook/addon-google-analytics'
  ]
};
