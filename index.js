module.exports = {

  // https://github.com/airbnb/javascript
  extends: 'airbnb',

  rules: {
    // http://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': ['error', {
      functions: false,
    }],

    // http://eslint.org/docs/rules/new-cap
    'new-cap': ['error', {
      capIsNewExceptions: [
        // Immutable.js classes.
        'Immutable.List', 'Immutable.Map', 'Immutable.OrderedMap', 'Immutable.Set', 'Immutable.OrderedSet',
        'Immutable.Stack', 'Immutable.Range', 'Immutable.Repeat', 'Immutable.Record', 'Immutable.Seq',
        'Immutable.Iterable', 'Immutable.Collection',
      ],
    }],

    // http://eslint.org/docs/rules/arrow-body-style
    "arrow-body-style": 'off',

    // Allow nested ternary, but obviously they should be wrapped in parenthesis if you do this.
    // http://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': 'off',

    // http://eslint.org/docs/rules/max-len
    'max-len': ['error', 120, 2, {
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],

    // http://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'always'],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',

    // http://eslint.org/docs/rules/padded-blocks
    'padded-blocks': ['error', {
      blocks: 'never',
      classes: 'always',
      switches: 'never',
    }],

    // Default is 'multiline' which only allows line breaks if the parameters themselves have line breaks.
    // https://eslint.org/docs/rules/function-paren-newline
    'function-paren-newline': ['error', 'consistent'],
  },

};
