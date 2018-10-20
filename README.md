# eslint-config-cooperka

[![npm downloads](https://img.shields.io/npm/dm/eslint-config-cooperka.svg)](https://www.npmjs.com/package/eslint-config-cooperka)
[![npm version](https://img.shields.io/npm/v/eslint-config-cooperka.svg)](https://www.npmjs.com/package/eslint-config-cooperka)
[![Latest GitHub tag](https://img.shields.io/github/tag/cooperka/eslint-config-cooperka.svg)](https://github.com/cooperka/eslint-config-cooperka)

Yet another [ESLint](http://eslint.org/) config extending from [Airbnb](https://github.com/airbnb/javascript).

Supports plain JS, React, and React Native code linting.

## Setup

Install this library:

```bash
yarn add --dev eslint-config-cooperka
```

Install the [Airbnb config](https://www.npmjs.com/package/eslint-config-airbnb) along with its dependencies:

```bash
npx install-peerdeps --dev eslint-config-airbnb
```

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

Then type `yarn run lint` in your console to execute this script.
The `node_modules` directory is ignored by default by ESLint, and you can further ignore by adding an `.eslintignore` file.

## Why "yet another"?

Though I love Airbnb's config in general and have kept nearly all of their defaults, I think it's too strict in some cases.
I don't think a linter should ever *get in the way* of writing clean code, and in some cases the developer should be given more discretion.

One small example is with the [arrow-body-style](http://eslint.org/docs/rules/arrow-body-style) rule.
The current Airbnb config enforces no braces where they can be omitted (e.g. if directly returning a value),
but I think it's cleaner in some cases to retain the braces. There's no harm at all in this, and generally it looks just fine either way.

Another example is with the [class-methods-use-this](http://eslint.org/docs/rules/class-methods-use-this) rule,
particularly with React classes. Airbnb enforces React [class method ordering](https://github.com/airbnb/javascript/tree/master/react#ordering),
sorting static methods at the very top. If a particular method doesn't use `this` but does something very similar in nature to another class method
that **does** use `this`, I like to put them next to each other. This would be impossible with these two rules being enforced at once.
In this case I believe readability trumps any minor gain in speed from making one of the two methods static.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
