/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@sparcs/eslint-config/base.js'],
  env: {
    node: true,
  },
  ignorePatterns: ['dist/'],
};
