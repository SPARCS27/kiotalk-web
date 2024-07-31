/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@kiotalk/eslint-config/base.js'],
  env: {
    node: true,
  },
  ignorePatterns: ['dist/'],
};
