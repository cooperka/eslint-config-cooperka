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
    "no-shadow": ["error"],
    "class-methods-use-this": 0,
    "arrow-parens": [2, "always"],

    "import/prefer-default-export": 0,
  },

};
