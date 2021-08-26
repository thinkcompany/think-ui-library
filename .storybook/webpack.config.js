const path = require('path');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          // Prefer `dart-sass`
          implementation: require('sass')
        }
      }
    ]
  });

  config.plugins.push(
    new StylelintPlugin({
      configFile: '.stylelintrc.json',
      context: 'src',
      failOnError: false,
      emitWarning: true,
      emitErrors: false,
      lintDirtyModulesOnly: true,
      fix: true,
      quiet: true,
      syntax: 'scss'
    })
  );

  config.resolve.modules.push(
    path.resolve(__dirname, '../src'),
    path.resolve(__dirname, '../tokens')
  );

  // Return the altered config
  return config;
};