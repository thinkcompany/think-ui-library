module.exports = {
  stories: [
    '../src/primitives/**/*.stories.@(js|mdx)',
    '../src/components/**/*.stories.@(js|mdx)'
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@stormid/storybook-html-addon-markup'
  ]
};
