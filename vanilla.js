module.exports = {

  // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
  extends: [
    'airbnb-base',

    // All the actual rules are here.
    require.resolve('./base-overrides'),
  ],

};
