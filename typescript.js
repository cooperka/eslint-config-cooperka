module.exports = {

  "parser": "typescript-eslint-parser",

  "plugins": [
    // https://github.com/nzakas/eslint-plugin-typescript
    "typescript"
  ],

  // Airbnb does not currently provide any rules for TypeScript,
  // so turn on some basic ones here.
  //
  // These are intended to supplement the rules for other environments (e.g. React).
  // You should extend both 'react' AND 'typescript' in your project.
  "rules": {
    // TypeScript compiler will handle this.
    "no-undef": "off",

    // --- https://github.com/nzakas/eslint-plugin-typescript#supported-rules

    "typescript/adjacent-overload-signatures": "error",
    "typescript/class-name-casing": "error",
    "typescript/explicit-function-return-type": ["error", {
      "allowExpressions": true
    }],
    "typescript/member-delimiter-style": "error",
    "typescript/member-ordering": "error",
    "typescript/no-angle-bracket-type-assertion": "error",
    "typescript/no-array-constructor": "error",
    "typescript/no-empty-interface": "error",
    "typescript/no-inferrable-types": "error",
    "typescript/no-namespace": "error",
    "typescript/no-non-null-assertion": "error",
    "typescript/no-triple-slash-reference": "error",
    // Fixes the no-unused-vars from ESLint, if core rule is enabled.
    "typescript/no-unused-vars": "error",
    "typescript/no-use-before-define": "error",
    "typescript/no-var-requires": "error",
    "typescript/prefer-namespace-keyword": "error",
    "typescript/type-annotation-spacing": "error"
  },

};
