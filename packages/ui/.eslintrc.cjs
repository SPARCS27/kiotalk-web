/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@kiotalk/eslint-config/library.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
};