const path = require('node:path');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    '@sparcs/eslint-config/base.js',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  env: {
    node: true,
    browser: true,
    es2020: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'react-hooks', 'react-refresh', 'jsx-a11y'],
  rules: {
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  ignorePatterns: ['dist', '.eslintrc.cjs', '.eslintrc.cjs'],
};
