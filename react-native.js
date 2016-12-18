module.exports = {

  extends: ["./react"].map(require.resolve),

  plugins: [
    "react",
    "react-native"
  ],

  rules: {
    "react-native/no-unused-styles": 0,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
  },

};
