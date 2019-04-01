module.exports = {

  // https://github.com/airbnb/javascript
  extends: 'airbnb',

  rules: {
    // It's perfectly fine to call a function before it's defined in JavaScript.
    // http://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': ['error', {
      functions: false,
    }],

    // http://eslint.org/docs/rules/new-cap
    'new-cap': ['error', {
      capIsNewExceptions: [
        // Allow using Immutable.js classes.
        'Immutable.List', 'Immutable.Map', 'Immutable.OrderedMap', 'Immutable.Set', 'Immutable.OrderedSet',
        'Immutable.Stack', 'Immutable.Range', 'Immutable.Repeat', 'Immutable.Record', 'Immutable.Seq',
        'Immutable.Iterable', 'Immutable.Collection',
      ],
    }],

    // Allow using braces if you want to.
    // http://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': 'off',

    // Allow nested ternary (but obviously they should be cleanly indented if you do this).
    // http://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': 'off',

    // Be less strict about the max line length in specific cases.
    // http://eslint.org/docs/rules/max-len
    'max-len': ['error', 120, 2, {
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],

    // Parenthesis are mandatory in JavaScript with more than one method argument,
    // so just use them all the time. This makes it much easier to change things in the future.
    // This is also easy to auto-fix if you forget to include them.
    // http://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'always'],

    // Allow exporting just one thing if you want to.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',

    // Allow importing devDependencies in tests.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: ['**/*.{test,spec}.{js,jsx,ts,tsx}']
    }],

    // Default is 'multiline' which only allows line breaks if the parameters themselves have line breaks.
    // https://eslint.org/docs/rules/function-paren-newline
    'function-paren-newline': ['error', 'consistent'],

    // Default is 'always' which is highly unnecessary.
    // https://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': ['error', {
      consistent: true
    }],

    // Allow moving return value to next line if you want to.
    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    'implicit-arrow-linebreak': 'off',
  },

};
