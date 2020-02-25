import autoprefixer from 'autoprefixer';
import flexbugFixes from 'postcss-flexbugs-fixes';
import sass from 'sass';
import MiniCSSExtractPlugin from 'mini-css-extract-plugin';

const rules = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: [
      'babel-loader',
      {
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      }
    ]
  },
  {
    test: /\.(sa|sc|c)ss$/,
    use: [
      MiniCSSExtractPlugin.loader,
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: [autoprefixer, flexbugFixes]
        }
      },
      {
        loader: 'sass-loader',
        options: {
          // Prefer `dart-sass`
          implementation: sass
        }
      }
    ]
  }
];

export default rules;
