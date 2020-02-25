import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

export default {
  minimizer: [
    new TerserPlugin({
      extractComments: {
        filename: 'LICENSE.txt'
      },
      sourceMap: true
    }),
    new OptimizeCSSAssetsPlugin({})
  ],
  splitChunks: {
    cacheGroups: {
      default: false,
      vendors: false,
      vendor: {
        name: 'vendor',
        chunks: 'all',
        test: /[\\/]node_modules[\\/](.(?!.*\.css$))*$/
      }
    }
  }
};
