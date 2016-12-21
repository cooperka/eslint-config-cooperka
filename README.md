# eslint-config-cooperka

[![npm downloads](https://img.shields.io/npm/dm/eslint-config-cooperka.svg)](https://www.npmjs.com/package/eslint-config-cooperka)
[![npm version](https://img.shields.io/npm/v/eslint-config-cooperka.svg)](https://www.npmjs.com/package/eslint-config-cooperka)
[![Latest GitHub tag](https://img.shields.io/github/tag/cooperka/eslint-config-cooperka.svg)](https://github.com/cooperka/eslint-config-cooperka)

Yet another [ESLint](http://eslint.org/) config extending from [Airbnb](https://github.com/airbnb/javascript).

Supports plain JS, React, and React Native code linting.

## Setup

```console
npm install --save-dev eslint-config-cooperka
```

You can also uninstall any existing `eslint`-related modules, as everything that's needed is required explicitly by this module.

## Usage

In your `.eslintrc` file, add:

```js
{
  "extends": "cooperka/react-native",

  // Any rules here will override those from
  // https://github.com/cooperka/eslint-config-cooperka.
  "rules": {}
}

```

You shouldn't need anything other than the above, though depending on
what other libraries you're using you may want to set `env` and/or `globals`, e.g. for React Native:

```js
  "env": {
    "browser": true,
    "jest": true
  },

  "globals": {
    "__DEV__": true,
  }
```

Then you can customize the rules further if you like.

To actually run your linter, you should add something like the following to your `package.json`:

```js
"scripts": {
  // To recursively lint all files under the root directory (`.`) ending in `.js` or `.jsx`:
  "lint": "eslint . --ext .js,.jsx"
}
```

Then type `npm run lint` in your console to execute this script.
The `node_modules` directory is ignored by default by ESLint, and you can further ignore by adding an `.eslintignore` file.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
