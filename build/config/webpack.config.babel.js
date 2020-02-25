import path from 'path';
import optimization from './webpack.optimization';
import plugins from './webpack.plugins';
import rules from './webpack.rules';

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules
  },
  plugins,
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: ['node_modules', 'src']
  },
  optimization
};

module.exports = config;
