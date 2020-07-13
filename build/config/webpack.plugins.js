import webpack from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const plugins = [
  new CleanWebpackPlugin(),
  new webpack.HotModuleReplacementPlugin()
];

export default plugins;
