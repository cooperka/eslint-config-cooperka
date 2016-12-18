module.exports = {

  extends: "airbnb",

  rules: {
    "no-use-before-define": [2, "nofunc"],
    "new-cap": [2, {
      "capIsNewExceptions": [
        // Immutable.js classes.
        "List", "Map", "OrderedMap", "Set", "OrderedSet", "Stack",
        "Range", "Repeat", "Record", "Seq", "Iterable", "Collection",
      ],
    }],
    "no-console": 0,
    "object-shorthand": 0,
    "arrow-body-style": 0,
    "no-nested-ternary": 0,
    "max-len": [2, 120],
    "no-shadow": ["error", {
      "allow": [
        "state", // Mostly useful for Redux selector functions
      ],
    }],
    "class-methods-use-this": 0,
    "arrow-parens": [2, "always"],

    "import/prefer-default-export": 0,

    "react/jsx-no-bind": 0,
    "react/jsx-filename-extension": 0,
    "react/forbid-prop-types": [2, {
      "forbid": [
        // TODO: Eventually, add "object" too. Use some sort of typedef?
        "any", "array",
      ],
    }],

    "react-native/no-unused-styles": 0,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
  },

};
