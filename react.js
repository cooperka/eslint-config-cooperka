module.exports = {

  extends: ["./index"].map(require.resolve),

  plugins: [
    "react"
  ],

  rules: {
    "no-shadow": ["error", {
      "allow": [
        "state", // Mostly useful for Redux selector functions
      ],
    }],

    "react/jsx-no-bind": 0,
    "react/jsx-filename-extension": 0,
    "react/forbid-prop-types": [2, {
      "forbid": [
        // TODO: Eventually, add "object" too. Use some sort of typedef?
        "any", "array",
      ],
    }],
  },

};
