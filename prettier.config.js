module.exports = {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  jsxSingleQuote: false,
  importOrder: ['<THIRD_PARTY_MODULES>', '^ui/(.*)$', '^types/(.*)$', '^[./]'],
  importOrderCaseInsensitive: true,
  importOrderSeparation: true,
  importOrderSideEffects: false,
  importOrderSortSpecifiers: true,
  overrides: [
    {
      files: '*.scss',
      options: {
        semi: true,
        printWidth: 100,
        tabWidth: 2,
        cursorOffset: -1,
        singleQuote: false,
      },
    },
    {
      files: '.prettierrc',
      options: { parser: 'json' },
    },
  ],
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
};
