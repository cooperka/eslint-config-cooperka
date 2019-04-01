module.exports = {

  extends: [
    require.resolve('./index'),
  ],

  // React-specific Airbnb rules are defined in
  // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react.js
  rules: {
    // http://eslint.org/docs/rules/no-shadow
    'no-shadow': ['error', {
      allow: [
        'state', // Mostly useful for Redux selector functions.
      ],
    }],

    // http://eslint.org/docs/rules/class-methods-use-this
    "class-methods-use-this": 'off',

    // Support TypeScript.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', {
      extensions: ['.js', '.jsx', '.tsx'],
    }],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
    'react/forbid-prop-types': ['error', {
      forbid: [
        // TODO: Eventually, add 'object' too. Use some sort of DRY typedef?
        'any', 'array',
      ],
    }],

    // Often, props are not required because they're... optional!
    // No reason to enforce defaults when `undefined` works perfectly well.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
    "react/require-default-props": 'off',

    // Prevent missing parentheses around multi-line JSX,
    // except for props, which are already surrounded by curly braces.
    // Unfortunately 'new-line' alone is not an option here.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
    'react/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'ignore',
    }],
  },

};
