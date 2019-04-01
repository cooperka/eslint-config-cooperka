module.exports = {

  // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
  extends: [
    'airbnb-base',
    require.resolve('./base-overrides'),
  ],

};
