# eslint-config-cooperka

[![npm downloads](https://img.shields.io/npm/dm/eslint-config-cooperka.svg)](https://www.npmjs.com/package/eslint-config-cooperka)
[![npm version](https://img.shields.io/npm/v/eslint-config-cooperka.svg)](https://www.npmjs.com/package/eslint-config-cooperka)
[![Latest GitHub tag](https://img.shields.io/github/tag/cooperka/eslint-config-cooperka.svg)](https://github.com/cooperka/eslint-config-cooperka)

Yet another [ESLint](http://eslint.org/) config extending from [Airbnb](https://github.com/airbnb/javascript).

Supports plain JS, React, and React Native code linting.

## Setup

Install this library:

```console
npm install --save-dev eslint-config-cooperka
```

Install Airbnb along with its dependencies:

```console
(
  export PKG=eslint-config-airbnb;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

## Usage

In your `.eslintrc` file, add:

```js
{
  "extends": ["cooperka/react-native"],

  // Any rules here will override those from
  // https://github.com/cooperka/eslint-config-cooperka.
  "rules": {}
}

```

Then you can customize the rules further if you like.

To actually run your linter, you should add one of the following options to your `package.json`:

```js
"scripts": {
  // To lint all files ending in `.js` under the `src` directory:
  "lint": "eslint src --ext .js"

  // To lint all files in the root directory AND under `src` ending in `.js` or `.jsx`:
  "lint": "eslint *.js *.jsx src --ext .js,.jsx"
}
```

Then type `npm run lint` in your console to execute this script.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
