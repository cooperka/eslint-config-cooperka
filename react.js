module.exports = {

  extends: ['./index'].map(require.resolve),

  plugins: [
    // https://github.com/yannickcr/eslint-plugin-react
    'react'
  ],

  // React-specific rules extend from
  // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react.js
  rules: {
    // http://eslint.org/docs/rules/no-shadow
    'no-shadow': ['error', {
      allow: [
        'state', // Mostly useful for Redux selector functions.
      ],
    }],

    // Only allow `.js` extensions, not `.jsx`.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', {
      extensions: ['.js'],
    }],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
    'react/forbid-prop-types': ['error', {
      forbid: [
        // TODO: Eventually, add 'object' too. Use some sort of DRY typedef?
        'any', 'array',
      ],
    }],
  },

};
