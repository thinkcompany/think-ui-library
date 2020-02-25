import webpack from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCSSExtractPlugin from 'mini-css-extract-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';

const plugins = [
  new CleanWebpackPlugin(),
  new StyleLintPlugin({
    configFile: '.stylelintrc.json',
    context: 'src',
    failOnError: false,
    emitWarning: true,
    emitErrors: false,
    lintDirtyModulesOnly: true,
    fix: true,
    quiet: true,
    syntax: 'scss'
  }),
  new MiniCSSExtractPlugin({
    filename: 'bundle.css'
  }),
  new HtmlWebpackPlugin({
    template: './src/index.html'
  }),
  new webpack.HotModuleReplacementPlugin()
];

export default plugins;
