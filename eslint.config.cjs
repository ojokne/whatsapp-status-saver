// eslint.config.js
const js = require('@eslint/js');
const reactPlugin = require('eslint-plugin-react');
const reactNativePlugin = require('eslint-plugin-react-native');
const unusedImports = require('eslint-plugin-unused-imports');
const babelEslintParser = require('@babel/eslint-parser');

module.exports = [
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      parser: babelEslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: reactPlugin,
      'react-native': reactNativePlugin,
      'unused-imports': unusedImports,
    },
    rules: {
      'no-unused-vars': 'warn',
      'react-native/no-unused-styles': 'warn',
      'react-native/split-platform-components': 'warn',
      'react-native/no-inline-styles': 'off',
      'react-native/no-color-literals': 'off',
      'unused-imports/no-unused-imports': 'warn',
      'react/jsx-uses-react': 'warn',
      'react/jsx-uses-vars': 'warn',
    },
  },
];
