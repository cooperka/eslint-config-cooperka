module.exports = {

  extends: ["./index"].map(require.resolve),

  plugins: [
    // https://github.com/yannickcr/eslint-plugin-react
    "react"
  ],

  rules: {
    // http://eslint.org/docs/rules/no-shadow
    "no-shadow": ["error", {
      "allow": [
        "state", // Mostly useful for Redux selector functions
      ],
    }],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    "react/jsx-no-bind": 0,

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    "react/jsx-filename-extension": 0,

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
    "react/forbid-prop-types": [2, {
      "forbid": [
        // TODO: Eventually, add "object" too. Use some sort of typedef?
        "any", "array",
      ],
    }],
  },

};
