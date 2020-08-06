// Reserved for any webpack configuration that should be common between 
// the dev storybook build and production webpack build.

const autoprefixer = require('autoprefixer');
const flexbugfixes = require('postcss-flexbugs-fixes');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const plugins = [
  new StyleLintPlugin({
    configFile: '.stylelintrc.json',
    context: 'src',
    files: '**/*.scss',
    failOnError: false,
    emitErrors: false,
    lintDirtyModulesOnly: true,
    quiet: true,
    fix: true,
    syntax: 'scss'
  }),
  new MiniCSSExtractPlugin({
    filename: '[name].css',
    chunkFilename: 'bundle-[id].css'
  })
];

const rules = [{
    test: /\.(sa|sc|c)ss$/,
    use: [
      'style-loader',
      MiniCSSExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          importLoaders: 2,
          sourceMap: true
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          ident: 'postcss',
          plugins: [
            autoprefixer({grid: 'autoplace'}),
            flexbugfixes
          ]
        }
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          implementation: require('sass')
        }
      }
    ]
}];

const optimization = {
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

module.exports = {
  plugins,
  rules,
  optimization
};
