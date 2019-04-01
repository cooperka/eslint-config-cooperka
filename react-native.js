module.exports = {

  extends: [
    require.resolve('./react'),
  ],

  plugins: [
    // https://github.com/Intellicode/eslint-plugin-react-native
    'react-native'
  ],

  // Airbnb does not currently provide any rules for React Native,
  // so turn on some basic ones here.
  rules: {
    // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-unused-styles.md
    'react-native/no-unused-styles': 'error',

    // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/split-platform-components.md
    'react-native/split-platform-components': 'error',

    // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-inline-styles.md
    'react-native/no-inline-styles': 'error',

    // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-color-literals.md
    'react-native/no-color-literals': 'error',
  },

};
