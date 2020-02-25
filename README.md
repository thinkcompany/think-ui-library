# Think Company Design System

A template for creating design systems with Storybook and React.

Built with the following:

- [React v16](https://github.com/facebook/react)
- [Babel v7](https://github.com/babel/babel)
- [Storybook v5](https://storybook.js.org/)
- [Webpack v4](https://github.com/webpack/webpack)
- [Jest v25](https://jestjs.io/docs/en/getting-started)

## Deployment

On every push to the bitbucket `master`, this site deploys to [https://ui.thinkcompany.dev](ui.thinkcompany.dev).

Successful deployments are announced to channel [#tcolas](https://app.slack.com/client/T024FSQ8N/CTU9SV820) in the Think Company Slack.

## Files

| File                                                            | Purpose                                                                            |
| --------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [.storybook/main.js](.storybook/main.js)                        | Setup Storybook addons                                                             |
| [.storybook/manager.js](.storybook/manager.js)                  | Configure custom Storybook theme                                                   |
| [.storybook/preview.js](.storybook/preview.js)                  | Configure global decorators and parameters                                         |
| [.storybook/thinkTheme.js](.storybook/thinkTheme.js)            | Custom branded theme                                                               |
| [.storybook/webpack.config.js](.storybook/webpack.config.js)    | Webpack overrides for Storybook                                                    |
| [.eslintrc.js](.eslintrc.js)                                    | [ESlint](https://github.com/eslint/eslint) config settings                         |
| [.gitignore](.gitignore)                                        | Files and directories for Git to ignore                                            |
| [.prettierrc.json](.prettierrc.json)                            | [Prettier](https://github.com/prettier/prettier) config settings                   |
| [.stylelintrc.json](.stylelintrc.json)                          | [Stylelint](https://github.com/stylelint/stylelint) config settings and rules      |
| [babel.config.json](babel.config.json)                          | [Babel](https://babeljs.io/docs/en/configuration) presets and plugins              |
| [jest.config.js](build/config/jest.config.js)                   | [Jest](https://jestjs.io/docs/en/configuration) config settings and coverage rules |
| [jest.plugin.js](build/config/jest.plugin.js)                   | Jest plugin to open coverage report                                                |
| [package-lock.json](package-lock.json)                          | Keeps track of NPM dependency tree                                                 |
| [package.json](package.json)                                    | Contains list of NPM dependencies                                                  |
| [tokens.js](build/scripts/tokens.js)                            | Generate variable tokens from JSON files                                           |
| [webpack.config.babel.js](build/config/webpack.config.babel.js) | [Webpack](https://webpack.js.org/configuration/) config settings                   |
| [webpack.optimization.js](build/config/webpack.optimization.js) | Minification and code splitting options                                            |
| [webpack.plugins.js](build/config/webpack.plugins.js)           | Webpack plugins                                                                    |
| [webpack.rules.js](build/config/webpack.rules.js)               | Webpack rules                                                                      |
