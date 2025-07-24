// module.exports = {
//   root: true,
//   extends: '@react-native',
// };

export default {
  root: true,
  env: {
    browser: true,
    es6: true,
    'react-native/react-native': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:import/errors',
    'plugin:import/warnings',
    'airbnb',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-native', 'import', 'unused-imports'],
  rules: {
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    // 'react/react-in-jsx-scope': 'off', // Not needed for React 17+
    'react-native/no-inline-styles': 'off', // optional, allow inline styles
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
