module.exports = {
  stories: [
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
    '@stormid/storybook-html-addon-markup'
  ]
};
