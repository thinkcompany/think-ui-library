import path from 'path';
import optimization from './webpack.optimization';
import plugins from './webpack.plugins';
import rules from './webpack.rules';
import common from './webpack.common';

export default {
  entry: ['./src/index.js'],
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: rules.concat(common.rules)
  },
  output: {
    path: path.resolve(__dirname, '../../dist'),
    publicPath: '/assets', // Explicitly set for background images in CSS
    libraryTarget: 'umd',
    filename: 'bundle.js',
    chunkFilename: '[name].js'
  },
  plugins: plugins.concat(common.plugins),
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules', 'src']
  },
  optimization
};
