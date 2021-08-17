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
    '@storybook/addon-knobs',
    '@stormid/storybook-html-addon-markup'
  ]
};
