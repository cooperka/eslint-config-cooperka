# eslint-config-cooperka

[![npm downloads](https://img.shields.io/npm/dm/eslint-config-cooperka.svg)](https://www.npmjs.com/package/eslint-config-cooperka)
[![npm version](https://img.shields.io/npm/v/eslint-config-cooperka.svg)](https://www.npmjs.com/package/eslint-config-cooperka)
[![Latest GitHub tag](https://img.shields.io/github/tag/cooperka/eslint-config-cooperka.svg)](https://github.com/cooperka/eslint-config-cooperka)

More sensible [ESLint](http://eslint.org/) configs extending from [Airbnb](https://github.com/airbnb/javascript).

I don't think a linter should ever *get in the way* of writing clean code.

Provides configs for **plain JS**, **React**, **React Native**, and **TypeScript**.

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

These are all of the possible configs you can extend using this library:
- `cooperka`: Plain JS
- `cooperka/react`: Plain JS + React
- `cooperka/react-native`: Plain JS + React + React Native
- `cooperka/typescript`: TypeScript (use in addition to any of the above)

In your `.eslintrc` file, add:

```js
{
  "extends": "cooperka",

  // Any rules here will override those from
  // https://github.com/cooperka/eslint-config-cooperka.
  "rules": {}
}

```

You can also extend multiple rule sets at once:

```js
  "extends": [
    "cooperka/react",
    "cooperka/typescript"
  ]
```

That's all you need!

Depending on what other libraries you're using, you may also want to set things like `env` and `globals`.
Here's a common additional config for React Native:

```js
  "env": {
    "browser": true,
    "jest": true
  },

  "globals": {
    "__DEV__": true,
  }
```

### Linting

To actually run your linter, you should add something like the following to your `package.json`:

```js
"scripts": {
  // Recursively lint all files under the root directory (`.`) ending in `.js` or `.jsx`:
  "lint": "eslint --ext .js,.jsx ."
}
```

Then execute `yarn run lint` in your console.

The `node_modules` directory is ignored by default by ESLint; you can further ignore by adding an `.eslintignore` file.

## Why "yet another"?

I don't think a linter should ever *get in the way* of writing clean code.

I love Airbnb's config in general and have kept nearly all of their defaults,
but I think it's too strict in some cases, and the developer should be given more discretion.

### Examples

One small example is with the [arrow-body-style](http://eslint.org/docs/rules/arrow-body-style) rule.
The current Airbnb config **enforces** no braces whenever they can be omitted (e.g. for `(x) => x * 2`),
but I think it's more desirable in some cases to retain the braces. There's no harm at all in this.
Why make developers do extra work for an unnecessary standard?

Another example is with the [class-methods-use-this](http://eslint.org/docs/rules/class-methods-use-this) rule,
particularly with React classes.
Airbnb enforces React [class method ordering](https://github.com/airbnb/javascript/tree/master/react#ordering),
which requires static methods to be defined at the top of a class.

If a particular method doesn't use `this` but does something similar in nature to a different method
that **does** use `this`, I like to put them next to each other for readability.
This organization would be impossible with the two above rules being enforced at once.
In this case I believe readability should trump any minor gain in speed from making one of the two methods static.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
