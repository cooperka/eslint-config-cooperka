module.exports = {

  extends: [
    'airbnb',
    require.resolve('./base-overrides'),
  ],

  // React-specific Airbnb rules are defined in
  // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react.js
  rules: {
    // http://eslint.org/docs/rules/no-shadow
    'no-shadow': ['error', {
      // Make some exceptions.
      allow: [
        // Mostly useful for Redux selector functions.
        'state',
      ],
    }],

    // Allow non-static class methods to prevent conflicts with class method ordering rules.
    // http://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': 'off',

    // Allow `.js` and support TypeScript.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', {
      extensions: ['.js', '.jsx', '.tsx'],
    }],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
    'react/forbid-prop-types': ['error', {
      forbid: [
        // Forbid excessively generic types, but DON'T forbid `object`.
        'any', 'array',
      ],
    }],

    // Often, props are not required because they're OPTIONAL!
    // No reason to enforce defaults when `undefined` works perfectly well.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
    'react/require-default-props': 'off',

    // Prevent missing parentheses around multi-line JSX, except for props,
    // which are already surrounded by curly braces and don't need additional parenthesis.
    //
    // Unfortunately 'new-line' alone is not an option here, because that would be good to enforce.
    //
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
    'react/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'ignore', // This is the only change from the Airbnb config.
    }],

    // Airbnb wants to enforce `MyComponent.propTypes = { ... }`, and
    // I want to allow `static propTypes = { ... }`, but unfortunately
    // it's not possible to allow both at once, so disable the rule.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
    'react/static-property-placement': 'off',

    // This is a major convenience, so allow it.
    // Good coding practices should be used to ensure prop spreading isn't abused.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
    'react/jsx-props-no-spreading': 'off',
  },

};
