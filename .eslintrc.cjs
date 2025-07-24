module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    'react-native/react-native': true,
    jest: true,
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/*.{spec,test}.[jt]s?(x)'],
      env: {
        jest: true,
      },
      plugins: ['jest', 'testing-library'],
      extends: ['plugin:jest/recommended', 'plugin:testing-library/react'],
    },
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  plugins: [
    'react',
    'react-native',
    'import',
    'unused-imports',
    'jest',
    'testing-library',
  ],
  rules: {
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    'react-native/no-inline-styles': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-extra-semi': 'error',
     'import/namespace': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
