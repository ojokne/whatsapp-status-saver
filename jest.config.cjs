// export default {
//   preset: 'react-native',
// };

module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation/native|@react-navigation/core|@react-navigation/routers|@react-navigation/bottom-tabs|@react-navigation/elements|react-native-tab-view|react-navigation|react-native-vector-icons)/)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
