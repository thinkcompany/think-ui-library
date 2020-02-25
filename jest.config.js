module.exports = {
  modulePaths: ['<rootDir>/src'],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50
    }
  },
  collectCoverage: true,
  collectCoverageFrom: ['**/src/**/*.{js,jsx}', '!**/src/**/*.stories.js'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    './dist',
    '<rootDir>/src/index.js',
    '_snapshots_'
  ],
  coverageReporters: ['html'],
  watchPlugins: ['<rootDir>/build/config/jest.plugin']
};
