const path = require('path');
const common = require('../build/config/webpack.common');

module.exports = ({ config }) => {
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
  config.plugins.push(...common.plugins);

  // Required for Webpack v5 issue
  config.resolve.fallback = {
    ...config.resolve.fallback,
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
    constants: require.resolve('constants-browserify'),
    fs: false
  };

  config.resolve.modules.push(
    path.resolve(__dirname, '../src'),
    path.resolve(__dirname, '../tokens')
  );

  // Return the altered config
  return config;
};