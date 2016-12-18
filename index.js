module.exports = {

  // https://github.com/airbnb/javascript
  extends: "airbnb",

  rules: {
    // http://eslint.org/docs/rules/no-use-before-define
    "no-use-before-define": [2, "nofunc"],

    // http://eslint.org/docs/rules/new-cap
    "new-cap": [2, {
      "capIsNewExceptions": [
        // Immutable.js classes.
        "List", "Map", "OrderedMap", "Set", "OrderedSet", "Stack",
        "Range", "Repeat", "Record", "Seq", "Iterable", "Collection",
      ],
    }],

    // http://eslint.org/docs/rules/no-console
    "no-console": 0,

    // http://eslint.org/docs/rules/object-shorthand
    "object-shorthand": 0,

    // http://eslint.org/docs/rules/arrow-body-style
    "arrow-body-style": 0,

    // http://eslint.org/docs/rules/no-nested-ternary
    "no-nested-ternary": 0,

    // http://eslint.org/docs/rules/max-len
    "max-len": [2, 120],

    // http://eslint.org/docs/rules/no-shadow
    "no-shadow": ["error"],

    // http://eslint.org/docs/rules/class-methods-use-this
    "class-methods-use-this": 0,

    // http://eslint.org/docs/rules/arrow-parens
    "arrow-parens": [2, "always"],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    "import/prefer-default-export": 0,
  },

};
