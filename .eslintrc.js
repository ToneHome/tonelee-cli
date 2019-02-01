/** @format */

module.exports = {
  root: true,
  extends: ['plugin:prettier/recommended', 'eslint:recommended'],
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  env: {
    node: true,
    es6: true
  },
  rules: {
    'no-console': 0,
    'no-unused-vars': 0,
    'no-useless-escape': 0,
    'no-multiple-empty-lines': [
      2,
      {
        max: 3
      }
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        trailingComma: 'none',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        insertPragma: true,
        requirePragma: false
      }
    ]
  }
};
