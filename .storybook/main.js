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
    '@storybook/addon-postcss',
    '@stormid/storybook-html-addon-markup',
    '@storybook/addon-google-analytics'
  ]
};
